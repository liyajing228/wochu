<template>
<div class="title">
    <div id="carouse">
    <img src="https://wmall.wochu.cn/h5/mall/img/vueimg/refer.png" alt="">
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="item.picUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <div>
      <p></p>
      <p></p>
      <p></p>
    </div>

    <div>

    </div>
  </div>

</div>
</template>
<script> 
import { mapActions, mapState,mapMutations} from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "carouse",
  data() {
    return {
      msg: "1910",
    };
  },
  created() {
     this.handleGoodsInfo();
/*     setTimeout(() => {
      let arr = [
        "https://static.maizuo.com/v5/upload/11191300f74c0cfde6560c32ec64bdf9.jpg?x-oss-process=image/quality,Q_70",
        "https://static.maizuo.com/v5/upload/127d12641c751ad1ecb82801435f5db4.jpg?x-oss-process=image/quality,Q_70",
        "https://static.maizuo.com/v5/upload/683067671e17cce7b5647693d5733ea3.jpg?x-oss-process=image/quality,Q_70"
      ];
      this.banner = arr;
    }, 1000);
 */  },
  watch: {
    banner() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          autoplay: {
            disableOnInteraction: false
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  computed:{
    ...mapState({
      banner:state=>state.goodsInfo.carouse,
    })
  },
  methods: {
    ...mapActions({
        handleGoodsInfo:"goodsInfo/handleGoodsInfo",
    })
  }
};
</script>
<style scoped>
.swiper-container{height: 7.5rem;width: 7.5rem;}
.swiper-container>.swiper-wrapper{height: 7.5rem;width:7.5rem;}
.swiper-container>.swiper-wrapper img{height: 7.5rem;width:7.5rem;}
#carouse{position: relative;}
#carouse>img{position: absolute;z-index: 20;top: .3rem;left: .3rem;}
</style>
