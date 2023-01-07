import { BASE_URL, TIME_OUT } from './config'
import HXRequest from './request'

const hxRequest = new HXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default hxRequest
