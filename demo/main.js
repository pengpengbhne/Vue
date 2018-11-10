// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.use(VueAwesomeSwiper)

Vue.prototype.$axios=Axios
Axios.defaults.baseURL="http://www.wwtliu.com"
Axios.defaults.headers.post['Content-Type']="application/x-www-form-urlencode"
Vue.config.productionTip = false
//请求拦截器
Axios.interceptors.request.use(function(config){
  if(config.method=="post"){
    config.data=qs.stringify(config.data)
  }
  return config;
},function(error){
  //请求错误时做什么
  return Promise.reject(error);
});
//响应拦截器
Axios.interceptors.request.use(function(response){
  
  return response;
},function(error){
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
