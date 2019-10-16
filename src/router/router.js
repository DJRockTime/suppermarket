/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:46:11
 * @LastEditTime: 2019-10-16 17:43:19
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import User from '@/components/users/User'


Vue.use(Router)



const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      component: Home,
      children: [
        {
          path: 'users', component: User
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ]
}, )

router.beforeEach((to, from, next) => {
  console.log('next', to)
  if (to.path === '/login') {
    // 如果访问的是login页面，直接放行，也就是任何人不管有没有登录
    // 直接调用next()方法
    next()
  } else {
    // 1 当用户登录成功，直接调用next()方法放行
    // 2 当用户没有登录，应该调用 next('/login') 跳转登录页面，让用户登录
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
  // next('/login') // next('/') or next({path: '/'})
})

export default router
