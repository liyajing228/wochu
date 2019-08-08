import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
import fresh from "./fresh"
import relative from './relative'
import mine from "./mine"
import group from "./groupBuying"
import shopping from "./shopping"
import type from "./type"
import fullGoods from "./fullGoods"
import address from "./address"
<<<<<<< HEAD
import recharge from "./recharge"
import feedback from "./feedback"
=======
<<<<<<< HEAD
import typeSearch from "./typeSearch"
import addressAdd from "./addressAdd"
=======
import regist from './regist';
import login from './login';
import goodsInfo from './goodsInformation'
>>>>>>> 6d1406a9aabc8fff5e495abd02d02ee4f6614f80
>>>>>>> 59a339978e0b2135cd8c00564e90a9570a9d2578
Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {
            path:"/",
<<<<<<< HEAD
        redirect:"/home"
=======
            redirect:"/home"
>>>>>>> 59a339978e0b2135cd8c00564e90a9570a9d2578
        },
        home,
        fresh,
        relative,
        mine,
        shopping,
        group,
        type,
        fullGoods,
        address,
<<<<<<< HEAD
        recharge,
        feedback
=======
<<<<<<< HEAD
        typeSearch,
        addressAdd,
=======
        regist,
        login,
        goodsInfo
>>>>>>> 6d1406a9aabc8fff5e495abd02d02ee4f6614f80
>>>>>>> 59a339978e0b2135cd8c00564e90a9570a9d2578
    ]
})