<template>
  <AddEditNote v-model="newNote" ref="addEditNoteRef">
    <template #button>
      <button :disabled="!newNote" class="button is-link is-danger" @click.prevent="addNote">
        Add New Note
      </button>
    </template>
  </AddEditNote>

  <progress class="progress is-large is-info" max="100" v-if="!notesStore.notesLoaded" />

  <template v-else>
    <SingleNote v-for="note in notes" :key="note.id" :note="note" />
  </template>

  <div
    class="has-text-centered py-6 is-size-4 has-text-grey-light is-family-monospace"
    v-if="!notes.length && notesStore.notesLoaded"
  >
    No Notes Added here yet!!
  </div>
</template>

<script setup>
  import SingleNote from '../components/Notes/SingleNote.vue';
  import AddEditNote from '../components/Notes/AddEditNote.vue';
  import { onMounted, ref } from 'vue';
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
