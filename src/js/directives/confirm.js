export default {
  name: 'confirm',
  bind(el, binding) {
    let message = binding.value || 'Are you confirm?';
    el.addEventListener(binding.arg, event => {
      if (!confirm(message)) event.preventDefault();
    }, true); // use capture.
  },
};
