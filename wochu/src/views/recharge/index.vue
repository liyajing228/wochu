<template>
  <div>
      <!-- 头部 -->
    <div class="recharge-top">
      <img src="../../assets/header_bg@3x.png" class="recharge-top-img" />
      <div class="recharge-top-left">
        <div class="recharge-top-left1">
          <img src="../../assets/goback.png" class="recharge-top-left2" />
        </div>
        <p>个人账户</p>
        <a href="#">账户明细</a>
      </div>
    </div>
    <!-- 中间 -->
  <div class="recharge-center">
    <div class="recharge-tap">
      <div class="recharge-center-top">
        <span>在线充值</span>
        <span>充值卡充值</span>
      </div>
      <div class="recharge-center-money">
        <div class="recharge-center-left">
          <p>账户余额(元)</p>
          <img src="../../assets/account-slogan@3x.png" />
        </div>
        <div class="recharge-center-right">
          <div>
            ￥
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
    <div class="recharge-center-pay">
      <ul class="recharge-center-card">
        <li class="recharge-center-card1" v-for="(item,index) in list" :key="index">
          <img src="../../assets/r-selected@3x.png" />
          <div>
            <p class="recharge-center-card2">充值￥{{item.price}}</p>
            <span class="recharge-center-card3">{{item.displayAmount}}</span>
            <img src="../../assets/icon-more@3x.png" class="recharge-center-card4" />
          </div>
        </li>
      </ul>
      <div class="recharge-center-pay1">
        <p class="recharge-center-p">支付方式</p>
        <ul class="recharge-pay">
          <li class="recharge-pay1" v-for="(i,idx) in center" :key="idx">
            <div class="recharge-pay-img">
              <img :src="i.src" />
              </div>
            <div class="recharge-pay2">
            <p class="recharge-pay3">{{i.name}}{{i.description}}</p>
           
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
    <!-- 尾部 -->
    <div class="recharge-bottom">
        <a href="#">立即充值</a>
    </div>
  </div>
</template>
<script>
import Http from "utils/http.js";
import axios from "axios";
import a from "../../assets/weixinpay.png";
import b from "../../assets/bestpay.png";
import c from "../../assets/unionpay.png";
import d from "../../assets/alipay.png";
import e from "../../assets/ccbpay.png";
export default {
  data() {
    return {
      list: [],
      center: [
        {  src: a, description: "", name: "微信支付" },
        { src: b, description: "", name: "翼支付" },
        {
          src: c,
          description: "5.1-12.31 满5元随机立减",
          name: "银联在线支付"
        },
        { src: d, description: "", name: "支付宝" },
        {  src: e, description: "", name: "建行支付" }
      ]
    };
  },
  created() {
    Http(
      "get",
      "http://api9.wochu.cn/api/recharge/list?version=4.9.0&source=H&systemVersion=&deviceVersion="
    ).then(data => {
      //console.log(data.data);
      this.list = data.data.goods;
      //console.log(this.list);
      //  this.center=data.data.paytypes;
      // console.log(this.center)
    });
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.recharge-top,
.recharge-top-img {
  width: 7.5rem;
  height: 4.55rem;
  position: fixed;
  top: 0;
  left: 0;
}
.recharge-top-left {
  width: 7.02rem;
  padding: 0 0.24rem;
  position: fixed;
  top: 0;
  left: 0;
}
.recharge-top-left1 {
  width: 1.0536rem;
  height: 0.992rem;
  float: left;
  padding-top: 0.2rem;
}
.recharge-top-left1 > .recharge-top-left2 {
  width: 1rem;
  display: block;
  height: 1rem;
}
.recharge-top-left > p {
  width: 4.8168rem;
  height: 1.392rem;
  float: left;
  text-align: center;
  font-size: 0.36rem;
  color: #fff;
  line-height: 1.392rem;
}
.recharge-top-left > a {
  width: 1.0536rem;
  height: 1.392rem;
  float: left;
  text-align: center;
  font-size: 0.24rem;
  color: #fff;
  line-height: 1.392rem;
}
.recharge-bottom{
    width:7.5rem;
    height:0.992rem;
    background:#ff5918;
    text-align:center;
    line-height:0.992rem;
    position:fixed;
    bottom:0;
    left:0;
    z-index:1;
}
.recharge-bottom>a{
      color:#fff;
    font-size:0.32rem;

}


body {
  background: #f4f4f4;
}
.recharge-center {
  width: 7.024rem;
  height: 18.211rem;
  background: #fff;
  margin: 0 auto;
}
.recharge-tap {
  width: 7.024rem;
  height: 3.211rem;
  background: #fff;
  position: fixed;
  top: 1.5rem;
}
.recharge-center-top > span {
  width: 50%;
  height: 1.42rem;
  line-height: 1.42rem;
  font-size: 0.36rem;
  background: #fff;
  float: left;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.recharge-center-money {
  width: 7.024rem;
  height: 1.672rem;
  position: fixed;
  top: 2.97rem;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.recharge-center-left {
  width: 2.5696rem;
  height: 0.992rem;
  padding: 0.34rem 0 0.34rem 0.24rem;
}
.recharge-center-left > p {
  width: 2.5696rem;
  height: 0.496rem;
  color: #999;
  font-size: 0.3rem;
  text-align: left;
}
.recharge-center-left > img {
  width: 1.94rem;
  height: 0.3rem;
  color: #ccc;
  font-size: 0.28rem;
}
.recharge-center-right {
  width: 4.2142rem;
  height: 1.671rem;
  text-align: center;
  line-height: 1.671rem;
  font-size: 0.76rem;
  color: #32532e;
  font-weight: 700;
}
.recharge-center-card {
  margin-top: 4.7rem;
  padding-top: 0.4rem;
  width: auto;
  height: 2.62rem;
  margin-left: 0.2rem;
  box-sizing: content-box;
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  border-bottom: 1px solid #ccc;
}
.recharge-center-card1 {
  margin-top: 1rem;
  width: 4.1rem;
  height: 1.2rem;
  margin: 0 0.2rem 0 0.2rem;
  padding: 0.6rem 0.3rem;
  background: #c0ebc0;
  border-radius: 0.2rem;
  flex-shrink: 0;
}
::-webkit-scrollbar {
  width: 0px;
}
.recharge-center-card1 > img {
  width: 0.4rem;
  height: 0.4rem;
  text-align: right;
  margin-top: -0.4rem;
  margin-left: 3.6rem;
}
.recharge-center-card2 {
  margin-bottom: 0.2rem;
  width: 3.6rem;
  height: 0.416rem;
  color: #001e00;
  font-size: 0.36rem;
  line-height: 0.416rem;
}
.recharge-center-card3 {
  width: 3.6rem;
  height: 0.336rem;
  color: #001e00;
  font-size: 0.28rem;
  line-height: 0.336rem;
}
.recharge-center-card4 {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 3.7rem;
}
.recharge-center-p {
  width: 6.54rem;
  height: 0.992rem;
  border-bottom: 1px solid #ccc;
  margin: 0 auto;
  line-height: 0.992rem;
  font-size: 0.3rem;
  color: #001e00;
}
.recharge-pay-img{
  float:left;
}
.recharge-pay-img>img{
  display:block;
}
.recharge-pay1 {
  width: 6.14rem;
  height: 1.0606rem;
  border-bottom: 1px solid #ccc;
  margin: 0 auto;
  line-height: 1.0606rem;
  margin-top: 0.3rem;
}
.recharge-pay2 {
font-size:0.28rem;

 margin-left:0.9rem;
 float:left;
}
.recharge-pay2 >p{
  height:0.3rem;
  margin-bottom:-2.7rem;
}

</style>
