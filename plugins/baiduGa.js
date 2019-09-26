/*
 * 百度统计
 * */
export default ({ app: { router } }) => {
  /* 每次路由变更时进行pv统计 */
  router.afterEach((to, from) => {
    /* 告诉增加一个PV */
    try {
      window._hmt = window._hmt || []
      window._hmt.push(['_trackPageview', to.fullPath])
    } catch (e) {}
  })
  // 自动提交百度链接
  const bp = document.createElement('script')
  const curProtocol = window.location.protocol.split(':')[0]
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
  } else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js'
  }
  const s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(bp, s)
}
