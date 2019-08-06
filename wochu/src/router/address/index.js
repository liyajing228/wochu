export default{
    path:"/address",
    component:()=>import("views/address"),
    name:"address",
    children:[
        {
            path:"addressAdd",
            name:"addressAdd",
            component:()=>import("views/addressAdd")
        }        
    ],
    
}