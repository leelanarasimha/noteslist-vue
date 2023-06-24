<template>
  <NavBar />
  <div class="container px-2">
    <RouterView />
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import NavBar from './components/Layout/NavBar.vue';
  import { useNotesStore } from './stores/NotesStore';

  const notesStore = useNotesStore();

  onMounted(() => {
    notesStore.getNotes();
  });
</script>

<style>
  @import 'bulma/css/bulma.min.css';
</style>
