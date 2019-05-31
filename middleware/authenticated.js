/*
 * 校验登录状态
 * */
export default function({ store, redirect }) {
  if (!store.state.user.nuxtToken) {
    return redirect('/login')
  }
}
