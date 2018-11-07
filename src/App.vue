<!--html结构-->
<template>
  <div id="app">
    hello vue.js
    <h1>{{title}}</h1>
    <users></users>
  </div>
</template>
<!--行为-->
<script>
//局部注册组件
import Users from './components/Users'
export default {
  name: 'App',
  data(){
    return {
      title:'这个一个脚手架项目'
    }
  },
  components:{
    "users":Users
  }
}
</script>
<!--样式-->
<style>

</style>
