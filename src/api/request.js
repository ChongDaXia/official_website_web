import axios from 'axios'
// import router from '@/router'
import { Message } from 'view-design'
import { getToken, removeToken, removeUserInfo } from 'common/user.js'

// 创建axios实例
const service = axios.create({
  baseURL: '',
  timeout: 60000,
  validateStatus () {
    return true
  }
})
// 设置 post、put 默认 Content-Type
service.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
service.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8'

// request拦截器
service.interceptors.request.use(
  config => {
    // console.log(this.$route)
    var token = getToken()
    // if (config.url.indexOf('http://58.248.91.71:8120/?url') !== -1) {
    //   return config
    // } else {
    //   if (token) {
    //     config.headers.token = JSON.parse(token).token
    //   }
    // }
    if (token) {
      config.headers.token = JSON.parse(token).token
    }
    // config.headers.token = 'jwt eyJhbGciOiJIUzUxMiJ9.eyJlbXBsb3llZUlkIjoiSlgxMDAwMiIsImRlcGFydG1lbnQiOiLlt6XkuroiLCJleHAiOjE1OTUyOTU4Mjd9.RFQOrIqyKRun42eRL_1Qu9ZSBQd4iIA4gpenuHIMjv94VosCVafS5eBWqeQrIPc_JZCtbrMu193B_n7QCQYJ-A'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 根据不同的状态码，生成不同的提示信息
const showStatus = (status) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}

// response拦截器
service.interceptors.response.use(
  response => {
    const { status } = response
    let msg = ''
    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      msg = showStatus(status)
      if (typeof response.data === 'string') {
        response.data = { message: msg }
      } else {
        response.data.message = msg
      }
      // Message.error(msg)
      return response.data
    }
    // token过期
    if (response.data.code === 503) {
      // 返回 503 清除token信息并跳转到登录页面
      removeToken()
      removeUserInfo()
      // router.replace({
      //   name: 'login',
      //   params: {
      //     relogin: true
      //   }
      // })
      Message.error('当前登录已过期，请重新登录！')
    } else if (response.data.code !== 200) {
      if (response.data.data === '') {
        Message.error(response.data.message)
      }
    }
    return Promise.resolve(response.data)
  },
  error => {
    error.data = {}
    if (!error.response) {
      if (error.message.includes('timeout')) {
        error.data.message = '请求超时，请检查网络是否连接正常!'
      } else {
        error.data.message = '请求失败，请检查网络是否已连接!'
      }
    } else {
      error.data.message = '请求超时或服务器异常，请检查网络或联系管理员!'
    }
    return Promise.resolve(error)
  }
)

export default service
