<template>
    <div class="app-head">
        <div class="app-head-inner">
            <router-link to="/">
              <img src="../assets/logo.png" alt="logo">
            </router-link>
            
            <span>初出茅庐，学习前端Vue第一个项目|前端起步|</span>
            <div class="head-nav">
                <ul class="nav-list">  
                    <li>登录</li>
                    <li class="nav-pile">|</li>
                     <li>注册</li>
                    <li class="nav-pile">|</li>
                    <li >
                        <!--<router-link :to="{path:'/about'}">关于</router-link>-->
                        关于
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"header",
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.app-head{
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner{
  width: 1200px;
  margin: 0 auto;
}
.head-logo{
  float: left;
}
.app-head-inner span{
  position: relative;
  top:-20px;
}
.app-head-inner img{
  width: 50px;
  margin-top:20px;
}
.head-nav{
  float: right;
}
.head-nav ul{
  overflow: hidden;
}
.head-nav li{
  cursor: pointer;
  float: left;
}
.nav-pile{
  padding: 0 10px;
}
.container{
  width: 1200px;
  margin: 0 auto;
}
.hr{
  height: 1px;
  width: 100%;
  background: #ddd;
}
button{
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover{
  background: #4fc08d;
}
.g-form{

}
.g-form-line{
  padding: 15px 0;
}
.g-form-lable{
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input{
  display: inline-block;
}
.g-form-input input{
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #CCC;
}
.g-form-btn{
  padding-left:100px; 
}
.g-form-error{
  color: red;
  padding-left: 15px;
}
</style>