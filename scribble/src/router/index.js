import { createRouter, createWebHistory } from 'vue-router'
import { user } from '../stores/authStore'

const router = createRouter({
  history: createWebHistory(),
  // ...
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/create',
      component: () => import('../views/CreateView.vue'),
      beforeEnter: () => {
        if (!user.value) {
          return '/not-found'
        } else {
          return true
        }
      }
    },
    {
      path: '/post/:id',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
