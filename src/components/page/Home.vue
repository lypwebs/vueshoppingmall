<template>
  <div class="containter">
    <div class="home-search"></div>
    <div class="home-swipe">
      <form action="/">
        <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
      </form>
      <slides :slides="slides"></slides>
    </div>
    <div class="category">
      <div v-for="item in category">
        <img :src="item.image" alt="" width="100%" />
        <p>{{item.mallCategoryName}}</p>
      </div>
    </div>
    <div class="picture">
      <img :src="picture.PICTURE_ADDRESS" alt="" width="100%" />
    </div>
    <div class="recommend">
      <h3>商品推荐</h3>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in recommend" :key="index">
          <div class="slide-item">
            <img :src="slide.image" width="80%" />
            <p>{{ slide.goodsName }}</p>
            <p>${{ slide.mallPrice|toFixed}}({{slide.price|toFixed}})</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <floor :floor="floor"></floor>
    <div>
      <h3 class="hot-title">热卖商品</h3>
      <div class="hotGoods">
        <div class="goods" v-for="item in hotGoods" @click="$router.push({params:{goodsId:item.goodsId},name:'detail'})">
          <img :src="item.image" alt="" width="100%" />
          <p>{{item.name}}</p>
          <p>${{item.mallPrice|toFixed}}({{item.price|toFixed}})</p>
        </div>
      </div>
    </div>

    <tabBar :active="0"></tabBar>
  </div>
</template>

<script>
  import tabBar from '../base/tabBar.vue';
  import {
    getSlidesData
  } from '../../api';
  import slides from "../base/slides.vue"
  import 'swiper/dist/css/swiper.css'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import floor from '../base/floor.vue'

  export default {
    name: 'Home',
    data() {
      return {
        slides: [{
            "image": "http://t1.hxzdhn.com/uploads/tu/201909/9999/1b38f601b1.jpg",
            "goodsId": "rerehre3546465k7k6j6jjk868"
          },
          {
            "image": "http://t1.hxzdhn.com/uploads/tu/201909/9999/41409d345f.jpg",
            "goodsId": "43905057i60yi9t5y8u59555i"
          },
          {
            "image": "http://t1.hxzdhn.com/uploads/tu/201909/9999/0e8d980dbd.jpg",
            "goodsId": "rn35935u49yh724483u548u6"
          },
          {
            "image": "http://t1.hxzdhn.com/uploads/tu/201909/9999/daf55ed7c6.jpg",
            "goodsId": "fnufy73hr4r745h92e0rj3"
          },
          {
            "image": "http://t1.hxzdhn.com/uploads/tu/201909/9999/86e394631e.jpg",
            "goodsId": "3m5m54m46565k6546465k23"
          }
        ],
        value: "酸奶",
        category: [{
            "image": "https://www.starbucks.com.cn/images/products/blueberry-passion-pearl-fizz.jpg",
            "mallCategoryName": "蓝莓星空"
          },
          {
            "image": "https://www.starbucks.com.cn/images/products/citrus-mint-mojito.jpg",
            "mallCategoryName": "橘香茉吉托"
          },
          {
            "image": "https://www.starbucks.com.cn/images/products/cold-brew-lemon-sour.jpg",
            "mallCategoryName": "酸柠浮冷萃"
          },
          {
            "image": "https://www.starbucks.com.cn/images/products/peach-shrub-fizz.jpg",
            "mallCategoryName": "醋意桃桃"
          },
          {
            "image": "https://www.starbucks.com.cn/images/products/pomegranate-pearl-fizz.jpg",
            "mallCategoryName": "石榴仲夏梦"
          }
        ],
        picture: {
          "PICTURE_ADDRESS": "http://www.canyina.com/public/images/index_zsimg.jpg"
        },
        swiperOption: {
          slidesPerView: 3
        },
        swiperSlides: [1, 2, 3, 4, 5],
        recommend: [{
            goodsId: "6576786754535355353353553",
            goodsName: "霸气冰淇淋芒果",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925119.jpg",
            mallPrice: 334,
            price: 321.23434
          },
          {
            goodsId: "6576786754535355353353553",
            goodsName: "芝士奶盖茉莉",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg",
            mallPrice: 334,
            price: 322
          },
          {
            goodsId: "6576786754535355353353553",
            goodsName: "芝士阿里山初露",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925119.jpg",
            mallPrice: 334,
            price: 323
          },
          {
            goodsId: "6576786754535355353353553",
            goodsName: "霸气冰淇淋草莓",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg",
            mallPrice: 334,
            price: 324
          },
          {
            goodsId: "6576786754535355353353553",
            goodsName: "霸气两斤山竹",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925119.jpg",
            mallPrice: 334,
            price: 325.23434
          }
        ],
        floor: [{
            goodsId: "43435465TUTY4TU84U4UT4T",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg"
          },
          {
            goodsId: "43435465TUTY4TU84U4UT4T",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg"
          },
          {
            goodsId: "43435465TUTY4TU84U4UT4T",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg"
          },
          {
            goodsId: "43435465TUTY4TU84U4UT4T",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg"
          },
          {
            goodsId: "43435465TUTY4TU84U4UT4T",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg"
          },
          {
            goodsId: "43435465TUTY4TU84U4UT4T",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg"
          },
          {
            goodsId: "43435465TUTY4TU84U4UT4T",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg"
          },
          {
            goodsId: "43435465TUTY4TU84U4UT4T",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg"
          },
          {
            goodsId: "43435465TUTY4TU84U4UT4T",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg"
          }
        ],
        hotGoods: [{
            goodsId: "6576786754535355353353553",
            goodsName: "霸气冰淇淋芒果",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg",
            mallPrice: 334,
            price: 321.23434
          },
          {
            goodsId: "6576786754535355353353553",
            goodsName: "霸气冰淇淋芒果",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg",
            mallPrice: 334,
            price: 321.23434
          },
          {
            goodsId: "6576786754535355353353553",
            goodsName: "芝士阿里山初露",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925119.jpg",
            mallPrice: 334,
            price: 323
          },
          {
            goodsId: "6576786754535355353353553",
            goodsName: "霸气冰淇淋草莓",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9925120.jpg",
            mallPrice: 334,
            price: 324
          },
          {
            goodsId: "6576786754535355353353553",
            goodsName: "霸气两斤山竹",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9694038.jpg",
            mallPrice: 334,
            price: 325.23434
          },
          {
            goodsId: "6576786754535355353353553",
            goodsName: "霸气两斤山竹",
            image: "http://nwzimg.wezhan.cn/contents/sitefiles2033/10166460/images/9694038.jpg",
            mallPrice: 334,
            price: 325.23434
          }
        ]


      }
    },
    components: {
      tabBar,
      slides,
      swiper,
      swiperSlide,
      floor
    },
    async created() {
      let data = await getSlidesData()
      this.slides = data.slides
      console.log(this.slides)
    },
    methods: {
      onSearch() {

      },
      onCancel() {

      }
    }
  }
</script>

<style scoped lang="less">
  .containter {
    background-color: #bbbbbb38;
  }

  .van-swipe {
    max-height: 3.6rem;
  }

  .category {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #fff;
    padding-top: 0.2rem 0;

    div {
      width: 20%;
      margin: 7px;
      text-align: center;
      font-size: 0.2rem;
    }
  }

  .recommend {
    background-color: #fff;
    h3 {
      border-bottom: 1px solid #ddd;
      margin: 0;
      color: #e11488;
      padding: 0.1rem;
      box-sizing: border-box;
    }

    .slide-item {
      box-sizing: border-box;
      padding: 0.1rem;
      text-align: center;
      font-size: 0.2rem;
      border-right: 1px solid #ddd;

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: norwrap;
      }

    }
  }


  .hotGoods {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
    padding-top:7px ;
    .goods {
      margin: 0 4%;
      width: 42%;
      text-align: center;

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .hot-title {
    height: 40px;
    line-height: 40px;
    margin: 0;
    color: #e11488;
     border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    text-align: left;
    padding: 0.1rem;
    background-color: #FFFFFF;
  }
</style>
