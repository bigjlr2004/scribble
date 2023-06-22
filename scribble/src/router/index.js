import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('../views/CreateView.vue')
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
