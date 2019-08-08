<template>
  <div>
    <div>
        <header>
      <a href="">
        <img src="http://wmall.wochu.cn/h5/personal/css/images/back.gif" alt />
      </a>
      <p>帮助中心</p>
    </header>

    <section class="help_list">
      <v-touch tag="li" @tap="handlehelp({item:item,index:index})" v-for="(item,index) in serverTitle" :key="index">
        <b>
         {{item}}
          <span>
            <img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png" alt />
          </span>
        </b>
      </v-touch>
      
    </section>
    </div>


   
  </div>
</template>

<script>

export default {
    name:"help",
    data(){
        return{
            serverTitle:["售前问题","订单问题","配送问题","售后问题"],
           
        }
    },
    methods:{
        handlehelp(params){
            // console.log(params);
             this.$observer.$emit("help",params);

             this.$router.push("/helpDetial");
        }
    }
};
</script>

<style scoped>

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
header a {
  position: absolute;
  left: 0.2rem;
  top: 0.5rem;
  width: 1.3rem;
  display: block;
  z-index: 1;
}
.help_list{position: absolute;top:1.2rem;}
.help_list li{height: 0.92rem;border-bottom: 1px solid #999;width: 7.5rem;}
.help_list b{font-size: 0.32rem;color: #000;padding: 0.3rem;display: block;}
.help_list img{float: right;}


</style>
