/*
 * 资金方相关的状态管理
 * */
import API from '~/common/api'

export const state = () => ({
  pageNum: 1,
  pageSize: 10,
  totalRow: 0,
  topfundList: [],
  fundList: [],
  fundInfo: {}
})

export const actions = {
  // 获取列表信息
  async getPageList({ commit, state }, payload) {
    if (!payload.pageNum) {
      payload.pageNum = state.pageNum
    }

    const { dataList, totalRow } = await this.$axios.$post(
      API.fundPageList,
      payload
    )
    // 设置对象树中的值
    if (payload.recommend === 1) {
      // 推荐资金方
      commit('setData', {
        key: 'topfundList',
        value: dataList
      })
    } else {
      // 普通资金方
      commit('setData', {
        key: 'fundList',
        value: dataList
      })
      commit('setData', {
        key: 'totalRow',
        value: totalRow
      })
      if (payload.pageNum) {
        commit('setData', {
          key: 'pageNum',
          value: payload.pageNum
        })
      }
    }
  },
  // 根据id获取详情
  async getById({ state, commit }, payload) {
    const fundInfo = await this.$axios.$get(API.fundGetById, {
      params: payload
    })
    console.log(fundInfo)
    commit('setData', {
      key: 'fundInfo',
      value: fundInfo
    })
  }
}

export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  }
}
