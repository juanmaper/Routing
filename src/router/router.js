import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/pokemon'
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/Pokemon/layouts/PokemonLayout'),
    children: [
      { 
        path: 'home', 
        name: 'pokemon-home',
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/Pokemon/pages/ListPage') 
      },
      { 
        path: 'about', 
        name: 'pokemon-about',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/Pokemon/pages/AboutPage')
      },
      { 
        path: 'pokemonid/:id', 
        name: 'pokemon-id',
        component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/Pokemon/pages/PokemonPage'),
        props: ( route ) => {
          const id = Number( route.params.id )
          return isNaN( id ) ? { id: 1 } : { id }
        }  
      },
      {
        path: '',
        redirect: { name: 'pokemon-about' }
      }
    ] 
  },
 
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound') 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router