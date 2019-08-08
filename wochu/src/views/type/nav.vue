<template>
    <div id="head">
      <div class="search-k">
        <img src="./img/search.png">
        <router-link tag="div" to="/typeSearch" class="search-key">
          <input type="text" placeholder="支持首字母搜索" class="input-key">
        </router-link>
      </div>
      <div class="shadowWrap"></div>
    </div>
</template>

<script>

export default {
    data(){
            return{
                 nav:""
            }
        }
}
 
</script>

<style scoped>
#head{
    height: 1.1rem;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 1;
    background: #fff;
    overflow: hidden;
}
.search-k{
  width: 7.02rem;
  height: 0.68rem;
  line-height: 0.68rem;
  padding: 0 0.24rem;
  margin:0.12rem 0.24rem;
  line-height: .62rem;
  border-radius: .12rem;
  padding: 0 .24rem;
  border: .01rem solid #ccc;
  color:#CCC;
} 
.search-k img {
    width: .4rem;
    height: .4rem;
    float: left;
    margin-top: .14rem;
}
.search-key{
  float: left;
}
.input-key{
  font-size: 0.24rem;
  /* background: red; */
  float: left;
  border:0;
  outline:none;
  height: 0.48rem;
  line-height: 0.48rem;
  padding: 0 0.24rem;
  margin:0.12rem 0.24rem;
}
.shadowWrap {
    height: .22rem;
    background: #f4f5f7;
}
</style>