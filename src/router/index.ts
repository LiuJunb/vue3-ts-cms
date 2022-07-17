import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login' // 访问默认路由时，重定向到登录页面
  },
  {
    path: '/login', // 登录页面
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main', // 首页布局
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    children: [
      // {
      //   path: 'system/user', // 用户管理 页面（使用动态注册）
      //   name: 'user',
      //   component: () => import('@/views/main/system/user/user.vue')
      // }
    ]
  },
  {
    path: '/:pathMatch(.*)*', // 没有匹配的路径显示该页面
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
