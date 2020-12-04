import axios from './request'
import api from './api'
import { setToken, setUserInfo } from 'common/user.js'

/**
 * 分页+条件查询文章
 * @param {String} page 页码
 * @param {String} size 页数
 * @param {String} type 类型
 */
export const getArticle = (page, size, type) => {
  return axios.request({
    url: api.Article + page + '/' + size,
    method: 'post',
    data: {
      type: type
    }
  })
}

/**
 * 文章详情
 */
export const getArticleItme = (url) => {
  return axios.request({
    url: api.ArticleDetails + '/?url=' + url,
    method: 'get'
  })
}

/**
 * 查询招聘
 * @param {String} type 类型（0：社会招聘；1：校园招聘；2：实习招聘；）
 */
export const getRecruit = (type) => {
  return axios.request({
    url: api.Recruit,
    method: 'post',
    data: {
      recruitType: type
    }
  })
}

/**
 * 留言
 */
export const getMessage = (data) => {
  return axios.request({
    url: api.Message,
    method: 'post',
    data: data
  })
}

/**
 * 获取验证码
 * @param {*} data 手机号
 */
export const getVerrificationCode = (data) => {
  return axios.request({
    url: `${api.VerrificationCode}/${data}`,
    method: 'post'
  })
}

/**
 * 注册
 * @param {*} code 验证码
 * @param {*} phone 手机号
 * @param {*} password 密码（AES密钥：dfh3@443JA_sdf34）
 */
export const createRegister = (code, phone, password) => {
  return axios.request({
    url: `${api.Register}/${code}`,
    method: 'post',
    data: {
      phone,
      password
    }
  })
}

/**
 * 登录
 * @param {*} userName 手机号
 * @param {*} password 密码
 */
export const SignIn = (userName, password) => {
  return new Promise((resolve, reject) => {
    return axios.request({
      url: api.SignIn,
      method: 'post',
      data: {
        userName,
        password
      }
    })
      .then(res => {
        if (res.code === 200) {
          setToken({ token: res.data.token })
          setUserInfo({ userInfo: res.data.user })
        }
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 获取用户信息
 */
export const getUser = () => {
  return axios.request({
    url: api.GetUser,
    method: 'get'
  })
}

/**
 * 修改用户信息
 */
export const ModifyUser = (data) => {
  return axios.request({
    url: api.ModifyUser,
    method: 'post',
    data: data
  })
}

/**
 * 验证密码
 */
export const VerifyPassword = (data) => {
  return axios.request({
    url: api.VerifyPassword,
    method: 'post',
    data: data
  })
}

/**
 * id: 验证码
 * 修改密码
 */
export const ModifyPassword = (data, id) => {
  return axios.request({
    url: api.ModifyPassword + '/' + id,
    method: 'post',
    data: data
  })
}

/**
 * id: 验证码
 * 修改密码
 */
export const VerificationCode = (id) => {
  return axios.request({
    url: api.VerificationCode + '/' + id,
    method: 'post'
  })
}

/**
 * phone: 手机号
 * code: 验证码
 * 修改密码
 */
export const VerifySms = (phone, code) => {
  return axios.request({
    url: api.VerifySms + '/' + phone + '/' + code,
    method: 'get'
  })
}

/**
 * code: 验证码
 * 修改密码
 */
export const ForgetPassword = (data, code) => {
  return axios.request({
    url: api.ForgetPassword + '/' + code,
    method: 'post',
    data: data
  })
}

/**
 * data: 图片文件
 * 修改密码
 */
export const HeadPortrait = (data) => {
  return axios.request({
    url: api.HeadPortrait,
    method: 'post',
    data: data
  })
}
