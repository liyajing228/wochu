<template>
    <a-carousel autoplay>
    <div v-for="(item,index) in obj" :key="index">
      <h3>
        <img :src="item.picUrl">
      </h3>
    </div>
  </a-carousel>
</template>

<script>
import http from 'utils/http.js';
export default{
        name:"Carouse1",
    data() {
      return{
        obj:null
      }
      },  
     created(){
        http("get","/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D").then((data)=>{
          this.obj=data.data.carousel;
        });
        // this.yb();
    },
}
</script>

<style scoped>
    /* For demo */
.ant-carousel{margin-top:.9rem;height: 3.3rem;width: 7.5rem;background: red}
h3{height: 3.3rem;width: 7.5rem;} 
h3>img{height: 3.3rem;width: 7.5rem;} 
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 3.3rem;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
 </style>


/*         this.chatTimer=setInterval(() => {
            this.$refs.ul.top=this.$refs.ul.offsetHeight-220?"this.$refs.ul.offsetHeight":"this.$refs.ul.offsetHeight-220";
        }, 2000);
*/




/*     beforeDestroy () {
        clearInterval(this.chatTimer);
    this.chatTimer = null;
    }
 */
