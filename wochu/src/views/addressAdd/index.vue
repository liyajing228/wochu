<template>
  <div class="add">
    <div class="addressAdd">
      <div class="title-add">
        <div>
          <v-touch @tap="back">
            <img src="http://wmall.wochu.cn/h5/classify/img/back.png" alt />
          </v-touch>
        </div>
        <div>新建收货地址</div>
      </div>
    </div>

    <div class="content">
      <ul>
        <li>
          <label for>
            <span>收货人：</span>
            <input type="text" placeholder="输入收货人的姓名" :value="nameVal" @blur="handleName($event)"/>
          </label>
        </li>
        <li>
          <label for>
            <span>联系电话：</span>
            <input type="text" placeholder="手机号码" :value="telVal" @blur="handleTel($event)"/>
          </label>
        </li>
        <li class="tag">
          <div class="tag">目前仅配送上海(奉贤/金山/崇明及部分郊环线地区除外)</div>
        </li>
        <li @click="showaddress">
          <label for>
            <span>收货省市：</span>
            <input type="text" placeholder="选择您所在的城市" :value="curVal" @blur="handleCur($event)"/>
            <img src="http://wmall.wochu.cn/h5/address/img/nextstep@3x.png" alt class="img-right" />
          </label>
        </li>
        <li>
          <label for>
            <span>收货地址：</span>
            <input type="text" placeholder="校区/写字楼/公寓" :value="profileVal" @blur="handleProfile($event)"/>
            <img
              src="http://wmall.wochu.cn/h5/address/css/images/dingwei@3x.png"
              alt
              class="img-wd"
            />
          </label>
        </li>
        <li>
          <label for>
            <span>详细地址：</span>
            <input type="text" placeholder="楼号/楼层/房号/门牌号" :value="detialVal" @blur="handleDetial($event)"/>
          </label>
        </li>
        <li class="last">
          <span>选择类别：</span>
          <div class="sort">
            <v-touch 
            :class="activeIndex==index ? 'gjpq' : ''"
            v-for="(item,index) in gjpqs" 
            :key="index" 
            tag="p" 
            @tap="handleaddr(index)"
            >{{item}}</v-touch>
            
          </div>
        </li>
        <li class>
          <label>
            <span>默认地址</span>
          </label>
          <div class="change-default">
            <v-touch :class="DotIndex ? 'dotChange' : 'key'" tag="div" @tap="handleDot"></v-touch>
          </div>
        </li>
      </ul>
    </div>

      <div class="alert" v-show="alertFlag">
          {{alertVal}}
      </div>


    <div class="addressComfirm">
      <div class="xian"></div>
      <v-touch :class="conf ? 'color' : ''" 
      tag="div"
      @tap="handleSave"
      >保存</v-touch>
    </div>

    <!--控制弹出层是否展示 -->
    <van-button
      type="primary"
      @click="showPopup"
       
       :style="{ height: '20%' }"
      get-container="#app"
    ></van-button>

    <van-popup v-model="show" position="bottom">
      <!-- 弹出层的内容 -->
        <van-area :area-list="AreaList" :columns-num="3" @confirm="onAddrConfirm" @cancel="onAddrCancel"/>
    </van-popup>
  </div>
</template>

<script>
import axios from "axios"
import http from "../../utils/http.js"
import { async, all } from 'q';
import {mapState, mapMutations} from "vuex"
import { truncate } from 'fs';
import { setInterval, clearInterval } from 'timers';

export default {
  name: "addressAdd",
  data() {
    return {
      show: false,
      conf:false,
      activeIndex:1,
      DotIndex:true,
      alertFlag:false,
      alertVal:"",
      ids:"",
     nameVal:"",
    telval:"",
    curVal:"",
    profileVal:"",
    detialVal:"",
    DotIndex:false,
    gjpqs:["公司","家","父母","其他"],
    newAddress:[],
      AreaList:{
  province_list: {
    110000: '北京市',
    120000: '上海市'
  },
  city_list: {
    110100: '北京市',
    120100: '上海市',
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    110105: '朝阳区',
    110106: '丰台区',
    120101: '和平区',
    120102: '河东区',
    120103: '河西区',
    120104: '南开区',
    120105: '河北区',
    // ....
  }
},
    }
  },

  created(){
   setInterval(()=>{
     if(this.alertFlag){
       this.alertFlag=false;
     }
   },3000)
  },
  methods: {
    back() {
      this.$router.push("/address");
    },
    showaddress() {
      this.show = !this.show;
    },
    showPopup() {
      this.show = true;
    },

    onAddrConfirm(val){
      this.curVal=val[0].name+val[1].name+val[2].name;
      this.show=false;
    },
    onAddrCancel(){
      this.show=false;
    },
    handleName(e){
      var reg= /^[\u4E00-\u9FA5A-Za-z]+$/;
        if(reg.test(e.target.value)){
            this.nameVal=e.target.value;
        }else{
          this.alertFlag=true;
          this.alertVal="用户名不正确"
        }
        //  console.log(this.nameVal);
    },
    handleTel(e){
      var reg=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if(reg.test(e.target.value)){
         this.telVal=e.target.value;
      }else{
        this.alertFlag=true;
        this.alertVal="手机号不正确"
      }
     
      // console.log(this.telVal);
    },
    handleCur(e){
      this.curVal=e.target.curVal;
      // console.log(this.curVal);
    },
    handleProfile(e){
      this.profileVal=e.target.value;
      // console.log(this.profileVal);
    },
    handleDetial(e){
      this.detialVal=e.target.value;
      // console.log(this.detialVal);
      this.conf=true;
    },
    handleaddr(index){
      console.log(index);
        this.activeIndex=index;
    },
    handleDot(){
      this.DotIndex=!this.DotIndex;
    },
    handleSave(){
      var obj={};
      obj.name=this.nameVal;
      obj.tel=this.telVal;
      obj.city=this.curVal;
      obj.pro=this.profileVal;
      obj.detial=this.detialVal;
      this.newAddress.push(obj);
      // console.log(this.newAddress);
    }


  }
};
</script>

<style scoped>
.addressAdd,
.content {
  padding: 0 0.2rem;
  height: 1rem;
  line-height: 1rem;
}
html {
  background-color: #f4f4f4;
}
img {
  display: inline-block;
}
input {
  font-size: 0.3rem;
  outline: none;
  color: #999999;
}

.addressAdd .title-add {
  height: 1.01rem;
  display: flex;
  line-height: 1.01rem;
  color: #32532e;
  /* border-bottom: 0.02rem solid #e5e5e5; */
  position: fixed;
  top:0;
  width: 7.5rem;
  background: #fff;
}
.title-add img {
  width: 0.72rem;
  height: 0.72rem;
  margin-top: 0.2rem;
}
.title-add div:nth-of-type(1) {
  width: 0.72rem;
  height: 0.72rem;
}
.title-add div:nth-of-type(2) {
  width: 4.97rem;
  color: #001e00;
  font-size: 0.36rem;
  text-align: center;
}

.content {
  height: 8.06rem;
  border-top: 0.22rem solid #f4f4f4;
}
.content li {
  border-bottom: 0.01rem #ccc solid;
}
.content li:nth-of-type(2) {
  border: 0;
}
.content li:nth-of-type(8) {
  border: 0;
}
.content input {
  height: 0.96rem;
  border: 0;
}
.content span {
  display: inline-block;
  width: 1.7rem;
  height: 0.98rem;
  color: #999;
  font-size: 0.28rem;
  font-weight: 580;
}
.content .tag {
  width: 7.5rem;
  /* width: 100%; */
  height: 0.84rem;
  background-color: #f4f4f4;
  margin: 0 0 0 -0.2rem;
  padding: 0 0 0 0.2rem;
  color: #1f6117;
  border: 0;
  line-height: 0.84rem;
}
.content .last {
  display: flex;
  align-items: center;
}
.last .sort {
  width: 5.4rem;
  display: flex;
  justify-content: space-between;
}
.content p {
  width: 0.7rem;
  height: 0.4rem;
  background-color: #ccc;
  font-size: 0.26rem;
  line-height: 0.4rem;
  text-align: center;
  border-radius: 0.12rem;
  color: #fff;
  margin-bottom: 0;
}
.content .change-default {
  float: right;
  width: 1rem;
  height: 0.52rem;
  border: 0.04rem solid #d9d9d9;
  border-radius: 0.25rem;
  margin-top: 0.2rem;
  position: relative;
}
.content .dotChange{
  width: 0.43rem;
  height: 0.43rem;
  border-radius: 50%;
  background: green;
  position: absolute;
  right:0;
}
.key {
  width: 0.43rem;
  height: 0.43rem;
  border-radius: 50%;
  border: 0.02rem solid #d9d9d9;
  position: absolute;
  background: #d9d9d9 !important;
}
.img-right {
  width: 0.16rem;
  height: 0.3rem;
  margin-left: 1rem;
}
.img-wd {
  width: 0.32rem;
  height: 0.4rem;
  margin-left: 1rem;
}

.addressComfirm {
  background: #f4f4f4;
}
.addressComfirm .xian {
  height: 0.22rem;
  background: #f4f4f4;
}
.addressComfirm div:nth-of-type(2) {
  width: 6.4rem;
  height: 1rem;
  background: #c3dcb3;
  line-height: 1rem;
  color: #fff;
  font-size: 0.36rem;
  text-align: center;
  margin: 0 auto;
  border-radius: 0.2rem;
}
.addressComfirm .color{
  width: 6.4rem;
  height: 1rem;
  background: green !important;
  line-height: 1rem;
  color: #fff;
  font-size: 0.36rem;
  text-align: center;
  margin: 0 auto;
  border-radius: 0.2rem;
  /* z-index: 99; */
  
}

.add .van-popup--center {
  width: 7.5rem;
}
.content .gjpq{
  width: 0.7rem;
  height: 0.4rem;
  /* background-color: #ccc; */
  font-size: 0.26rem;
  line-height: 0.4rem;
  text-align: center;
  border-radius: 0.12rem;
  color: #fff;
  margin-bottom: 0;
  background: green !important;
}

.alert{width: 3rem;height: 1rem;padding: 0.2rem;background: rgba(0,0,0,0.3);position: absolute;top:3rem;left: 2.5rem;text-align: center;font-size: 0.3rem;}
</style>
