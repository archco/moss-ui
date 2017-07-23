'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = require('../lib/element-util');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// v-wrap:{className}.{raw}="'{tagName}'"

exports.default = {
  name: 'wrap',
  inserted: function inserted(el, binding) {
    var className = binding.modifiers.raw ? binding.arg : binding.arg + '-wrapper';
    var tagName = binding.value || 'div';

    _elementUtil2.default.wrap(el, className, tagName);
  }
};