import Vue from 'vue';
import App from './app';
import router from './router';
// import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'
import echarts from "echarts";
import './assets/scss/global.scss';
import './assets/scss/base.scss'
import './assets/scss/iconfont.scss'
import './assets/scss/_list.scss'
import './assets/js/mock'
import vueJsonp from 'vue-jsonp'
// import BMap from 'vue-baidu-map'
import VueClipboard from 'vue-clipboard2'
import { Dialog} from 'vant'
import debounce from './assets/js/util'
import 'vant/lib/index.css';
Vue.use(VueClipboard)

Vue.use(Dialog)
// 图片放大
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)
Viewer.setDefaults({
  // 需要配置的属性
    toolbar: false
})

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.use(vueJsonp)
// Vue.use(BMap, {
//     /* 申请的百度密钥*/
//     ak: '5K78EV8zZgq4EiyKZ8rcm4untznmRWwr'
//   })

Vue.prototype.$echarts = echarts;
// fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
    error: require('./assets/images/error.png'),
    loading: require('./assets/images/loading.gif')
})

// 防抖函数
Vue.prototype.$debounce = debounce

Vue.use(Dialog)
Vue.directive('focus', {
    inserted: function(el) {
        el.focus()
    }
})
new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    render: (createElement) => createElement(App)
});
