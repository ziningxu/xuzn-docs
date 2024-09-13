import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import 'xuzn-ui/dist/style.css'
import 'animate.css'
import router from '@/router'
import * as elIcons from '@element-plus/icons-vue'
import * as uniIcons from '@/icons'

import './style.scss'
import App from './App.vue'

start()
function start() {
  const pinia = createPinia()
  const app = createApp(App)
  app.use(ElementPlus, { locale: zhCn })
  app.use(pinia)
  app.use(router)

  //统一注册el-icon图标
  for (let icon in elIcons) {
    app.component(`ElIcon${icon}`, elIcons[icon])
  }
  //统一注册uni-icon图标
  for (let icon in uniIcons) {
    app.component(`UniIcon${icon}`, uniIcons[icon])
  }
  app.mount('#app')
}
