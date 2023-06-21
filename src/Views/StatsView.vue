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

    <input type="text" class="input" placeholder="Enter Feedback..." v-autofocus />
  </div>
</template>

<script setup>
  import { useNotesStore } from '../stores/NotesStore';
  import { vAutofocus } from '../directives/vAutofocus';

  const notesStore = useNotesStore();

  const notesCount = notesStore.totalNotesCount;
  const totalCharactersCount = notesStore.totalCharactersCount;
</script>
