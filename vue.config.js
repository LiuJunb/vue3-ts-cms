const { defineConfig } = require('@vue/cli-service')
const path = require('path')
// 按需自动导入组件的插件
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  // 1.配置方式一: CLI提供的属性
  outputDir: './build',
  publicPath: '/',
  // 开发环境配置proxy代理
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // 不需配置了，Vue CLI默认已配了
        components: '@/components'
      }
    },
    // 按需自动导入组件的2个插件
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // 同上写法
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     // '@': path.resolve(__dirname, 'src'), // 不需配置了，Vue CLI默认已配了
  //     components: '@/components'
  //   }
  // }

  // 3.配置方式三:使用链式调用配置webpack的属性
  // chainWebpack: (config) => {
  //   // 配置别名
  //   config.resolve.alias
  //     // .set('@', path.resolve(__dirname, 'src'))  // 不需配置了，Vue CLI默认已配了
  //     .set('components', '@/components')
  // }
})
