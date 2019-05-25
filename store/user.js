/*
 * 用户相关的状态管理
 * */
import API from '~/common/api'

export const state = () => ({
  user: {}
})

export const actions = {
  async login({ commit }, payload) {
    const data = await this.$axios.$post(API.login, null, {
      params: payload
    })
    commit('setData', {
      key: 'user',
      value: data
    })
  },
  async register({ commit }, payload) {
    const data = await this.$axios.$post(API.register, null, {
      params: payload
    })
  },
  async verifySmsCode({ commit }, payload) {
    console.log('payload is: ', payload)
    const data = await this.$axios.$post(API.verifySmsCode, null, {
      params: payload
    })
    console.log('data is: ', data)
  },
  async sendSmsCode({ commit }, payload) {
    console.log('payload is: ', payload)
    await this.$axios.get(API.sendSmsCode, {
      params: payload
    })
  },
  async logout({ commit }) {
    const data = await this.$axios.$get(API.logout)
    commit('setData', {
      key: 'user',
      value: {}
    })
  }
}

export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  }
}
