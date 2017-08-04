export default {
  name: 'tooltip',
  bind(el, binding) {
    // v-tooltip:{arg}="'{value}'"
    // arg: direction. top | right | bottom | left
    // value: String.
    el.classList.add('tooltip');

    if (binding.arg) {
      el.classList.add(`tooltip-${binding.arg}`);
    }

    el.setAttribute('aria-label', binding.value);
  },
};
