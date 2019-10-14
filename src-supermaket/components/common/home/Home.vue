<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 08:27:33
 * @LastEditTime: 2019-10-02 11:37:28
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" name="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../tabbar/TabBar'
import { getHomeMultidata } from '../../../network/home'
export default {
  name: 'Home',
  data() {
    return {
      banner: [],
      recommends: [],
    }
  },
  components: {
    NavBar
  },
  created() {
    getHomeMultidata()
    .then(res => {
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-pink);
    color: #fff;
  }
</style>
