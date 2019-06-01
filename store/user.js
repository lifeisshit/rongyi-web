/*
 * 用户相关的状态管理
 * */
import API from '~/common/api'
import Cookie from 'js-cookie'

export const state = () => ({
  user: {},
  nuxtToken: null
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
    console.log('getUserInfoByInit res: ', res)
  },
  async register({ commit }, payload) {
    await this.$axios.$post(API.register, null, {
      params: payload
    })
  },
  async verifySmsCode({ commit }, payload) {
    // console.log('payload is: ', payload)
    await this.$axios.$post(API.verifySmsCode, null, {
      params: payload
    })
  },
  async sendSmsCode({ commit }, payload) {
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
  },
  // 完善会员信息
  async completeMemberInfo({ commit }, payload) {
    await this.$axios.$post(API.completeMemberInfo, payload)
  },
  // 完善定制信息
  async completeBusinessInfo({ commit }, payload) {
    await this.$axios.$post(API.completeBusinessInfo, payload)
  },
  // 修改会员信息
  async updateMemberInfo({ commit }, payload) {
    await this.$axios.$post(API.updateMemberInfo, payload)
  },
  finishStep1({ commit }) {
    commit('setStep1')
  },
  finishStep2({ commit }) {
    commit('setStep2')
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
  },
  setStep1(state) {
    state.user && (state.user.hasCompleteMemberInfo = true)
  },
  setStep2(state) {
    state.user && (state.user.hasCompleteBusinessInfo = true)
  }
}
