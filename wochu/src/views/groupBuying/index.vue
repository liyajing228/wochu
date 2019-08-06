<template>
  <div>
    <!-- 头部 -->
    <div class="group-banner-top">
      <div class="group-top">
        <router-link class="group-jian" 
        to="/mine"
        teg="a">
          
          <img src="../../assets/goback.png" />
        </router-link>
        <p class="group-zh">我的团购</p>
        <div class="group-you"></div>
      </div>
      <div class="group-banner">
        <img src="../../assets/myGroup-banner.png" />
      </div>
    </div>
    <!-- 中间 -->
    <div class="group-center group-center-text">
      <div class="group-center-top">
        <div
          class="group-center-a"
          v-for="(i,index) in center"
          :key="index"
          tag="div"
          :class="index==activeIndex ? 'acti' : '' "
          @click="handleIndexTo(index)"
        >{{i.text}}
        </div>
      </div>
      <div class="group-center-img"
       v-for="(i,index) in center"
       :key="index" 
      v-show="activeIndex == index"
      >{{i.path}}
        <img src="../../assets/no-order.png" />
      </div>
    </div>
    <!-- 尾部 -->
     <div class="group-bottom">
    <div class="group-bottom-p">更多超值团品</div>
    <div class="group-bottom-bottom">
      <ul class="group-bottom-ul">
        <li class="group-bottom-li" v-for="(item,index) in list" :key="index">
            <img :src="item.hotSaleImage[0].URL">
            <h3>{{item.product_describe}}</h3>
            <p>{{item.sell_point}}</p>
            <div class="group-bottom-price">
            <span>￥{{item.discount_price}}</span>
            <i>￥{{item.market_price}}</i>
            
            </div>
            <em>{{item.reduced_rate}}折</em>
        </li>
      </ul>
    </div>
  </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Http from "utils/http.js";
import axios from "axios";
export default {
  name: "groupCenter",
  data() {
    return { 
      list:[],
       activeIndex:0,
      center: [
        { text: "进行中"},
        { text: "已下单"},
        { text: "已失效"}
      ]
    };
  },
   mounted(){
    this.thatnum=this.tabName
  },
  methods: {
    addClassName: function(index) {
      this.thatnum = index;
    },
    handleIndexTo(index){
       this.activeIndex = index;
      // console.log(index)
    }
  },

  created() {
Http("get","http://tg.wochu.cn/client/v1/groupBuy/HotSaleList?parameters=%7B%22pageSize%22%3A5%2C%22pageIndex%22%3A1%7D").then((data)=>{
       // console.log(data.data)
        this.list=data.data.items;
        // console.log(data.data.items[0].market_price)
    })

    
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.group-top {
  width: 7.5rem;
  height: 0.86rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 111;
}
.group-jian {
  width: 22%;
  height: 100%;
  line-height: 0.86rem;
  text-align: center;
  vertical-align: middle;
}
.group-jian > img {
  width: 0.88rem;
  height: 0.88rem;
  display: block;
}
.group-zh {
  width: 55%;
  height: 0.86rem;
  line-height: 0.86rem;
  font-size: 0.36rem;
  color: #333333;
  text-align: center;
}
.group-you {
  width: 20%;
  height: 100%;
}
.group-banner > img {
  width: 100%;
  height: 2.7122rem;
  overflow: hidden;
  display: block;
}
.group-banner {
  width: 100%;
  height: 3rem;
  background: #fff;
  padding-top: 1rem;
}


.group-center-top {
  width: 7.5rem;
  height: 0.7rem;
}
.group-center-a{
    width:33%;
    height:0.7rem;
    float:left;
    text-align:center;
    line-height:0.7rem;
    color:#000;
    font-size:0.3rem;
}

.group-center-img{
    width:100%;
    height:2.97rem;
      position: relative;
      vertical-align: middle;
      
}
.group-center-img>img{
    width:4.41rem;
    height:2.33rem;
    display:block;
   margin:0.64rem  1.64rem 0;
}
.acti{
  color:#FF701E;
  border-bottom:0.02rem solid #ff701e;
}
.group-bottom-p {
  width: 100%;
  height: 0.592rem;
  text-align: center;
  line-height: 0.592rem;
  font-size: 0.24rem;
  color: #999;
}
.group-bottom-bottom{
    width:100%;

}
.group-bottom-ul{
    width:7rem;
    height:12.552rem;
    padding:0 0.2rem 0.3rem;
}
.group-bottom-li{
    width:45%;
    float:left;
    margin-left:0.3rem;
}
.group-bottom-li>img{
    width:100%;
    height:1.8688rem;
}
.group-bottom-li>h3{
    width:3.15rem;
    height:0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#333;
    font-size:0.3rem;
    font-weight:200;
    text-align:center;
    line-height: 0.8rem;
}
.group-bottom-li>p{
    width:3.15rem;
    height:0.288rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#999;
    font-size:0.24rem;
    text-align:center;
    line-height:0.288rem;
}

.group-bottom-price{
    width:70%;
    height:0.9272rem;
    text-align:center;
    line-height:0.9272rem;
    float:left;
}
.group-bottom-price>span{
    width:0.551rem;
    height:0.32rem;
    text-align:center;
    line-height:0.32rem;
    color:#FF701E;
    font-size:0.24rem;
}
.group-bottom-price>i{
    width:0.72rem;
    height:0.32rem;
    text-align:center;
    line-height:0.32rem;
    color:#999;
    font-size:0.24rem;
    text-decoration: line-through;
    font-style:normal;
}
em{
    width:20%;
    height:0.896rem;
    text-align:center;
    line-height:0.896rem;
    color:#FF701E;
    font-size:0.24rem;
    font-style:normal;
    float:left;
}

</style>