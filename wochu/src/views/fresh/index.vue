<template>
    <div class="fresh">
        <div v-for="(item,index) in arr" :key="index">
            <img v-for="(item1,index1) in item.img" :key="index1" :src="item1" alt="">





        <div :class="index!==1?'count_moban':'count count_moban'"> 
            
        <!-- <div class="count_moban">  -->
            <div  v-for="(item1,index1) in item.list" :key='index1'>
                    <img class="title" :src="item1.goodsLabels?item1.goodsLabels[0].labelUrl:''" alt="">
                    <img :src=item1.icon alt="">
                    <p class="decoration">{{item1.goodsName}}</p>
                    <div>
                        <div>
                                <p>¥{{item1.marketPrice}}</p>
                                <p>¥{{item1.price}}</p>
                        </div>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import http from 'utils/http.js';
import { constants } from 'crypto';
export default {
    name:"fresh",
    data(){
        return{
            arr:[]
        }
    },
        created(){
        http("get","/client/v1/goods/newactivityTemplate?aTId=130").then((data)=>{
            var list=data.data.areaList;
            var length=list.length;
            var obj={};
            for(var i=0;i<length;i++){
                
                if(!list[i].shelveList){
                    if(!obj.img){
                        obj.img=[];
                    obj.img.push(list[i].imageUrl);
                    }else{
                    obj.img.push(list[i].imageUrl);
                    }
                    if(i==(length-1)){
                        this.arr.push(obj);
                    }
                }else{
                    if(!obj.list){
                    obj.list=list[i].shelveList;   
                        }else{
                    obj.list=obj.list.concat(list[i].shelveList);   
                        }
                    if(!list[i+1].shelveList){
                    this.arr.push(obj);
                    obj={};
                    }
                }
            };
            [{img:["","",""],list:list},{img:[""],list:list},{img:["",""],list:list},{img:[""],list:list},{img:[""],list:null}]
        })
        }

}
</script>

<style scoped>
p{margin: 0;padding: 0}
img{width:7.5rem;}
.count_moban>div{width: 1.9rem;height:3.52rem; position: relative;background: white ;width: 2.2rem;margin-right: .2rem;margin-bottom: .2rem}
.count_moban>div>img{height: 2.2rem;width: 2.2rem;}
.count_moban>div .title{position: absolute;width: .6rem;height: .6rem}
.count_moban>div>div>img{height: .48rem;width: .48rem;margin-left: .8rem;position: absolute;right: .3rem;bottom: .2rem;}
 .count_moban>div>div>p:nth-of-type(1){font-size: .3rem;color: #ccc;} 
.count_moban .decoration{white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
.count_moban{width: 7.5rem;display: flex;position: relative;flex-wrap: wrap;background: rgb(245, 228, 231);justify-content:center;}



.count{display: flex; background: rgb(245, 228, 231);justify-content:center; width: 7.5rem}

.count>div{height: 5rem;width: 3.4rem;background: white;margin: 0;padding: 0;margin-top: .2rem;margin-right: .1rem}

.count>div>div>img{height: .48rem;width: .48rem;margin-left: .8rem;position: absolute;right: .3rem;bottom: .2rem;}

.count>div>img{height:3.4rem;width: 3.4rem;}
.count>div>p:nth-of-type(1),.count_moban>div>p:nth-of-type(1){font-size: .28rem;margin-left:.2rem;}
.count>div>div>div>p:nth-of-type(1),.count_moban>div>div>div>p:nth-of-type(1){color: #ccc;margin-bottom: 0;margin-left: .2rem;text-decoration:line-through}
.count>div>div>div>p:nth-of-type(2),.count_moban>div>div>div>p:nth-of-type(2){color: tomato;margin-left: .2rem}

</style>

