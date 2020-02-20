import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'layout',
    path: '/',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/Mine.vue')
      }
    ]
  },
  {
    path: '/record',
    name: 'record',
    component: () => import('../views/Record.vue')
  },
  {
    path: '/charge',
    name: 'charge',
    component: () => import('../views/Charge.vue')
  },
  {
    path: '/bounty',
    name: 'bounty',
    component: () => import('../views/Bounty.vue')
  },
  {
    path: '/bounty/rule',
    name: 'bountyRule',
    component: () => import('../views/BountyRule.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/Faq.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/Privacy.vue')
  },
  {
    path: '/inviteRecord',
    name: 'inviteRecord',
    component: () => import('../views/inviteRecord.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title)
  next()
})

export default router
