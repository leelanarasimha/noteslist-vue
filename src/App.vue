<template>
  <NavBar />
  <div>
    <RouterView />
  </div>
</template>

<script setup>
  import NavBar from './components/Layout/NavBar.vue';
</script>

<style>
  @import 'bulma/css/bulma.min.css';
</style>
