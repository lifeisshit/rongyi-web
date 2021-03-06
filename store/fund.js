/*
 * 资金方相关的状态管理
 * */
import API from '~/common/api'

export const state = () => ({
  pageNum: 1,
  pageSize: 10,
  totalRow: 0,
  topFundList: [],
  fundList: [],
  fundInfo: {},
  fundRecentList: [],
  deliverList: []
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
    const { dataList, totalRow } = await this.$axios.$post(
      API.fundPageList,
      payload
    )
    console.log(payload)
    // 设置对象树中的值
    if (payload.recommend === 1) {
      // 推荐资金方
      commit('setData', {
        key: 'topFundList',
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
    // console.log(fundInfo)
    commit('setData', {
      key: 'fundInfo',
      value: fundInfo
    })
  },
  // 根据最近浏览的资金列表
  async getRecentList({ state, commit }) {
    const fundRecentList = await this.$axios.$post(API.fundListRecent)
    // console.log('fundRecentList: ', fundRecentList)
    commit('setData', {
      key: 'fundRecentList',
      value: fundRecentList
    })
  },
  // 投递项目
  async appoint({ commit }, payload) {
    await this.$axios.$post(API.appoint, payload)
  },
  // 投递项目列表
  async getAppointPageList({ commit, state }, payload) {
    if (!payload.pageSize) {
      payload.pageSize = state.pageSize
    }

    const { dataList, totalRow } = await this.$axios.$post(
      API.appointPageList,
      payload
    )
    console.log('getAppointPageList: ', dataList)
    commit('setData', {
      key: 'deliverList',
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
}

export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  }
}
