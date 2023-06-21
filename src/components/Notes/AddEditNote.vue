<template>
  <div class="my-4 p-4" :class="`has-background-${bgColor}-dark`">
    <div class="field">
      <label class="label has-text-white" v-if="label">{{ label }}</label>
      <div class="control">
        <textarea
          class="textarea"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          v-autofocus
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
  import { vAutofocus } from '../../directives/vAutofocus';

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'danger'
    },
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Type Some Thing ....'
    }
  });
  const emit = defineEmits(['update:modelValue']);

  const textareaRef = ref(null);

  const focusTextArea = () => {
    textareaRef.value.focus();
  };

  defineExpose({
    focusTextArea
  });
</script>
