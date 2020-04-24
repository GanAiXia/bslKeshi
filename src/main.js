import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import 'lib-flexible/flexible'

import './assets/css/font.css'

Vue.config.productionTip = false
fastClick.attach(document.body) //使用

router.beforeEach((to, from, next) => {
  // 修改标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
