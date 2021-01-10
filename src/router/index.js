import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLanding from '../views/app-landing'
import LoginPage from '../views/login-page'
import RegisterPage from '@/views/register-page'
import ApartmentsList from '@/views/apartments-list'

Vue.use(VueRouter)

const routes = [
  {
    path: '/apartments',
    name: 'apartments-list',
    component: ApartmentsList,
  },
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register-page',
    component: RegisterPage,
  },
  {
    path: '/',
    name: 'landing-page',
    component: AppLanding,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
