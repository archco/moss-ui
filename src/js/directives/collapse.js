/*
  v-collapse:{arg}.{modifiers}

  modifiers: [none = toggle] | 'show' | 'hide'
  arg: collapse id.
 */
export default {
  bind(el, binding, vnode) {
    const collapseId = binding.arg;
    const action = binding.modifiers.show ? 'show'
      : binding.modifiers.hide ? 'hide'
      : 'toggle';

    el.addEventListener('click', () => {
      vnode.context.$root.$emit('collapse-toggle', collapseId, action);
    });
    vnode.context.$root.$on('collapse-state', item => {
      if (item.id === collapseId) {
        el.dataset.expanded = item.expanded;
      }
    });
  },
};
