import Vue from 'vue';
import App from './app';
import router from './router';
import fastclick from 'fastclick'
import 'swiper/dist/css/swiper.css'


import './assets/scss/global.scss';
import './assets/scss/base.scss'
import './assets/scss/iconfont.scss'
import './assets/js/mock'

fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    render: (createElement) => createElement(App)
});
