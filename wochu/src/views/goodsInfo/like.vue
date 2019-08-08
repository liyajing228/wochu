<template>
    <div class="likes">
        <div class="like_con">
            <div v-for="(item,index) in list" :key="index">
            <div>
                <img :src="item.icon" alt="">
            </div>
            <div>
                <p>{{item.goodsName}}</p>
                <p>
                    <span>{{item.marketPrice}}</span>
                    <span>{{item.price}}</span>
                    <img src="" alt="">
                </p>
            </div>
        </div>

        </div>
    </div>
</template>

<script>
import { mapActions, mapState,mapMutations} from "vuex";
export default {
    computed:{
        ...mapState({
            list:state=>state.goodsInfo.recommend.userloving,
        })
    }

}
</script>

<style scoped>
    .likes{height: 3rem;overflow: hidden;overflow-x: auto}
    .like_con{display: flex;height: 3rem;}
    .like_con img{width:1.9rem ;height:1.9rem; }
    .like_con>div{width:1.9rem;height:3rem; }
    .like_con>div>div:nth-of-type(2)>p:nth-of-type(1){white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
</style>
