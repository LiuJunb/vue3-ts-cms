import { createStore } from 'vuex'
import login from './login/login'
import type { IRootState } from './types'
export default createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy', // 测试
      age: 18 // 测试
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
