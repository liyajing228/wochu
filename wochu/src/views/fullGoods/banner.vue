<template>
    <div class="banner">
        <img :src="val1.imageUrl" alt="">
        <img :src="val2.imageUrl" alt="">
        
    </div>
</template>

<script>
import axios from "axios"
import http from "utils/http"

export default {
  data() {
    return {
      list: []
    };
  },
    props:{
        val1:{
            type:String,
            required:true
            //default:"默认值"
        },
        val2:{
            type:String,
            required:true
            //default:"默认值"
        }
    },
   
  }
;
</script>

<style>
 .banner img:nth-of-type(1){width: 7.5rem;height: 10.6rem;}
 .banner img:nth-of-type(2){width: 7.5rem;height: 9.12rem;}
</style>
