import Vue from 'vue'; 
import App from './app'; 
import router from './router';

import './assets/scss/global.scss';
import './assets/scss/base.scss'
import './assets/scss/iconfont.scss'
import './assets/js/mock'

new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    render: (createElement) => createElement(App)
});
