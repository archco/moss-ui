/*
  v-tooltip:{arg}="'{value}'"

  arg: direction. top (default) | right | bottom | left
  value: {String} tooltip label.
 */
export default {
  name: 'tooltip',
  bind(el, binding) {
    el.classList.add('tooltip');

    if (binding.arg) {
      el.classList.add(`tooltip-${binding.arg}`);
    }

    el.setAttribute('aria-label', binding.value);
  },
};
