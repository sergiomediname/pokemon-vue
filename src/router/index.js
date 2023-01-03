import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PokemonsView.vue')
    },
    // {
    //   path: '/pokemons',
    //   name: 'pokemons',
    //   component: () => import('../views/PokemonsView.vue')
    // },
    {
      path: '/pokemons/:name',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue')
    },
    {
      path: '/type/:name',
      name: 'pokemon_type',
      component: () => import('../views/PokemonTypesView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
