<template>
  <header v-on:click="changeTitle">
      <h1>
          {{title1}}
          {{title}}
      </h1>
  </header>
</template>

<script>
export default {
  name:"app-header",
  props:{
      title:{
          String
      }
  },
  methods:{
      changeTitle:function(){
          //this.title='headers change Title';
          this.$emit("titleChanged","子向父组件传值")
      }
  },
  data() {
      return {
          title1:"Vue.js Demo"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: blue;
    text-align: center;
}
</style>
