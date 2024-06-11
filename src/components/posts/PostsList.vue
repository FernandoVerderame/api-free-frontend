<script>
import PostCard from './PostCard.vue';

export default {
    name: 'PostsList',

    components: { PostCard },

    props: {
        posts: Array
    }
};
</script>

<template>
    <section id="posts-list">
        <div v-if="posts.length" class="row row-cols-3">
            <PostCard v-for="post in posts" :key="post.id" :post="post" />
        </div>
        <h4 v-else>There aren't any Posts.</h4>
    </section>
</template>

<style></style>