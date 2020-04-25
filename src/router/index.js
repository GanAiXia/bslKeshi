// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Keshi from '../pages/Keshi/Keshi.vue'
import KeshiList from '../pages/KeshiList/KeshiList.vue'
import Doctor from '../pages/Doctor/Doctor.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Keshi,
            name: 'index',
            meta: {
                title:'上海伯思立-科室介绍'
            }
        },
        {
            path: '/keshi',
            component: Keshi,
            name: 'keshi',
            meta: {
                title:'上海伯思立-科室介绍'
            }            
        },
        {
            path: '/keshilist',
            component: KeshiList,
            name: 'keshiList',
            meta: {
                title:'上海伯思立-科室介绍'
            }            
        },
        {
            path: '/doctor',
            component: Doctor,
            name: 'doctor',
            meta: {
                title:'上海伯思立-医生介绍'
            }            
        }                
    ]
})