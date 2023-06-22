import { watch } from 'vue';

export function useCharactersLimit(value, limit = 100) {
  watch(value, (newValue, oldValue) => {
    if (newValue.length === limit) {
      alert(`Sorry!! more than ${limit} characters are not allowed`);
    }
  });
}
