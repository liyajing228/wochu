import {goodsInfo_api,goodsInfo2_api,goodsInfo3_api,goodsInfo4_api} from 'api/index.js';

const state={
    carouse:null,
    goodsInfo:null,
    recommend:null,
    count:0,

}

const mutations={
    
}

const actions={
    async handleGoodsInfo(){
        let data = await goodsInfo_api(); 
        state.goodsInfo=data.data; 

        data = await goodsInfo2_api(); 
        state.recommend=data.data; 

        data = await goodsInfo3_api(); 
        state.carouse=data.data; 


        data = await goodsInfo4_api(); 
        state.count=data.data.count;
        
        console.log(state.goodsInfo)
        console.log(state.recommend)
        console.log(state.carouse)
        console.log(state.count)
    },
}


export default{
    state,
    mutations,
    actions,
    namespaced: true,
}