import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Example from '../views/Example.vue'
import Test from '../views/test1.vue'
import MarkDownInfo from '../views/MarkDownInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Example',
      name: 'example',
      component: Example
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/MarkDownInfo',
      name: 'markDown',
      component: MarkDownInfo
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
