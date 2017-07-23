'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'collapse',

  bind: function bind(el, binding, vnode) {
    var action = binding.modifiers.show ? 'show' : binding.modifiers.hide ? 'hide' : 'toggle';

    el.addEventListener('click', function () {
      vnode.context.$root.$emit('collapse-toggle', binding.arg, action, function (show) {
        el.dataset.collapsed = !show;
      });
    });
  },
  inserted: function inserted(el, binding, vnode) {
    vnode.context.$root.$emit('collapse-item', binding.arg, function (item) {
      el.dataset.collapsed = !item.show;
    });
  }
};