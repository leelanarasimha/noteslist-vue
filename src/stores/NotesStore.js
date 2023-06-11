import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref([
    { id: 'id1', content: 'First Note' },
    { id: 'id2', content: 'Second Note' }
  ]);

  const addNote = (noteContent) => {
    const currentDate = new Date().getTime().toString();
    const note = {
      id: currentDate,
      content: noteContent
    };

    notes.value.unshift(note);
  };

  const deleteNote = (noteId) => {
    notes.value = notes.value.filter((note) => note.id !== noteId);
  };

  return {
    notes,
    addNote,
    deleteNote
  };
});
