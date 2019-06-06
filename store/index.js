/*
 * 默认状态管理器
 * */
export const state = () => ({
  companyEmail: 'customer@rongyi8.com',
  companyTel: '027-87888610'
})

const cookieparser = process.server ? require('cookieparser') : undefined

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    const cookie = req.headers.cookie

    if (cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      // console.log('token: ', parsed.nuxtToken)
      // cookie中的token存在, 证明用户已登录, 刷新状态树
      if (parsed.nuxtToken) {
        await dispatch('user/getUserInfoByInit', {
          nuxtToken: parsed.nuxtToken
        })
      }
    }
  }
}
