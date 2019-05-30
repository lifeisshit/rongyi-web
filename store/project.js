/*
 * 项目方相关的状态管理
 * */
import API from '~/common/api'

export const state = () => ({
  pageNum: 1,
  pageSize: 10,
  totalRow: 0,
  topProjectList: [],
  projectList: [],
  projectInfo: {}
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
      API.projectPageList,
      payload
    )
    // console.log(dataList)
    // 设置对象树中的值
    if (payload.recommend === 1) {
      // 推荐资金方
      commit('setData', {
        key: 'topProjectList',
        value: dataList
      })
    } else {
      // 普通资金方
      commit('setData', {
        key: 'projectList',
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
    const projectInfo = await this.$axios.$get(API.projectGetById, {
      params: payload
    })
    console.log(projectInfo)
    commit('setData', {
      key: 'projectInfo',
      value: projectInfo
    })
  }
}

export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  }
}
