export default {
    path:"/help",
component:()=>import("views/help"),
name:"help",
meta:{
   title:"帮助中心",
   tabBar:false,
   auth:true
},
}