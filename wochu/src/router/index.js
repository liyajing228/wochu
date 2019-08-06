import Vue from "vue";
import VueRouter from "vue-router"
import home from "./home"
import fresh from "./fresh"
import relative from './relative';

Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        home,
        fresh,
        relative,
        
    ]
})