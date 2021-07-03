import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Welcome from '@/views/Welcome.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
