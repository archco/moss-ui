import { EventBus } from '../lib/event-bus';

export default {
  name: 'collapse',

  bind(el, binding) {
    let action = binding.modifiers.show ? 'show'
      : binding.modifiers.hide ? 'hide'
      : 'toggle';

    el.addEventListener('click', () => {
      EventBus.$emit('collapse-toggle', binding.arg, action, show => {
        el.dataset.collapsed = !show;
      });
    });
  },

  inserted(el, binding) {
    EventBus.$emit('collapse-item', binding.arg, item => {
      el.dataset.collapsed = !item.show;
    });
  },
};
