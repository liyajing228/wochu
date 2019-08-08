<template>
    <div>
        <router-view>
            
        </router-view>
        <div class="address-top" >
        <div>
            <v-touch @tap="backHome">
                <img src="./img/left.png" alt="">
            </v-touch>
        </div>
        <div>选择地址</div>
        <v-touch @tap="handleAdd">新增地址</v-touch>
    </div>

    <div class="address-search">
        <div>上海市</div>
        <div>
            <input type="text" placeholder="搜索支持的小区、写字楼">
        </div>
    </div>
    <div class="address-prompt center">因各地区商品和配送服务不同，请您选择准确收货地址</div>


    <div class="current-position">
        <div>天安门</div>
        <div>当前定位</div>
    </div>
    <div class="myaddress">
        我的地址
    </div>
    </div>
</template>

<script>

export default {
    name:"address",
    methods:{
        handleAdd(){
            this.$router.push("/addressAdd")
        },
        backHome(){
            this.$router.push("/home")
        }
    }
}
</script>

<style scoped>
html{background: #f0f0f0;}
.address-search,.address-prompt,.myaddress,.current-position{padding:0 0.3rem;padding:0 0.3rem;}
.address-top{width:7.5rem;height: 1.01rem;display: flex;line-height: 1.01rem;color:#32532E;border-bottom: .01rem solid #e5e5e5;}
.address-top div:nth-of-type(1){
    width: 0.7rem;height: 1.4rem;padding:0 0 0 0.24rem;
}
.address-top div:nth-of-type(1) img{
    width: 0.216rem;height: 0.36rem;display: inline-block;
}
.address-top div:nth-of-type(2){
    width: 4rem;height: 1rem;
    font-size: 0.36rem;text-align: center;margin:0 auto;
}
.address-top div:nth-of-type(3){
    font-size: 0.3rem;height: 1rem;padding:0 0.24rem 0 0;
}



.address-search{height: 0.75rem;display: flex;align-items: center;}
.address-search div:nth-of-type(1){width: 0.9rem;height: 0.4rem;margin: 0 .2rem 0 0;font-size: 0.3rem;white-space: nowrap;}
.address-search div:nth-of-type(2){width:5.8rem;height: 0.48rem;background: #f0f0f0;border-radius: 2rem;padding: 0.04rem 0 0.04rem 0.3rem;}
.address-search div:nth-of-type(2) input{background: #f0f0f0;font-size: .3rem;color: #9b9b9b;border:0;line-height:0.48rem; border:0;outline:none;}



.address-prompt{height: .7rem;line-height: .7rem;font-size: .26rem;color: #001e00;padding: 0 0.26rem;background: #f0f0f0;}

.current-position{display: flex;background: #fff;height: .75rem;line-height: 0.75rem;}
.current-position div:nth-of-type(1){width: 0.96rem;height: 0.52rem;font-size: 0.32rem;margin:0 0.1rem;color:#000;}
.current-position div:nth-of-type(2){width: 1.12rem;height: 0.38rem;font-size: 0.28rem;color:#9B9B9B;}

.myaddress{font-size: 0.28rem;color: #666;background:#f0f0f0;height: 0.7rem;padding:0 0.3rem;line-height: 0.7rem;}
</style>
