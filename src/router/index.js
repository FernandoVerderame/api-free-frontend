// Import vue router functions
import { createRouter, createWebHistory } from 'vue-router';

// Import pages
import HomePage from '../pages/HomePage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import PostDetailPage from '../pages/PostDetailPage.vue';

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
            path: '/posts/:slug',
            component: PostDetailPage,
            name: 'post-detail'
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