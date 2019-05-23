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
  async verifySmsCode({ commit }) {
    const { data } = await this.$axios.$post(API.verifySmsCode)
    console.log(data)
  },
  async sendSmsCode({ commit }) {
    const { data } = await this.$axios.$get(API.sendSmsCode)
    console.log(data)
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
