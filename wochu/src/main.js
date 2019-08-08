import Vue from 'vue'
import App from './App.vue'
import router from "router"
import store from 'store'
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
import VueTouch from "vue-touch";
import './common/components/index.js';
>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037
>>>>>>> 2a1fd6c12b751de6db798ee1eb3c61a1d90cb2c7
import './common/components/index.js'
import { Tab, Tabs } from 'vant';
import { Carousel } from 'ant-design-vue'
import observer from "./observer"
// import "common/filter/index.js"
import { Popup } from 'vant'
import { Area } from 'vant';
<<<<<<< HEAD
//vant
import { Tab, Tabs } from 'vant';
//引入富文本editor
import VueQuillEditor from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
 import 'quill/dist/quill.bubble.css'
//引入uploader 文件上传
  import {Uploader} from 'vant'
=======
<<<<<<< HEAD
import { Tab, Tabs } from 'vant';
=======
Vue.use(VueTouch, {name: 'v-touch'})
>>>>>>> 2a1fd6c12b751de6db798ee1eb3c61a1d90cb2c7

>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037

Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
Vue.prototype.$observer = observer
Vue.use(Popup);
Vue.use(Area);
//富文本editor
Vue.use(VueQuillEditor);

<<<<<<< HEAD

//vant
Vue.use(Tab).use(Tabs); 

//引入uploader  文件的上传
Vue.use(Uploader);


=======
<<<<<<< HEAD
Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
//vant
Vue.use(Tab).use(Tabs); 
Vue.use(VueTouch, {name: 'v-touch'})

=======
>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037
>>>>>>> 2a1fd6c12b751de6db798ee1eb3c61a1d90cb2c7
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
