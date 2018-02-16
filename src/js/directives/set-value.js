import { locationSearchToObject } from '../lib/util';

/*
  v-set-value:{arg}="'{value}'"

  arg: Key of query string.
  value: {String} Set value directly.
 */
export default {
  bind(el, binding) {
    if (binding.value) {
      el.value = binding.value;
    } else {
      const queries = locationSearchToObject();

      if (queries && queries[binding.arg]) {
        el.value = queries[binding.arg];
      }
    }
  },
};
