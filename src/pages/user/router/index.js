import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user/',
    name: 'Home',
    component: Home,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/user/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于我的'
    }
  },
  {
    path: '/user/vuex-demo',
    name: 'VuexDemo',
    component: () => import('../views/VuexDemo'),
    meta: {
      title: 'Vuex 案例'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
