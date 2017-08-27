'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementUtil = exports.Util = exports.Color = undefined;

var _color = require('./lib/color');

var _color2 = _interopRequireDefault(_color);

var _util = require('./lib/util');

var _util2 = _interopRequireDefault(_util);

var _elementUtil = require('./lib/element-util');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _index = require('./components/_index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./directives/_index');

var _index4 = _interopRequireDefault(_index3);

var _package = require('../../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * moss-ui - The user interface framework for front-end.
 * @version v0.2.2
 * @link https://github.com/archco/moss-ui
 * @license MIT
 */
var DefaultOptions = {
  insteadName: {}
};

exports.default = {
  version: _package.version,
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) return;
    this.installed = true;

    options = Object.assign(DefaultOptions, options);

    // Add object for convenience.
    this.addMossObject(Vue);

    // Add components.
    _index2.default.forEach(function (component) {
      var name = options.insteadName && options.insteadName[component.name] ? options.insteadName[component.name] : component.name;

      Vue.component(name, component);
    });

    // Add directives.
    _index4.default.forEach(function (directive) {
      Vue.directive(directive.name, directive);
    });
  },
  addMossObject: function addMossObject(Vue) {
    var Moss = {
      version: _package.version,
      lib: {
        Color: _color2.default,
        Util: _util2.default,
        ElementUtil: _elementUtil2.default
      }
    };
    window.Moss = Vue.Moss = Vue.prototype.$moss = Moss;
  }
};
exports.Color = _color2.default;
exports.Util = _util2.default;
exports.ElementUtil = _elementUtil2.default;