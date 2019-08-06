<template>
    <div>
        <div class="KuaiBao">
            <div><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg" alt=""></div>
            <ul :class="flag?'flex':''">
                <li v-for="(item,index) in arr_li" :key="index">{{item.title}}</li>
                <img src="../../img/down@3x.png" @click="flexable">
            </ul>
        </div>
        <div class="Go">
        <img :src="arr[1].items[0].imgUrl">
        </div>

        <!-- 限时特惠 -->
        <div class="time">
        <span></span>限时特惠<span></span>
    </div>
    <!-- 猪脚 -->
    <div class="special">
            <img :src="arr[2].items[0].imgUrl" alt="">
            <div class="right">
                <p>{{arr[2].items[0].goodsName}}</p>
                <p>{{arr[2].items[0].description}}</p>
                <p><span>${{arr[2].items[0].marketPrice}}</span><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt=""></p>
            </div>
    </div>
    <!-- 猪脚的下面 -->
    <div class="count"> 
            <div v-for="(item,index) in arr_time" :key='index'>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>
            <!--大图片 -->
            <div class="BigShow">
                 <img src="https://img.wochu.cn/upload/8e8dd1d4-3cba-4306-b036-16151b2c87e2.jpg" alt="">
            </div>
            <div class="BigShow">
                <img src="https://img.wochu.cn/upload/785cddf4-1fa5-44ff-b361-16922ac7499a.jpg" alt="">
            </div>


            <!-- 三张图片 -->
             <div class="TriImg">
                 <img src="https://img.wochu.cn/upload/8c39d478-c354-4e86-86a0-7cce02324cf0.jpg" alt="">
                 <div>
                     <img src="https://img.wochu.cn/upload/6148ed94-ee8f-4076-b238-1382425763bc.jpg" alt="">
                     <img src="https://img.wochu.cn/upload/9c33a199-3bec-4959-9986-9232a943084a.jpg" alt="">
                </div>
             </div>

    <!-- 秒变大厨 -->
        <div class="time">
        <span></span>秒变大厨<span></span>
    </div>
    <!-- 浓香麦仁 -->
    <div class="special">
        <img :src="arr[7].items[0].imgUrl" alt="">
            <div class="right">
                <p>{{arr[7].items[0].goodsName}}</p>
                <p>{{arr[7].items[0].description}}</p>
                <p><span>${{arr[7].items[0].marketPrice}}</span><img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt=""></p>
            </div>
    </div>
    <!-- 浓香麦仁的下面 -->
    <div class="count"> 
            <div v-for="(item,index) in arr_dachu" :key='index'>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>


     <!-- 新菜 -->
        <div class="imgCon"><img :src="arr[9].items[0].imgUrl" alt=""></div>
        <div class="count_moban"> 
            <div v-for="(item,index) in arr_moban1" :key='index'>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>



<!-- 优选 -->

        <div class="imgCon"><img :src="arr[11].items[0].imgUrl" alt=""></div>
        <div class="count_moban"> 
            <div v-for="(item,index) in arr_moban2" :key='index'>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>

<!-- 蔬菜 -->
        <div class="imgCon"><img :src="arr[13].items[0].imgUrl" alt=""></div>
        <div class="count_moban"> 
            <div v-for="(item,index) in arr_moban3" :key='index'>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>

<!-- 水果 -->
        <div class="imgCon"><img :src="arr[15].items[0].imgUrl" alt=""></div>
        <div class="count_moban"> 
            <div  v-for="(item,index) in arr_moban4" :key='index' :class="item.stock?'':'gray'">
                <div v-show="!item.stock" class="finish">已抢完</div>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>


<!-- 肉类 -->
        <div class="imgCon"><img :src="arr[17].items[0].imgUrl" alt=""></div>
        <div class="count_moban"> 
            <div  v-for="(item,index) in arr_moban5" :key='index' :class="item.stock?'':'gray'">
                <div v-show="!item.stock" class="finish">已抢完</div>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
        </div>


    <!-- 蛋 -->
        <div class="imgCon"><img :src="arr[19].items[0].imgUrl" alt=""></div>
        <div class="count_moban"> 
            <div  v-for="(item,index) in arr_moban6" :key='index' :class="item.stock?'':'gray'">
                <div v-show="!item.stock" class="finish">已抢完</div>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p class="decoration">{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>

            <!-- 鱼 -->
        <div class="imgCon"><img :src="arr[21].items[0].imgUrl" alt=""></div>
        <div class="count_moban"> 
            <div  v-for="(item,index) in arr_moban7" :key='index' :class="item.stock?'':'gray'">
                <div v-show="!item.stock" class="finish">已抢完</div>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>

            <!-- 乳饮 -->
        <div class="imgCon"><img :src="arr[23].items[0].imgUrl" alt=""></div>
        <div class="count_moban"> 
            <div  v-for="(item,index) in arr_moban8" :key='index' :class="item.stock?'':'gray'">
                <div v-show="!item.stock" class="finish">已抢完</div>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>

<!-- 点心 -->
        <div class="imgCon"><img :src="arr[25].items[0].imgUrl" alt=""></div>
        <div class="count_moban"> 
            <div  v-for="(item,index) in arr_moban9" :key='index' :class="item.stock?'':'gray'">
                <div v-show="!item.stock" class="finish">已抢完</div>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>
<!-- 副食 -->
        <div class="imgCon"><img :src="arr[27].items[0].imgUrl" alt=""></div>
        <div class="count_moban"> 
            <div  v-for="(item,index) in arr_moban10" :key='index' :class="item.stock?'':'gray'">
                <div v-show="!item.stock" class="finish">已抢完</div>
                    <img class="title" :src="item.labels.length?item.labels[0].labelUrl:''" alt="">
                    <img :src="item.imgUrl" alt="">
                    <p class="decoration">{{item.posDes}}</p>
                    <div>
                        <div>
                                <p>¥{{item.marketPrice}}</p>
                                <p>¥{{item.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
import http from 'utils/http.js';
import { constants } from 'crypto';
export default {
    name:"main",
    data(){
        return{
            arr:null,//总数据
            flag:true,//标示ul是否展开
            arr_li:[],// 我厨快报
            arr_time:[],//限时特免
            arr_dachu:[],//秒变大厨
            arr_moban1:[],
            arr_moban2:[],
            arr_moban3:[],
            arr_moban4:[],
            arr_moban5:[],
            arr_moban6:[],
            arr_moban7:[],
            arr_moban8:[],
            arr_moban9:[],
            arr_moban10:[],
        }
    },
    created(){
        http("get","/api/app/acts?version=20.0.0&source=H").then((data)=>{
         this.arr=data.data.acts;
         console.log(this.arr);
         this.arr_li=this.arr[0].items;
         this.arr_time=this.arr[3].items;
         console.log(this.arr_time[1].labels[0].labelUrl);
         this.arr_dachu=this.arr[8].items;
         this.arr_moban1=this.arr[10].items;
         this.arr_moban2=this.arr[12].items;
         this.arr_moban3=this.arr[14].items;
         this.arr_moban4=this.arr[16].items;
         this.arr_moban5=this.arr[18].items;
         this.arr_moban6=this.arr[20].items;
         this.arr_moban7=this.arr[22].items;
         this.arr_moban8=this.arr[24].items;
         this.arr_moban9=this.arr[24].items;
         this.arr_moban10=this.arr[26].items;
        });

        setTimeout(() => {
            // console.log(this);
            // console.log(this.$refs);
            if(this.flag){
                return
            }else{

            }
        }, 2000);
    },
    methods:{
        flexable(){
            this.flag=!this.flag;
        }
    }

}
</script>

<style scoped>
.KuaiBao{display: flex;width: 100%;}
.KuaiBao>div{width:17%;background: yellow; height: 1.1rem;}
.KuaiBao>div>img{margin-top: .2rem;margin-left: .2rem;}
.KuaiBao>ul{width: 83%;background: red;position: relative;}
.KuaiBao>.flex{width: 83%;background: red;height: 1.2rem; position: relative;overflow: hidden;}
.KuaiBao>ul>li{width: 80%;height: 1.1rem;line-height: 1.1rem; margin: .2rem;background: royalblue;font-size: .3rem;color: #ccc;}
.KuaiBao>ul>img{position: absolute;right:.3rem;top: 0.4rem;height: .16rem;width: .3rem}


.Go{background: rgb(243, 239, 239)}
 .Go>img{height: 3.04rem;width: 7.5rem;padding-bottom: .4rem}
 .time{display: flex;font-size: .35rem;justify-content: center;padding-top: .3rem;padding-bottom: .3rem;border-bottom: 1px solid #cccccc}
.time>span{height: 0;border-top:.01rem solid black;width: 1.5rem;margin-top:0.2rem;margin-left: 0 .2rem;margin-right:0.2rem  }



/* 首页  特别推送 */
.special{padding:.3rem;display: flex;border-bottom: 1px solid #cccccc;position: relative;}
.special>img{height: 2.6rem;width:2.6rem}
.special>.right{padding-left: .3rem}
.special>div>p>img{width:.52rem;height: .52rem;}
.special>div>p:nth-of-type(1){font-size: .37rem;margin-top: .3rem;font-weight: 800;margin-bottom: .3rem;}
.special>div>p:nth-of-type(2){font-size: .3rem;margin-bottom: .2rem}
.special>div>p:nth-of-type(3){font-size: .39rem;color:rgb(165, 85, 85);display: flex;}
.special>div>p:nth-of-type(3)>img{margin-left: 2.3rem}
.special>.title{width: .66rem;height: .66rem;position: absolute;}
/* 首页 打折 */
.count{width: 7.5rem;display: flex;position: relative;overflow: hidden;font-size: .2rem}
.count>div,.count_moban>div{width: 1.9rem;height:3.52rem;margin-left: .4rem;margin-bottom: .4rem; position: relative; }
.count>div>img,.count_moban>div>img{height: 1.9rem;width: 1.9rem;}
.count>div .title,.count_moban>div .title{position: absolute;width: .6rem;height: .6rem}
.count>div>div>img,.count_moban>div>div>img{height: .48rem;width: .48rem}
.count>div>div,.count_moban>div>div{display: flex}
.count>div>div>p:nth-of-type(1),.count_moban>div>div>p:nth-of-type(1){font-size: .3rem;}
.count>div>div>img,.count_moban>div>div>img{margin-left: .8rem}
.count_moban .finish{line-height:1.56rem ; height: 1.56rem;left: .2rem;top:.15rem;color: #fff; position: absolute; width: 1.56rem;padding-left:.25rem;border-radius: 50%; background:rgba(0,0,0, 0.3);font-size: .35rem}
.count_moban .gray{color: #ccc}
.count_moban{font-size: .27rem}
.count_moban .decoration{white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
.count_moban{width: 7.5rem;display: flex;position: relative;flex-wrap: wrap}
/*  两张大图片 */
.BigShow>img{width:7.5rem;height:3.04rem }


/* 三张图片 */
.TriImg{display: flex;}
.TriImg>img{height: 5.2rem;widows: 3.5rem;margin-right: .2rem}
.TriImg>div>img{height:2.6rem ;width: 3.5rem}

.imgCon{height: 3rem;}
.imgCon>img{height: 3rem;}
</style>
