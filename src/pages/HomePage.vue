<script>
import { store } from '../data/store';
import PostsList from '../components/posts/PostsList.vue';
import AppAlert from '../components/AppAlert.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:3000/posts/';

export default {
    name: 'HomePage',

    data: () => ({
        store,
        posts: {
            data: []
        },
        isAlertOpen: false
    }),

    components: { PostsList, AppAlert },

    methods: {
        fetchPosts(endpoint) {
            store.isLoading = true;
            axios.get(endpoint ?? defaultEndpoint)
                .then(res => {
                    const { data } = res.data;

                    this.posts = { data };
                    this.isAlertOpen = false;
                }).catch(err => {
                    console.error(err);
                    this.isAlertOpen = true;
                }).then(() => {
                    store.isLoading = false;
                })
        }
    },

    created() {
        this.fetchPosts();
    }
}
</script>

<template>

    <h1 class="mt-5 text-center">Blog</h1>

    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchPosts" />

    <div v-if="!store.isLoading">
        <PostsList :posts="posts.data" />
    </div>

</template>

<style></style>