import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import api from '../api.js'

function Login() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('login')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [notice, setNotice] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setNotice('')

    if (!email.trim() || !password || (mode === 'signup' && (!fullName.trim() || !confirmPassword))) {
      setNotice('Please complete all required fields.')
      return
    }

    if (mode === 'signup' && password !== confirmPassword) {
      setNotice('Passwords do not match.')
      return
    }

    if (mode === 'signup') {
      setIsLoading(true)
      try {
        await api.post('/api/auth/register', {
          full_name: fullName,
          email,
          password,
          confirm_password: confirmPassword,
        })
        setMode('login')
        setPassword('')
        setConfirmPassword('')
        setNotice('Account created successfully. You can now log in.')
      } catch (error) {
        const status = error.response?.status
        setNotice(
          status === 409
            ? 'An account with this email already exists.'
            : status === 400
              ? 'Passwords do not match.'
              : status === 422
                ? 'Please check the information you entered.'
                : 'Unable to create your account. Please try again.',
        )
      } finally {
        setIsLoading(false)
      }
      return
    }

    setIsLoading(true)
    try {
      const response = await api.post('/api/auth/login', { email, password })
      localStorage.setItem('lumina_access_token', response.data.access_token)
      localStorage.setItem(
        'lumina_user',
        JSON.stringify({ email: response.data.email, role: response.data.role }),
      )
      navigate('/')
      setNotice('Signed in successfully.')
    } catch (error) {
      setNotice(
        error.response?.status === 401
          ? 'Invalid email or password.'
          : 'Unable to sign in. Please try again.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  function switchMode(nextMode) {
    setMode(nextMode)
    setNotice('')
  }

  return (
    <main className="lumina-login">
      <style>{`
        .lumina-login {
          --login-primary: var(--color-primary, #174e49);
          --login-primary-dark: var(--color-primary-dark, #103d39);
          --login-soft: var(--color-primary-soft, #e4f1ed);
          --login-surface: var(--color-bg-soft, #f7faf8);
          --login-text: var(--color-text, #213431);
          --login-muted: var(--color-muted, #667873);
          --login-border: var(--color-border, #e1e9e5);
          min-height: 100vh;
          padding: 28px clamp(20px, 5vw, 72px) 36px;
          display: flex;
          flex-direction: column;
          color: var(--login-text);
          background: #f5f9f6;
          font-family: 'DM Sans', 'Segoe UI', sans-serif;
        }
        .lumina-login *, .lumina-login *::before, .lumina-login *::after { box-sizing: border-box; }
        .login-topbar {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .login-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--login-primary-dark);
          text-decoration: none;
        }
        .login-brand-mark {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border: 1px solid #a8c6bd;
          border-radius: 50%;
          color: var(--login-primary);
          font-family: var(--font-display, Georgia, serif);
          font-size: 24px;
          font-style: italic;
        }
        .login-brand-name { display: flex; flex-direction: column; line-height: 1; }
        .login-brand-name strong { font-size: 14px; letter-spacing: 2px; }
        .login-brand-name small { margin-top: 5px; font-size: 8px; font-weight: 700; letter-spacing: 2px; }
        .login-location { color: var(--login-muted); font-size: 11px; }
        .login-layout {
          width: min(1030px, 100%);
          flex: 1;
          margin: 34px auto 0;
          display: grid;
          grid-template-columns: 1fr 0.82fr;
          align-items: stretch;
          background: #fff;
          border: 1px solid var(--login-border);
          box-shadow: 0 18px 54px rgba(25, 65, 58, 0.08);
        }
        .login-welcome {
          min-height: 590px;
          position: relative;
          overflow: hidden;
          padding: clamp(34px, 5vw, 66px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #eaf3f1;
        }
        .login-welcome::before, .login-welcome::after {
          position: absolute;
          content: '';
          border: 1px solid rgba(23, 78, 73, .15);
          border-radius: 50%;
          pointer-events: none;
        }
        .login-welcome::before { width: 420px; height: 420px; right: -175px; top: -100px; }
        .login-welcome::after { width: 330px; height: 330px; right: -130px; top: -55px; }
        .login-welcome-copy { position: relative; z-index: 1; max-width: 470px; }
        .login-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--login-primary);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.1px;
          text-transform: uppercase;
        }
        .login-eyebrow span { width: 7px; height: 7px; border-radius: 50%; background: #df8d70; }
        .login-welcome h1 {
          margin: 19px 0 0;
          color: var(--login-text);
          font-family: var(--font-display, Georgia, serif);
          font-size: clamp(40px, 5.2vw, 62px);
          font-weight: 400;
          line-height: 1.04;
        }
        .login-welcome h1 em { color: var(--login-primary); font-weight: 400; }
        .login-welcome-copy > p {
          max-width: 390px;
          margin: 17px 0 0;
          color: var(--login-muted);
          font-size: 13px;
          line-height: 1.8;
        }
        .login-welcome-note {
          position: relative;
          z-index: 1;
          padding-top: 17px;
          border-top: 1px solid rgba(23, 78, 73, .16);
          color: #54736a;
          font-size: 10px;
          line-height: 1.7;
        }
        .login-form-panel {
          padding: clamp(30px, 4vw, 55px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .login-form-inner { width: min(100%, 360px); }
        .login-form-inner h2 {
          margin: 0;
          color: var(--login-text);
          font-family: var(--font-display, Georgia, serif);
          font-size: 34px;
          font-weight: 400;
        }
        .login-form-intro {
          margin: 8px 0 27px;
          color: var(--login-muted);
          font-size: 11px;
          line-height: 1.7;
        }
        .login-mode-switch {
          margin: -11px 0 17px;
          display: flex;
          gap: 15px;
          border-bottom: 1px solid var(--login-border);
        }
        .login-mode-button {
          position: relative;
          padding: 0 0 10px;
          border: 0;
          color: var(--login-muted);
          background: transparent;
          font: inherit;
          font-size: 10px;
          font-weight: 600;
          cursor: pointer;
        }
        .login-mode-button[aria-pressed="true"] { color: var(--login-primary); }
        .login-mode-button[aria-pressed="true"]::after {
          position: absolute;
          right: 0;
          bottom: -1px;
          left: 0;
          height: 2px;
          content: '';
          background: var(--login-primary);
        }
        .login-field { margin-top: 17px; }
        .login-field label {
          display: block;
          margin-bottom: 7px;
          color: #425951;
          font-size: 10px;
          font-weight: 700;
        }
        .login-input-wrap {
          min-height: 45px;
          padding-inline: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #d8e2dd;
          background: white;
          color: #789087;
          transition: border-color .18s ease, box-shadow .18s ease;
        }
        .login-input-wrap:focus-within {
          border-color: var(--login-primary);
          box-shadow: 0 0 0 2px rgba(23, 78, 73, .1);
        }
        .login-input-wrap > svg { flex: 0 0 auto; }
        .login-input-wrap input {
          width: 100%;
          min-width: 0;
          height: 42px;
          padding: 0;
          border: 0;
          outline: 0;
          color: var(--login-text);
          background: transparent;
          font: inherit;
          font-size: 11px;
        }
        .login-input-wrap input::placeholder { color: #95a39e; }
        .login-visibility {
          width: 34px;
          height: 34px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border: 0;
          color: #678078;
          background: transparent;
          cursor: pointer;
        }
        .login-submit {
          width: 100%;
          min-height: 47px;
          margin-top: 25px;
          padding: 0 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid transparent;
          border-radius: var(--radius-sm, 5px);
          color: #fff;
          background: var(--login-primary);
          font: inherit;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: background .18s ease, transform .18s ease;
        }
        .login-submit:hover { transform: translateY(-1px); background: var(--login-primary-dark); }
        .login-notice {
          min-height: 34px;
          margin-top: 12px;
          color: var(--login-muted);
          font-size: 10px;
          line-height: 1.6;
        }
        .login-mode-prompt {
          margin-top: 4px;
          color: var(--login-muted);
          font-size: 10px;
          text-align: center;
        }
        .login-mode-link {
          padding: 0;
          border: 0;
          color: var(--login-primary);
          background: transparent;
          font: inherit;
          font-weight: 700;
          cursor: pointer;
        }
        .login-mode-link:hover { color: var(--login-primary-dark); text-decoration: underline; }
        .login-footer {
          width: min(1030px, 100%);
          margin: 17px auto 0;
          display: flex;
          justify-content: space-between;
          gap: 14px;
          color: #82938d;
          font-size: 9px;
        }
        @media (max-width: 760px) {
          .lumina-login { padding: 18px 16px 22px; }
          .login-location { max-width: 125px; text-align: right; line-height: 1.5; }
          .login-layout { max-width: 500px; margin-top: 23px; grid-template-columns: 1fr; }
          .login-welcome { min-height: auto; gap: 31px; padding: 30px 25px 22px; }
          .login-welcome h1 { max-width: 380px; font-size: 43px; }
          .login-welcome-copy > p { margin-top: 12px; font-size: 12px; }
          .login-welcome-note { padding-top: 11px; }
          .login-form-panel { padding: 28px 25px 24px; }
          .login-form-inner h2 { font-size: 30px; }
          .login-form-intro { margin-bottom: 18px; }
          .login-footer { max-width: 500px; flex-wrap: wrap; }
        }
        @media (prefers-reduced-motion: reduce) {
          .login-submit, .login-input-wrap { transition: none; }
        }
      `}</style>

      <header className="login-topbar">
        <a className="login-brand" href="/" aria-label="Lumina Dental home">
          <span className="login-brand-mark" aria-hidden="true">L</span>
          <span className="login-brand-name">
            <strong>LUMINA</strong>
            <small>DENTAL CLINIC</small>
          </span>
        </a>
        <span className="login-location">Durgapur, West Bengal</span>
      </header>

      <section className="login-layout" aria-labelledby="login-heading">
        <div className="login-welcome">
          <div className="login-welcome-copy">
            <span className="login-eyebrow"><span aria-hidden="true" /> Your smile, thoughtfully cared for</span>
            <h1>Care that feels<br /><em>a little closer.</em></h1>
            <p>Sign in to continue to your Lumina Dental account. We’re glad to have you back.</p>
          </div>
          <p className="login-welcome-note">A calm, considered clinic experience in Durgapur.<br />Fictional demo website.</p>
        </div>

        <div className="login-form-panel">
          <form className="login-form-inner" onSubmit={handleSubmit} noValidate>
            <h2 id="login-heading">{mode === 'login' ? 'Welcome Back' : 'Create Your Account'}</h2>
            <p className="login-form-intro">
              {mode === 'login'
                ? 'Enter your details to continue.'
                : 'Create an account to continue with Lumina Dental.'}
            </p>

            <div className="login-mode-switch" aria-label="Account access mode">
              <button
                className="login-mode-button"
                type="button"
                aria-pressed={mode === 'login'}
                onClick={() => switchMode('login')}
              >
                Log in
              </button>
              <button
                className="login-mode-button"
                type="button"
                aria-pressed={mode === 'signup'}
                onClick={() => switchMode('signup')}
              >
                Sign up
              </button>
            </div>

            {mode === 'signup' && (
              <div className="login-field">
                <label htmlFor="login-full-name">Full name</label>
                <div className="login-input-wrap">
                  <UserRound size={17} aria-hidden="true" />
                  <input
                    id="login-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            <div className="login-field">
              <label htmlFor="login-email">Email address</label>
              <div className="login-input-wrap">
                <Mail size={17} aria-hidden="true" />
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.in"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <label htmlFor="login-password">Password</label>
              <div className="login-input-wrap">
                <LockKeyhole size={17} aria-hidden="true" />
                <input
                  id="login-password"
                  name="password"
                  type={passwordVisible ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <button
                  className="login-visibility"
                  type="button"
                  aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                  aria-pressed={passwordVisible}
                  aria-controls="login-password"
                  onClick={() => setPasswordVisible((visible) => !visible)}
                >
                  {passwordVisible ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {mode === 'signup' && (
              <div className="login-field">
                <label htmlFor="login-confirm-password">Confirm password</label>
                <div className="login-input-wrap">
                  <LockKeyhole size={17} aria-hidden="true" />
                  <input
                    id="login-confirm-password"
                    name="confirmPassword"
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="Enter your password again"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                  />
                  <button
                    className="login-visibility"
                    type="button"
                    aria-label={confirmPasswordVisible ? 'Hide confirm password' : 'Show confirm password'}
                    aria-pressed={confirmPasswordVisible}
                    aria-controls="login-confirm-password"
                    onClick={() => setConfirmPasswordVisible((visible) => !visible)}
                  >
                    {confirmPasswordVisible ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>
            )}

            <button className="login-submit" type="submit" disabled={isLoading}>
              {isLoading
                ? mode === 'login' ? 'Signing in...' : 'Creating account...'
                : mode === 'login' ? 'Log in' : 'Create account'} <ArrowRight size={16} aria-hidden="true" />
            </button>
            <p className="login-notice" role={notice === 'Passwords do not match.' ? 'alert' : 'status'} aria-live="polite">{notice}</p>
            <p className="login-mode-prompt">
              {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button
                className="login-mode-link"
                type="button"
                onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
              >
                {mode === 'login' ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </form>
        </div>
      </section>

      <footer className="login-footer">
        <span>© {new Date().getFullYear()} Lumina Dental · Fictional demo</span>
        <span>Thoughtful care, close to home.</span>
      </footer>
    </main>
  )
}

export default Login