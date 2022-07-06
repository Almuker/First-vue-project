import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/views/home/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/views/about/AboutView.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../components/views/catalog/CatalogView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/views/cart/CartMain.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
