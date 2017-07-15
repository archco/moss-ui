import { EventBus } from '../lib/event-bus';

export default {
  name: 'trigger',
  bind(el, binding) {
    el.addEventListener('click', () => {
      EventBus.$emit(binding.arg, ...binding.value);
    });
  }
};
