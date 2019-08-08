export default{
    path:"/feedback",
    component:()=>import("views/feedback"),
    name:"feedback",
    meta:{
        title:"意见反馈",
        tabBar:false,
        auth:false
    },
    
}