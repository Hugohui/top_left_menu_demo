import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
import NotFound from '../views/not_found/index.vue'

Vue.use(VueRouter);

const constantRouterMap: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

export default router;
