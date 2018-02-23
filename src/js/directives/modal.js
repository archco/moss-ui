/*
  v-modal:{arg}.{modifier}

  arg: modal's name.
  modifier:
    [ none ]: toggling modal.
    show: show modal.
    close: close modal.
 */
export default {
  bind(el, binding, vnode) {
    el.addEventListener('click', event => {
      event.preventDefault();
      const action = binding.modifiers.show ? 'show'
        : binding.modifiers.close ? 'close'
        : 'toggle';

      vnode.context.$root.$emit('modal-toggle', binding.arg, action);
    });
  },
};
