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

  <div class="card mb-4" v-for="note in notes" :key="note.id">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const notes = ref([
    { id: 'id1', content: 'First Note' },
    { id: 'id2', content: 'Second Note' }
  ]);

  const newNoteRef = ref(null);

  const newNote = ref('');

  const addNote = () => {
    const currentDate = new Date().getTime().toString();
    const note = {
      id: currentDate,
      content: newNote.value
    };

    notes.value.unshift(note);
    newNote.value = '';
    newNoteRef.value.focus();
  };
</script>
