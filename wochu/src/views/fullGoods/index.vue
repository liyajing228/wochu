<template>
    <div>
        <Head/>
        <Banner :val1="banner1" :val2="banner2"></Banner>
        <List :val3="list"></List>
        
    </div>
</template>

<script>
import axios from "axios"
import http from "utils/http"
import Banner from "./banner"
import List from "./list"
import Head from "./header"

export default {
    name:"Mine",
    components:{
        Head,
        Banner,
        List
    },
  data() {
    return {
        banner1:"",
        banner2:"",
        list: ""
    };
  },
  methods:{
    handleRightList(index){
      console.log(index);
    },
    getGoodsData(){
      axios.get("http://wmall.wochu.cn/client/v1/goods/activityTemplate?parameters=%7B%22aTId%22%3A469%7D").then(data => {
        console.log(data.data.data)
            this.banner1=data.data.data.areaList[0];
            this.banner2=data.data.data.areaList[1];
            this.list=data.data.data.areaList[2];
            console.log(this.list)
      });
    }
  }
   ,
    created(){
        // http("get","/client/v1/goods/activityTemplate?parameters=%7B%22aTId%22%3A469%7D").then((data)=>{
        //     this.banner1=data.data.areaList[0];
        //     this.banner2=data.data.areaList[1];
        //     this.list=data.data.areaList[2];
        //     console.log(this.list)
        // })
        this.getGoodsData();
    },
  }
;
</script>

<style>
    
</style>
