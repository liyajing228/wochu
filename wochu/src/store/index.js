import Vue from 'vue'
import Vuex from 'vuex'
import goodsInfo from './goodsInfo';
Vue.use(Vuex);
const state={}
const actions={}
const mutations={}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules:{  
        goodsInfo,
     }
})