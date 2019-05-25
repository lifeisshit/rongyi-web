/*
 * 默认状态管理器
 * */
export const state = () => ({})

export const actions = {
  nuxtServerInit({ commit, dispatch }, { req, res }) {
    const cookie = req.cookie
    console.log(cookie)
  }
}
