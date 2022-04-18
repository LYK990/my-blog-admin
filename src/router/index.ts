import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path:'/',
    name:'',
    component: () => import('../views/home/index.vue')
  },
  {
    path:'/login',
    name:'',
    component: () => import('../views/login/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router