<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="handleDeleteClick">Delete</a>
    </footer>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useNotesStore } from '../../stores/NotesStore';

  const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  });

  const notesStore = useNotesStore();

  const characterLength = computed(() => {
    const noteLength = props.note.content.length;
    const description = noteLength > 1 ? 'characters' : 'character';

    return `${props.note.content.length} ${description}`;
  });

  const handleDeleteClick = () => {
    notesStore.deleteNote(props.note.id);
  };
</script>
