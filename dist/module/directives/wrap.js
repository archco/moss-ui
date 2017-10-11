'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = require('element-util');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  v-wrap:{arg}.{modifiers}="'{value}'"

  arg: class name. It is auto convert. e.g.) item -> item-wrapper
  modifiers:
    raw: If this given, it does not convert class name.
  value: {String} Tag name of wrapper. default value is 'div'.
 */
exports.default = {
  name: 'wrap',
  inserted: function inserted(el, binding) {
    var className = binding.modifiers.raw ? binding.arg : binding.arg + '-wrapper';
    var tagName = binding.value || 'div';

    _elementUtil2.default.wrap(el, className, tagName);
  }
};