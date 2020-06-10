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

Vue.use(VueClipboard)

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
