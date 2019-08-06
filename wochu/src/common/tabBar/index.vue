<template>
    <div class="tabBar" >
          <router-link v-for="(item,index) in list" :key="index" :to="item.path" tag="div" >
            <img :src="active==index?'item.imgUrl1':'item.imgUrl2'" alt="" @click="handleChange(index)">
            <p>{{item.p}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return{
            active:0,
            list:[{p:"首页",imgUrl1:"http://wmall.wochu.cn/h5/img/vueCommon/index_n.png",imgUrl2:"http://wmall.wochu.cn/h5/img/vueCommon/index_r.png",path:""},
            {p:"分类",imgUrl1:"http://wmall.wochu.cn/h5/img/vueCommon/shopping_n.png",imgUrl2:"http://wmall.wochu.cn/h5/img/vueCommon/shopping_r.png",path:""},
            {p:"购物车",imgUrl1:"http://wmall.wochu.cn/h5/img/vueCommon/cart_n.png",imgUrl2:"http://wmall.wochu.cn/h5/img/vueCommon/cart_r.png",path:""},
            {p:"我的",imgUrl1:"http://wmall.wochu.cn/h5/img/vueCommon/my_n.png",imgUrl2:"http://wmall.wochu.cn/h5/img/vueCommon/my_r.png",path:""},]
        }
    },
    methods:{
        handleChange(index){
            this.active=index;
            console.log(index);
        }
    }

}
</script>

<style>
    /* .tabBar{display: flex;z-index: 2;width:7rem;height: 1rem;background: red;} */
        .tabBar{display: flex;font-size: .3rem;justify-content: space-around;position: fixed;bottom: 0; z-index: 2;background: red;width: 7.5rem;height: 1.2rem}
    .tabBar>div>img{height: .58rem;width:.58rem;margin-top: .1rem }

</style>
