import http from "utils/http.js"
//搜索接口

// 牛排
export const type_search_api=()=>http("get","/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword=%E7%89%9B%E6%8E%92");
// 菜
export const vag_search_api=()=>http("get","api/goods/searchbykeyword?orderId=0&pageIndex=5&pageSize=20&keyword=%E8%8F%9C")
//水果
export const fri_search_api=()=>http("get","/client/v1/shopcart/getCartGoodsCount?parameters=%7B%22deviceNumber%22%3A%220%22%7D")