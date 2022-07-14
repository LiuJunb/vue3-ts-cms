import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import hyRequest from './service'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
// 从 @element-plus/icons-vue 中导入所有图标并进行全局注册。
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store).use(router).mount('#app')
// hyRequest.request({
//   url: '/get',
//   method: 'GET',
//   showLoading: true
// })

// 测试-获取不同环境下变量的值
// console.log(process.env.NODE_ENV) // development
// console.log(process.env.VUE_APP_BASE_URL) // https://coderwhy/org/dev
// console.log(process.env.VUE_APP_ENV) // development
