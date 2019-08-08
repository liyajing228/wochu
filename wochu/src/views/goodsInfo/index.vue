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

    <div class="card">
      <p>{{infoList.goodsName}}</p>
      <p>{{infoList.description}}</p>
      <p><span>¥{{infoList.price}}</span><span>¥{{infoList.marketPrice}}</span></p>
    </div>
</div>

    <div class="gray">
        <p><img src="https://wmall.wochu.cn/h5/mall/img/vueimg/navigation.png" alt=""></p>
    </div>


        <div class="base">
        <p>产地：<span>{{infoList.origin1}}</span></p>
        <p>保质期：<span>{{infoList.shelfLife}}</span></p>
        <p>规格：<span>{{infoList.specification}}</span></p>
        <p>存储条件：<span>{{infoList.storageCondition}}</span></p>
    </div>
    <div class="slime"></div>

    <div class="evaluation">商品评价<img src="https://wmall.wochu.cn/h5/mall/img/vueimg/next.png" alt=""></div>


    <div class="like"><span></span><span>猜你喜欢</span> <span></span></div>

    <div ref="decoration" class="introduce"></div>

    <div>
        <p>价格说明</p>
        <ul>
            <li>划线价格</li>
            <li>未划线价格</li>
            <li>商品详情页</li>
            <li>此说明</li>
        </ul>
    </div>

    <div class="buyBus">
        <p>
            <img src="https://wmall.wochu.cn/h5/mall/img/vueimg/catr.png" alt="">
            <span>{{count}}</span>
        </p>
        <p>加入购物车</p>
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
     
   },
   mounted(){
    this.$refs.decoration.innerHTML=this.infoList.descriptionDetail;
    console.log(this.infoList.descriptionDetail);
   },
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
      infoList:state=>state.goodsInfo.goodsInfo,
      count:state=>state.goodsInfo.count
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
p{margin: 0}
.swiper-container{height: 7.5rem;width: 7.5rem;}
.swiper-container>.swiper-wrapper{height: 7.5rem;width:7.5rem;}
.swiper-container>.swiper-wrapper img{height: 7.5rem;width:7.5rem;}
#carouse{position: relative;}
#carouse>img{position: absolute;z-index: 20;top: .3rem;left: .3rem;}


.card{height: 2.48rem;width: 6.8rem; position: absolute; padding:.4rem .3rem;background: #fff ;margin-left: .35rem;border-radius: .4rem;z-index: 99;bottom:-1.8rem;box-shadow:.2rem .3rem .3rem #ccc }
.card>p:nth-of-type(1){font-size: .4rem;font-weight: 800;margin-bottom: .15rem}
.card>p:nth-of-type(2){color: #ccc;font-size: .3rem;margin-bottom: .1rem;}
.card>p:nth-of-type(3)>span:nth-of-type(1){font-size: .4rem;color: tomato;margin-right: .3rem}
.card>p:nth-of-type(3)>span:nth-of-type(2){font-size: .3rem;color: #ccc;text-decoration: line-through;}

.title{position: relative;}

.gray{background: rgb(241, 239, 239);height: 2.9rem;overflow: hidden}

.gray>p{margin-top: 2.3rem;width: 100%;}
.gray>p>img{width: 100%;height: .36rem;}


.base{padding-left:.3rem;padding-top: .3rem; display: flex;font-size: .28rem;flex-wrap: wrap;height: 1.88rem;color: #ccc;}
.base>p{width: 50%;height: 50%;}
.base>p span{color: black;}

.slime{height: .3rem;background:rgb(241, 239, 239); }

.evaluation{font-size: .3rem;padding:0 .2rem;position: relative;line-height: .7rem;height: .7rem;}
.evaluation img{position: absolute; width: .2rem;height: .3rem;right: 0.2rem;top:.25rem;}

.like{height: .9rem;background: rgb(241, 239, 239);font-size: .3rem;}

.like span:nth-of-type(1){display: inline-block; height:.025rem;margin-top: .2rem; background: black; width: 1.8rem;margin-right: .2rem;margin-left: .8rem}

.like span:nth-of-type(2){margin-top: .2rem;display: inline-block;}

.like span:nth-of-type(3){display: inline-block; height:.025rem;margin-top: .2rem; background: black; width: 1.8rem;margin-left: .2rem}

.introduce{background: #f4f4f4;}

.buyBus{height: 1rem;width:100%;display: flex;}
.buyBus img{margin-top: .2rem;margin-left: .4rem;height: .42rem;width:.42rem;}
.buyBus>p:nth-of-type(1){width: 20%;background:#eb481c; position: relative;}
.buyBus>p:nth-of-type(1) span{position: absolute;width: .35rem;height: .35rem;background: #fff;color: coral; font-size: .24rem;line-height: .35rem;border-radius: 50%;text-align: center;top: .1rem;right: .45rem;}
.buyBus>p:nth-of-type(2){width: 80%;background:#ff5918;color:#fff;line-height: 1rem;font-size: .45rem;text-align: center}
</style>



//端口取出来的是数据与显示的数据不tong

//取出来是标签的字符串，结果放不进去。