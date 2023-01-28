import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children : [
        {
          path: '',
          name: 'Main',
          component: Main
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        }
      ]
    }
  ]
})

export default router