// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Icon,
  Tabbar,
  TabbarItem,
  Lazyload,
  Search
} from 'vant'
Vue.use(Icon).use(Tabbar).use(TabbarItem).use(Lazyload).use(Search)
Vue.config.productionTip = false
//定义全局过滤器
Vue.filter("toFixed", (target, val = 2) => {
  return parseFloat(target).toFixed(val)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
let w = document.documentElement.clientWidth || document.body.clientWidth;
document.documentElement.style.fontSize = w / 640 * 100 + 'px';
