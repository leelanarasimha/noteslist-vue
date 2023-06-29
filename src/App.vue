<template>
  <NavBar />
  <div class="container px-2">
    <RouterView />
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import NavBar from './components/Layout/NavBar.vue';
  import { useAuthStore } from './stores/AuthStore';

  const authStore = useAuthStore();

  onMounted(() => {
    authStore.init();
  });
</script>

<style>
  @import 'bulma/css/bulma.min.css';
</style>
