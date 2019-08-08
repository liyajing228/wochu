import Vue from 'vue'
import App from './App.vue'
import router from "router"
import store from 'store'
import './common/components/index.js'
import { Carousel } from 'ant-design-vue'
import observer from "./observer"
import VueTouch from "vue-touch"
// import "common/filter/index.js"
import { Popup } from 'vant'
import { Area } from 'vant';
//vant
import { Tab, Tabs } from 'vant';
//引入富文本editor
import VueQuillEditor from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
 import 'quill/dist/quill.bubble.css'
//引入uploader 文件上传
  import {Uploader} from 'vant'


Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
Vue.prototype.$observer = observer
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Popup);
Vue.use(Area);
//富文本editor
Vue.use(VueQuillEditor);


//vant
Vue.use(Tab).use(Tabs); 

//引入uploader  文件的上传
Vue.use(Uploader);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
