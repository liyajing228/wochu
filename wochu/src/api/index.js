import http from 'utils/http.js';

export const goodsInfo_api=()=>http("get","/api/goods/goods/detail?goodsGuid=26bd5c39-a17e-49cd-b314-51c43e5866bb");

export const goodsInfo2_api=()=>http("get","/client/v1/goods/getGoodsRelevantList?parameters=%7B%22goodsGuid%22:%2226bd5c39-a17e-49cd-b314-51c43e5866bb%22%7D");

export const goodsInfo3_api=()=>http("get","/client/v1/goods/imgLoopList?parameters=%7B%22goodsGuid%22:%2226bd5c39-a17e-49cd-b314-51c43e5866bb%22%7D");

export const goodsInfo4_api=()=>http("get","/client/v1/shopcart/getCartGoodsCount?parameters=%7B%22deviceNumber%22:%220%22%7D");

