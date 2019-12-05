<template>
  <div class="containter">
      <div class="base-info">
        <div class="user-look">
          <img :src="userLook"/>
        </div>
        <div class="user-name">
          <p>我是快乐的大熊猫</p>
          <p>普通用户</p>
        </div>
        <van-icon name="setting" class="ico-set"></van-icon>
      </div>
      <tabBar :active="3"></tabBar>
  </div>

</template>

<script>
  import tabBar from '../base/tabBar.vue'
  import userLook from '../../assets/images/avatar_default.png'
  export default{
    name:'Personal',
    data(){
      return{
        userLook
      }
    },
    components:{tabBar}

  }
</script>

<style scoped lang="less">
  .containter{
    background-color:#dddddd38;
    .base-info{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      background-color: #FFF283;
      padding:0.3rem 1rem;
      .user-look{
        width:1rem;
        height:1rem;
        margin-right: 1rem;
        img{
          width: 100%;
          height: 1005;
          border-radius: 50%;
        }
      }

      .ico-set{
        position: absolute;
        top: 0.1rem;
        right: 0.1rem;
        color: #fff;
      }
    }
  }
</style>
