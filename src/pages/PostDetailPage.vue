<script>
import axios from 'axios';
import { store } from '../data/store';
import PostCard from '../components/posts/PostCard.vue';
const defaultEndpoint = 'http://localhost:3000/posts/';

export default {
    name: 'PostDetailPage',

    components: { PostCard },

    data: () => ({
        store,
        post: null
    }),

    methods: {
        getPost() {
            store.isLoading = true;
            axios.get(defaultEndpoint + this.$route.params.slug)
                .then(res => { this.post = res.data; })
                .catch(err => { console.error(err.message) })
                .then(() => { store.isLoading = false; })
        }
    },

    created() {
        this.getPost();
    }
}
</script>

<template>

    <PostCard v-if="!store.isLoading && post" :post="post" :isDetail="true" />

</template>

<style></style>