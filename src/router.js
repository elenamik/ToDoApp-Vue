import App from './App'
import About from './components/About'
// import Vue from 'vue'

import VueRouter from 'vue-router'
const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

// const app = new Vue ({ router }).$mount('#app')
export default router
