/*
 * 接口配置
 * */
const API = {
  // ================成功案例================
  successCaseGetById: '/service/success-case/getById', // 根据id获取记录
  successCasePageList: '/service/success-case/pageList', // 列表
  // ================资讯================
  newsGetById: '/service/news/getById', // 根据id获取记录
  newsPageList: '/service/news/pageList', // 列表
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
  updateMemberInfo: '/service/user/updateMemberInfo', // 修改会员资料
  updatePwdAfterForget: '/service/user/updatePwdAfterForget', // 忘记密码后更新用户密码
  verifySmsCodeAfterForget: '/service/user/verifySmsCodeAfterForget', // 忘记密码后校验验证码
  // ================投递项目================
  appoint: '/service/appointment-project/appoint', // 投递
  appointPageList: '/service/appointment-project/pageList', // 列表
  // ================资金方================
  fundGetById: '/service/fund/getById', // 根据id获取记录
  fundListRecent: '/service/fund/listRecent', // 最近浏览列表
  fundPageList: '/service/fund/pageList', // 列表
  // ================项目方================
  projectGetById: '/service/project/getById', // 根据id获取记录
  projectListRecent: '/service/project/listRecent', // 最近浏览列表
  projectPageList: '/service/project/pageList', // 列表
  projectPublish: '/service/project/publish', // 发布项目
  // ================阿里云OSS签名接口================
  getSign: '/service/aliyun-oss/getSign', // 签名
  deleteObject: '/service/aliyun-oss/deleteObject', // 删除文件
  // ================融资需求================
  apply: '/service/finance-needs/apply', // 申请
  count: '/service/finance-needs/count' // 统计总数
}

export default API
