import {goodsInfo_api,goodsInfo2_api,goodsInfo3_api,goodsInfo4_api} from 'api/index.js';

const state={
    str:null,
    carouse:null,
    goodsInfo:null,
    recommend:null,
    count:0,

}

const mutations={
    handleMutationsModify(state,params){
        switch(params){
            case 0:
                state.str="26bd5c39-a17e-49cd-b314-51c43e5866bb";
                break;
            case 1:
                state.str="40f935ef-9ac6-4b7e-b757-2fc346272846";
                break;
            case 2:
                state.str="4e3efb20-3d16-48fa-a215-260a2dacd6d1";
                break;
            case 3:
                state.str="94b5598b-a2a5-40dc-a21f-791168fe216b";
                break;
                                              }
    console.log(this.str);
        
    }
}

const actions={
    handleActionModify({commit},params){
        commit('handleMutationsModify',params);
    },
    async handleGoodsInfo(){
        // let data = await goodsInfo_api(this.str); 
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