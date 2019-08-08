<template>
    <div class="regist">
        <div class="Gif">
        <img src="http://wmall.wochu.cn/h5/img/vueLogin/loginTop.gif">
        <v-touch @tap="handleClose" src="http://wmall.wochu.cn/h5/img/vueLogin/close.png" tag="img"></v-touch>
    </div>
<!--  选择-->
    <div class="Sel">
        <p>免费注册</p>
    </div>
    <!-- 注册 -->
     <div class="Main">
         <div>
            <input type="text" placeholder="请输入手机号">
         </div>
         <div>
            <input type="text" placeholder="请输入验证码">
            <div>获取验证码</div>
         </div>
        <button>注册</button>
        <div>
            <p>我已阅读并同意</p>
            <a href="javascript:void(0)">《我厨服务政策与隐私协议》</a>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    methods:{
        handleClose(){
            this.$router.back();
        }
    }

}
</script>

<style scoped>
/* 动图 */
.Gif{position: relative;}
.Gif>img:nth-of-type(1){width: 7.5rem;height: 8rem}
.Gif>img:nth-of-type(2){width: .48rem;height: .48rem;position: absolute;top: .2rem;right: .2rem;}

/* 选择 */
.Sel{display: flex;justify-content: space-around}
.Sel>p{height: 1rem;width: 1.8rem;color:rgb(179, 174, 174);font-size: .33rem;font-family: PingFangSC-Regular,'Microsoft Yahei',sans-serif;line-height: 1rem;text-align: center;color:#6eb242;border-bottom: #6eb242 solid .06rem }

/*注册*/
.Main{padding: 0 .5rem}
.Main>div>input{width: 100%;height: 1.1rem;font-size: .32rem;border: 0; border-bottom: .02rem solid #ddd6d6;outline: none;}
input::-webkit-input-placeholder {color: #ccc;}
.Main>button{width: 100%;height: 1rem;background:#c3dcb3;border-radius: .2rem;font-size: .36rem;color: #ffffff}
.Main>div:nth-of-type(2)>input{border: 0;margin-bottom: .2rem}
.Main>div:nth-of-type(2){position: relative;}
.Main>div:nth-of-type(2)>div{width: 1.5rem;height: .6rem;background: #eee;color: #ccc;line-height: .6rem;text-align: center;position: absolute;top: .2rem;right: .2rem}
/* 密码登陆的眼睛 */
.Main>div:nth-of-type(2)>img{width: .32remrem;height: .32rem;position: absolute;top: .4rem;right: .2rem}
/* 协议 */
.Main>div:nth-of-type(3){display: flex;height: 1rem;line-height: 1rem;font-size: .32rem;color: #ccc;}
.Main>div:nth-of-type(3)>p>a{text-decoration: none;color:rgb(195, 221, 179)}
.Main>div:nth-of-type(3)>a{text-decoration: none;color:#6cb13f;margin-left: .1rem}
.Main .forget p{margin-left:5rem;color: #668528}
</style>
