/*
  v-trigger:{arg}="[{value}]"

  arg: event name.
  value: {Array} Arguments for event listener.
 */
export default {
  name: 'trigger',
  bind(el, binding, vnode) {
    el.addEventListener('click', event => {
      event.preventDefault();
      vnode.context.$root.$emit(binding.arg, ...binding.value);
    });
  },
};
