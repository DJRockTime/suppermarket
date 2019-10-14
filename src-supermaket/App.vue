<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:46:11
 * @LastEditTime: 2019-10-02 10:46:57
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <home></home>
    <footer>
        <div class="link-item">
          <i class="fa fa-circle-thin"></i>
          <a href="#">首页</a>
        </div>
        <div class="link-item">
          <i class="fa fa-clone"></i>
          <a href="#">分类</a>
        </div>
        <div class="link-item">
          <i class="fa fa-square-o"></i>
          <a href="#">购物车</a>
        </div>
        <div class="link-item">
          <i class="fa fa-heart-o"></i>
          <a href="#">我的</a>
        </div>

    </footer>
  </div>
</template>

<script>
import home from './components/common/home/Home'
export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 14px;
    border-top: 1px solid #eee;
    height: 44px;
    padding: 5px 0;
  }

  .link-item {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

</style>
