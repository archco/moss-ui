import { EventBus } from '../lib/event-bus';

export default {
  name: 'trigger',
  bind(el, binding) {
    el.addEventListener('click', event => {
      event.preventDefault();
      EventBus.$emit(binding.arg, ...binding.value);
    });
  },
};
