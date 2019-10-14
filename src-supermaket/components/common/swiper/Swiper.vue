<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 11:39:12
 * @LastEditTime: 2019-10-02 11:41:33
 * @LastEditors: Please set LastEditors
 -->
<template>

</template>

<script>
export default {
  name: 'Swiper',
  props: {
    interval: {
      type: Number,
      defalut: 3000
    },
    animDuration: {
      type: Number,
      defalut: 300
    },
    moveRation: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0,
      totalWidth: 0,
      swiperStyle: {},
      currentIndex: 1,
      scrolling: false,
    }
  },
  mounted() {
    
  }
}
</script>

<style>

</style>
