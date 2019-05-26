/* eslint-disable prefer-promise-reject-errors */
/*
 * 全局http请求拦截器
 * */
import { Message } from 'element-ui'

export default ({ $axios, redirect }) => {
  // 请求回调
  $axios.onRequest(config => {
    // 获取cookie放在头部传到后端
    // config.headers.Authorization = app.$cookies.get('token')
  })
  // 返回结果回调
  $axios.onResponse(res => {
    // 自定义返回数据
    // const { status, statusText, data } = res
    // return { status, statusText, data }
    if (res.data.status !== 0) {
      Message({
        showClose: true,
        message: res.data.msg,
        type: 'error'
      })

      return Promise.reject()
    }
    return res.data
  })
  // 错误拦截器
  $axios.onError(error => {
    if (!error) {
      return
    }
    const code = parseInt(error.response && error.response.status)
    const msg =
      error.response && error.response.data && error.response.data.message
    console.log(`error code: ${code} message: ${msg}`)
    // redirect('/400')
    if (code === 400) {
      redirect('/400')
    }
    if (code === 401) {
      redirect('/login')
    }
  })
}
