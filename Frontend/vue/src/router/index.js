import Vue from 'vue'
import VueRouter from 'vue-router'
import connexion from '../components/connexion'
import inscription from '../components/inscription'
import poste from '../components/post'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'connexion',
    component: connexion,
  },
  {
    path: '/inscription',
    name: 'inscription',
    component:inscription,
  },

  {
    path: '/poste',
    name: 'poste',
    component:poste,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
