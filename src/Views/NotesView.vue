<template>
  <div class="has-background-danger-dark my-4 p-4">
    <div class="field">
      <label class="label">Note</label>
      <div class="control">
        <textarea class="textarea" placeholder="Add New Note" v-model="newNote" ref="newNoteRef"></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button :disabled="!newNote" class="button is-link is-danger" @click.prevent="addNote">
          Add New Note
        </button>
      </div>
    </div>
  </div>

  <SingleNote v-for="note in notes" :key="note.id" :note="note" @onDeleteClicked="deleteNote" />
</template>

<script setup>
  import SingleNote from '../components/Notes/SingleNote.vue';
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

  const deleteNote = (idToDelete) => {
    notes.value = notes.value.filter((note) => note.id !== idToDelete);
  };
</script>
