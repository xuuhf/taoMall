import Vue from 'vue';
import Router from 'vue-router';
import home from '../pages/home';
import category from '../pages/category';
import cart from '../pages/cart';
import personal from '../pages/personal';

Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/category',
      name: 'category',
      component: category
    },{
      path: '/cart',
      name: 'cart',
      component: cart
    },{
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
});

// 注册全局后置钩子
router.afterEach((to, from) => {
  // 当页面路由变化时同步修改title
  const defaultTitle = 'mall';
  document.title = to.meta.title || defaultTitle;
});

export default router;