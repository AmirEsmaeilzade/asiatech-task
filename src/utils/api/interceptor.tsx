import axios from 'axios'
import { BaseUrl } from '../constant'

const instance = axios.create()

instance.defaults.baseURL = BaseUrl
instance.interceptors.response.use(function (response) {
  return response
})

export default instance
