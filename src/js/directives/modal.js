import { EventBus } from '../lib/event-bus';

export default {
  name: 'modal',
  bind(el, binding) {
    el.addEventListener('click', () => {
      let action = binding.modifiers.show ? 'show'
        : binding.modifiers.close ? 'close'
        : 'toggle';

      EventBus.$emit('modal-toggle', binding.arg, action);
    });
  }
};
