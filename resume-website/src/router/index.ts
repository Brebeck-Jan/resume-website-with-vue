import {createRouter, createWebHashHistory, RouterView} from 'vue-router'
import Home from '@/views/Start.vue';
import Tr from "@/i18n/translation"

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:locale?",
            component: RouterView,
            beforeEnter: Tr.routeMiddleware,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'cv',
                    name: 'cv',
                    component: () => import('../views/Cv.vue')
                },
                {
                    path: 'projects',
                    name: 'projects',
                    component: () => import('../views/Projects.vue')
                },
                {
                    path: 'certificates',
                    name: 'certificates',
                    component: () => import('../views/Certificates.vue')
                },
                {
                    path: 'contact',
                    name: 'contact',
                    component: () => import('../views/Contact.vue')
                }
            ]
        }
    ]
})

export default router
