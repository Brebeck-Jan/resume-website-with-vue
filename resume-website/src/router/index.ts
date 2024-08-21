import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Start.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cv',
            name: 'cv',
            component: () => import('../views/Cv.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/Projects.vue')
        },
        {
            path: '/certificates',
            name: 'certificates',
            component: () => import('../views/Certificates.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue')
        }
    ]
})

export default router
