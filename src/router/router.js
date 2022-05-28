import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  /* Pokemon routes */
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

  /* DBZ routes */
  {
    path: '/dbz',
    name: 'dbz',
    component: () => import(/* webpackChunkName: "DBZLayout" */ '@/modules/dbz/layouts/DBZLayout'),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import(/* webpackChunkName: "Characters" */ '@/modules/dbz/pages/CharactersPage'),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import(/* webpackChunkName: "About" */ '@/modules/dbz/pages/AboutPage'),
      },
      {
        path: '',
        redirect: { name: 'dbz-characters' }
      }
    ]
  },



 /* WildCard route */
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound') 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach( ( to, from, next ) => {
  console.log( {to, from, next} )

  const random = Math.random() * 100

  if (random > 50) {
    console.log('Authenticated');
    next()
  } else {
    console.log(random, 'blocked by guard')
    next({ name: 'pokemon-home' })
  }
})


export default router