<template>
  <div class="has-background-danger-dark my-4 p-4">
    <div class="field">
      <label class="label">Note</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Add New Note"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          ref="textareaRef"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);

  const textareaRef = ref(null);

  const focusTextArea = () => {
    textareaRef.value.focus();
  };

  defineExpose({
    focusTextArea
  });
</script>
