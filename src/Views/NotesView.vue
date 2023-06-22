<template>
  <AddEditNote v-model="newNote" ref="addEditNoteRef">
    <template #button>
      <button :disabled="!newNote" class="button is-link is-danger" @click.prevent="addNote">
        Add New Note
      </button>
    </template>
  </AddEditNote>

  <SingleNote v-for="note in notes" :key="note.id" :note="note" />
</template>

<script setup>
  import SingleNote from '../components/Notes/SingleNote.vue';
  import AddEditNote from '../components/Notes/AddEditNote.vue';
  import { ref } from 'vue';
  import { useNotesStore } from '../stores/NotesStore';
  import { storeToRefs } from 'pinia';
  import { useCharactersLimit } from '../composables/useCharactersLimit';

  const notesStore = useNotesStore();

  const addEditNoteRef = ref(null);

  const { notes } = storeToRefs(notesStore);

  const newNote = ref('');

  const addNote = () => {
    notesStore.addNote(newNote.value);
    newNote.value = '';
    addEditNoteRef.value.focusTextArea();
  };

  useCharactersLimit(newNote);
</script>
