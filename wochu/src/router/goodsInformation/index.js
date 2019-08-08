export default{
    path:"/goodsInfo/:id/:str",
    // path:"/goodsInfo",
    component:()=>import("views/goodsInfo"),
    name:"goodsInfo",
    props: true,
}