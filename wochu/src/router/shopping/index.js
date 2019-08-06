export default{
    path:"/shopping",
    component:()=>import("views/shopping"),
    name:"shopping",
    meta:{
        title:"购物车",
        tabBar:true,
        auth:false
    }
    
}