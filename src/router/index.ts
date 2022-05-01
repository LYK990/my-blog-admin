import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'
import productRoutes from './modules/product'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
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

router.beforeEach(() => {
  nprogress.start()
})

router.afterEach(() => {
  nprogress.done()
})

export default router