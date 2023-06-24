<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" ref="deleteModalRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">Are you sure you want to Delete?</section>
      <footer class="modal-card-foot">
        <button class="button is-danger" @click="deleteNote">Delete</button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import { onClickOutside } from '@vueuse/core';
  import { useNotesStore } from '../../stores/NotesStore';

  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    },
    noteId: {
      type: String,
      required: true
    }
  });

  const notesStore = useNotesStore();

  const handleClose = (event) => {
    console.log('key close event');
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const deleteNote = () => {
    //console.log(props.noteId);
    notesStore.deleteNote(props.noteId);
  };

  const closeModal = () => {
    emits('update:modelValue', false);
  };

  const deleteModalRef = ref(null);

  onClickOutside(deleteModalRef, closeModal);

  onMounted(() => {
    document.addEventListener('keyup', handleClose);
  });

  onUnmounted(() => {
    document.removeEventListener('keyup', handleClose);
  });

  const emits = defineEmits(['update:modelValue']);
</script>
