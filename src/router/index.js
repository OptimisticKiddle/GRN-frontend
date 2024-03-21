import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import search from '../views/search.vue'
import Layout from '../layout/Layout.vue'
// import statistics from '../views/statistics.vue'
import detail from '../views/detail.vue'
import App from '../App.vue'


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
        meta:{keepAlive: true}, // 是否缓存组件
        component: search,
        
      },
      {
        path: '/detail',
            name: 'detail',
            component: detail,
            redirect: "/Total",
            children: [
              {
                path: '/Total',
                name: 'Total',
                component: () => import("@/views/detail/QC.vue"),
              },
              {
                path: '/Diff_peak',
                name: 'Diff_peak',
                component: () => import("@/views/detail/KO_gene_activity.vue"),
              },
              {
                path: '/Diff_enrichment',
                name: 'Diff_enrichment',
                component: () => import("@/views/detail/Gene_activity.vue"),
              },
            
              {
                path: '/Diff_footprint',
                name: 'Diff_footprint',
                component: () => import("@/views/detail/Dim_reduction_clustering.vue"),
              },
             
            ]
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
