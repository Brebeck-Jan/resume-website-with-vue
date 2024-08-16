import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Start.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cv',
            name: 'cv',
            component: () => import('../views/CV.vue')
        },
        {
            path: '/legal',
            name: 'legal',
            component: () => import('../views/Legal.vue')
        }
    ]
})

export default router
