<template>
    <div>
          <div class="top_search">
            <div>
                <img src="./img/backIcon.png" alt="" class="backIcon" >
            </div>
            <div class="search_c">
                <img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png" alt="">
                <input type="text" id="search_keyc"  @blur="handleTypeVal" />
            </div>
            <div  class="searchIcon">
                <span>搜索</span>
            </div>
        </div>
         <ul class="list-li">
                <li class="list-li-content" 
                v-for="(item,index) in fullList" 
                :key="index">
                <p>{{text}}</p>
                    <a href="">
                        <v-touch tag="div" >
                            <img :src="item.icon" alt="">
                        </v-touch>
                        <div class="text-content">
                            <p>{{item.goodsName}}</p>
                            <p><span>￥{{item.marketPrice}}</span></p>
                            <p class="add-cart">加入购物车</p>
                        </div>
                    </a>
                </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios"

import { async } from 'q';
import {mapState,mapActions} from "vuex"
import ListLi from "../fullGoods/list.vue"

export default {
    name:"typeSearch",
   
    data(){
        return{
            text:"",
        }
    },
    watch:{
        typeVal(newVal,oldVal){
            this.text=newVal;
        }
    },
    
    computed:{
        ...mapState({
            fullList:state=>state.typeSearch.fullList,
        })
    },
    created(){
        this.handleGetTypeSearch();
        // console.log(this.fullList);
    },
    methods:{
        handleTypeVal(e){
            var obj={};
            obj.a=e.target.value;
            // console.log(obj)
            this.typeVal.push(obj.a);
        },
        ...mapActions({
            handleGetTypeSearch:"typeSearch/handleGetTypeSearch",//从store那action定义过来的
        })
        },

}

</script>



<style scoped>
    a{color:#000;}
    .top_search{width: 7.5rem;height: 0.88rem;background-color: #fff;position: fixed;top:0;display: flex;justify-content: space-around;align-items: center;padding: 0 0.25rem;z-index: 5;font-size: 0.3rem;}
    .backIcon{width: 0.58rem;}
    .search{width: 0.8rem;}
    .search_c{width: 3.50rem;height: 0.58rem;flex:1;width: 5.5rem;height: .58rem;background-color: #f1f2f6;border-radius: .28rem;margin-right: 0.2rem;}
    .search_c img{float: left;};
    #search_keyc{width: 4.64rem;height: .58rem;float: left;background-color: #f1f2f6;border: 0;}


    .list-li{width: 7.5rem;height: 20rem;background-color: #D8DDE1;margin-top: 1.1rem;}
    .list-li-content{height: 6.08rem;float: left;}
    .list-li-content:nth-of-type(2n+1){padding:0 0.13rem 0.26rem 0.26rem;}
    .list-li-content:nth-of-type(2n){padding:0 0.26rem 0.26rem 0.13rem;}
    .list-li{height: 15rem;overflow: auto;}
    .list-li-content img{width: 3.32rem;height: 3.32rem;}
    .text-content{height: 2.24rem;text-align: center;}
    .list-li-content a{display:block;background-color: #fff;width: 3.36rem;}
    .text-content p{width: 3.29rem;font-size: .3rem;white-space: nowrap;overflow: hidden;}
    .text-content p:nth-of-type(2){color: #c5331e;font-size: .3rem;margin-bottom: 0.2rem;}
    .text-content .add-cart{width: 2.2rem;height: 0.8rem;background-color: #ffe313;border-radius: 0.4rem;margin:0 auto;line-height: 0.8rem;}
</style>

