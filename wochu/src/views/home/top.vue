<template>
        <div class="top">
        <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png">
        <div>
            <p>请填写地址</p>
            <span><img id="tri" src="http://wmall.wochu.cn/h5/home/vueimg/icon.png"></span>
        </div>
        <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png"/>
    </div>

</template>

<script>
export default {
   
}
</script>

<style scoped>
.top{display: flex; background:white;width: 7.5rem;height:.9rem;overflow: hidden;padding: 0 .24rem;  position: fixed;top:0;z-index: 2 }
.top img:nth-of-type(1){margin-top: .24rem; width: .88rem;margin-bottom:.24rem;margin-right: .8rem}
.top>div{width: 3.5rem;height: .9rem;margin-right: 1.6rem;display: flex}
.top img:nth-of-type(2){width: .36rem;height: .36rem;margin-top: .25rem}
.top div>p{ margin-right: .3rem;line-height: .9rem; font-size:.3rem;color: #1f6117; }
.top #tri{width: 0.13rem;height:.13rem;margin-top: .4rem }
</style>
