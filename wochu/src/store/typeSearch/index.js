import {type_search_api,vag_search_api,fri_search_api,meal_search_api,noodel_search_api} from "api/type.js"

const state={
    fullList:[],

};
const mutations={
    handleGetSearchMutations(state,params){
        // console.log(params);
        for(var prop in params){
            for(var i=0;i<params[prop].length;i++){
                // console.log(params[i])
                state.fullList.push(params[prop][i]);
            }
        }
        // console.log(state.fullList);
    }
};
const actions={
    async handleGetTypeSearch({commit}){
        let data1=await type_search_api();
        let data2=await vag_search_api();
        let data3=await fri_search_api();
        let data4=await meal_search_api();
        let data5=await noodel_search_api();
        // console.log(data1.data.items);
        commit("handleGetSearchMutations",{data1:data1.data.items,data2:data2.data.items,data3:data3.data.items,data4:data4.data.items,data5:data5.data.items});
       
    }
};


export default{
    state,
    mutations,
    actions,
    namespaced:true
}