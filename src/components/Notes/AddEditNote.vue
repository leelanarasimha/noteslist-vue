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
</template>
