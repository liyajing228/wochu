export default {
         path:"/home",
    component:()=>import("views/home"),
    name:"home",
    meta:{
        title:"首页",
        tabBar:true,
        auth:true
    },
}