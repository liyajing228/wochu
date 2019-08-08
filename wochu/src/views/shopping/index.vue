<template>
    <div class="shopping-data">
           <div class="data-none">
       <div class="data-none-img">
           <img src="http://wmall.wochu.cn/h5/mall/css/images/ic_no_goods.png">
        </div>
        <div class="data-none-text">
            <p>您的购物车为空</p>
        </div>
        <div class="data-none-tip">
            <h2>可以看看哪些想买的</h2>
        </div>
        <router-link to="/home" class="data-none-btn">随便逛逛</router-link>
        </div> 
    
        <div class="recommend-list">
        <div class="recommend-list-zip">
            <div class="recommend-list-span"> —————   推荐商品   —————</div>
            <ul class="recommend-center">
                <li class="recommend-li" v-for="(item,index) in center" :key="index">
                    <img :src=item.img class="recommend-img">
                    <div class="recommend">
                    <p>{{item.info}}</P>
                        <div class="recommend-bottom">
                            <div class="rec-bn">
                                <span class="line-through">{{item.oldPrice}}</span>
                                <span>{{item.nowPrice}}</span>
                                </div>
                                <a href="#" class="recommend-add">+</a>
                        </div>
                    </div>
                    </li>
                </ul>
                
            </div> 
        </div>
        <div class="load-more">没有更多了~</div>
    </div>

</template>
<script>
export default {
    name:"Shopping",
    data(){
        return{
            center:[
                {img:"https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg",info:"葱姜蒜组合150g",oldPrice:"￥5.9",nowPrice:"￥4.9"},
                {img:"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/80286916-6a8e-4399-85dd-9b5457fa5e0c.jpg",info:"干锅花菜",oldPrice:"￥19.9",nowPrice:"￥16.5"},
                {img:"https://img.wochu.cn/upload/e7e646d6-1ead-4b30-8491-84a195559532.jpg",info:"联豪黑椒牛肉片200g",oldPrice:"￥26.9",nowPrice:"￥15.9"},
                {img:"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg",info:"小青菜350g",oldPrice:"￥4.5",nowPrice:"￥1.9"},
                {img:"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b5db2482-c680-42a1-8230-86adf82c13dd.jpg",info:"金针菇（150g）",oldPrice:"",nowPrice:"￥3.9"},
                {img:"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b24f66ad-ad7b-4c0f-9518-97bea5e7f110.jpg",info:"宝鼎天鱼上海白醋500ml",oldPrice:"￥6.8",nowPrice:"￥4.8"},
                {img:"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1af43016-92ac-4557-9a96-555c1c019e31.jpg",info:"烧烤青花鱼80—100g一条",oldPrice:"￥22.8",nowPrice:"￥19.9"},
                {img:"https://img.wochu.cn/upload/1f65e163-41e0-4e1c-a932-e3c42c5264fc.jpg",info:"倍特带鱼段500g",oldPrice:"",nowPrice:"￥27.9"},
                ]
        }
       
    },
   created(){
       document.title = this.$route.meta.title
        }

}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.shopping-data{
    background:#F4F4F4;

}
.data-none{
    width:100%;
    height:1.837333rem;
    padding-top:2.666667rem;
    text-align:center;
    margin-bottom:1rem;

   
}
.data-none-img{
    width:100%;
}
.data-none-img>img{
    width:2.44rem;
    height:0.74rem;
    display:block;
    margin:0 auto;
}
.data-none-text{
    width:100%;
    height:0.8rem;
    line-height:0.8rem;
    font-size:.36rem;
    color:#666666;
    text-align:center;
}
.data-none-tip{
    width:100%;
    height:0.384rem;
    line-height:0.384rem;
   
    text-align:center;
   
}
.data-none-tip>h2{
     font-weight:100; 
     font-size:.28rem;
    color:#DDDCDC;
}
.data-none-btn{
    display:block;
    width:2.24rem;
    height:0.632rem;
    line-height:0.632rem;
    text-align:center;
    font-size:0.32rem;
    color:#F47D30;
    text-decoration:none;
    padding:0.3rem;
    margin-left:2.7rem;

}

.recommend-list{
    width:100%;
   background:#f4f4f4;
    padding:1.9rem 0.28rem 1.5rem;
    margin-bottom:8.5rem;
    margin-top:1.5rem;
}
.recommend-list-zip{
    height:5rem;
    text-align:center;
}
.recommend-list-span{
    width:4.72rem;
    height:0.3rem;
    line-height:0.3rem;
    font-size:0.28rem;
    font-weight:600;
    color:#000;
    text-align:center;
    margin:0 1.2rem 0.3rem;
}
.recommend-li{
    width:29%;
    height:4.5136rem;
    background:#fff;
    float:left;
    list-style:none;
    margin-right:0.3rem;
    margin-bottom:0.1rem;
    
}
.recommend-li>.recommend-img{
    display:block;
    width:2.2568rem;
    height:2.26rem;
 
}
.recommend>p{
    width:1.9368rem;
    font-size:0.28rem;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left:0.12rem;
    padding-top:0.32rem;
}
.recommend{
     width:2.2568rem;
    height:2.26rem;
    background:#fff;

}

.recommend-bottom{
     width:2.4568rem;
    padding-left:0.12rem;
    height:0.936rem;
    margin-top:0.3rem;
}
.rec-bn{
    width:1.2368rem;
    height:0.488rem;
   
}
.rec-bn>.line-through{
    display:block;
    width:1.2368rem;
    text-decoration:line-through;
    color:#808080;
    font-size:0.24rem;
    height:0.3rem;
    line-height:0.3rem;
    margin-bottom:0.1rem;
}
.rec-bn>span{
    color:#f96D16;
    font-size:0.28rem;
}
.recommend-add{
    border:0.025rem solid #8DC16B;
    font-size:0.48rem;
    color:#8DC16B;
    text-decoration: none;
    display:block;
    width:0.5rem;
    height:0.5rem;
    line-height:0.5rem;
    border-radius:50%;
 
    float:right;
    margin-top:-0.3rem;
    margin-right:0.5rem;

}
.load-more{
    width:1.8rem;
    height:0.6rem;
    font-size: 0.28rem;
    color:#999999;
    text-align:center;
    margin-left:2.6rem;
    padding-bottom:1.8rem;
   
}
</style>