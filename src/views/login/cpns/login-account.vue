<template>
  <div class="login-account">
    <!-- :rules="rules" -->
    <el-form label-width="60px" :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'
import type { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
const store = useStore()
// 1.定义响应式数据
const account = reactive({
  name: '',
  password: ''
})
// 2.获取form组件对象，其中 InstanceType<typeof ElForm> 是声明form实例类型
const formRef = ref<InstanceType<typeof ElForm>>()
// 3.提交表单和标签验证
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.判断是否需要记住密码
      if (isKeepPassword) {
        // 本地缓存用户名和密码
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        // 清除本地缓存的用户名和密码
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }

      // 2.开始进行登录验证
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}
// 给表单项设置值
const setFormFields = (name: string, password: string) => {
  account.name = name || account.name
  account.password = password || account.password
}
// 4.该组件暴露出去的属性（loginAction ）
defineExpose({ loginAction, setFormFields })
</script>
