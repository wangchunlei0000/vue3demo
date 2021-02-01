import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/helloworld',
      component: HelloWorld
    },
  ]
})

export default routers