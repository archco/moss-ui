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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/js/example.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/js/data/collection.json":
/*!*****************************************!*\
  !*** ./example/js/data/collection.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, default */
/***/ (function(module) {

module.exports = [{"_id":1,"name":"Badge","category":"scss","description":"Style for small label."},{"_id":2,"name":"Button","category":"scss","description":"Style for buttons"},{"_id":3,"name":"Card","category":"scss","description":"Content container."},{"_id":4,"name":"Form","category":"scss","description":"Form control styles."},{"_id":5,"name":"Grid","category":"scss","description":"Flexbox grid to build layouts."},{"_id":6,"name":"Helper","category":"scss-helpers","description":"Helper styles"},{"_id":7,"name":"Text","category":"scss-helpers","description":"Helper styles for text contents."},{"_id":8,"name":"Flex","category":"scss-helpers","description":"Helper styles for using flexbox."},{"_id":9,"name":"HeroBanner","category":"scss","description":"A hero banner is display large image with text, often placed at top of a web page."},{"_id":10,"name":"Image","category":"scss","description":"Style decorations for <img> tag."},{"_id":11,"name":"List","category":"scss","description":"Simple style for unordered list."},{"_id":12,"name":"Loader","category":"scss","description":"Loading spinners."},{"_id":13,"name":"Pagination","category":"scss","description":"Pagination to indicate a series of related content exists across multiple pages."},{"_id":14,"name":"Scaffolding","category":"scss","description":"Scaffolding of styles such as default tags."},{"_id":15,"name":"Carousel","category":"vue","description":"A slideshow component."},{"_id":16,"name":"Chip","category":"vue","description":"Chips to represents small block of information. They are commonly used to for contacts or for tags."},{"_id":17,"name":"CloseButton","category":"vue","description":"A component used for hide or remove element that parent node or specified."},{"_id":18,"name":"Collapse","category":"vue","description":"Toggle the visibility of content."},{"_id":19,"name":"Dropdown","category":"vue","description":"Toggle contextual overlays for displaying lists of links and more."},{"_id":20,"name":"Message","category":"vue","description":"A component used for displaying contextual feedback message."},{"_id":21,"name":"Modal","category":"vue","description":"Adding dialog boxes."},{"_id":22,"name":"Navbar","category":"vue","description":"Navigation bar component."},{"_id":23,"name":"Parallax","category":"vue","description":"Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling."},{"_id":24,"name":"SimpleCRUD","category":"vue","description":"A component used for read, update or delete action to collection-item."},{"_id":25,"name":"Switch","category":"vue","description":"Styled components for checkbox input or for radio input."},{"_id":26,"name":"Tab","category":"vue","description":"Tab component that toggling multiple contents."},{"_id":27,"name":"Toast","category":"vue","description":"Displaying short message."},{"_id":28,"name":"Tree","category":"vue","description":"Represents composites as tree structure."},{"_id":29,"name":"v-focus","category":"vue-directives","description":"Focus an element."},{"_id":30,"name":"v-trigger","category":"vue-directives","description":"Trigger event via event emitter of vue-model."},{"_id":31,"name":"v-modal","category":"vue-directives","description":"Toggling modal dialog."},{"_id":32,"name":"v-clipboard","category":"vue-directives","description":"Copy or cut to clipboard."},{"_id":33,"name":"v-set-value","category":"vue-directives","description":"Set value to element such as input, select, etc.."},{"_id":34,"name":"v-tooltip","category":"vue-directives","description":"Toggling tooltip content."},{"_id":35,"name":"v-ripple","category":"vue-directives","description":"Add ripple effect to element."},{"_id":36,"name":"Color","category":"js-libraries","description":"Color library powered by MooColor."},{"_id":37,"name":"ElementUtil","category":"js-libraries","description":"The javascript library for using DOM Elements conveniently."},{"_id":38,"name":"Util","category":"js-libraries","description":"Javascript util methods."},{"_id":39,"name":"InputGroup","category":"scss","description":"Extend form controls by adding text, buttons."},{"_id":40,"name":"Search","category":"vue","description":"Simple search component that fuzzy search given collection data such like json."},{"_id":41,"name":"Sizing","category":"scss-helpers","description":"Helper classes for specifying width or height of element."},{"_id":42,"name":"Spacing","category":"scss-helpers","description":"Helper classes for specifying margin or padding spacing to element."},{"_id":43,"name":"Code","category":"scss","description":"Display inline or block fragment of computer code."},{"_id":44,"name":"v-outer","category":"vue-directives","description":"Add listener for the event that occurs outer of the element."},{"_id":45,"name":"NavDrawer","category":"vue","description":"It's the navigation drawer that using horizontal-collapse."}];

/***/ }),

/***/ "./example/js/data/tree.js":
/*!*********************************!*\
  !*** ./example/js/data/tree.js ***!
  \*********************************/
/*! no static exports found */
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

/***/ "./example/js/example.js":
/*!*******************************!*\
  !*** ./example/js/example.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tree = __webpack_require__(/*! ./data/tree */ "./example/js/data/tree.js");

var _collection = __webpack_require__(/*! ./data/collection.json */ "./example/js/data/collection.json");

var _collection2 = _interopRequireDefault(_collection);

var _partials = __webpack_require__(/*! ./partials */ "./example/js/partials.js");

var Partials = _interopRequireWildcard(_partials);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Vue.use(window.MossUI.default);

var searchOptions = {
  keys: [{ name: 'name', weight: .5 }, { name: 'category', weight: .3 }, { name: 'description', weight: .2 }]
};

var strToKebab = window.Moss.lib.Util.strToKebab;
var Color = window.Moss.lib.Color;


window.vm = new window.Vue({
  el: '#app',
  data: {
    treeData: _tree.treeData,
    treeData2: _tree.treeData2,
    collection: _collection2.default,
    searchOptions: searchOptions
  },
  methods: {
    test: function test(arg) {
      console.log(arg);
    },
    eventTest: function eventTest(event) {
      console.log(event);
    },
    onSearchItemClick: function onSearchItemClick(_ref) {
      var name = _ref.name,
          category = _ref.category;

      // redirect to
      window.location.href = category + '.html#' + strToKebab(name);
    },
    onSearchSubmit: function onSearchSubmit(_ref2) {
      var result = _ref2.result;

      if (result.length < 1) return;
      this.onSearchItemClick(result[0]);
    },
    onSearchInputChange: function onSearchInputChange(_ref3) {
      var input = _ref3.input,
          vnode = _ref3.vnode;

      // Set suggestions. (Ajax Simulation)
      var suggestions = [{ name: 'Tim Robbins' }, { name: 'Tim Burton' }, { name: 'Tim Tebow' }];
      if (input.toLowerCase() === 'tim') {
        setTimeout(function () {
          vnode.suggestions = suggestions;
        }, 500);
      } else {
        setTimeout(function () {
          vnode.suggestions = [];
        }, 200);
      }
    },


    // category badge style of search-result.
    getBadgeStyle: function getBadgeStyle(category) {
      // categories: scss, scss-helpers, vue, vue-directives, js-libraries
      var c = {
        scss: '#c69',
        js: '#f5da55',
        vue: '#4fc08d'
      };
      var prefix = /(^\w+)/.exec(category)[1];
      var bgColor = new Color(c[prefix]);
      return {
        marginRight: '.5rem',
        color: bgColor.brightness > 165 ? '#333' : '#fff',
        backgroundColor: bgColor.toHex(true)
      };
    },
    onOuterClick: function onOuterClick() {
      window.Moss.toast('Clicked an outer element.');
    }
  },

  beforeMount: function beforeMount() {
    this.$on('clipboard-success', function (event) {
      var msg = event.action == 'copy' ? 'Copied' : 'Cut';
      window.Moss.toast(msg + ' on clipboard');
    });
    this.$on('scrollspy-activate', function (item) {
      console.log(item.elm);
    });
  }
});

// invoke function for partial examples.
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

/***/ "./example/js/partials.js":
/*!********************************!*\
  !*** ./example/js/partials.js ***!
  \********************************/
/*! no static exports found */
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
  var elms = document.querySelectorAll('.moss-version');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elm = _step.value;

      elm.innerHTML = window.Moss.version;
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

  document.querySelector('#copyright-year').innerHTML = new Date().getFullYear();
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
      asideMenu.style.position = '';
      asideMenu.style.top = '';
      asideMenu.style.maxWidth = '';
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

/******/ });
//# sourceMappingURL=example.js.map