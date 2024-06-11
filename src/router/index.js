// Import vue router functions
import { createRouter, createWebHistory } from 'vue-router';

// Import pages
import HomePage from '../pages/HomePage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

// Define routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            name: 'home'
        },
        {
            path: '/not-found',
            component: NotFoundPage,
            name: 'not-found'
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: 'not-found'
        }
    ]
});

export { router }