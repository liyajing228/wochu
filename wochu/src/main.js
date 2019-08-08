import Vue from 'vue'
import App from './App.vue'
import router from "router"
import store from 'store'
import VueTouch from "vue-touch";
import './common/components/index.js';
import { Carousel } from 'ant-design-vue';
Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
Vue.use(VueTouch, {name: 'v-touch'})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
