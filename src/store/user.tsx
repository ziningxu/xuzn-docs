import { defineStore } from 'pinia'
import { tokenStorageL } from '@/storage'
import { authLogin } from '@/globalApi'

export interface UserState {
  userName: string
  userId: string
  token: string
}
export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      userName: '',
      token: '',
      userId: '',
    }
  },
  actions: {
    initUserInfo(userInfo: any) {
      // 记录用户数据
      // console.warn('------> 待完善')
      this.userName = userInfo.userName || ''
      this.userId = userInfo.userId || ''
    },
    async login(params = {}) {
      const res = await authLogin(params)
      // 清除缓存
      // localStorage.clear() // localstorage 不清除
      sessionStorage.clear()
      // 清除当前store中token，然后路由机制会重新走数据请求流程
      this.token = ''
      const token = res.data
      tokenStorageL(token)
    },
  },
})
