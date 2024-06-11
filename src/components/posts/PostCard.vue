<script>
export default {
    name: 'PostCard',

    props: {
        post: Object,
        isDetail: Boolean
    }
}
</script>

<template>
    <div class="col">
        <div class="card m-5 text-center">
            <img v-if="post.image" :src="post.image" :alt="post.title" class="card-img-top" style="height: 100px;">
            <div class="card-body">
                <h5 class="card-title mb-0">{{ post.title }}</h5>
                <div class="create-date">Created on {{ post.createdAt }}</div>
                <div class="d-flex justify-content-center">
                    <RouterLink v-if="!isDetail" :to="{ name: 'post-detail', params: { slug: post.slug } }"
                        class="btn btn-primary">
                        Show
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>