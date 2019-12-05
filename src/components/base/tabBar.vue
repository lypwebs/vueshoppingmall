<template>
  <van-tabbar v-model="index">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="wap-nav" to="/list">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/car">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/personal">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    name: 'tabBar',
    data() {
      return {

      }
    },
    computed:{
      index:{
        get(){
          return this.active
        },
        set(){

        }
      }
    },
    props: ["active"]
  }
</script>

<style>
</style>
