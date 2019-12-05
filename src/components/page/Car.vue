<template>
  <div>
    <h1>CAR</h1>
     <tabBar :active="2"></tabBar>
  </div>
</template>

<script>
  import tabBar from '../base/tabBar.vue'
  export default{
    name:'Car',
    components:{tabBar}
  }
</script>

<style>
</style>
