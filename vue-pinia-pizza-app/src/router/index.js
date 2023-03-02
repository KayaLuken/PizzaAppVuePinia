import { createRouter, createWebHistory } from 'vue-router'
import DoughView from '../views/DoughView.vue'
import ToppingsView from '../views/ToppingsView.vue'
import PizzaStylesView from '../views/PizzaStylesView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import LandingView from '../views/LandingView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/toppings',
      name: 'toppings',
      component: () => import('../views/ToppingsView.vue')
    },
    {
      path: '/pizzastyles',
      name: 'pizzastyles',
      component: () => import('../views/PizzaStylesView.vue')
    },
    {
      path: '/dough',
      name: 'dough',
      component: () => import('../views/DoughView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    }
  ]
})

export default router
