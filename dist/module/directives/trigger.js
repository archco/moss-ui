'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
  v-trigger:{arg}="[{value}]"

  arg: event name.
  value: {Array} Arguments for event listener.
 */
exports.default = {
  name: 'trigger',
  bind: function bind(el, binding, vnode) {
    el.addEventListener('click', function (event) {
      var _vnode$context$$root;

      event.preventDefault();
      (_vnode$context$$root = vnode.context.$root).$emit.apply(_vnode$context$$root, [binding.arg].concat(_toConsumableArray(binding.value)));
    });
  }
};