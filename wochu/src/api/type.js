import http from "utils/http.js"
//搜索接口


// 牛排
export const type_search_api=()=>http("get","/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword=%E7%89%9B%E6%8E%92");
// 菜
export const vag_search_api=()=>http("get","api/goods/searchbykeyword?orderId=0&pageIndex=5&pageSize=20&keyword=%E8%8F%9C")
//水果
export const fri_search_api=()=>http("get","/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword=%E6%B0%B4%E6%9E%9C")
//饭
export const meal_search_api=()=>http("get","/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword=%E9%A5%AD")
//面
export const noodel_search_api=()=>http("get","/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword=%E9%9D%A2")