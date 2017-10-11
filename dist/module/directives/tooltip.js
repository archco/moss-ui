'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  v-tooltip:{arg}="'{value}'"

  arg: direction. top (default) | right | bottom | left
  value: {String} tooltip label.
 */
exports.default = {
  name: 'tooltip',
  bind: function bind(el, binding) {
    el.classList.add('tooltip');

    if (binding.arg) {
      el.classList.add('tooltip-' + binding.arg);
    }

    el.setAttribute('aria-label', binding.value);
  }
};