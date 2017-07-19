'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventBus = require('../lib/event-bus');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  name: 'trigger',
  bind: function bind(el, binding) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      _eventBus.EventBus.$emit.apply(_eventBus.EventBus, [binding.arg].concat(_toConsumableArray(binding.value)));
    });
  }
};