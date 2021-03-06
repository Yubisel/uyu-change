import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home_view.vue')
  },
  {
    path: '/countries',
    name: 'countries',
    component: () => import(/* webpackChunkName: "about" */ '../views/Countries_view.vue')
  },
  {
    path: '/currencies',
    name: 'currencies',
    component: () => import(/* webpackChunkName: "about" */ '../views/Currencies_view.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About_view.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;