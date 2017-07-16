import { EventBus } from '../lib/event-bus';

export default {
  name: 'accordion',

  bind(el, binding) {
    let action = binding.modifiers.show ? 'show'
      : binding.modifiers.hide ? 'hide'
      : 'toggle';

    registerToggles(el, binding); // register to toggle list.

    el.addEventListener('click', () => {
      window.Cosmos.accordion.toggle(binding.value, binding.arg, action);

      window.Cosmos.accordionToggles[binding.value].forEach(toggle => {
        EventBus.$emit('collapse-item', toggle.collapseId, item => {
          toggle.el.dataset.collapsed = !item.show;
        });
      });
    });
  },

  inserted(el, binding) {
    EventBus.$emit('collapse-item', binding.arg, item => {
      el.dataset.collapsed = !item.show;
    });
  },
};

function registerToggles(el, binding) {
  if (typeof window.Cosmos.accordionToggles === 'undefined') {
    window.Cosmos.accordionToggles = {};
  }

  if (typeof window.Cosmos.accordionToggles[binding.value] === 'undefined') {
    window.Cosmos.accordionToggles[binding.value] = [];
  }

  window.Cosmos.accordionToggles[binding.value].push({
    el,
    accordionId: binding.value,
    collapseId: binding.arg,
  });
}
