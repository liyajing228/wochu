import Vue from 'vue'
import App from './App.vue'
import router from "router"
import store from 'store'
<<<<<<< HEAD

=======
import VueTouch from "vue-touch";
import './common/components/index.js';
>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037
import './common/components/index.js'
import { Tab, Tabs } from 'vant';
import { Carousel } from 'ant-design-vue'
import observer from "./observer"
// import "common/filter/index.js"
import { Popup } from 'vant'
import { Area } from 'vant';
<<<<<<< HEAD
import { Tab, Tabs } from 'vant';
=======
Vue.use(VueTouch, {name: 'v-touch'})

>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037

Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
Vue.prototype.$observer = observer
Vue.use(Popup);
Vue.use(Area);

<<<<<<< HEAD
Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
//vant
Vue.use(Tab).use(Tabs); 
Vue.use(VueTouch, {name: 'v-touch'})

=======
>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
