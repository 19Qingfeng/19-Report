import axios from 'axios'

// 其实axios返回的function就使用了柯里化
const service = axios.create({
  baseURL: 'https://apis.imooc.com',
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      console.log(response.data)
      return response.data
    } else {
      return Promise.reject('server error')
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
