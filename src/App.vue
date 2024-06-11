<script>
import AppLoader from './components/AppLoader.vue';
import HomePage from './pages/HomePage.vue';
import { store } from './data/store';

export default {
  name: 'Blog',

  data: () => ({
    store
  }),

  components: { AppLoader, HomePage }
}
</script>

<template>

  <main class="container">

    <AppLoader v-if="store.isLoading" />

    <RouterView />

  </main>

</template>

<style lang="scss"></style>
