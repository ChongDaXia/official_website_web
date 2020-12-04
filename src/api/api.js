const api = {
  // User: {
  //   Login: '/smartCard/employee/login', // 登录
  //   UserInfo: '/smartCard/employee/getEmployee', // 用户信息
  //   ClientId: '/smartCard/employee/setPushClientId', // 设置工人App应用标识
  //   UpdatePassword: '/smartCard/employee/changepwd' // 修改密码
  // }
  Article: 'http://58.248.91.71:9200/article/search/', // 文章
  ArticleDetails: 'http://58.248.91.71:8120', // 文章详情
  Recruit: 'http://58.248.91.71:9201/recruit/search', // 招聘
  Message: 'http://58.248.91.71:9202/message', // 留言
  VerrificationCode: 'http://58.248.91.71:9204/user/sendsms', // 验证码
  Register: 'http://58.248.91.71:9204/user/register', // 注册
  SignIn: 'http://58.248.91.71:9204/user/login', // 登录
  GetUser: ' http://58.248.91.71:9204/user/getUser', // 获取用户信息
  ModifyUser: 'http://58.248.91.71:9204/user/modifyUser', // 修改用户信息
  HeadPortrait: 'http://58.248.91.71:8888/hjgwebsite/avatar', // 头像
  VerifyPassword: 'http://58.248.91.71:9204/user/verifyPassword', // 验证密码
  ModifyPassword: 'http://58.248.91.71:9204/user/modifyPassword', // 修改密码
  VerificationCode: ' http://58.248.91.71:9204/user/sendRestsms', // 发送验证码
  VerifySms: 'http://58.248.91.71:9204/user/verifySms', // 忘记密码——校验短信验证码
  ForgetPassword: 'http://58.248.91.71:9204/user/forgetPassword' // 忘记密码——修改密码
}

export default api
