/*
 * 存在sessionStorage中的值
 * */
const MAX_COUNT_DOWN = 10

export const state = () => ({
  regCodeInfo: {
    countdown: MAX_COUNT_DOWN,
    isSendDiabled: false
  }
})

export const actions = {
  startCountDown({ commit, state }, payload) {
    let isSendDiabled = state.regCodeInfo.isSendDiabled
    const isInit = payload.isInit
    // 1. 如果是初始化刷新页面，则当验证码不可用的时候自动开始倒计时
    // 2. 如果是点击发送验证码按钮，则当验证码可用的时候才开始倒计时
    if (!((isInit && isSendDiabled) || (!isInit && !isSendDiabled))) {
      return
    }
    // 先执行一次，否则会延时一秒
    commit('countdown')
    isSendDiabled = state.regCodeInfo.isSendDiabled
    let countdown = state.regCodeInfo.countdown
    if (!isSendDiabled) {
      return
    }

    const timer = setInterval(() => {
      if (countdown > 0 && countdown <= MAX_COUNT_DOWN) {
        commit('countdown')
        countdown--
        if (countdown === 0) {
          clearInterval(timer)
        }
      }
    }, 1000)
  }
}

export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  },
  countdown(state) {
    state.regCodeInfo.countdown--
    state.regCodeInfo.isSendDiabled = true
    if (state.regCodeInfo.countdown <= 0) {
      state.regCodeInfo.countdown = MAX_COUNT_DOWN
      state.regCodeInfo.isSendDiabled = false
    }
  }
}
