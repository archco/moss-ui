'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollspy = require('../lib/classes/scrollspy');

var _scrollspy2 = _interopRequireDefault(_scrollspy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  v-scrollspy="{ value }"

  value: {
    linkSelector: 'a',
    scrollElement: 'body', // 'body' | element | selector
    activeTarget: 'parent', // 'parent' | 'self' | selector
    activeClass: 'active',
    offset: 24,
    onActivate: null,
  }
 */
exports.default = {
  name: 'scrollspy',

  inserted: function inserted(el, binding, vnode) {
    var onActivate = function onActivate(item) {
      vnode.context.$root.$emit('scrollspy-activate', item);
      if (binding.value && typeof binding.value.onActivate === 'function') {
        binding.value.onActivate(item);
      }
    };

    var options = Object.assign({}, binding.value, { onActivate: onActivate });
    var scrollspy = new _scrollspy2.default(el, options);

    vnode.context.$root.$on('scrollspy-refresh', function () {
      return scrollspy.refresh();
    });
  }
};