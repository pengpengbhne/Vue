<!--html结构-->
<template>
  <div id="home">
    <h1>{{title}}</h1>
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <user v-bind:users="users"></user>
    <user v-bind:users="users"></user>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>
<!--行为-->
<script>
//局部注册组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'home',
  data(){
    return {
      //title:"第一个脚手架项目",
       users:[
           /* {name:'lisi',position:"web开发",show:false},
            {name:'lisi',position:"web开发",show:false},
            {name:'lisi',position:"web开发",show:false},
            {name:'lisi',position:"web开发",show:false},
            {name:'lisi',position:"web开发",show:false},*/
            ],
      title:"传值：hello world"
    }
  },
  components:{
    "user":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  created:function(){
      this.$http.get("http://jsonplaceholder.typicode.com/users").then((data) =>{
         // console.log(data);
         this.users = data.body;
      })
  },
  methods:{
    updateTitle(title){
      this.title = title;
    }
  }
}
</script>
<!--样式-->
<style scoped>
h1{
  color: purple;
}
</style>
