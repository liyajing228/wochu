<template>
<div class="relative">
        <p>设置 <img src="http://wmall.wochu.cn/h5/css/images/back.gif" alt=""></p>
    <ul>
        <v-touch @tap="handlerClick(0)"  
tag="li" :class="active==0?'active':''">关于我厨</v-touch>
        <v-touch @tap="handlerClick(1)"  
tag="li" :class="active==1?'active':''">服务协议</v-touch>
        <v-touch @tap="handlerClick(2)"  
tag="li" :class="active==2?'active':''">证件信息</v-touch>
    </ul>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    data(){
        return{
            active:0,
        }
    },
     methods:{
        handlerClick(val){
            this.active=val;
        }
    }

}
</script>

<style scoped>
    p{margin: 0;}
    .relative{width: 100%;font-size: .4rem;}
    .relative>p{background: chartreuse; text-align: center;line-height:1rem;position: relative;}
    .relative>p>img{position:absolute;top: .25rem;left: .3rem;}

    .relative>ul{display: flex;justify-content: space-around;border-bottom: 2px solid #ccc;}
    .relative>ul>li{width: 1.6rem;margin-bottom: .3rem;margin-top: .3rem;}
    .relative .active{
        border-bottom: .1rem solid red !important;}

</style>
