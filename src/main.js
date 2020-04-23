import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
// import 'lib-flexible/flexible'

Vue.config.productionTip = false
fastClick.attach(document.body) //使用

new Vue({
  render: h => h(App),
}).$mount('#app')
