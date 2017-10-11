'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                                This directive is based on clipboard.js
                                                                                                                                                                                                                                                                                @link https://github.com/zenorocha/clipboard.js
                                                                                                                                                                                                                                                                               */


var _clipboard = require('clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

var _elementUtil = require('element-util');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  v-clipboard.{modifiers}:{arg}="value"

  modifiers: copy or cut.
  arg: event name when success.
  value: String | Object.

  value = {
    text: '',
    target: '',
    callback: fn,
  }
 */
exports.default = {
  name: 'clipboard',

  bind: function bind(el, binding, vnode) {
    var options = resolveOptionsOfClipboard(binding);
    var clipboard = new _clipboard2.default(el, options);
    var eventName = binding.arg || 'clipboard-success';

    clipboard.on('success', function (event) {
      vnode.context.$root.$emit(eventName, event);

      if (_typeof(binding.value) === 'object' && typeof binding.value.callback === 'function') {
        binding.value.callback(event);
      }
    });
  }
};


function resolveOptionsOfClipboard(binding) {
  var options = {
    action: function action() {
      return binding.modifiers.cut ? 'cut' : 'copy';
    }
  };

  if (typeof binding.value === 'string') {
    options.text = function () {
      return binding.value;
    };
  } else if (_typeof(binding.value) === 'object') {
    if (binding.value.text) options.text = function () {
      return binding.value.text;
    };
    if (binding.value.target) {
      options.target = function () {
        return _elementUtil2.default.getElement(binding.value.target);
      };
    }
  }

  return options;
}