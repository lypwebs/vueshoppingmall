//使用axios请求数据
import axios from 'axios'
//配置基础路径
axios.defaults.baseURL = "https://www.easy-mock.com/mock/5d9980338c63954ea11dd3c6/shoppingmall"
axios.interceptors.response.use(data=>data.data.data);
export let getSlidesData = ()=>{
   return axios.get('/slides');
}
