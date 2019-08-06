
export default{
    path:"/mine",
    component:()=>import("views/mine"),
    name:"mine",
    meta:{
        title:"个人中心",
        tabBar:true,
        auth:true
    },
    
}