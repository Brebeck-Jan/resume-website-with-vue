import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/MainContent.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/start',
            name: 'start',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Start.vue')
        },

        {
            path: '/cv',
            name: 'cv',
            component: () => import('../views/CV.vue')
        }
    ]
})

export default router
