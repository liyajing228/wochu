<template>
  <div class="feedback">
    <div class="feedback-top">
      <router-link class="feedback-top-img" tag="div" to="/mine">
        <img src="../../assets/back.gif" class="feedback-top-img1" />
      </router-link>
      <p class="feedback-top-p">意见反馈</p>
    </div>
    <!-- vant引入tab标签页 -->
    <div>
      <van-tabs v-model="feed">
        <van-tab title="产品" class="feed-center-vant">
          <li>产品种类</li>
          <li>品质</li>
          <li>价格</li>
          <li>新品建议</li>
        </van-tab>
        <van-tab title="购物体验" class="feed-center-vant">
          <li>账户问题</li>
          <li>促销活动</li>
          <li>操作问题</li>
          <li>支付问题</li>
        </van-tab>
        <van-tab title="配送服务" class="feed-center-vant">
          <li>配送范围</li>
          <li>包装</li>
          <li>准时性</li>
          <li>服务态度</li>
          <li>缺货/配错</li>
        </van-tab>
        <van-tab title="售后服务" class="feed-center-vant">
          <li>退款</li>
          <li>投诉</li>
        </van-tab>
        <van-tab title="其他" class="feed-center-vant"></van-tab>
      </van-tabs>
    </div>
    <!-- 富文本wangeditor -->
 
  </div>
</template>
<script>

export default {
ated(){
       document.title = this.$route.meta.title
        },

}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 头部 */
.feedback-top {
  width: 100%;
  height: 1.2rem;
  border-bottom: 0.02rem solid #55ba42;
}
.feedback-top-img {
  width: 10%;
  height: 1.2rem;
  float: left;
}
.feedback-top-img1 {
  width: 0.3rem;
  height: 0.4rem;
  margin-top: 0.38rem;
  margin-left: 0.2rem;
}

.feedback-top-p {
  width: 80%;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.48rem;
  color: #9d7b68;
  text-align: center;
  float: left;
}
/* 中间反馈  vant */

.feed-center-vant > li {
  width: 1.3rem;
  height: 0.63rem;
  line-height: 0.63rem;
  font-size: 0.28rem;
  text-align: center;
  float: left;
  margin: 0.1rem 0.05rem;
  border: 0.02rem solid #000;
}
.feed-center-vant > li:hover {
  font-size: 0.28rem;
  color: #f6ac94;
  font-weight: 600;
  border: 0.02rem solid #f6ac94;
}
.feed-center-vant {
  border: 0.02rem solid #000;
}


</style>