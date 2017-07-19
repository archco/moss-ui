'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _cosmos = require('./cosmos');

var _cosmos2 = _interopRequireDefault(_cosmos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {};

_vue2.default.use(_cosmos2.default, options);
window.vm = new _vue2.default({
  el: '#app'
});