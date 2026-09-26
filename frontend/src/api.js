import axios from 'axios'

const api = axios.create({
  baseURL: 'https://lumina-dental-api.onrender.com',
})

export default api
