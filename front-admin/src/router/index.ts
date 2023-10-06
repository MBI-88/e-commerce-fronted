import { useStore } from '@/common/stores/store'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import('@/modules/login/views/LoginView.vue'),
      meta: { transition: 'slide-right' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      beforeEnter: () => {
        const { getToken } = useStore()
        const token = getToken()
        if (token != undefined) return true
        return { path: '/' }
      },
      component: () => import('@/modules/dashboard/views/DashboardView.vue'),
      meta: { transition: 'slide-right' },
      children: [ 
        {
          path: "/database",
          name: "database",
          component: () => import('@/modules/database/views/DataBaseView.vue')
        },
      
      ]
    },

  ]
})

export default router
