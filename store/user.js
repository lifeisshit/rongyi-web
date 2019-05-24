/*
 * 用户相关的状态管理
 * */
import API from '~/common/api'

export const state = () => ({
  user: {}
})

export const actions = {
  async login({ commit }) {
    const { data } = await this.$axios.$post(API.login)
    console.log(data)
  },
  async register({ commit }) {
    const { data } = await this.$axios.$post(API.register)
    console.log(data)
  },
  async verifySmsCode({ commit }, payload) {
    const { data } = await this.$axios.$post(API.verifySmsCode)
    console.log('payload is: ', payload, 'data is: ', data)
    // commit('setDate', payload)
  },
  async sendSmsCode({ commit }, payload) {
    console.log('payload is: ', payload)
    await this.$axios.get(API.sendSmsCode, {
      params: payload
    })
    this.$message.success({
      showClose: true,
      message: '验证码已发送成功，请注意查收',
      type: 'error'
    })
  },
  async logout({ commit }) {
    const { data } = await this.$axios.$get(API.logout)
    console.log(data)
  }
}

export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  }
}
