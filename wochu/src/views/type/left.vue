<template>
    <div class="left">
       <ul class="left-list" >
           <li :class=" i==0 ? 'active' : ''" @click="handletj"><p>推荐</p></li>
           <li 
           :class="item.id==i ? 'active' : ''"
           v-for="(item,index) in listl"  
           v-if="(/^[0-9]{1,2}$/g).test(item.id)" 
           :id="item.id" 
           :key="index"
           @click="handleparentId({id:item.id,index:index})"
           
           > 
               <p>{{(/^[0-9]{1,2}$/g).test(item.id) ? item.name :""}}</p>
           </li>
       </ul>
    </div>
</template>

<script>
import axios from "axios"
import http from "utils/http.js"
import { nextTick } from 'q';
export default {
  data() {
    return {
      listl: [],
      parentId:"",
      flag:false,
      i:0
    };
  },
  created() {
    this.getRightTopData();
    // http("GET","http://api9.wochu.cn/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D").then((data)=>{
    //   this.listl=data.data.data;
    //   console.log(this.listl)
    // })
     
  },
  methods: {

    getRightTopData() {
       axios.get("/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D").then((data)=>{
            this.listl=data.data.data;
                
            })
    },
    handleparentId(data){
       this.$observer.$emit("handle",data.id);
       this.i=data.id;
      // console.log(this.i,data.id)
    },
    handletj(){
      this.$observer.$emit("handle");
      this.i=0;
      // console.log(this.i)
    }
}
}

//我厨优选 对应的是parentId是2的

</script>

<style>
    .left{
        float: left;
        width: 1.72rem;
        height: 11.18rem;
        color:#666666;
        /* background: pink; */
        border-right: 0.04rem solid #F4F5F7;
        border-left: 0.04rem solid #F4F5F7;
        font-weight:550;
        overflow-y:auto;
         margin-bottom:0.6rem;
         margin-top: 1rem;
         overflow-x: hidden;
         
         /* overflow: hidden; */
    }
    ::-webkit-scrollbar {
            width: 0px;
        }

    .left-list{
         height: 12.10rem;
    }
    .active{border-left: .06rem solid #6eb042;font-size: 0.3rem;color:#6FB042;}
    .left li{
        width: 1.8rem;
        height: 0.48rem;
        padding: 0.26rem 0;
        text-align:center;
    }
    .left li p{
        width:1.7rem;
        height:0.6rem;
        font-size:0.28rem;
    }
</style>