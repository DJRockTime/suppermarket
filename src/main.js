/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:46:11
 * @LastEditTime: 2019-10-14 12:22:30
 * @LastEditors: Please set LastEditors
 */
// 工具类
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

// 样式类
import Element from 'element-ui'
import './assets/css/base.css'
import './assets/css/normalize.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css';

// mock 数据
import './mock.js/index'



Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
