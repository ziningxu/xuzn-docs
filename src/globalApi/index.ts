import { requestApi } from '@/utils/request'
// 登录
export function authLogin(data = {}) {
  // console.warn('------> 待完善')
  const url = '/login'
  return requestApi({ url, data })
}

// 用户信息
export function authInfo(params = {}) {
  // console.warn('------> 待完善')
  const url = '/userInfo'
  return requestApi({ url, params, method: 'get', cache: true })
}
