<template>
  <AddEditNote
    v-model="noteContent"
    ref="addEditNoteRef"
    bgColor="link"
    label="Edit Note"
    placeholder="Edit Note"
  >
    <template #button>
      <button class="button" @click.prevent="$router.back()">Cancel</button>
      <!-- <RouterLink class="button" :to="{ name: 'notes' }">Cancel</RouterLink> -->

      <button :disabled="!noteContent" class="button is-link">Save Note</button>
    </template>
  </AddEditNote>
</template>

<script setup>
  import AddEditNote from '../components/Notes/AddEditNote.vue';
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';

  const route = useRoute();

  const noteContent = ref('');

  console.log(route.params);
</script>
