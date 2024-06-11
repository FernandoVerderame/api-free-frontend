<script>
export default {
    name: 'NotFoundPage'
}
</script>

<template>
    <div class="not-found">
        <h3>404 | Page Not Found</h3>
        <button class="btn btn-secondary" @click="$router.back()">Come Back</button>
    </div>
</template>

<style lang="scss" scoped>
.not-found {
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h3 {
        text-align: center;
    }
}
</style>