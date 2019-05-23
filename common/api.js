/*
 * 接口配置
 * */
const API = {
  login: '/service/user/login', // 用户登录
  logout: '/service/user/logout', // 登出
  register: '/service/user/register', // 用户注册
  verifySmsCode: '/service/user/verifySmsCode', // 校验验证码
  sendSmsCode: '/service/user/sendSmsCode' // 获取短信验证码
}

export default API
