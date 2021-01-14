import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLanding from '../views/app-landing'
import LoginPage from '../views/login-page'
import RegisterPage from '@/views/register-page'
import ApartmentsList from '@/views/apartments-list'
import ApartmentDetail from '@/views/apartment-detail'
import NotFound from '@/views/not-found'
import UserProfile from '@/views/user-profile'
import CreateApartment from '@/views/create-apartment'

Vue.use(VueRouter)

const routes = [
  {
    path: '/apartment',
    name: 'create-apartment',
    component: CreateApartment,
  },
  {
    path: '/apartment/:id',
    name: 'apartment-detail',
    props: true,
    component: ApartmentDetail,
  },
  {
    path: '/apartments',
    name: 'apartments-list',
    props: route => ({ userId: route.query.id }),
    component: ApartmentsList,
  },
  {
    path: '/user/:id',
    name: 'user-info',
    component: UserProfile,
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
    path: '/404-not-found',
    name: '404-not-found',
    component: NotFound,
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
