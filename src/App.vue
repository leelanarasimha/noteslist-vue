<template>
  <NavBar />
  <div class="container px-2">
    <RouterView />
  </div>
</template>

<script setup>
  import NavBar from './components/Layout/NavBar.vue';
</script>

<style>
  @import 'bulma/css/bulma.min.css';
</style>
