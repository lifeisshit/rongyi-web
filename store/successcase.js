/*
 * 资金方相关的状态管理
 * */
import API from '~/common/api'

export const state = () => ({
  pageNum: 1,
  pageSize: 10,
  totalRow: 0,
  topSuccessCaseList: [],
  successCaseList: [],
  successCaseInfo: {}
})

export const actions = {
  // 获取列表信息
  async getPageList({ commit, state }, payload) {
    if (!payload.pageNum) {
      payload.pageNum = state.pageNum
    }
    if (!payload.pageSize) {
      payload.pageSize = state.pageSize
    }
    const { dataList, totalRow } = await this.$axios.$get(
      API.successCasePageList,
      {
        params: payload
      }
    )
    console.log(dataList)
    // 设置对象树中的值
    if (payload.recommend === 1) {
      // 推荐成功案例
      commit('setData', {
        key: 'topSuccessCaseList',
        value: dataList
      })
    } else {
      // 普通成功案例
      commit('setData', {
        key: 'successCaseList',
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
    const successCaseInfo = await this.$axios.$get(API.successCaseGetById, {
      params: payload
    })
    console.log(successCaseInfo)
    commit('setData', {
      key: 'successCaseInfo',
      value: successCaseInfo
    })
  }
}

export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  }
}
