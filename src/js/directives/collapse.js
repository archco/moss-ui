export default {
  name: 'collapse',

  bind(el, binding, vnode) {
    let action = binding.modifiers.show ? 'show'
      : binding.modifiers.hide ? 'hide'
      : 'toggle';

    el.addEventListener('click', () => {
      vnode.context.$root.$emit('collapse-toggle', binding.arg, action, show => {
        el.dataset.collapsed = !show;
      });
    });
  },

  inserted(el, binding, vnode) {
    vnode.context.$root.$emit('collapse-item', binding.arg, item => {
      el.dataset.collapsed = !item.show;
    });
  },
};
