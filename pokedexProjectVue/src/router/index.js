import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pokemonsList',
      props: true,
      component: () => import('../views/PokemonsList.vue')
    },
    {
      path: '/card/:cardId',
      name: 'card',
      props: true,
      component: () => import('../views/CardView.vue')
    }
  ]
})

export default router
