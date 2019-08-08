<template>
  <div class="head">
    <div class="com">
      <router-link tag="img" to="/type" src="http://wmall.wochu.cn/h5/activityTemplate/img/ac-back.png" />
     <img src="http://wmall.wochu.cn/h5/activityTemplate/img/ac-cart.png"/>
     <router-link tag="img" to="/shopping" src="http://wmall.wochu.cn/h5/activityTemplate/img/ac-share.png" />
   
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.head {
  width: 100%;
  padding: 0.58rem 0.1rem 0;
  z-index: 2;
  position: fixed;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.head .com{height:2rem;padding:0.58rem 0.2rem 0;}
.head .com img{overflow: hidden;}
.head .com img{width: 0.84rem;height:0.84rem;}
.head .com img:nth-of-type(1){float:left;}
.head .com img:nth-of-type(n+2){float: right;}
</style>
