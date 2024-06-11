<script>
import AppLoader from './components/AppLoader.vue';
import { store } from './data/store';

export default {
  name: 'Blog',

  data: () => ({
    store
  }),

  components: { AppLoader }
}
</script>

<template>

  <main class="container">

    <AppLoader v-if="store.isLoading" />

  </main>

</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
