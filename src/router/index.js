import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import List from '@/components/page/List'
import Car from '@/components/page/Car'
import Personal from '@/components/page/Personal'
import Detail from '@/components/page/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/car',
      component: Car,
      meta:{keepAlive:true}
    },
    {
      path: '/personal',
      component: Personal
    },
    // {
    //   path: '/order/:type',
    //   component: Order,
    //   name:"order"
    // },
    {
      path: '/goodsDetail/:goodsId',
      component: Detail,
      name:"detail"
    }
  ]
})
