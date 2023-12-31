import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CounterView from '../views/PlaygroundView.vue'
import ContactView from '../views/ContactView.vue'
import ConditionsView from '../views/ConditionsView.vue'
import Gameview from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => AboutView
    }, 
    {
      path: '/playground',
      name: 'playground',
      component: () => CounterView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => ContactView
    },
    {
      path: '/conditions',
      name: 'conditions',
      component: () => ConditionsView
    },
    {
      path: '/game',
      name: 'game', 
      component: () => Gameview
    }

  ]
})

export default router
