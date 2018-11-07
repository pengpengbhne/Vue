<!--html结构-->
<template>
  <div id="app">
    <ul>
      <li>
        <!--<a href="/">Home</a>-->
        <router-link to="/">Home</router-link>
      </li>
      <li>
         <router-link to="/helloworld">Hello</router-link>
        <!--<a href="/helloworld">Hello</a>-->
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<!--行为-->
<script>
export default {
  name: 'App',
  data(){
    return {
     
    }
  },
  components:{
  
  },
  methods:{
  }
  
}
</script>
<!--样式-->
<style scoped>
h1{
  color: purple;
}
</style>
