import Vue from "vue";
import VueRouter from "vue-router"
import home from "./home"
import fresh from "./fresh"
import relative from './relative';
import mine from "./mine";
import group from "./groupBuying";
import shopping from "./shopping"
Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        home,
        fresh,
        relative,
        mine,
        shopping,
        group
    ]
})