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

//vant
import { Tab, Tabs } from 'vant';

//富文本editor
// import VueQuillEditor from 'vue-quill-editor'
//   import 'quill/dist/quill.core.css'
//   import 'quill/dist/quill.snow.css'
//  import 'quill/dist/quill.bubble.css'

 
Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
<<<<<<< HEAD
//vant
Vue.use(Tab).use(Tabs); 
//富文本editor
// Vue.use(VueQuillEditor);
=======
Vue.use(VueTouch, {name: 'v-touch'})
>>>>>>> 6d1406a9aabc8fff5e495abd02d02ee4f6614f80
>>>>>>> 59a339978e0b2135cd8c00564e90a9570a9d2578
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
