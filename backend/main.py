import os
import re
from datetime import datetime, timedelta, timezone

import jwt
from dotenv import load_dotenv
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from pydantic import BaseModel, Field, field_validator
from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError, PyMongoError
from pwdlib import PasswordHash

load_dotenv()

mongo_uri = os.getenv("MONGO_URI")
if not mongo_uri:
    raise RuntimeError("MONGO_URI is not set. Add it to the environment or backend/.env.")

jwt_secret = os.getenv("JWT_SECRET")
if not jwt_secret:
    raise RuntimeError("JWT_SECRET is not set. Add it to the environment or backend/.env.")

mongo_client = MongoClient(mongo_uri, serverSelectionTimeoutMS=5000, tz_aware=True)
database = mongo_client["lumina_dental"]
users_collection = database["users"]
password_hasher = PasswordHash.recommended()


def hash_password(password: str) -> str:
    return password_hasher.hash(password)

app = FastAPI(title="Lumina Dental API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://dentalclinic-7nidznzwq-raven-2b6bdd32.vercel.app",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
bearer_scheme = HTTPBearer(auto_error=False)


def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
) -> dict[str, str]:
    unauthorized = HTTPException(
        status_code=401,
        detail="Invalid or missing authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    if credentials is None or credentials.scheme.lower() != "bearer":
        raise unauthorized

    try:
        payload = jwt.decode(credentials.credentials, jwt_secret, algorithms=["HS256"])
    except jwt.InvalidTokenError as error:
        raise unauthorized from error

    email = payload.get("sub")
    role = payload.get("role")
    if not isinstance(email, str) or not email or not isinstance(role, str) or not role:
        raise unauthorized

    return {"email": email, "role": role}


class CreateUserRequest(BaseModel):
    email: str = Field(min_length=3, max_length=254)
    password: str = Field(min_length=1)

    @field_validator("email")
    @classmethod
    def validate_email(cls, value: str) -> str:
        if not re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", value):
            raise ValueError("Enter a valid email address")
        return value


class LoginRequest(BaseModel):
    email: str = Field(min_length=3, max_length=254)
    password: str = Field(min_length=1)


class RegisterRequest(BaseModel):
    full_name: str = Field(min_length=2, max_length=100)
    email: str = Field(min_length=3, max_length=254)
    password: str = Field(min_length=8, max_length=128)
    confirm_password: str

    @field_validator("email")
    @classmethod
    def validate_email(cls, value: str) -> str:
        normalized_value = value.strip()
        if not re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", normalized_value):
            raise ValueError("Enter a valid email address")
        return normalized_value


@app.get("/")
def read_root():
    return {"message": "Lumina Dental API is running"}


@app.get("/api/health")
def database_health():
    try:
        mongo_client.admin.command("ping")
    except PyMongoError:
        return JSONResponse(status_code=503, content={"database_connected": False})

    return {"database_connected": True}


@app.post("/api/users")
def create_user(user: CreateUserRequest):
    users_collection.create_index("email", unique=True)

    if users_collection.find_one({"email": user.email}, {"_id": 1}):
        raise HTTPException(status_code=409, detail="A user with this email already exists")

    user_document = {
        "email": user.email,
        "password_hash": hash_password(user.password),
        "role": "admin",
        "created_at": datetime.now(timezone.utc),
    }

    try:
        users_collection.insert_one(user_document)
    except DuplicateKeyError as error:
        raise HTTPException(status_code=409, detail="A user with this email already exists") from error

    return {
        "message": "User created successfully",
        "email": user.email,
        "role": "admin",
    }


@app.post("/api/auth/register", status_code=201)
def register(user: RegisterRequest):
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    normalized_email = user.email.strip().lower()
    users_collection.create_index("email", unique=True)

    if users_collection.find_one({"email": normalized_email}, {"_id": 1}):
        raise HTTPException(status_code=409, detail="A user with this email already exists")

    user_document = {
        "full_name": user.full_name,
        "email": normalized_email,
        "password_hash": hash_password(user.password),
        "role": "patient",
        "created_at": datetime.now(timezone.utc),
    }

    try:
        users_collection.insert_one(user_document)
    except DuplicateKeyError as error:
        raise HTTPException(status_code=409, detail="A user with this email already exists") from error

    return {
        "message": "Account created successfully",
        "email": normalized_email,
        "role": "patient",
    }


@app.post("/api/auth/login")
def login(credentials: LoginRequest):
    user = users_collection.find_one(
        {"email": credentials.email},
        {"email": 1, "role": 1, "password_hash": 1},
    )
    stored_password_hash = user.get("password_hash") if user else None

    if not stored_password_hash or not password_hasher.verify(credentials.password, stored_password_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    expires_at = datetime.now(timezone.utc) + timedelta(minutes=60)
    access_token = jwt.encode(
        {
            "sub": user["email"],
            "role": user["role"],
            "exp": expires_at,
        },
        jwt_secret,
        algorithm="HS256",
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "email": user["email"],
        "role": user["role"],
    }


@app.get("/api/auth/me")
def read_current_user(current_user: dict[str, str] = Depends(get_current_user)):
    user = users_collection.find_one(
        {"email": current_user["email"]},
        {"_id": 0, "full_name": 1, "email": 1, "role": 1},
    )
    if user is None:
        raise HTTPException(status_code=404, detail="Authenticated user not found")

    return {
        "full_name": user.get("full_name", ""),
        "email": user["email"],
        "role": user["role"],
    }