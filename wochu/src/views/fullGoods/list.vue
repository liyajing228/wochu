<template>
    <div class="list-li">
        <!-- <p>{{val3.shelveList}}</p> -->
        <ul>
            <li class="list-li-content" v-for="(item,index) in val3.shelveList" :key="index">
                <a href="">
                    <v-touch tag="div" @tap="back">
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
export default {
    data(){
        return{

        }
    },
     props:["val3"],
     methods:{
         back(){
             this.$router.push("/type");
         }
     }
    
}
</script>

<style scoped>

    .list-li ul{width: 7.5rem;}
    .list-li-content{height: 6.08rem;float: left;background-color: #D8DDE1;}
    .list-li-content:nth-of-type(2n+1){padding:0 0.13rem 0.26rem 0.26rem;}
    .list-li-content:nth-of-type(2n){padding:0 0.26rem 0.26rem 0.13rem;}
    
    .list-li-content img{width: 3.36rem;height: 3.36rem;}
    .text-content{height: 2.24rem;text-align: center;}
    .list-li-content a{display:block;background-color: #fff;width: 3.36rem;}
    .text-content p{width: 3.29rem;font-size: .3rem;white-space: nowrap;overflow: hidden;}
    .text-content p:nth-of-type(2){color: #c5331e;font-size: .3rem;margin-bottom: 0.2rem;}
    .text-content .add-cart{width: 2.2rem;height: 0.8rem;background-color: #ffe313;border-radius: 0.4rem;margin:0 auto;line-height: 0.8rem;}
</style>
