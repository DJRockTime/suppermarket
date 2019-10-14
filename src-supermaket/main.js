/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:46:11
 * @LastEditTime: 2019-10-02 11:15:20
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './assets/css/base.css'
import './assets/css/normalize.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import './mock.js/index'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
