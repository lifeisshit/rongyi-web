/*
 * 接口配置
 * */
const API = {
  // ================成功案例================
  successCaseGetById: '/service/success-case/getById', // 根据id获取记录
  successCasePageList: '/service/success-case/pageList', // 列表
  // ================用户管理================
  login: '/service/user/login', // 用户登录
  loginBySmsCode: '/service/user/loginBySmsCode', // 用户验证码登录
  getUserInfo: '/service/user/getUserInfo', // 获取用户信息
  logout: '/service/user/logout', // 登出
  register: '/service/user/register', // 用户注册
  verifySmsCode: '/service/user/verifySmsCode', // 校验验证码
  sendSmsCode: '/service/user/sendSmsCode', // 获取短信验证码
  completeBusinessInfo: '/service/user/completeBusinessInfo', // 定制业务信息
  completeMemberInfo: '/service/user/completeMemberInfo', // 完善会员资料
  updatePwd: '/service/user/updatePwd', // 更新用户密码
  // ================约谈项目================
  appoint: '/service/appointment-project/appoint', // 约谈
  appointPageList: '/service/appointment-project/pageList', // 列表
  // ================资金方================
  fundGetById: '/service/fund/getById', // 根据id获取记录
  fundPageList: '/service/fund/pageList', // 列表
  // ================项目方================
  projectGetById: '/service/project/getById', // 根据id获取记录
  projectPageList: '/service/project/pageList', // 列表
  projectPublish: '/service/project/publish', // 发布项目
  // ================阿里云OSS签名接口================
  getSign: '/service/aliyun-oss/getSign' // 签名
}

export default API
