/*
 * 默认状态管理器
 * */
import API from '~/common/api'

export const state = () => ({
  companyEmail: 'customer@rongyi8.com',
  companyTel: '027-87888610',
  visitCount: 0,
  investors: [],
  investOrgs: []
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
  },
  // 获取用户提交融资申请数量
  async getApplyCount({ commit }) {
    // console.log('payload is: ', payload)
    const data = await this.$axios.$get(API.count)
    // 设置对象树中的值
    commit('setData', {
      key: 'visitCount',
      value: data + 101
    })
  },
  // 提交融资申请
  async applyFinance({ commit, dispatch }, payload) {
    await this.$axios.$post(API.apply, payload)
    // 提交成功后获取最新的数量
    // await dispatch('getApplyCount')
  },
  // 获取投资人列表信息
  async getInvestorPageList({ commit }) {
    // console.log('payload is: ', payload)
    const investors = await this.$axios.$get(API.investorPageList)
    // 设置对象树中的值
    commit('setData', {
      key: 'investors',
      value: investors.dataList
    })
    console.log('investors is: ', investors.dataList)
  },
  // 获取投资机构列表信息
  async getInvestOrgPageList({ commit }) {
    // console.log('payload is: ', payload)
    const investOrgs = await this.$axios.$get(API.investOrgPageList)
    // 设置对象树中的值
    commit('setData', {
      key: 'investOrgs',
      value: investOrgs.dataList
    })
  }
}

export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  }
}
