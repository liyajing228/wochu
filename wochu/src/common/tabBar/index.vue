<template>
<div class="weui-tabbar">
 
        <a href="javascript:;" class="weui-tabbar__item " v-for="(i,index) in tabs" :key="index" :class="{active:index == thatnum}" @click="addClassName(index)">
          <router-link :to="i.url">
            <img v-if="thatnum!=index"  :src="i.img" >
            <img v-if="thatnum==index"  :src="i.active" >
            <p class="weui-tabbar__label">{{i.text}}</p>
          </router-link>
        </a>
 
      </div>
</template>
<script>

import axios from "axios";
export default {
  name: "index",
  props:['tabName'],
  data() {
    return {
      thatnum: 0,
      tabs:[
        {text:"首页",url:'/home',img:"./img/20.png",active:"./img/21.png"},
        {text:"分类",url:'/type',img:"./img/23.png",active:"./img/22.png"},
        {text:"购物车",url:'/shopping',img:"./img/25.png",active:"./img/17.png"},
        {text:"我的",url:'/mine',img:"./img/24.png",active:"./img/26.png"}
      ],
    };
  },
  mounted(){
    this.thatnum=this.tabName
  },
  methods: {
    addClassName: function(index) {
      this.thatnum = index;
    },
  }
};
</script>
<style scoped>
   * {
            margin: 0;
            padding: 0
        }
    
.weui-tabbar {
    width:7.5rem;
        height:1rem;
        border-top:.02rem solid #ccc;
        position:fixed;
        bottom:0;
        left:0;
       padding-top:.1rem;
        background:#fff;

}
.weui-tabbar__item{
        width:25%;
        height:.88rem;
        float:left;
        text-align:center;

        text-decoration: none;
      
}
img{
  display:block;
      width:.58rem;
        height:.58rem;
    margin:0 auto;

}
a{
   text-decoration:none;
  color:#999999;
        font-size:.24rem;
}
.active{
  color:#5d8640;
}
</style>
