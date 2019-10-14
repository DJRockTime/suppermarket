<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:46:11
 * @LastEditTime: 2019-10-14 12:15:59
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="Login">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from '@/components/login/Login'

import { getHomeMultidata } from './network/home'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  created() {
    getHomeMultidata()
      .then(res => {
        console.log(res)
      })
  },
  components: {
    Login,
  }
}
</script>

<style>

</style>
