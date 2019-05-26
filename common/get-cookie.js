/*
 * 获取cookie并解析
 * */
const cookieparser = require('cookieparser')
const getCookie = function(req) {
  if (req && req.headers && req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie)
    return parsed
  } else {
    return { nuxtToken: null }
  }
}
export default getCookie
