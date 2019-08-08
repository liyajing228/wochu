import Vue from 'vue'
import App from './App.vue'
import router from "router"
import store from 'store'
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
//vant
Vue.use(Tab).use(Tabs); 
//富文本editor
// Vue.use(VueQuillEditor);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
