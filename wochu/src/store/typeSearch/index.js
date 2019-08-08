import {type_search_api,vag_search_api,fri_search_api} from "api/type.js"

const state={};
const mutations={
    handleGetSearchMutations(state,params){
        console.log(params);
    }
};
const actions={
    async handleGetTypeSearch({commit}){
        let data1=await type_search_api();
        let data2=await vag_search_api();
        let data3=await fri_search_api();
        // console.log(data1.data.items);
        commit("handleGetSearchMutations",data1.data.items)
    }
};


export default{
    state,
    mutations,
    actions,
    namespaced:true
}