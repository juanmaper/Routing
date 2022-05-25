import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/Pokemon/pages/ListPage') 
  },
  { 
    path: '/about', 
    component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/Pokemon/pages/AboutPage')
  },
  { 
    path: '/:id', 
    name: 'pokemon-id',
    component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/Pokemon/pages/PokemonPage'),
    props: ( route ) => {
      const id = Number( route.params.id )
      return isNaN( id ) ? { id: 1 } : { id }
    }  
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