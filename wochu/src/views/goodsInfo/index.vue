<template>
<div class="title">


  <div class="shodow" v-show="flag">
    <div class="button">
      <img src="https://wmall.wochu.cn/h5/mall/img/vueimg/close.png" alt="" @click="handleNo">
      <div>
          <img :src=this.infoList.picUrl alt="">
          <div>
            <p>商品售价</p>
            <p>¥<span>{{this.infoList.price}}</span></p>
            <div class="num">
                <p>购买数量</p> 
                <p>
                    <span @click="handlerNum(1)">+</span>
                    <input type="text" v-model="num">
                    <span @click="handlerNum(0)">-</span>
                </p>
            </div>
          </div>

      </div>

      <p>加入购物车</p>
    </div>
  </div>



    <div id="carouse">
    <router-link 
    src="https://wmall.wochu.cn/h5/mall/img/vueimg/refer.png" 
    tag="img"
    to="/fresh"
    alt=""></router-link>
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

    <Like></Like>

    <div ref="decoration" class="introduce"></div>


    <div class="buyBus">
        <router-link tag="p" to="/shopping">
            <img src="https://wmall.wochu.cn/h5/mall/img/vueimg/catr.png" alt="">
            <span>{{count}}</span>
        </router-link>
        <p @click="handleShow">加入购物车</p>
    </div>

  </div>

    
</template>
<script> 
import { mapActions, mapState,mapMutations} from "vuex";
import Swiper from "swiper";
import Like from './like';
import "swiper/dist/css/swiper.css";
export default {
  name: "carouse",
  props:["id","str"],
  data() {
    return {
      num:1,
      flag:false,
    };
  },
  beforeCreate(){
    this.$store.dispatch("handleActionModify",this.id);
  },
  created() {
     this.handleGoodsInfo();     
   },
   mounted(){
    this.$refs.decoration.innerHTML=this.infoList.descriptionDetail;
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
  components:{
    Like,
  },
  computed:{
    ...mapState({
      banner:state=>state.goodsInfo.carouse,
      infoList:state=>state.goodsInfo.goodsInfo,
      count:state=>state.goodsInfo.count,
    })
  },
  methods: {

    ...mapActions({
        handleGoodsInfo:"goodsInfo/handleGoodsInfo",
    }),
    handlerNum(val){
        if(val){
          
            this.num++;
        }else{
          if(this.num>1){
            this.num--;
          }
        }
    },
    handleShow(){
      this.flag=true;
    },
    handleNo(){
      this.flag=false;
    }



  },
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

.introduce{background:rgb(241, 239, 239)}

.buyBus{height: 1rem;width:100%;display: flex;}
.buyBus img{margin-top: .2rem;margin-left: .4rem;height: .42rem;width:.42rem;}
.buyBus>p:nth-of-type(1){width: 20%;background:#eb481c; position: relative;}
.buyBus>p:nth-of-type(1) span{position: absolute;width: .35rem;height: .35rem;background: #fff;color: coral; font-size: .24rem;line-height: .35rem;border-radius: 50%;text-align: center;top: .1rem;right: .45rem;}
.buyBus>p:nth-of-type(2){width: 80%;background:#ff5918;color:#fff;line-height: 1rem;font-size: .45rem;text-align: center}



.shodow{width:7.5rem;height:13.34rem;background: rgb(0, 0, 0,.2);position: fixed; z-index: 100;}
.shodow .button{position: absolute;bottom: 0;background: white;width:7.5rem;padding-top: .5rem;}
.button>p{height: 1rem;width:100%;line-height: 1rem;text-align: center;background: #ff5918;font-size: .4rem;color: white;}
.button>img:nth-of-type(1){height: .36rem;width:.36rem;position: absolute;right: .2rem;top:.3rem;}
.button>div>img{border:.02rem solid #ccc;border-radius: .2rem; margin-top: .4rem;margin-left: .4rem;}
.button>div:nth-of-type(1){display: flex;}
.button>div>div{margin-left: .5rem;}
.button>div>div>p:nth-of-type(1){margin-top: .4rem;font-size: .3rem;color: rgb(202, 193, 193);margin-bottom: .1rem;}
.button>div>div>p:nth-of-type(2){margin-bottom: .2rem;font-size: .4rem;color: #ff5918;}
.button>div>div>p:nth-of-type(3){font-size: .3rem;font-weight: 500;}
.button>p{margin-top: .5rem;}
p>span{margin-left:.2rem; }
p>input{width:1.14rme;}
.num{display: flex;}
.num>p{font-size: .3rem;}
.num input{width:1rem;border: .02rem solid #ccc;text-align: center;}
.num span{font-size: .6rem;margin: 0 .3rem;}
.num span:nth-of-type(1){font-size: .6rem;margin-left: .4rem;}
.num p:nth-of-type(2){margin-left: .2rem;}
</style>



