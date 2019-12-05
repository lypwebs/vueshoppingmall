<template>
  <!-- 监控路由发请求即可 -->
  <h1>{{$route.params.goodsId}}</h1>
</template>

<script>
  export default {
    name: 'Detail',
    watch: {    //监控路由的变化
      $route:{
        handler(){
           console.log(this.$route.params)
        },
       immediate:true
      }
    }
  }
</script scoped>

<style>
</style>
