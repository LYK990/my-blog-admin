import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '../layout/AppLayouts.vue'
import productRoutes from './modules/product'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      ...productRoutes
    ]
  },
  {
    path: '/login',
    name: '',
    component: () => import('../views/login/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router