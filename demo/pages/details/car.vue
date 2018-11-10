<template>
  <div class="sales-board">
      <div class="sales-board-intro">
          <h2>流量分析</h2>
          <p>
              layui，是一款采用自身模块规范编写的前端 UI 框架，遵循原生 HTML/CSS/JS 的书写与组织形式，门槛极低，拿来即用。其外在极简，却又不失饱满的内在，
              体积轻盈，组件丰盈，从核心代码到 API 的每一处细节都经过精心雕琢，非常适合界面的快速开发。layui 首个版本发布于2016年秋，她区别于那些基于 MVVM 底层的 UI 框架，却并非逆道而行，而是信奉返璞归真之道。准确地说，她更多是为服务端程序员量身定做，
              你无需涉足各种前端工具的复杂配置，只需面对浏览器本身，让一切你所需要的元素与交互，从这里信手拈来。
          </p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  购买数量：
              </div>
              <div class="sales-board-line-right">
                  <counter @counter="getGoodInfo('counter',$event)"   :max="Counter.max" :min="Counter.min"></counter>
              </div>
              
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品分类：
              </div>
              <div class="sales-board-line-right">
                  <DownMenu @getdownmenu="getGoodInfo('downmenu',$event)" :DownData="DownMenu"></DownMenu>
              </div>
              
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                  <redios @redios="getGoodInfo('redios',$event)"  :Redios="Redios"></redios>
              </div>
              
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                  {{getTotalPrice}}元
              </div>
              
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                 
              </div>
              <div class="sales-board-line-right">
                  <a class="button" href="#">立即购买</a>
              </div>
              
          </div>
          {{getOrder}}
      </div>
      <div class="sales-board-des">
          <h2>产品说明</h2>
          <p>
              layui，是一款采用自身模块规范编写的前端 UI 框架，遵循原生 HTML/CSS/JS 的书写与组织形式，门槛极低，拿来即用。其外在极简，却又不失饱满的内在，
              体积轻盈，组件丰盈，从核心代码到 API 的每一处细节都经过精心雕琢，非常适合界面的快速开发。layui 首个版本发布于2016年秋，她区别于那些基于 MVVM 底层的 UI 框架，却并非逆道而行，而是信奉返璞归真之道。准确地说，她更多是为服务端程序员量身定做，
              你无需涉足各种前端工具的复杂配置，只需面对浏览器本身，让一切你所需要的元素与交互，从这里信手拈来。
          </p>
          <h3>用户指标</h3>
          <ul>
              <li>
              layui，是一款采用自身模块规范编写的前端 UI 框架，遵循原生 HTML/CSS/JS 的书写与组织形式，门槛极低，拿来即用。其外在极简，却又不失饱满的内在，
              体积轻盈，组件丰盈，从核心代码到 API 的每一处细节都经过精心雕琢，非常适合界面的快速开发。layui 首个版本发布于2016年秋，她区别于那些基于 MVVM 底层的 UI 框架，却并非逆道而行，而是信奉返璞归真之道。准确地说，她更多是为服务端程序员量身定做，
              你无需涉足各种前端工具的复杂配置，只需面对浏览器本身，让一切你所需要的元素与交互，从这里信手拈来。
              </li>
          </ul>
      </div>

  </div>
</template>

<script>
import Counter from "./components/Counter"
import DownMenu from "./components/DownMenu"
import Redios from "./components/Redios"
export default {
  name: 'car',
  data(){
      return {
          totalprice:0,
          counter:1,
          redios:1,
          downmenu:1,
          Counter:{
              max:10,
              min:1
          },
          DownMenu:[
                {
                    name:"初级版",
                    value:1
                },{
                    name:"中级版",
                    value:2
                },{
                    name:"高级版",
                    value:3
                },
            ],
            Redios:[
                {
                    title:'一个月',
                    value:1
                },
                {
                    title:'三个月',
                    value:3
                },{
                    title:'六个月',
                    value:6
                },{
                    title:'十个月',
                    value:10
                },
            ]
        }
  },
  components:{
      Counter,
      DownMenu,
      Redios,
  },methods:{
      /*getCounterNum(data){
          console.log(data);
      },
      getDownMenu(data){
          console.log(data);
      },
      getRedios(data){
          console.log(data);
      }*/
      getGoodInfo(key,value){
       
          this[key]=value;
            var readyData={
                "counter":this.counter, //5元
                "downmenu":this.downmenu,// 2元
                "redios":this.redios//10元
            }
        console.log(readyData)
        //this.totalprice= readyData.counter*5+readyData.downmenu*2+readyData.redios*10;
      }
  },
  computed:{
      getTotalPrice(){
          return this.counter*5+this.downmenu*2+this.redios*10;
      },
      getOrder(){
          return this.$store.getters.getOrder;
      }
  }
}
</script>
<style scoped>
.buy-dialog-title{
    font-size: 16px;
    font-weight: bold;
}
.buy-dialog-btn{
    margin-top: 20px;
}
.buy-dialog-table{
    width:100%;
    margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
    border:1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
}
.buy-dialog-table th{
    background: #4fc08d;
    color: #fff;
    border:1px solid #4fc08d;
}
.button{
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}
</style>