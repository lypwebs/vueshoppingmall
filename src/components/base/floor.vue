<template>
  <div class="floor">
    <div class="floor-1">
      <div class="floor-left">
        <img :src="floor[0].image" alt="" width="100%" />
      </div>
      <div class="floor-right">
        <div> <img :src="floor[1].image" alt="" width="100%" /></div>
        <div> <img :src="floor[2].image" alt="" width="100%" /></div>
      </div>
    </div>
    <div class="floor-2">
      <div v-for="item in floor.slice(3)">
        <img :src="item.image" alt="" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'floor',
    props: {
      'floor': { //校验   默认空数组 没有要不就没法循环了
        type: Array,
        default: []
      },


    } //接受一个floor
  }
</script>

<style scoped lang="less">

  .floor {
    padding: 0 4%;
    background-color: #fff;
    .floor-1 {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      .floor-left {
        width: 39.5rem;
        img{
          height: 100%;

        }
      }
      .floor-right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div{
          img{
            height: 1.5rem;

          }
        }
      }
    }

    .floor-2 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      div {
        width: 50%;
        box-sizing: border-box;
      }

      div:nth-child(2n-1) {
        border-right: 1px solid #ddd;
      }
    }
  }
</style>
