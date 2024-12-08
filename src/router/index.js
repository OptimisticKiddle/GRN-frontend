import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import search from '../views/search.vue'
import Layout from '../layout/Layout.vue'
// import statistics from '../views/statistics.vue'
import detail from '../views/detail.vue'
import App from '../App.vue'
import { compile } from 'vue'


const routes = [

  {
    path: '/',
    // name: 'App',
    // component: App,
    redirect: "/home",
    children: [
      {
        path: '/home',
        name: 'Home',
        component: home
      },
      // {
      //   path: '/statistics',
      //   name: 'Statistics',
      //   meta:{keepAlive: true}, // 是否缓存组件
      //   component: statistics
      // },
      {
        path: '/search',
        name: 'Search',
        component: search,
      },
	  {
		path:'/Refine/:gse/:gsm',
		name:'Refine',
		component:()=>import('@/views/refine.vue')
	  },
      {
        path: '/download',
        name: 'Download',
        component: () => import("@/views/download"),
      },
      {
        path: '/tutorial',
        name: 'Tutorial',
        component: () => import("@/views/tutorial"),
      },
      // {
      //   path: '/help',
      //   name: 'Help',
      //   component: () => import("@/views/help"),
      // },
      {
        path: '/about',
        name: 'About',
        component: () => import("@/views/about"),
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
