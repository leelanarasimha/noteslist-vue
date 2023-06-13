<template>
  <AddEditNote />

  <SingleNote v-for="note in notes" :key="note.id" :note="note" />
</template>

<script setup>
  import SingleNote from '../components/Notes/SingleNote.vue';
  import AddEditNote from '../components/Notes/AddEditNote.vue';
  import { ref } from 'vue';
  import { useNotesStore } from '../stores/NotesStore';
  import { storeToRefs } from 'pinia';

  const notesStore = useNotesStore();

  const newNoteRef = ref(null);

  const { notes } = storeToRefs(notesStore);

  const newNote = ref('');

  const addNote = () => {
    notesStore.addNote(newNote.value);
    newNote.value = '';
    newNoteRef.value.focus();
  };
</script>
