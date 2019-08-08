<template>
  <div id="app">
     
             <router-view></router-view>
      
       <tabBar v-if="$route.meta.tabBar"/>
      <!-- <loading/> -->
    
  </div>
</template>
<script>
import http from 'utils/http.js';
// import Loading from './lib/loading/index.js';
import TabBar from "./common/tabBar"
export default {
  name:"App",
  components:{
    TabBar,
  },
}
</script>

<style scoped>
</style>
