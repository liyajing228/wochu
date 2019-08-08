<template>
    <div class="feedMessage">
        <div class="feed" v-if="flag">
            <div class="feedMessage-content">{{message}}</div>
            <div class="feedMessage-btn">
                <v-touch tag="button" @tap="handleTrue" class="feed-btn" >确认</v-touch>
                <v-touch tag="button" @tap="handleFalse" class="feed-false">取消</v-touch>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"FeedMessage",
    data(){
        return{
            flag:false
        }
    },
    created(){
        //利用observer进行非父子组件传值
        this.$observer.$on("handle",(val)=>{
           this.flag=!this.flag;
        })
    }
}
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .feed{
        width:5rem;
        height:3.5rem;
        position:absolute;
        background:#fff;
     
        left:0;
        right:0;
        bottom:0;
        top:0;
        z-index:111;
        box-shadow:0px 3px 100px #ccc;
        margin:auto;
        text-align:cenetr;
    }
.feedMessage-content{
    width:5rem;
    font-size:0.28rem;
    text-align:center;
    color:#999;
    margin:0.9rem auto;  
}
.feedMessage-btn{
    width:5rem;
   margin-left:1.3rem;
}
.feed-btn{
    width:0.9rem;
}
.feed-false{
    width:0.9rem;
    margin-left:0.5rem;
}

</style>