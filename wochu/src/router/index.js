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
import recharge from "./recharge"
import feedback from "./feedback"
<<<<<<< HEAD

import typeSearch from "./typeSearch"
import addressAdd from "./addressAdd"

import regist from './regist';
import login from './login';
import goodsInfo from './goodsInformation'

=======
import typeSearch from "./typeSearch"
import addressAdd from "./addressAdd"
import regist from './regist';
import login from './login';
import goodsInfo from './goodsInformation'
<<<<<<< HEAD
import help from "./help"
import helpDetial from "./helpDetial"
import searchResult from "./searchResult"
=======
>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037
>>>>>>> 2a1fd6c12b751de6db798ee1eb3c61a1d90cb2c7
Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {
            path:"/",
<<<<<<< HEAD

        redirect:"/home"


=======
<<<<<<< HEAD
=======
    
>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037
            redirect:"/home"
>>>>>>> 2a1fd6c12b751de6db798ee1eb3c61a1d90cb2c7
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
        feedback,

        typeSearch,
        addressAdd,

=======
<<<<<<< HEAD
=======

>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037
        recharge,
        feedback,
        typeSearch,
        addressAdd,
>>>>>>> 2a1fd6c12b751de6db798ee1eb3c61a1d90cb2c7
        regist,
        login,
<<<<<<< HEAD
        goodsInfo,
        help,
        helpDetial,
        searchResult,

=======
        goodsInfo
<<<<<<< HEAD

=======
>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037
>>>>>>> 2a1fd6c12b751de6db798ee1eb3c61a1d90cb2c7
    ]
})