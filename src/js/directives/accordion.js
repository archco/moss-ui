/*
  v-collapse:{arg}.{modifiers}="'{value}'"

  modifiers: [none = toggle] | 'show' | 'hide'
  arg: collapse id.
  value: {String} accordion group name.
 */
export default {
  bind(el, binding, vnode) {
    const accordion = binding.value;
    const collapseId = binding.arg;
    const action = binding.modifiers.show ? 'show'
      : binding.modifiers.hide ? 'hide'
      : 'toggle';

    // registerToggles(el, binding, vnode); // register to toggle list.

    el.addEventListener('click', () => {
      vnode.context.$root.$emit('accordion-toggle', accordion, collapseId, action);
    });
    vnode.context.$root.$on('collapse-state', item => {
      if (item.accordion === accordion && item.id === collapseId) {
        el.dataset.expanded = item.expanded;
      }
    });
  }
};
