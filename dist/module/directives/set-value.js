'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('../lib/util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  v-set-value:{arg}="'{value}'"

  arg: Key of query string.
  value: {String} Set value directly.
 */
exports.default = {
  name: 'set-value',
  bind: function bind(el, binding) {
    if (binding.value) {
      el.value = binding.value;
    } else {
      var queries = _util2.default.locationSearchToObject();

      if (queries && queries[binding.arg]) {
        el.value = queries[binding.arg];
      }
    }
  }
};