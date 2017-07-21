'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventBus = require('../lib/event-bus');

exports.default = {
  name: 'accordion',

  bind: function bind(el, binding) {
    var action = binding.modifiers.show ? 'show' : binding.modifiers.hide ? 'hide' : 'toggle';

    registerToggles(el, binding); // register to toggle list.

    el.addEventListener('click', function () {
      window.Moss.accordion.toggle(binding.value, binding.arg, action);

      window.Moss.accordionToggles[binding.value].forEach(function (toggle) {
        _eventBus.EventBus.$emit('collapse-item', toggle.collapseId, function (item) {
          toggle.el.dataset.collapsed = !item.show;
        });
      });
    });
  },
  inserted: function inserted(el, binding) {
    _eventBus.EventBus.$emit('collapse-item', binding.arg, function (item) {
      el.dataset.collapsed = !item.show;
    });
  }
};


function registerToggles(el, binding) {
  if (typeof window.Moss.accordionToggles === 'undefined') {
    window.Moss.accordionToggles = {};
  }

  if (typeof window.Moss.accordionToggles[binding.value] === 'undefined') {
    window.Moss.accordionToggles[binding.value] = [];
  }

  window.Moss.accordionToggles[binding.value].push({
    el: el,
    accordionId: binding.value,
    collapseId: binding.arg
  });
}