import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/subpage/TestView.vue'
import BasicView from '../views/subpage/BasicView.vue'
import Test1View from '../views/subpage/Test1View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/basic',
    name: 'basic',
    component: BasicView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },  
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/test01',
    name: 'test01',
    component: Test1View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
