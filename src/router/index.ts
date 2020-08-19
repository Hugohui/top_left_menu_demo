import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
import NotFound from '../views/not-found/index.vue'
import Layout from '../layout/index.vue'

Vue.use(VueRouter);

const constantRouterMap: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
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
  },
  // 代购员管理
  {
    path: '/agent',
    children: [
      {
        path: '/list'
      }
    ]
  },

  // 商品中心
  {
    path: '/goods',
    children: [
      {
        path: '/release'
      },
      {
        path: '/list'
      }
    ]
  },

  // 订单管理
  {
    path: '/order',
    children: [
      {
        path: 'list'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

export default router;
