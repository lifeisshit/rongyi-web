/*
 * 全局http请求拦截器
 * */
export default function({ $axios, redirect }) {
  // 请求回调
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  // 返回结果回调
  $axios.onResponse(res => {
    // 自定义返回数据
    const { status, statusText, data } = res
    return { status, statusText, data }
  })
  // 错误拦截器
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log('error code: ', code)
    // redirect('/400')
  })
}
