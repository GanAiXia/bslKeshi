import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'

import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
Vue.config.productionTip = false
fastClick.attach(document.body) //使用

new Vue({
  render: h => h(App),
}).$mount('#app')
