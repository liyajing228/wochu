<template>
    <div >
        <router-view></router-view>
         <div class="addressAdd">
        <div class="title-add">
            <div>
                <v-touch  @tap="back">
                    <img src="http://wmall.wochu.cn/h5/classify/img/back.png" alt="" >
                </v-touch>
            </div>
            <div>新建收货地址</div>
        </div>
    </div>

    <div class="content">
        <ul>
            <li>
                <label for="">
                    <span>收货人：</span>
                    <input type="text" placeholder="输入收货人的姓名">
                </label>
            </li>
            <li>
                <label for="">
                    <span>联系电话：</span>
                    <input type="text" placeholder="手机号码">
                </label>
            </li>
            <li class="tag">
                <div class="tag">
                    目前仅配送上海(奉贤/金山/崇明及部分郊环线地区除外)
                </div>
            </li>
            <li @click="showaddress">
                <label for="">
                    <span>收货省市：</span>
                    <input type="text" placeholder="选择您所在的城市">
                        <img src="http://wmall.wochu.cn/h5/address/img/nextstep@3x.png" alt="" class="img-right"> 
                </label>
            </li>
            <li>
                <label for="">
                    <span>收获地址：</span>
                    <input type="text" placeholder="校区/写字楼/公寓">
                    <img src="http://wmall.wochu.cn/h5/address/css/images/dingwei@3x.png" alt=""  class="img-wd">
                </label>
            </li>
            <li>
                <label for="">
                    <span>详细地址：</span>
                    <input type="text" placeholder="楼号/楼层/房号/门牌号">
                </label>
            </li>
            <li class="last">
                <span>选择类别：</span>
                <div class="sort">
                    <p>公司</p>
                    <p>家</p>
                    <p>父母</p>
                    <p>其他</p>
                </div>
            </li>
            <li class="">
                <label>
                    <span>默认地址</span>
                </label>
                <div class="change-default">
                    <div class="key"></div>
                </div>
            </li>
            
        </ul>
    </div>
    

    <div class="addressComfirm">
            <div class="xian"></div>
            <div>保存</div>
    </div>


<!-- 通过v-model控制弹出层是否展示 -->
    <van-button type="primary" @click="showPopup" position="bottom"
  :style="{ height: '20%' }" get-container="#app">
  展示弹出层
</van-button>

<van-popup v-model="show">内容11111111</van-popup>
    </div>
</template>

<script>
export default {
    name:"addressAdd",
    data(){
        return{
             show: false
        }
    },
    methods:{
        back(){
            this.$router.push("/address")
        },
     showaddress(){
         console.log(111)
         this.show=!this.show;
     },  
    showPopup() {
      this.show = true;
   
  }
    }
}
</script>

<style scoped>
.addressAdd,.content{padding:0 0.2rem;height: 1rem;line-height: 1rem;}
html{background-color:#f4f4f4; }
input{font-size: 0.3rem;outline:none;color: #999999;}

.addressAdd .title-add{height: 1.01rem;display: flex;line-height: 1.01rem;color:#32532E;border-bottom: .02rem solid #e5e5e5;}
.title-add img{width: 0.72rem;height: 0.72rem;margin-top: 0.2rem;}
.title-add div:nth-of-type(1){width: 0.72rem;height: 0.72rem;}
.title-add div:nth-of-type(2){width: 4.97rem;color: #001E00;font-size: 0.36rem;text-align: center;}

.content{height:8.06rem;border-top: .22rem solid  #f4f4f4;}
.content li{border-bottom:0.01rem #ccc solid;}
.content li:nth-of-type(2){border:0;}
.content li:nth-of-type(8){border:0;}
.content input{ height: 0.96rem;border:0;}
.content span{display: inline-block;width: 1.7rem;height: 0.98rem;color: #999;font-size: 0.28rem;font-weight: 580;}
.content .tag{width:7.3rem;height: 0.84rem;background-color: #F4F4F4;margin:0 0 0 -0.2rem;padding: 0 0 0 0.2rem;color:#1F6117;border:0;}
.content .last{display: flex;align-items: center;}
.last .sort{width: 5.4rem; display: flex;justify-content: space-between;}
.content p{width: 0.7rem;height: 0.4rem;background-color:#ccc;font-size: 0.26rem;line-height: 0.4rem;text-align: center;border-radius: 0.12rem;color: #fff;}
.content p:nth-of-type(2){background-color: #6EB042;}
.content .change-default{float: right;width: 1rem;height: 0.6rem;border: .02rem solid #d9d9d9;border-radius: 0.3rem;margin-top:0.2rem;}
.key{width: 0.6rem;height: 0.6rem;border-radius: 50%;border: .02rem solid #d9d9d9;}
.img-right{width: 0.16rem;height: 0.3rem;margin-left: 1rem;}
.img-wd{width: 0.32rem;height: 0.4rem;margin-left: 1rem;}

.addressComfirm{background: #f4f4f4;}
.addressComfirm .xian{height: .22rem;background: #f4f4f4;}
.addressComfirm div:nth-of-type(2){width:6.4rem;height: 1rem;    background: #c3dcb3;line-height: 1rem;color: #fff;font-size: .36rem;text-align: center;margin:0 auto;border-radius: 0.2rem;}
</style>
