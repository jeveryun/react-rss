import axios from 'axios'

export default (req) => axios.create({
  baseURL: 'https://localhost:4000',
  headers: {
    cookie: req.get('cookie') || ''
  }
})