import Vue from 'vue'
import App from './App.vue'
import router from "router"
import store from 'store'
<<<<<<< HEAD
import './common/components/index.js'
import { Carousel } from 'ant-design-vue'
import observer from "./observer"
import VueTouch from "vue-touch"
// import "common/filter/index.js"
import { Popup } from 'vant'
import { Area } from 'vant';


Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
Vue.prototype.$observer = observer
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Popup);
Vue.use(Area);

=======
import VueTouch from "vue-touch";
import './common/components/index.js';
import { Carousel } from 'ant-design-vue';
Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
Vue.use(VueTouch, {name: 'v-touch'})
>>>>>>> 6d1406a9aabc8fff5e495abd02d02ee4f6614f80
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
