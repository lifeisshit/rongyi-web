/*
 * 资金方相关的状态管理
 * */
import API from '~/common/api'

export const state = () => ({
  pageNum: 1,
  pageSize: 10,
  totalRow: 0,
  slideNewsList: [],
  newsList: [],
  newsInfo: {}
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
      API.newsPageList,
      payload
    )
    console.log(dataList)
    // 设置对象树中的值
    if (payload.type === 1) {
      // 设置资讯幻灯片
      commit('setData', {
        key: 'slideNewsList',
        value: dataList
      })
    } else {
      // 普通成功案例
      commit('setData', {
        key: 'newsList',
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
    const newsInfo = await this.$axios.$get(API.newsGetById, {
      params: payload
    })
    console.log(newsInfo)
    commit('setData', {
      key: 'newsInfo',
      value: newsInfo
    })
  }
}

export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  }
}
