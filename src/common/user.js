import Cookies from 'js-cookie'

// 存储token
export const setToken = (token) => {
  token && Cookies.set('token', token)
}
// 获取token
export const getToken = () => {
  const token = Cookies.get('token') || ''
  return token
}
// 清除token
export const removeToken = () => {
  Cookies.remove('token')
}

const storage = window.localStorage
// 存储用户信息
export const setUserInfo = (data) => {
  const info = JSON.stringify(data)
  storage.setItem('userInfo', info)
}
// 获取用户信息
export const getUserInfo = () => {
  const info = storage.getItem('userInfo') || ''
  if (info === '') {
    return info
  } else {
    return JSON.parse(info)
  }
}
// 清除用户信息
export const removeUserInfo = () => {
  storage.removeItem('userInfo')
}
