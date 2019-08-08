<template>
  <div class="list">
    <div v-if="flag">
      <div v-for="(item,index) in list" :key="index" class="ddiv">
        <div class="titleB">
          <span class="xl"></span>
          <p class="title">{{item.name}}</p>
          <span class="xr"></span>
        </div>
        <ul>
          <li
            v-for="(item1,index1) in item.children"
            :key="index1"
            @click="handleRightList({aTId:item1.aTId,index:index})"
          >
            <a :ref="item.url">
              <img :src="item1.imgUrl" />
              <p class="name">{{item1.name}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="!flag">
      <div>
        <!-- {{item.parentId}} -->
        <ul   >
          <li
           v-for="(item,index) in detialList" :key="index" v-if="item.parentId==detialIndex"
          >
              <img :src="item.checkicon" />
              <p class="name">{{item.name}}</p>
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import http from "utils/http";

export default {
  name: "type",
  data() {
    return {
      list: [],
      flag: true,
      detialList:[],
      detialIndex:""
    };
  },
  created() {
    // this.getData();
    http("get","http://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList").then((data)=>{
        //  console.log(data)
        this.list=(data.data)
        // console.log(this.list)
    })
    this.getDetialData();
    this.$observer.$on("handle", val => {
      if(!val){
        this.flag=true;
       
      }else{
      this.flag = false;
      this.detialIndex=val;
      }
      
    });
  },
  methods: {
    handleRightList(data) {
      console.log(data);

      // if(index==0){
      //   this.$router.push("/fullGoods")
      // }
    },
    getData() {
      axios.get("http://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList").then(data => {
        this.list = data.data.data;
        // console.log(this.list);
      });
    },
    getDetialData(){
       axios.get("/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D").then(data => {
        this.detialList = data.data.data;
        // console.log(this.detialList);
    })
  }
  }

}
</script>

<style scoped>
.list {
  width: 5.7rem;
  height: 11.18rem;
  float: right;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  overflow: auto;
}
.list .ddiv {
  border-bottom: 0.22rem solid #f4f5f7;
}
.list .title {
  width: 1.12rem;
  height: 0.9rem;
  color: #011e00;
  font-size: 0.28rem;
  line-height: 0.9rem;
  font-weight: 550;
  float: left;
}
.list ul {
  width: 5.41rem;
  height: 4.4rem;
  padding: 0.2rem 0.02rem 0 0.22rem;
}
.list a {
  width: 1.29rem;
  height: 2.18rem;
}
.list li {
  width: 1.58rem;
  margin-right: 0.22rem;
  height: 2.2rem;
  text-align: center;
  float: left;
}
.list .name {
  width: 1rem;
  height: 0.86rem;
  font-size: 0.24rem;
  color: #666;
  line-height: 0.34rem;
  padding-top: 0.2rem;
  margin-left: 0.29rem;
  overflow: hidden;
}
.list li img {
  width: 1rem;
  border-radius: 50%;
  height: 1rem;
}
.list span {
  display: block;
  height: 0.52rem;
  width: 0.5rem;
  border-bottom: 0.01rem solid #e5e5e5;
}
.xl {
  float: left;
}
.xr {
  float: left;
}
.list .titleB {
  height: 0.9rem;
  text-align: center;
  display: flex;
  justify-content: center;
}
::-webkit-scrollbar {
            width: 0px;
        }

</style>