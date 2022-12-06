import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MakananView from '../views/MakananView.vue'
import MinumanView from '../views/MinumanView.vue'
import SnackView from '../views/SnackView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import DetailMakananView from '../views/DetailMakananView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/makanan',
    name: 'makanan',
    component: MakananView
  },
  {
    path: '/minuman',
    name: 'minuman',
    component: MinumanView
  },
  {
    path: '/snack',
    name: 'snack',
    component: SnackView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/detailmakanan',
    name: 'detailmakanan',
    component: DetailMakananView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
