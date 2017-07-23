export default {
  name: 'modal',
  bind(el, binding, vnode) {
    el.addEventListener('click', event => {
      event.preventDefault();
      let action = binding.modifiers.show ? 'show'
        : binding.modifiers.close ? 'close'
        : 'toggle';

      vnode.context.$root.$emit('modal-toggle', binding.arg, action);
    });
  },
};
