/*
  v-collapse:{arg}.{modifiers}="'{value}'"

  modifiers: [none = toggle] | 'show' | 'hide'
  arg: collapse id.
  value: {String} accordion group name.
 */
export default {
  name: 'accordion',

  bind(el, binding, vnode) {
    let action = binding.modifiers.show ? 'show'
      : binding.modifiers.hide ? 'hide'
      : 'toggle';

    registerToggles(el, binding, vnode); // register to toggle list.

    el.addEventListener('click', () => {
      const moss = vnode.context.$root.$moss;
      moss.accordion.toggle(binding.value, binding.arg, action);

      moss.accordionToggles[binding.value].forEach(toggle => {
        vnode.context.$root.$emit('collapse-item', toggle.collapseId, item => {
          toggle.el.dataset.collapsed = !item.show;
        });
      });
    });
  },

  inserted(el, binding, vnode) {
    vnode.context.$root.$emit('collapse-item', binding.arg, item => {
      el.dataset.collapsed = !item.show;
    });
  },
};

function registerToggles(el, binding, vnode) {
  const moss = vnode.context.$root.$moss;

  if (typeof moss.accordionToggles === 'undefined') {
    moss.accordionToggles = {};
  }

  if (typeof moss.accordionToggles[binding.value] === 'undefined') {
    moss.accordionToggles[binding.value] = [];
  }

  moss.accordionToggles[binding.value].push({
    el,
    accordionId: binding.value,
    collapseId: binding.arg,
  });
}
