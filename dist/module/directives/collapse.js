'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventBus = require('../lib/event-bus');

exports.default = {
  name: 'collapse',

  bind: function bind(el, binding) {
    var action = binding.modifiers.show ? 'show' : binding.modifiers.hide ? 'hide' : 'toggle';

    el.addEventListener('click', function () {
      _eventBus.EventBus.$emit('collapse-toggle', binding.arg, action, function (show) {
        el.dataset.collapsed = !show;
      });
    });
  },
  inserted: function inserted(el, binding) {
    _eventBus.EventBus.$emit('collapse-item', binding.arg, function (item) {
      el.dataset.collapsed = !item.show;
    });
  }
};