<template>
    <div class="index-wrap">
        <div class="index-left">
            <div class="index-left-block">
                <h2>全部商品</h2>
                <template v-for="(product,index) in productList">
                    <h3>{{product.category}}</h3>
                    <ul>
                        <li v-for="item in product.list">
                            <a target="_blank" :href="item.url">
                            {{item.name}}
                            </a>
                            <span v-if="item.hot" class="hot-tag">HOT</span>
                        </li>
                    </ul>
                    <div v-if="index%2==0" class="hr"></div>
                </template>
            </div>
            <div class="index-left-block lastest-news">
                <h2>最新消息</h2>
                <ul>
                    <li v-for="item in news">
                        <a target="_blank" :href="item.url">{{item.author_name}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="index-right">
            <div class="swiper-size">
                <swiper :options="swiperOption" >
                    <!-- slides -->
                    <swiper-slide>
                        <a target="_blank" href="www.baidu.com">
                            <img class="swiperimg" src="../assets/img/1.jpg" alt="图1">
                        </a>
                    </swiper-slide>
                    <swiper-slide><img class="swiperimg" src="../assets/img/2.jpg" alt="图2"></swiper-slide>
                    <swiper-slide><img class="swiperimg" src="../assets/img/5.jpg" alt="图3"></swiper-slide>
                    <swiper-slide><img class="swiperimg" src="../assets/img/4.jpg" alt="图4"></swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="index-board-list">
                <div class="index-board-item" v-for="(board,index) in boardList" 
                :class="['index-board-'+board.tag,{'line-last':index%2!=0}]">
                    <div class="index-board-item-inner" >
                        <h2>{{board.title}}</h2>
                        <p>{{board.desc}}</p>
                        <div class="index-board-button ">
                            <router-link :to="{path:'/details/'+board.tag}" class="button">立即购买</router-link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"layout",
    data(){
        return {
             swiperOption: {
                 pagination: {
                    el: '.swiper-pagination',
                },
                loop:true,
                 navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                 autoplay: {
                    delay: 2000,
                    disableOnInteraction: true,
                },

            },boardList:[
                {
                    title:"品牌营销",
                    desc:"开放产品是一款开放软件",
                    tag:"earth"
                },{
                    title:"开放产品",
                    desc:"开放产品是一款开放软件",
                     tag:"loud"
                },{
                    title:"使命必达",
                    desc:"开放产品是一款开放软件",
                     tag:"car"
                },{
                    title:"永攀高峰",
                    desc:"开放产品是一款开放软件",
                     tag:"hill"
                },
            ],
            news:[
                {author_name:"百度",
                url:"http://www.baidu.com"},
                {author_name:"腾讯",
                url:"http://baidu.com"},
                {author_name:"新浪",
                url:"http://baidu.com"},
                {author_name:"阿里",
                url:"http://baidu.com"},
                {author_name:"斗鱼",
                url:"http://baidu.com"},
                {author_name:"人人",
                url:"http://baidu.com"},
                {author_name:"微信",
                url:"http://baidu.com"},
                {author_name:"网易",
                url:"http://baidu.com"},

            ],
            productList:[
                {
                    category:"手机应用类",
                    list:[
                        {
                            name:"91助手",
                            url:"http://www.wwtliu.com/blog",
                            hot:false
                        },{
                            name:"万豆梅",
                            url:"http://www.wwtliu.com/blog",
                            hot:false
                        },{
                            name:"91助手",
                            url:"http://www.wwtliu.com/blog",
                            hot:true
                        }
                    ]
                },{
                    category:"开发工具",
                    list:[
                        {
                            name:"VSCOde",
                            url:"http://www.wwtliu.com/blog",
                            hot:false
                        },{
                            name:"sublimt",
                            url:"http://www.wwtliu.com/blog",
                            hot:false
                        },{
                            name:"atom",
                            url:"http://www.wwtliu.com/blog",
                            hot:true
                        },{
                            name:"Pycharm",
                            url:"http://www.wwtliu.com/blog",
                            hot:false
                        }
                    ]
                }

            ]
        }
        
    },
    created(){
        //网络请求
        this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
            params:{
                count:10,
                type:"top"
            }
        }).then(res=>{
            //console.log(res.data)
            //this.news=res.data
        }).catch(error=>{
            console.log(error)
        })
    }
}
</script>
<style scoped>
.index-wrap{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.index-left{
    float: left;
    width: 300px;
    text-align: left;
}
.index-right{
    float: left;
    width: 900px;
}
.index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    height: 350px;
}
.index-left-block .hr{
    margin-bottom: 20px;
    height: 1px;
    width: 100%;
    background: #ddd;
}
.index-left-block h2{
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
}
.index-left-block h3{
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
}
.index-left-block ul{
    padding: 10px 15px;
}
.index-left-block li{
    padding: 5px;
}
.index-board-list{
    overflow: hidden;
    margin-top: 15px;
}
.index-board-item{
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
}
.index-board-item-inner{
    min-height: 125px;
    padding-left:120px; 
}
.index-board-car .index-board-item-inner{
    background: url("../assets/img/07.jpg") no-repeat;
}
.index-board-loud .index-board-item-inner{
    background: url("../assets/img/08.jpg") no-repeat;
}
.index-board-earth .index-board-item-inner{
    background: url("../assets/img/09.jpg") no-repeat;
}
.index-board-hill .index-board-item-inner{
    background: url("../assets/img/10.jpg") no-repeat;
}
.index-board-item h2{
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
}
.line-last{
    margin-right: 0;
}
.index-board-button{
    margin-top: 20px;

}
.lastest-news{
    min-height: 350px;
}
.hot-tag{
    background: red;
    color: #fff;
}
.new-item{
    display:inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.swiper-size{
    margin-top: 15px;
}
.swiperimg{
    width: 100%;
    height: 360px;
}
.button{
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}

</style>



