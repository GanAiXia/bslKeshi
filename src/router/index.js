// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Keshi from '../pages/Keshi/Keshi.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Keshi
        },
        {
            path: '/keshi',
            component: Keshi
        }
    ]
})