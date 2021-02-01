import HelloWorld from './components/HelloWorld.vue'
import Provide from './components/provide.vue'
import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/helloworld',
    name: 'helloworld',
    component: HelloWorld
  },
  {
    path: '/provide',
    name: '/provide',
    component: Provide
  }
]


let router = createRouter({
   // url 地址的转发规则
  history: createWebHashHistory(),
  // 在routes 中配置路由规则
  routes,
  
});
export default router;