/*
 * 默认状态管理器
 * */
export const state = () => ({})

const cookieparser = process.server ? require('cookieparser') : undefined

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const cookie = req.headers.cookie
    console.log(cookie)

    if (cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      // console.log('token: ', parsed.nuxtToken)
      commit('user/setToken', parsed.nuxtToken)
    }
  }
}
