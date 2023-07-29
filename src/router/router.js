import Home from '../Pages/Home.vue'
import User from '../Pages/User.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routers = [
    {
        path: '/',
        component: Home,
        name: 'home',
        meta: {
            title: 'Ana Sayfa'
        }
    },
    {
        path: '/User',
        component: User,
        name: 'user',
        meta: {
            title: 'Kullanıcı'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routers
});

export default router;