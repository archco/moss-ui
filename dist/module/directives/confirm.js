'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'confirm',
  bind: function bind(el, binding) {
    var message = binding.value || 'Are you confirm?';
    el.addEventListener(binding.arg, function (event) {
      if (!confirm(message)) event.preventDefault();
    }, true); // use capture.
  }
};