import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于我的'
    }
  },
  {
    path: '/vuex-demo',
    name: 'VuexDemo',
    component: () => import('../views/VuexDemo'),
    meta: {
      title: 'Vuex 案例'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/user/',
  routes
})

export default router
