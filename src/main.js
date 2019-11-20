import Vue from 'vue'; // 从node_modules引入vue类库
import App from './app'; // ES6 语法，相当于 import { default as App } from './app.vue'。因为app.vue用过的是export default {...}，所以可以这样写
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
