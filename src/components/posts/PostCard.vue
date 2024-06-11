<script>
export default {
    name: 'PostCard',

    props: {
        post: Object,
        isDetail: Boolean
    },

    computed: {
        abstract() {
            const abstract = this.post.content.slice(0, 60);
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
    <div v-if="!isDetail" class="col">
        <div class="card m-5 text-center">
            <div class="card-header d-flex justify-content-center align-items-center">
                <h5 class="card-title mb-0">{{ post.title }}</h5>
            </div>
            <div class="card-body fixed-h">
                <img v-if="post.image" :src="post.image" :alt="post.title" class="card-img image-homepage">
                <div v-if="post.category" class="badge mb-3 bg-primary">
                    {{ post.category.name }}
                </div>
                <p class="card-text">{{ abstract }}</p>
                <div class="create-date mb-3">Created on {{ pubblicationDate }}</div>
                <div>Author: <strong>{{ post.user.name }}</strong></div>
            </div>
            <div class="card-footer d-flex justify-content-center">
                <RouterLink :to="{ name: 'post-detail', params: { slug: post.slug } }" class="btn btn-primary">
                    Show
                </RouterLink>

            </div>
        </div>
    </div>

    <div v-else="isDetail" class="col">
        <div class="card m-5">
            <div class="card-header d-flex justify-content-center align-items-center">
                <h5 class="card-title mb-0">{{ post.title }}</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4 m-auto">
                        <img v-if="post.image" :src="post.image" :alt="post.title" class="card-img image-detail">
                    </div>
                    <div class="col-8">
                        <div v-if="post.category" class="badge mb-3 bg-primary">
                            {{ post.category.name }}
                        </div>
                        <p class="card-text">{{ post.content }}</p>
                        <ul v-if="post.tags?.length">
                            <li v-for="tag in post.tags" :key="tag.name">
                                {{ tag.name }}
                            </li>
                        </ul>
                        <div class="create-date mb-3">Created on {{ pubblicationDate }}</div>
                        <div>Author: <strong>{{ post.user.name }}</strong></div>
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-center">

                <RouterLink :to="{ name: 'home' }" class="btn btn-primary">
                    Home
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.create-date {
    font-size: 14px;
}

.card-header {
    height: 60px;
}

.fixed-h {
    height: 350px;
}

.image-homepage {
    height: 150px;
    margin-bottom: 10px;
}

.image-detail {
    height: 250px;
}
</style>