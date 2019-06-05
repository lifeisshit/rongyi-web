/*
 * 存在sessionStorage中的值
 * */
import { SmsCodeType } from '~/common/constant'

const MAX_COUNT_DOWN = 60

export const state = () => ({
  regCodeInfo: {
    countdown: MAX_COUNT_DOWN,
    isSendDiabled: false
  },
  loginCodeInfo: {
    countdown: MAX_COUNT_DOWN,
    isSendDiabled: false
  },
  forgetPasswordCodeInfo: {
    countdown: MAX_COUNT_DOWN,
    isSendDiabled: false
  }
})

export const actions = {
  // 开始倒计时
  startCountDown({ commit, state }, payload) {
    let codeInfo = null

    if (payload.smsCodeType === SmsCodeType.Register) {
      codeInfo = state.regCodeInfo
    } else if (payload.smsCodeType === SmsCodeType.Login) {
      codeInfo = state.loginCodeInfo
    } else if (payload.smsCodeType === SmsCodeType.ModifyPassword) {
      codeInfo = state.forgetPasswordCodeInfo
    }

    if (!codeInfo) {
      return
    }

    let isSendDiabled = codeInfo.isSendDiabled
    const isInit = payload.isInit
    // 1. 如果是初始化刷新页面，则当验证码不可用的时候自动开始倒计时
    // 2. 如果是点击发送验证码按钮，则当验证码可用的时候才开始倒计时
    if (!((isInit && isSendDiabled) || (!isInit && !isSendDiabled))) {
      return
    }
    // 先执行一次，否则会延时一秒
    commit('countdown', payload)
    isSendDiabled = codeInfo.isSendDiabled
    let countdown = codeInfo.countdown
    if (!isSendDiabled) {
      return
    }

    const timer = setInterval(() => {
      if (countdown > 0 && countdown <= MAX_COUNT_DOWN) {
        commit('countdown', payload)
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
  countdown(state, payload) {
    let codeInfo = null

    if (payload.smsCodeType === SmsCodeType.Register) {
      codeInfo = state.regCodeInfo
    } else if (payload.smsCodeType === SmsCodeType.Login) {
      codeInfo = state.loginCodeInfo
    } else if (payload.smsCodeType === SmsCodeType.ModifyPassword) {
      codeInfo = state.forgetPasswordCodeInfo
    }

    if (codeInfo) {
      codeInfo.countdown--
      codeInfo.isSendDiabled = true
      if (codeInfo.countdown <= 0) {
        codeInfo.countdown = MAX_COUNT_DOWN
        codeInfo.isSendDiabled = false
      }
    }
  }
}
