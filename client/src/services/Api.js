import axios from 'axios'
import { useAuthenStore } from '../stores/authen'

export default () => {
  const authenStore = useAuthenStore()

  const headers = {}

  if (authenStore.token) {
    headers.Authorization = `Bearer ${authenStore.token}`
  }

  return axios.create({
    baseURL: 'http://localhost:8081/',
    headers
  })
}
