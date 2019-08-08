import Vue from 'vue'
import App from './App.vue'
import router from "router"
import store from 'store'
import VueTouch from "vue-touch";
import './common/components/index.js';
import './common/components/index.js'
import { Tab, Tabs } from 'vant';
import { Carousel } from 'ant-design-vue'
import observer from "./observer"
// import "common/filter/index.js"
import { Popup } from 'vant'
import { Area } from 'vant';
Vue.use(VueTouch, {name: 'v-touch'})


Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
Vue.prototype.$observer = observer
Vue.use(Popup);
Vue.use(Area);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
