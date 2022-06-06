import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged, getAuth } from 'firebase/auth'

import HomeView from '../views/HomeView.vue'
import Start from '../views/Start.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/admin-members',
      name: 'admin-members',
      component: () => import('../views/Members.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/LoggedIn.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/section1',
      name: 'section1',
      component: () => import('../views/Section1.vue')
    },
    {
      path: '/section2',
      name: 'section2',
      component: () => import('../views/Section2.vue')
    },
    {
      path: '/section3',
      name: 'section3',
      component: () => import('../views/Section3.vue')
    },
    {
      path: '/section4',
      name: 'section4',
      component: () => import('../views/Section4a.vue')
    },
    {
      path: '/section5',
      name: 'section5',
      component: () => import('../views/Section4b.vue')
    },
    {
      path: '/section6',
      name: 'section6',
      component: () => import('../views/Section5.vue')
    },
    {
      path: '/section7',
      name: 'section7',
      component: () => import('../views/Section6.vue')
    },
    {
      path: '/end',
      name: 'end',
      component: () => import('../views/End.vue')
    },
    {
      path: '/memberView',
      name: 'memberView',
      component: () => import('../views/memberView.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue')
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert("You need to login to access this area")
      next("/admin-members")
    }
  } else {
    next()
  }
})

export default router
