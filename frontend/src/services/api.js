import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3003'
})

export default apiCodeBurger
