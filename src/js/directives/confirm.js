/*
  v-confirm:{arg}="'{value}'"

  arg: event type.
  value: {String} confirm message. default value is 'Are you confirm?'.
 */
export default {
  name: 'confirm',
  bind(el, binding) {
    let message = binding.value || 'Are you confirm?';
    el.addEventListener(binding.arg, event => {
      if (!confirm(message)) event.preventDefault();
    }, true); // use capture.
  },
};
