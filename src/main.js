import Vue from 'vue';
import App from './app';
import router from './router';
// import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'


import './assets/scss/global.scss';
import './assets/scss/base.scss'
import './assets/scss/iconfont.scss'
import './assets/scss/_list.scss'
import './assets/js/mock'

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
