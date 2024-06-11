<script>
export default {
    name: 'PostCard',

    props: {
        post: Object,
        isDetail: Boolean
    },

    computed: {
        abstract() {
            const abstract = this.post.content.slice(0, 100);
            return abstract + '...';
        },

        pubblicationDate() {
            const date = new Date(this.post.createdAt);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            let minutes = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;
            if (minutes < 10) minutes = '0' + minutes;

            return `${day}/${month}/${year} at ${hours}:${minutes}`;
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card m-5 text-center">
            <img v-if="post.image" :src="post.image" :alt="post.title" class="card-img-top" style="height: 100px;">
            <div class="card-body">
                <h5 class="card-title mb-0">{{ post.title }}</h5>
                <p class="card-text">{{ isDetail ? post.content : abstract }}</p>
                <div class="create-date">Created on {{ pubblicationDate }}</div>
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

<style lang="scss" scoped>
.create-date {
    font-size: 14px;
    margin-bottom: 20px;
}
</style>