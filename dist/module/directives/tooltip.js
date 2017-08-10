'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'tooltip',
  bind: function bind(el, binding) {
    // v-tooltip:{arg}="'{value}'"
    // arg: direction. top | right | bottom | left
    // value: String.
    el.classList.add('tooltip');

    if (binding.arg) {
      el.classList.add('tooltip-' + binding.arg);
    }

    el.setAttribute('aria-label', binding.value);
  }
};