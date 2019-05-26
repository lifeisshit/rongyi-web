/*
 * 校验登录状态
 * */
import getCookie from '~/common/get-cookie'

export default function({ store, route, redirect, req }) {
  // If the user is not authenticated
  const { nuxtToken } = getCookie(req)
  if (!nuxtToken) {
    store.commit('user/clearToken')
    return redirect('/login')
  }
  // if (nuxtToken) {
  //   store.commit('user/setToken', nuxtToken)
  //   return store.dispatch('getUserInfo')
  // }
  // const routePath = route.path
  // const extraPath = ['/']
  // if (!store.state.auth && extraPath.indexOf(routePath) === -1) {
  //   // 跳转到登录页面
  //   return redirect('/login')
  // }
}
