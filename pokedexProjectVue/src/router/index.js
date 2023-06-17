import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/NewView.vue')
    },
    {
      path: '/for',
      name: 'for',
      component: () => import('../views/ForView.vue')
    },
    {
      path: '/component',
      name: 'component',
      props: true,
      component: () => import('../views/ComponentView.vue')
    },
    {
      path: '/single/:turtleId',
      name: 'single',
      props: true,
      component: () => import('../views/SingleView.vue')
    },
    {
      path: '/api',
      name: 'api',
      props: true,
      component: () => import('../views/ApiView.vue')
    },
    {
      path: '/api2',
      name: 'api2',
      props: true,
      component: () => import('../views/ApiView2.vue')
    },
    {
      path: '/photo/:photoId',
      name: 'photo',
      props: true,
      component: () => import('../views/PhotoView.vue')
    }
  ]
})

export default router
