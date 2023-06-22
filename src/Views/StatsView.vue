<template>
  <div class="mt-3">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Total Notes Count</td>
          <td>{{ notesCount }}</td>
        </tr>
        <tr>
          <td>Total Characters Count</td>
          <td>{{ totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>

    <input type="text" class="input" placeholder="Enter Feedback..." v-autofocus v-model="feedback" />
  </div>
</template>

<script setup>
  import { useNotesStore } from '../stores/NotesStore';
  import { vAutofocus } from '../directives/vAutofocus';
  import { useCharactersLimit } from '../composables/useCharactersLimit';
  import { ref } from 'vue';

  const notesStore = useNotesStore();
  const feedback = ref('');

  const notesCount = notesStore.totalNotesCount;
  const totalCharactersCount = notesStore.totalCharactersCount;

  useCharactersLimit(feedback, 50);
</script>
