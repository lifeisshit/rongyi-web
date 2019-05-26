/*
 * 用户相关的状态管理
 * */
import API from '~/common/api'
import Cookie from 'js-cookie'

export const state = () => ({
  user: {},
  token: null
})

export const actions = {
  async login({ commit }, payload) {
    const data = await this.$axios.$post(API.login, null, {
      params: payload
    })
    // 设置cookie
    Cookie.set('nuxtToken', data.nuxtToken, { expires: 1 })
    // 设置对象树中的值
    commit('setData', {
      key: 'user',
      value: data.user
    })
    commit('setToken', data.nuxtToken)
  },
  async loginBySmsCode({ commit }, payload) {
    const data = await this.$axios.$post(API.loginBySmsCode, null, {
      params: payload
    })
    // 设置cookie
    Cookie.set('nuxtToken', data.nuxtToken, { expires: 1 })
    // 设置对象树中的值
    commit('setData', {
      key: 'user',
      value: data.user
    })
    commit('setToken', data.nuxtToken)
  },
  async getUserInfoByInit({ commit }, payload) {
    // 不调用公共拦截器中的方法
    const res = await this.$axios.get(API.getUserInfo)
    // console.log(res)
    if (!res || !res.data || res.status !== 0) {
      return
    }
    // 设置对象树中的值
    commit('setData', {
      key: 'user',
      value: res.data
    })
    commit('setToken', payload.nuxtToken)
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
    await this.$axios.$get(API.logout)
    // 清除cookie
    Cookie.remove('nuxtToken')
    // 清除对象树中的值
    commit('clearToken')
  }
}

export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  },
  setToken(state, payload) {
    state.nuxtToken = payload
  },
  clearToken(state) {
    state.nuxtToken = null
    state.user = {}
  }
}
