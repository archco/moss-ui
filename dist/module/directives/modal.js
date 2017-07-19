'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventBus = require('../lib/event-bus');

exports.default = {
  name: 'modal',
  bind: function bind(el, binding) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      var action = binding.modifiers.show ? 'show' : binding.modifiers.close ? 'close' : 'toggle';

      _eventBus.EventBus.$emit('modal-toggle', binding.arg, action);
    });
  }
};