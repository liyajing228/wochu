<template>
    <div class="mine">
            <div class="banner">
        <div class="nav">
            <img src="../../../public/img/0.png" class="ban">
            <div class="content"> 
                <img src="../../../public/img/1.png" class="ban1">
                <p>未登录</P>
            </div>
            <div class="nav-foot">
                <div class="nav-foo">
                   <a class="foot1" href="../recharge" >
                        <span>0</span> 
                        <p>账户余额</p>  
                    </a> 
                     <a href="#">
                        <span>3</span> 
                        <p>优惠券</p>  
                    </a> 
                </div>
               
                <div class="money">
                    <img src="../../../public/img/2.png">
                    <div class="moo">
                        <div class="mon-left" >
                            <img src="../../../public/img/3.png">
                            <p>充值立送现金券哦~</P>
                        </div>
                   
                        <div class="mon-right">
                           
                            <p>马上充值</P>
                             <img src="../../../public/img/4.png" class="right">
                        </div>
                     </div>
                </div>
            </div>
        </div>
     
    </div>
        <div class="list">
        <ul class="lis">
            <router-link class="li" v-for="(item,index) in list" :key="index" :class="index===4 ?  'active' : ''" :to="item.href">
                    <img :src="item.src">
                    <p class="p2">{{item.word}}</p>    
            </router-link>
        </ul>
          <ul class="lis1">
            <router-link class="li1" v-for="(item,index) in list1" :key="index" :to="item.href" >
                    <img :src="item.src">
                    <p class="p2">{{item.word}}</p>    
            </router-link>
        </ul>
          <ul class="lis1 lis2">
            <router-link class="li1 " v-for="(item,index) in list2" :key="index" :to="item.href">
                    <img :src="item.src">
                    <p class="p2">{{item.word}}</p>    
            </router-link>
        </ul>
        <div class="center">
            <img src="../../../public/img/19.gif">
        </div>
    </div>
      <router-view></router-view>
    </div>
      
</template>
<script>

import a from "../../../public/img/5.png"
import b from "../../../public/img/6.png"
import c from "../../../public/img/7.png"
import d from "../../../public/img/8.png"
import e from "../../../public/img/9.png"
import f from "../../../public/img/10.png"
import g from "../../../public/img/11.png"
import h from "../../../public/img/12.png"
import i from "../../../public/img/13.png"
import j from "../../../public/img/14.png"
import k from "../../../public/img/15.png"
import l from "../../../public/img/16.png"
import m from "../../../public/img/18.png"
   export default {
        data() {
            return {
                list:[
                    {src:a,word:"待付款",href:"/groupBuying"},
                    {src:b,word:"待收货",href:"/groupBuying"},
                    {src:c,word:"待评价",href:"/groupBuying"},
                    {src:d,word:"退货/售后",href:"/groupBuying"},
                    {src:e,word:"我的订单",href:"/groupBuying"}
                  ],
                  list1:[
                       {src:f,word:"我的团购" ,href:"/groupBuying"},
                        {src:g,word:"收货地址",href:"/groupBuying"},
                        {src:h,word:"我的收藏",href:"/groupBuying"},
                        {src:i,word:"关于我厨",href:"/groupBuying"}
                  ],
                  list2:[
                       {src:j,word:"我的团购",href:"/groupBuying"},
                        {src:k,word:"意见反馈",href:"/groupBuying"},
                        {src:l,word:"设置中心",href:"/groupBuying"},
                        {src:m,word:"客服电话",href:"/groupBuying"}
                  ]

                }
            },
              created(){
       document.title = this.$route.meta.title
        }
 

}
</script>
<style scoped>
 * {
            margin: 0;
            padding: 0
        }
  
    .banner>.nav{
            height:5.72rem;
          background:#E7E7E7;
        }
     .banner>.nav>.ban{
        width:100%;
        height:4.55rem;
    
        } 
    .banner>.nav>.content{
        height:1.86rem;
        position:relative;
        margin-top:-3.7rem;
        width:100%;
    }
     .banner>.nav>.content>.ban1{
         width:1.2rem;
         height:1.14rem;
         margin-left:3.2rem;
     }
     .banner>.nav>.content>p{
         font-size:.24rem;
         height:.35rem;
         line-height:.35rem;
         text-align:center;
         margin-top:.3rem;
         color:#fff;
        
     }
     .banner>.nav>.nav-foot{
         width:7.02rem;
         height:2.572rem;
         background-color:#ffffff;
         margin:0 .23rem;
         position:absolute;
            top:2.9rem;
            border-radius: .1rem;
            margin-top:.1rem;
     }
     .banner>.nav>.nav-foot>.nav-foo{
         width:7.02rem;
         height:.912rem;
     }
     .banner>.nav>.nav-foot>.nav-foo>a{
         width:3.49rem;
         height:.912rem;
         text-decoration: none;
         float:left;
         text-align:center;
         margin-top:.4rem;
    
     }
    .banner>.nav>.nav-foot>.nav-foo>.foot1{
        border-right:.02rem solid #999999;
    }
    .banner>.nav>.nav-foot>.nav-foo>a>span{
        font-size:.4rem;
        color:#001E00;
        margin-bottom:.3rem;
        }
    .banner>.nav>.nav-foot>.nav-foo>a>p{
        font-size:.28rem;
        color:#999999;
        }
    .money{
        width:7.02rem;
        height:.86rem;
        border-radius:0 0 .1rem 0.1rem;
        position:relative;
        top:.8rem;
    }
    .money p{
         font-size:.28rem;
          color:#ffffff;
    }
    .money>img{
         width:.63rem;
         height:.2rem;
        position:absolute;
        bottom:0.85rem;
        left:2rem;
         
     }
     .money>.moo{
           width:7.02rem;
            height:.848rem;
           background-color:#428b0e;
           float:left;
           margin-top:-0.4rem;
            border-radius:0 0 .1rem 0.1rem;
     }    
     .money>.moo>.mon-left>img{
          width:.33rem;
          height:.36rem;
          float:left;
          margin-top:.2rem;
      }
     .money>.moo>.mon-left{
          width:3.51rem;
          height:.848rem;
          padding:0 0 0 .4rem;
          text-align:center;
        line-height:.848rem;
      
      }
  .money>.moo>.mon-right{
          width:3.51rem;
          height:.848rem;
          font-size:.28rem;
            line-height:.848rem;
          text-align:center;
            float:right;  margin-top:-.8rem;
      }
       .money>.moo>.mon-right>.right{
          width:.14rem;
          height:.24rem;
           float:right;
           margin-top:-.55rem;
           margin-right:0.7rem;
      }
       .lis{
            width:7.5rem;
            height:.98rem;
           margin:.2rem 0 0;
           padding:.4rem 0;
        border-bottom:.24rem solid #f4f4f4;
        background:#ffffff;
        }
    .li{
        width:19.6%;
       height:1.06rem;
       float:left;
       text-align:center;
       list-style:none;
       font-size:.24rem;
       color:#999999;
    }
    .li1{
        width:25%;
        height:1.08rem;
        float:left;
        list-style:none;
          font-size:.24rem;
       color:#999999;
        text-align:center;
    }

    .active{
        border-left:.02rem solid #F4F4F4;
    }
    .li>img,.li1>img{
        width:.56rem;
        height:.56rem;
        margin-bottom:.1rem;
    }
    .lis1{
        background:#fff;
        width:7.5rem;
        height:1.08rem;
        padding:.3rem 0;
        border-bottom: .02rem solid #f4f4f4;
    }
    .lis2{
        border-bottom:0 ;
         background:#fff;
    }
   .center{
       width:7.5rem;
       height:1.5rem;
     background-color:#f4f4f4;
       vertical-align: middle;
        text-align: center;
        display: table-cell;
   }
   .center>img{
       width:6.88rem;
       height:1.5rem;
       margin-bottom:1.2rem;
   }
</style>