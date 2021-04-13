import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '@/icons' // icon
import '@/permission'

import { initDirective } from './directive'

Vue.config.productionTip = false

// 添加全局指令
initDirective(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
