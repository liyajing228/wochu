<template>
        <div class="total">
        <div>
<!--          <router-link
      src="https://img.wochu.cn/upload/a8105004-637f-4905-b56b-324d4f592249.jpg"
      tag="img"
      to="/shopping"
    ></router-link>
 -->       <v-touch
    tag="img"
  src="https://img.wochu.cn/upload/a8105004-637f-4905-b56b-324d4f592249.jpg" @tap="handleTo"></v-touch>
        </div>
        <div><img src="https://img.wochu.cn/upload/9a8a2eb7-3491-4f38-a252-618cd3d38d44.jpg"></div>
        <div><img src="https://img.wochu.cn/upload/984f8c49-5af3-4cce-9cb8-19eba0855cb2.jpg"></div>
        <div><img src="https://img.wochu.cn/upload/ce463dff-8675-4e0c-818c-0dcb5b214fe3.jpg"></div>
        <div><img src="https://img.wochu.cn/upload/e6a12619-fe7e-4691-a52c-3fb357c89b6c.jpg"></div>
        <div><img src="https://img.wochu.cn/upload/855ce9bc-5145-4207-8a14-514cfd20aac2.jpg"></div>
        <div><img src="https://img.wochu.cn/upload/604ab541-8fe7-41b4-b532-521ff0386c44.jpg"></div>
        <div><img src="https://img.wochu.cn/upload/249cc328-9897-4407-a0d5-8611a68b2449.jpg"></div>
    </div>
</template>

<script>
export default {
    name:"Title",
    methods:{
        handleTo(){
            console.log(11);
            this.$router.push("fresh");
        }
    }
    

}
</script>

<style scoped>
    .total{display: flex;flex-wrap: wrap;width: 7.5rem;justify-content: space-around}
    .total>div>img{height: 1.7rem;width: 1.7rem;margin-bottom: .3rem;}

</style>
