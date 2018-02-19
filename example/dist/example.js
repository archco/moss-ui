/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tree = __webpack_require__(1);

var _partials = __webpack_require__(2);

var Partials = _interopRequireWildcard(_partials);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* eslint-disable no-unused-vars */
var options = {};

window.vm = new window.Vue({
  el: '#app',
  data: {
    treeData: _tree.treeData,
    treeData2: _tree.treeData2
  },
  methods: {
    test: function test(arg) {
      console.log(arg);
    },
    eventTest: function eventTest(event) {
      console.log(event);
    }
  },

  beforeMount: function beforeMount() {
    this.$on('clipboard-success', function (event) {
      var msg = event.action == 'copy' ? 'Copied' : 'Cut';
      window.Moss.toast(msg + ' on clipboard.');
    });
  }
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = Object.values(Partials)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var fn = _step.value;

    fn();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var treeData = exports.treeData = [{
  name: 'MOSS-UI',
  items: [{ name: 'SCSS' }, { name: 'Vue' }, {
    name: 'JS Libraries',
    items: [{ name: 'Color' }, { name: 'ElementUtil' }, { name: 'Util' }]
  }]
}];

var treeData2 = exports.treeData2 = [{
  name: '<a href="./index.html">MOSS-UI</a>',
  opened: true,
  items: [{ name: '<a href="./scss.html">SCSS</a>' }, { name: '<a href="./vue.html">Vue</a>' }, {
    name: '<a href="./js-libraries.html">JS Libraries</a>',
    items: [{ name: '<a href="./js-libraries.html#color">Color</a>' }, { name: '<a href="./js-libraries.html#element-util">ElementUtil</a>' }, { name: '<a href="./js-libraries.html#util">Util</a>' }]
  }]
}];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.information = information;
exports.asideMenu = asideMenu;
exports.toast = toast;
exports.messageBox = messageBox;
exports.colorLibrary = colorLibrary;
exports.elementUtil = elementUtil;
exports.arrowIcon = arrowIcon;
exports.caretIcon = caretIcon;
exports.closeIcon = closeIcon;
// information
function information() {
  document.querySelector('#copyright-year').innerHTML = new Date().getFullYear();
  document.querySelectorAll('.moss-version').forEach(function (elm) {
    return elm.innerHTML = window.Moss.version;
  });
}

// aside menu.
function asideMenu() {
  var docSize = new window.Moss.lib.ElementMeasurer();
  var asideMenu = document.querySelector('aside .menu');
  if (!asideMenu) return;

  var onScroll = function onScroll() {
    if (docSize.scrollTop > asideMenu.offsetTop) {
      asideMenu.style.position = 'fixed';
      asideMenu.style.top = '45px';
    } else {
      asideMenu.style.position = null;
      asideMenu.style.top = null;
    }
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
}

// toast.
function toast() {
  var toastCount = 0;
  window.toastShow = function () {
    window.Moss.toast('toast test ' + toastCount);
    toastCount++;
  };
}

// message-box
function messageBox() {
  window.showMessage = function () {
    var text = document.querySelector('#input-msg').value || 'empty';
    var status = document.querySelector('#select-msg').value;
    window.Moss.messageBox.add(text, status);
  };
}

// Color library.
function colorLibrary() {
  var Color = window.Moss.lib.Color;

  window.convertColor = function (hexToRgb) {
    var inputHex = document.querySelector('#input-hex-color');
    var inputRgb = document.querySelector('#input-rgb-color');

    if (hexToRgb) {
      inputRgb.value = new Color(inputHex.value).toRgb();
    } else {
      inputHex.value = new Color(inputRgb.value).toHex(true);
    }
  };

  window.getBrightness = function () {
    var input = document.querySelector('#input-lightness');
    var value = new Color(input.value).brightness;
    document.querySelector('#output-lightness').innerHTML = 'lightness value: ' + value;
  };

  window.getContrast = function () {
    var input = document.querySelector('#input-contrast');
    var output = document.querySelector('#output-contrast');
    var color = new Color(input.value);
    var contrast = new Color(color.isLight ? '#333' : '#fff');

    output.style.backgroundColor = input.value;
    output.style.color = contrast.toHex(true);
    output.innerHTML = 'bg-color: ' + color.toRgb() + ' contrast-color: ' + contrast.toRgb();
  };
}

// ElementUtil
function elementUtil() {
  var eu = window.Moss.lib.ElementUtil;

  // toggle class
  eu.addListener('#btn-toggle-class', 'click', function () {
    console.log('click');
    eu.toggleClass('#toggle-class-target', 'bg-color-danger');
  });

  // toggle show
  eu.addListener('#btn-toggle-show', 'click', function () {
    eu.toggleShow('#toggle-show-target');
  });

  // filter list
  eu.addListener('#input-filter-list', 'keyup', function (e) {
    eu.filter('#filter-list li', e.currentTarget.value);
  });

  eu.addListener('#btn-sort-list', 'click', function () {
    eu.sort('#sort-list', { items: 'li' });
  });

  // sort table
  if (eu.getElement('#sort-table-target')) {
    eu.sort('#sort-table-target');
  }
}

// SVG icons.
function arrowIcon() {
  var arrowIcon = document.querySelector('#svg-arrow-example');
  if (!arrowIcon) return;

  arrowIcon.innerHTML = window.Moss.lib.Svg.arrowRight;
  arrowIcon.style.transition = 'all .5s ease-in-out';
  arrowIcon.addEventListener('click', function () {
    if (arrowIcon.style.transform == '') {
      arrowIcon.style.transform = 'rotate(3.25turn)';
      arrowIcon.style.color = '#f80';
    } else {
      arrowIcon.style.transform = '';
      arrowIcon.style.color = '';
    }
  });
}

function caretIcon() {
  var caretIcon = document.querySelector('#svg-caret-example');
  if (!caretIcon) return;

  caretIcon.innerHTML = window.Moss.lib.Svg.caretDown;
  caretIcon.style.transition = 'all .2s ease-out';
  caretIcon.addEventListener('click', function () {
    if (caretIcon.style.transform == '') {
      caretIcon.style.transform = 'scale(2, 0.5) rotate(0.5turn)';
      caretIcon.style.color = 'aqua';
    } else {
      caretIcon.style.transform = '';
      caretIcon.style.color = '';
    }
  });
}

function closeIcon() {
  var closeIcon = document.querySelector('#svg-close-example');
  if (!closeIcon) return;

  closeIcon.innerHTML = window.Moss.lib.Svg.close;
  closeIcon.style.transition = 'color .2s ease-out';
  closeIcon.style.animation = '3s linear infinite spin';
  closeIcon.addEventListener('mouseover', function () {
    closeIcon.style.animationDuration = '0.5s';
    closeIcon.style.color = '#32cd32';
  });

  closeIcon.addEventListener('mouseleave', function () {
    closeIcon.style.animationDuration = '3s';
    closeIcon.style.color = '';
  });
}

/***/ })
/******/ ]);
//# sourceMappingURL=example.js.map