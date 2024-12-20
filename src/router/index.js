import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import search from '../views/search.vue'



const routes = [

  {
    path: '/',
    // name: 'App',
    // component: App,
    redirect: "/Home",
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: home
      },
      {
        path: '/Search',
        name: 'Search',
        component: search,
      },
	  {
		path:'/Refine',
		name:'Refine',
		component:()=>import('@/views/refine.vue')
	  },
      {
        path: '/Download',
        name: 'Download',
        component: () => import("@/views/download"),
      },
      {
        path: '/Tutorial',
        name: 'Tutorial',
        component: () => import("@/views/tutorial"),
      },

      {
        path: '/About',
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
