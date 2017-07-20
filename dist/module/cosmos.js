'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventBus = exports.ElementUtil = exports.Util = exports.Color = undefined;

var _color = require('./lib/color');

var _color2 = _interopRequireDefault(_color);

var _util = require('./lib/util');

var _util2 = _interopRequireDefault(_util);

var _elementUtil = require('./lib/element-util');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _eventBus = require('./lib/event-bus');

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _directives = require('./directives');

var _directives2 = _interopRequireDefault(_directives);

var _package = require('../../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultOptions = {
  insteadName: {}
}; /*!
    * cosmos_ui - The user interface framework for front-end.
    * @version v0.1.0
    * @link https://github.com/archco/cosmos-ui
    * @license MIT
    */
exports.default = {
  version: _package.version,
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) return;
    this.installed = true;

    options = Object.assign(DefaultOptions, options);

    // Add object for convenience.
    this.addCosmosObject(Vue);

    // Add components.
    _components2.default.forEach(function (component) {
      var name = options.insteadName && options.insteadName[component.name] ? options.insteadName[component.name] : component.name;

      Vue.component(name, component);
    });

    // Add directives.
    _directives2.default.forEach(function (directive) {
      Vue.directive(directive.name, directive);
    });
  },
  addCosmosObject: function addCosmosObject(Vue) {
    var Cosmos = {
      version: _package.version,
      EventBus: _eventBus.EventBus,
      lib: {
        Color: _color2.default,
        Util: _util2.default,
        ElementUtil: _elementUtil2.default
      }
    };
    window.Cosmos = Vue.Cosmos = Vue.prototype.$cosmos = Cosmos;
  }
};
exports.Color = _color2.default;
exports.Util = _util2.default;
exports.ElementUtil = _elementUtil2.default;
exports.EventBus = _eventBus.EventBus;