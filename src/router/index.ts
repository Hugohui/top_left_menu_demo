import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/login/index.vue'
import NotFound from '../views/not-found/index.vue'

import { AgentList } from '../views/agent'
import { GoodsList, GoodsRelease } from '../views/goods'
import { OrderAgentList } from '../views/order'

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      hidden: true
    },
    redirect: 'agent'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      hidden: true
    },
    component: Login
  },

  // 代购员管理
  {
    path: '/agent',
    name: 'agent',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '管理'
    },
    redirect: '/agent/list1/list-1',
    children: [
      {
        path: 'list1',
        name: 'agent_list',
        component: AgentList,
        meta: {
          icon: 'el-icon-menu',
          title: '列表',
          topPath: 'agent'
        },
        children: [
          {
            path: 'list-1',
            name: 'agent_list-1',
            component: AgentList,
            meta: {
              icon: 'el-icon-menu-1',
              title: '列表-1',
              topPath: 'agent'
            }
          }
        ]
      },
      {
        path: 'list2',
        name: 'agent_list2',
        component: AgentList,
        meta: {
          icon: 'el-icon-menu',
          title: '列表2',
          topPath: 'agent'
        }
      }
    ]
  },

  // 商品中心
  {
    path: '/goods',
    name: 'goods',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '商品中心'
    },
    redirect: '/goods/release',
    children: [
      {
        path: 'release',
        name: 'goods_release',
        component: GoodsRelease,
        meta: {
          icon: 'el-icon-menu',
          title: '发布商品',
          topPath: 'goods'
        }
      },
      {
        path: 'list',
        name: 'goods_list',
        component: GoodsList,
        meta: {
          icon: 'el-icon-menu',
          title: '商品列表',
          topPath: 'goods'
        }
      }
    ]
  },

  // 订单管理
  {
    path: '/order',
    name: 'order',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '订单管理'
    },
    redirect: '/order/agentList',
    children: [
      {
        path: 'agentList',
        name: 'order_agent_list',
        component: OrderAgentList,
        meta: {
          icon: 'el-icon-menu',
          title: '代购订单',
          topPath: 'order'
        }
      }
    ]
  },

  // 404
  {
    path: '*',
    name: 'not_found',
    meta: {
      hidden: true
    },
    component: NotFound
  }
]

const createRouter = ()  => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export const router = createRouter()

export default router
