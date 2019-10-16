<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:46:11
 * @LastEditTime: 2019-10-16 00:45:38
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from '@/components/login/Login'

import { getHomeMultidata, getUserData } from './network/home'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  created() {
    // getUserData()
    // .then(res => {
    //   console.log(res)
    // })
    // getHomeMultidata()
    //   .then(res => {
    //     console.log(res)
    //   })
  },
  components: {
    Login,
  }
}
</script>

<style>
  #app {
    height: 100%;
  }
</style>
