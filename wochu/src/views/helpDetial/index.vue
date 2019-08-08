<template>
     <div class="service">
        <header>
            <span>
                <img src="http://wmall.wochu.cn/h5/personal/css/images/back.gif" alt />
            </span>
            <p>{{msg}}</p>
    </header>
    <ul class="serverul">
        <li v-for="(item,index) in list" :key="index">
            <div class="q_div">
               <div>
                    <img src="http://wmall.wochu.cn/h5/personal/css/images/Q.png" alt="">
               </div>
                <div class="q">{{item.question}}</div>
            </div>
            <div class="a_div">
                <div class="a">{{item.answer}}</div>
                <div>
                    <img src="http://wmall.wochu.cn/h5/personal/css/images/A.png" alt="">
                </div>
            </div>
        </li>
    </ul>
    </div>
</template>


<script>
import axios from "axios"
export default {
    data(){
        return{
            serverList:["售前问题","订单问题","配送问题","售后问题"],
            msg:"",
            turn:"",
            serverListq:[],
            serverd:[],
            serverp:[],
            servers:[],
            list:[]
        }
    },
    watch:{
        list(newVal,oldVal){
            console.log(111)
            console.log(newVal,oldVal)
            this.list=newVal;
        }
    },
    created(){
        this.getServerData();
        this.$observer.$on("help",(val)=>{
            this.msg=val.item;
            this.turn=val.index;
            // console.log(this.turn);
            if(this.turn==1){
                this.list=this.serverd;
            }else if(this.turn==2){
                this.list=this.serverp;
            }
            // console.log(this.list)
        })


        
    },
    methods:{
        getServerData(){
            axios.get("http://wmall.wochu.cn/client/v1/member/faq/list?parameters=%7B%22id%22%3A1%7D").then((data)=>{
                // console.log(data.data.data)
                  this.list=data.data.data;
                //   console.log(this.serverListq)
                })
            
            axios.get("http://wmall.wochu.cn/client/v1/member/faq/list?parameters=%7B%22id%22%3A3%7D").then((data)=>{
                // console.log(data.data.data)
                this.serverd=data.data.data;
                })
            axios.get("http://wmall.wochu.cn/client/v1/member/faq/list?parameters=%7B%22id%22%3A3%7D").then((data)=>{
                // console.log(data.data.data)
                this.serverp=data.data.data;
                })

            axios.get("http://wmall.wochu.cn/client/v1/member/faq/list?parameters=%7B%22id%22%3A7%7D").then((data)=>{
                // console.log(data.data.data)
                this.servers=data.data.data;
                })

            // console.log(this.serverp)

        
           
        }
    }
}
</script>

<style>
header {
  height: 1.2rem;
  border-bottom: 1px solid #55ba42;
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 8;
  font-size: 0.48rem;
  text-align: center;
  color: #686868;
}
header p {
  height: 1.2rem;
  line-height: 1.2rem;
}
header span {
  position: absolute;
  left: 0.2rem;
  top: 0.5rem;
  width: 1.3rem;
  display: block;
  z-index: 1;
}
.help_list{position: absolute;top:1.2rem;}
.help_list li{height: 0.92rem;border-bottom: 1px solid #999;width: 7.5rem;}
.help_list a{font-size: 0.32rem;color: #000;padding: 0.3rem;display: block;}
.help_list img{float: right;}

.serverul{position: absolute;top:1.5rem;font-size: 0.32rem;}
.serverul li{height: 5.10rem;margin-bottom: 1rem;padding:0 0.3rem;width: 7.4rem;}
.q{width: 5.4rem;float:right;background: green;padding: 0.24rem;border-radius: 0.3rem;}
.a{width: 5.4rem;float:right;background: #f77d30;padding: 0.24rem;border-radius: 0.3rem;}
.serverul img{width: 1.52rem;height: 1.4rem;border-radius: 50%;}
.q_div{display: flex;justify-content: space-around;margin: 0 0 0.24rem;}
.a_div{display: flex;justify-content: space-around;}
</style>

