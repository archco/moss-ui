'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lib = undefined;

var _elementUtil = require('element-util');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _elementMeasurer = require('element-measurer');

var _elementMeasurer2 = _interopRequireDefault(_elementMeasurer);

var _color = require('./lib/color');

var _color2 = _interopRequireDefault(_color);

var _util = require('./lib/util');

var _util2 = _interopRequireDefault(_util);

var _index = require('./components/_index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./directives/_index');

var _index4 = _interopRequireDefault(_index3);

var _package = require('../../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultOptions = {
  insteadName: {}
}; /*!
    * moss-ui - The user interface framework for front-end.
    * @version v0.3.0
    * @link https://github.com/archco/moss-ui
    * @license MIT
    */
var lib = exports.lib = {
  Color: _color2.default,
  Util: _util2.default,
  ElementUtil: _elementUtil2.default,
  ElementMeasurer: _elementMeasurer2.default
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
      lib: lib
    };
    window.Moss = Vue.Moss = Vue.prototype.$moss = Moss;
  }
};