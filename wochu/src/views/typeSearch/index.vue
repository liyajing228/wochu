import axios from 'axios';
<template>
    <div class="type-scearch">
        <div class="top_search">
            <div>
                <img src="./img/backIcon.png" alt="" class="backIcon">
            </div>
            <div class="search_c">
                <img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png" alt="">
                <input type="text" id="search_keyc" :value="typeVal" @input="handleTypeVal($event)">
            </div>
            <div  class="searchIcon">
                <span>搜索</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="hot-search">
                <p>热门搜索</p>
                <ul class="search_navul">
                    <li v-for="(item,index) in searchList" :key="index">
                        {{item.name}}
                    </li>
                </ul>

            <div class="history-search">
                <p>搜索记录</p>
                <ul>
                    <li></li>
                </ul>
                <div class="clear_his">清空搜索记录</div>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
import http from "utils/http.js"
import {type_search_api,vag_search_api} from "api/type.js"
import { async } from 'q';
import {mapActions} from "vuex"


export default {
    name:"typeSearch",
    data(){
        return{
            searchList:[],
            typeVal:'',
            typeList:''
        }
    },
    watch:{
        async typeVal(newVal,oldVal){
            let data1=await type_search_api();
            let data2=await vag_search_api();
            console.log(data1,data2);
        }
    },
    created(){
        this.getsearchList();
        this.handleGetTypeSearch();
    },
    methods:{
        getsearchList(){
                axios.get("http://api9.wochu.cn/client/v1/goods/SearchByTag").then(data => {
                this.searchList=data.data.data;
            });
            //  axios.get("http://api9.wochu.cn/api/goods/searchbykeyword?orderId=0&pageIndex=12&pageSize=20&keyword=%E8%82%89").then(data=>{
            //     console.log(data);
            // })
        },
        handleTypeVal(e){
            this.typeVal=e.target.value;
            // console.log(this.typeVal)
        },
        ...mapActions({
            handleGetTypeSearch:"typeSearch/handleGetTypeSearch",//从store那action定义过来的

        })
        },
    
}

// http://api9.wochu.cn/api/goods/searchbykeyword?orderId=0&pageIndex=10&pageSize=20&keyword=%E8%82%89
</script>

<style scoped>
    .top_search{width: 7.5rem;height: 0.88rem;background-color: #fff;position: fixed;top:0;display: flex;justify-content: space-around;align-items: center;padding: 0 0.25rem;z-index: 5;font-size: 0.3rem;}
    .backIcon{width: 0.58rem;}
    .search{width: 0.8rem;}
    .search_c{width: 3.50rem;height: 0.58rem;flex:1;width: 5.5rem;height: .58rem;background-color: #f1f2f6;border-radius: .28rem;margin-right: 0.2rem;}
    .search_c img{float: left;};
    #search_keyc{width: 4.64rem;height: .58rem;float: left;background-color: #f1f2f6;border: 0;}



    .wrapper {position: absolute;top: .88rem;bottom: 0;width: 100%;padding: 0 .2rem; overflow: hidden;background: #fff;}
    .hot-search p{height: 0.4rem;font-size: 0.3rem;color: #333333;margin-top: 0.88rem;margin: 0.2rem 0 0;}
    .search_navul{width: 7.1rem;height: 1.98rem;background-color: #F4F5F7;margin:0 auto;}
    .search_navul li{height:0.58rem;padding:0.04rem 0.2rem;margin:0.2rem;float: left;font-size: 0.26rem;color: #666666;background-color: #fff;}

    .clear_his{text-align: center;margin:0.2rem 0 0.4rem;color: #999;}
</style>
