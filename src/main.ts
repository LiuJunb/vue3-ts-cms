import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import hyRequest from './service'

createApp(App).use(store).use(router).mount('#app')
// hyRequest.request({
//   url: '/get',
//   method: 'GET',
//   showLoading: true
// })

// 测试-获取不同环境下变量的值
console.log(process.env.NODE_ENV) // development
console.log(process.env.VUE_APP_BASE_URL) // https://coderwhy/org/dev
console.log(process.env.VUE_APP_ENV) // development
