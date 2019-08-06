import Vue from 'vue'
import App from './App.vue'
import router from "router"
import store from 'store'
import './common/components/index.js';
import { Carousel } from 'ant-design-vue';
Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
