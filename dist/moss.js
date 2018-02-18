(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MossUI"] = factory();
	else
		root["MossUI"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _scrollIt = __webpack_require__(43);

Object.defineProperty(exports, 'scrollIt', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollIt).default;
  }
});

var _icon = __webpack_require__(44);

Object.keys(_icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon[key];
    }
  });
});
exports.locationSearchToObject = locationSearchToObject;
exports.searchToObject = searchToObject;
exports.isContains = isContains;
exports.isEmpty = isEmpty;
exports.isMobileSize = isMobileSize;
exports.strToCamel = strToCamel;
exports.strToKebab = strToKebab;
exports.strToNormal = strToNormal;
exports.capitalize = capitalize;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * location.search to Object.
 *
 * @return {object|null}
 */
function locationSearchToObject() {
  return searchToObject(window.location.search);
}

/**
 * searchToObject
 *
 * @param  {string} search HTMLAnchorElement.search
 * @return {object|null}
 */
function searchToObject(search) {
  if (search === '') return null;

  var queries = search.substring(1).split('&');
  var obj = {};

  queries.forEach(function (value) {
    var q = value.split('=');
    if (!q[1]) return;
    obj[decodeURIComponent(q[0])] = decodeURIComponent(q[1]);
  });

  return obj;
}

/**
 * returns true if 'big' contains 'small'.
 *
 * @param  {any}  big
 * @param  {any}  small
 * @return {boolean}
 */
function isContains(big, small) {
  if ((typeof big === 'undefined' ? 'undefined' : _typeof(big)) !== (typeof small === 'undefined' ? 'undefined' : _typeof(small))) return false;

  if (Array.isArray(big) && Array.isArray(small)) {
    var correct = 0;
    big.forEach(function (v) {
      if (small.includes(v)) correct++;
    });
    return correct == small.length;
  } else if (Object(big) === big && Object(small) === small) {
    for (var p in small) {
      if (!(p in big && isContains(big[p], small[p]))) return false;
    }

    return true;
  } else {
    return big === small;
  }
}

/**
 * Determine whether value is empty.
 * @link https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
 *
 * @param  {any}  val
 * @return {boolean}
 */
function isEmpty(val) {
  if (typeof val === 'undefined') return true;
  if (val === null) return true;
  if (typeof val === 'boolean') return !val;
  if (typeof val === 'number') return val <= 0;
  if (typeof val === 'string') return val.length === 0;
  if (Array.isArray(val)) return val.length === 0;
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
    return Object.keys(val).length === 0 && val.constructor === Object;
  }
}

/**
 * isMobileSize
 *
 * @param  {number}  [size = 800] window width point. (pixels)
 * @return {boolean}
 */
function isMobileSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;

  return window.innerWidth < size;
}

/**
 * String to CamelCase
 *
 * @param {string} str
 * @param {boolean} [isSmallCamel=false] If true, returns as smallCamelCase.
 * @returns {string}
 */
function strToCamel(str) {
  var isSmallCamel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return strToNormal(str).split(' ').map(function (word, i) {
    return i === 0 && isSmallCamel ? word : word[0].toUpperCase() + word.substr(1);
  }).join('');
}

/**
 * String to kebab-case.
 *
 * @param {string} str
 * @returns {string}
 */
function strToKebab(str) {
  return strToNormal(str).replace(/([\s])/g, '-');
}

/**
 * String to normal case. e.g. 'hello world'
 *
 * @param {string} str
 * @returns {string}
 */
function strToNormal(str) {
  return str.replace(/([A-Z][a-z])/g, ' $1').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([\W|_]+)/g, ' ').trim().toLowerCase();
}

/**
 * Capitalize first letters.
 *
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  return strToNormal(str).split(' ').map(function (word) {
    return word[0].toUpperCase() + word.substr(1);
  }).join(' ');
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ElementUtil"] = factory();
	else
		root["ElementUtil"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getElement"] = getElement;
/* harmony export (immutable) */ __webpack_exports__["getElements"] = getElements;
/* harmony export (immutable) */ __webpack_exports__["removeElements"] = removeElements;
/* harmony export (immutable) */ __webpack_exports__["toNodeList"] = toNodeList;
/* harmony export (immutable) */ __webpack_exports__["nodeListToArray"] = nodeListToArray;
/* harmony export (immutable) */ __webpack_exports__["findAncestor"] = findAncestor;
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function resolveBase(base) {
    base = base === document ? base : getElement(base);
    if (!base) {
        throw new ReferenceError("'base' element is not exist!");
    }
    return base;
}
/**
 * Polyfill for Element.matches
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#polyfill
 */
function polyfillForMatches() {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
}
/**
 * Get element.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return
 */
function getElement(selector, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    if (typeof selector === 'string') {
        return base.querySelector(selector);
    }
    else if (selector instanceof Element) {
        return selector;
    }
    else if (selector instanceof NodeList) {
        return selector[0];
    }
    else {
        throw new TypeError('selector is must be String or Element');
    }
}
/**
 * Get elements as NodeList.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return
 */
function getElements(selector, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    if (typeof selector === 'string') {
        return base.querySelectorAll(selector);
    }
    else if (selector instanceof Element) {
        return toNodeList(selector);
    }
    else if (selector instanceof NodeList) {
        return selector;
    }
    else {
        throw new TypeError('selector is must be String or NodeList');
    }
}
/**
 * Remove elements.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return          number of removed.
 */
function removeElements(selector, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    var elms = getElements(selector, base);
    try {
        for (var elms_1 = __values(elms), elms_1_1 = elms_1.next(); !elms_1_1.done; elms_1_1 = elms_1.next()) {
            var elm = elms_1_1.value;
            elm.parentNode.removeChild(elm);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (elms_1_1 && !elms_1_1.done && (_a = elms_1.return)) _a.call(elms_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return elms.length;
    var e_1, _a;
}
/**
 * Convert a single element to NodeList.
 * @param  elm
 * @return
 */
function toNodeList(elm) {
    elm = getElement(elm);
    elm.setAttribute('toNodeList', '');
    var nodeList = document.querySelectorAll('[toNodeList]');
    elm.removeAttribute('toNodeList');
    return nodeList;
}
/**
 * Convert NodeList to Array.
 * @param  list
 * @return
 */
function nodeListToArray(list) {
    if (Array.isArray(list)) {
        return list;
    }
    else {
        list = this.getElements(list);
        return Array.prototype.slice.call(list);
    }
}
/**
 * Find ancestor element.
 * @param  self
 * @param  ancestor
 * @return          Element or null.
 */
function findAncestor(self, ancestor) {
    polyfillForMatches();
    self = getElement(self);
    var isMatch = function (elm) { return ancestor instanceof Element
        ? elm === ancestor
        : elm.matches(ancestor); };
    do {
        if (self == null || self.parentElement == null) {
            return null;
        }
        self = self.parentElement;
    } while (!isMatch(self));
    return self;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["addListener"] = addListener;
/* harmony export (immutable) */ __webpack_exports__["wrap"] = wrap;
/* harmony export (immutable) */ __webpack_exports__["wrapAll"] = wrapAll;
/* harmony export (immutable) */ __webpack_exports__["submitConfirm"] = submitConfirm;
/* harmony export (immutable) */ __webpack_exports__["addClass"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["removeClass"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["toggleClass"] = toggleClass;
/* harmony export (immutable) */ __webpack_exports__["hide"] = hide;
/* harmony export (immutable) */ __webpack_exports__["show"] = show;
/* harmony export (immutable) */ __webpack_exports__["toggleShow"] = toggleShow;
/* harmony export (immutable) */ __webpack_exports__["makeHiddenInput"] = makeHiddenInput;
/* harmony export (immutable) */ __webpack_exports__["appendHiddenInput"] = appendHiddenInput;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

/**
 * Add event listener on every selected elements.
 * @param  selector   querySelector
 * @param  type       event-type
 * @param  listener   listener
 * @param  useCapture default is false
 * @return            number of affected
 */
function addListener(selector, type, listener, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    var elms = __WEBPACK_IMPORTED_MODULE_0__base__["getElements"](selector);
    try {
        for (var elms_1 = __values(elms), elms_1_1 = elms_1.next(); !elms_1_1.done; elms_1_1 = elms_1.next()) {
            var elm = elms_1_1.value;
            elm.addEventListener(type, listener, useCapture);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (elms_1_1 && !elms_1_1.done && (_a = elms_1.return)) _a.call(elms_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return elms.length;
    var e_1, _a;
}
/**
 * Wrapping each element.
 * @param selector  querySelector
 * @param className wrapper's class name.
 * @param tagName   wrapper's tag name, default is 'div'.
 */
function wrap(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = __WEBPACK_IMPORTED_MODULE_0__base__["getElements"](selector);
    try {
        for (var elms_2 = __values(elms), elms_2_1 = elms_2.next(); !elms_2_1.done; elms_2_1 = elms_2.next()) {
            var elm = elms_2_1.value;
            var parent_1 = elm.parentNode;
            var sibling = elm.nextSibling;
            var div = document.createElement(tagName);
            addClass(div, className);
            div.appendChild(elm);
            if (sibling) {
                parent_1.insertBefore(div, sibling);
            }
            else {
                parent_1.appendChild(div);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (elms_2_1 && !elms_2_1.done && (_a = elms_2.return)) _a.call(elms_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var e_2, _a;
}
/**
 * Wrapping all elements inside a one wrapper.
 * @param selector  querySelector
 * @param className wrapper's class name.
 * @param tagName   wrapper's tag name, default is 'div'.
 */
function wrapAll(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = __WEBPACK_IMPORTED_MODULE_0__base__["getElements"](selector);
    var parent = elms[0].parentNode;
    var preSibling = elms[0].previousSibling;
    var div = document.createElement(tagName);
    addClass(div, className);
    try {
        for (var elms_3 = __values(elms), elms_3_1 = elms_3.next(); !elms_3_1.done; elms_3_1 = elms_3.next()) {
            var elm = elms_3_1.value;
            div.appendChild(elm);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (elms_3_1 && !elms_3_1.done && (_a = elms_3.return)) _a.call(elms_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    if (preSibling) {
        parent.insertBefore(div, preSibling.nextSibling);
    }
    else {
        parent.appendChild(div);
    }
    var e_3, _a;
}
/**
 * Add confirm message listener when 'submit' event.
 * @param selector querySelector, form element probably.
 * @param message  confirm message.
 */
function submitConfirm(selector, message) {
    if (message === void 0) { message = 'Are you confirm?'; }
    addListener(selector, 'submit', function (e) {
        if (!confirm(message)) {
            e.preventDefault();
        }
    }, true); // this use capture.
}
/**
 * Add class to element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
function addClass(selector, className) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.add(c); });
}
/**
 * Remove class from element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
function removeClass(selector, className) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.remove(c); });
}
/**
 * Toggling class to element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
function toggleClass(selector, className) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.toggle(c); });
}
/**
 * Hide element. It will set element's display to 'none'.
 * @param selector querySelector
 */
function hide(selector) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    elm.style.display = 'none';
}
/**
 * Show element. It will just remove 'display=none;'.
 * @param selector querySelector
 */
function show(selector) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    if (elm.style.display && elm.style.display === 'none') {
        elm.style.display = '';
    }
}
/**
 * Toggling show/hide element.
 * @param selector querySelector
 */
function toggleShow(selector) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    elm.style.display !== 'none' ? hide(elm) : show(elm);
}
/**
 * Make a hidden input.
 * @param  name  name attribute.
 * @param  value value attribute.
 * @return
 */
function makeHiddenInput(name, value) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    return input;
}
/**
 * Makes hidden input, and append to target element. If input[name=".."] already exists, overwrite it.
 * @param target querySelector
 * @param name   name attribute.
 * @param value  value attribute.
 */
function appendHiddenInput(target, name, value) {
    var targetElm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](target);
    // Remove if already has input.
    __WEBPACK_IMPORTED_MODULE_0__base__["removeElements"]("input[name=\"" + name + "\"]", target);
    targetElm.appendChild(makeHiddenInput(name, value));
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_element_filter__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_element_sorter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__methods_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__methods_util__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ElementFilter", function() { return __WEBPACK_IMPORTED_MODULE_0__classes_element_filter__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ElementSorter", function() { return __WEBPACK_IMPORTED_MODULE_1__classes_element_sorter__["a"]; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





/* harmony default export */ __webpack_exports__["default"] = (__assign({}, __WEBPACK_IMPORTED_MODULE_2__methods_base__, __WEBPACK_IMPORTED_MODULE_3__methods_util__, { 
    //
    // Helper methods.
    //
    /**
     * Filtering elements.
     * @param  selector   querySelector
     * @param  filter     filter string.
     * @param  enableHTML using .innerHTML, default is false.
     * @return            Hit number.
     */
    filter: function (selector, filter, enableHTML) {
        if (filter === void 0) { filter = ''; }
        if (enableHTML === void 0) { enableHTML = false; }
        var f = new __WEBPACK_IMPORTED_MODULE_0__classes_element_filter__["a" /* default */](selector, filter, { enableHTML: enableHTML });
        return f.execute().hit;
    },
    /**
     * Sorting elements.
     * @param  elm     base element.
     * @param  options options for ElementSorter.
     * @return         sorted elements.
     */
    sort: function (elm, options) {
        if (options === void 0) { options = {}; }
        var s = new __WEBPACK_IMPORTED_MODULE_1__classes_element_sorter__["a" /* default */](elm, options);
        return s.execute().getItems();
    } }));


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__methods_util__ = __webpack_require__(1);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};


var ElementFilter = /** @class */ (function () {
    /**
     * constructor
     * @param selector target elements.
     * @param filter   a string for filtering.
     * @param options  enableHTML?: boolean
     */
    function ElementFilter(selector, filter, options) {
        if (filter === void 0) { filter = ''; }
        if (options === void 0) { options = {}; }
        this.hit = 0;
        this.elms = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElements"](selector);
        this.filter = filter;
        this.options = this.getDefaultOptions();
        this.setOptions(options);
    }
    /**
     * getDefaultOptions
     * @return filter options object.
     */
    ElementFilter.prototype.getDefaultOptions = function () {
        return {
            enableHTML: false,
        };
    };
    /**
     * setOptions
     * @param  options enableHTML?: boolean
     * @return
     */
    ElementFilter.prototype.setOptions = function (options) {
        this.options = __assign({}, this.options, options);
    };
    /**
     * setFilter
     * @param  filter a string for filtering.
     * @return
     */
    ElementFilter.prototype.setFilter = function (filter) {
        this.filter = filter;
        return this;
    };
    /**
     * get hit property.
     * @return
     */
    ElementFilter.prototype.getHit = function () {
        return this.hit;
    };
    /**
     * Executes filtering.
     * @return
     */
    ElementFilter.prototype.execute = function () {
        if (this.elmsIsTable()) {
            this.filteringTable();
        }
        else {
            this.filteringNodes(this.elms);
        }
        return this;
    };
    ElementFilter.prototype.filteringTable = function () {
        var table = this.elms[0];
        var tableRows = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElements"]('tbody tr', table);
        this.filteringNodes(tableRows);
    };
    ElementFilter.prototype.filteringNodes = function (nodes) {
        this.hit = 0;
        var filter = this.filter.toUpperCase();
        try {
            for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                var node = nodes_1_1.value;
                var elm = node;
                var content = this.options.enableHTML
                    ? elm.innerHTML
                    : elm.textContent;
                if (content.toUpperCase().indexOf(filter) === -1) {
                    __WEBPACK_IMPORTED_MODULE_1__methods_util__["hide"](elm);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_1__methods_util__["show"](elm);
                    this.hit++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _a;
    };
    ElementFilter.prototype.elmsIsTable = function () {
        var elm = this.elms[0];
        return this.elms.length === 1 && elm.tagName === 'TABLE';
    };
    return ElementFilter;
}());
/* harmony default export */ __webpack_exports__["a"] = (ElementFilter);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods_base__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var ElementSorter = /** @class */ (function () {
    /**
     * constructor
     * @param elm     Base element. e.g. `<ul>`, `<ol>` or `<table>`..
     * @param options items: 'auto'|selector|NodeList, datasetName: object
     */
    function ElementSorter(elm, options) {
        if (options === void 0) { options = {}; }
        this.options = this.getDefaultOptions();
        this.setOptions(options);
        this.setElement(elm);
        this.setItems(this.options.items);
    }
    /**
     * getDefaultOptions
     * @return
     */
    ElementSorter.prototype.getDefaultOptions = function () {
        return {
            items: 'auto',
            datasetName: {
                sortDirection: 'sortDirection',
                sortType: 'sortType',
                sortValue: 'sortValue',
            },
        };
    };
    /**
     * setOptions
     * @param  options items: 'auto'|selector|NodeList, datasetName: object
     * @return
     */
    ElementSorter.prototype.setOptions = function (options) {
        this.options = __assign({}, this.options, options);
        return this;
    };
    /**
     * set base element.
     * @param  elm
     * @return
     */
    ElementSorter.prototype.setElement = function (elm) {
        this.elm = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElement"](elm);
        return this;
    };
    /**
     * getItems
     * @return
     */
    ElementSorter.prototype.getItems = function () {
        return this.items;
    };
    /**
     * set items that target for sort.
     * @param  items
     * @return
     */
    ElementSorter.prototype.setItems = function (items) {
        if (this.elmIsTable()) {
            var nodeList = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElements"]('tbody tr', this.elm);
            this.items = __WEBPACK_IMPORTED_MODULE_0__methods_base__["nodeListToArray"](nodeList);
        }
        else if (items === 'auto') {
            this.items = __WEBPACK_IMPORTED_MODULE_0__methods_base__["nodeListToArray"](this.elm.childNodes)
                .filter(function (node) { return node.tagName; });
        }
        else {
            var nodeList = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElements"](items, this.elm);
            this.items = __WEBPACK_IMPORTED_MODULE_0__methods_base__["nodeListToArray"](nodeList);
        }
        return this;
    };
    /**
     * Execute sort.
     * @return
     */
    ElementSorter.prototype.execute = function () {
        this.elmIsTable() ? this.sortTable() : this.sortElements();
        return this;
    };
    ElementSorter.prototype.elmIsTable = function () {
        return this.elm.tagName === 'TABLE';
    };
    ElementSorter.prototype.sortElements = function () {
        var _this = this;
        var compareMethod = function (a, b) {
            var aVal = _this.getSortValue(a);
            var bVal = _this.getSortValue(b);
            var type = _this.getSortType(_this.elm) || _this.getSortType(a);
            var asc = _this.getSortDirection(_this.elm) !== 'desc';
            return _this.compare(aVal, bVal, type, asc);
        };
        this.toggleSortDirection(this.elm);
        this.sorting(this.items, compareMethod.bind(this));
    };
    ElementSorter.prototype.sortTable = function () {
        var _this = this;
        var heads = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElements"]('thead th', this.elm);
        var _loop_1 = function (i, head) {
            head.addEventListener('click', function (event) {
                event.preventDefault();
                var th = event.currentTarget;
                _this.toggleSortDirection(th);
                _this.sortingTable(_this.items, i + 1, _this.getSortType(th), _this.getSortDirection(th));
            });
        };
        try {
            for (var _a = __values(heads.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var _c = __read(_b.value, 2), i = _c[0], head = _c[1];
                _loop_1(i, head);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _d;
    };
    ElementSorter.prototype.sorting = function (items, compareMethod) {
        items.sort(compareMethod);
        items.forEach(function (item) {
            var parent = item.parentNode;
            parent.removeChild(item);
            parent.appendChild(item);
        });
    };
    ElementSorter.prototype.sortingTable = function (rows, nth, type, direction) {
        var _this = this;
        var compareMethod = function (a, b) {
            a = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElement"]("td:nth-child(" + nth + ")", a);
            b = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElement"]("td:nth-child(" + nth + ")", b);
            var aVal = _this.getSortValue(a);
            var bVal = _this.getSortValue(b);
            type = type || _this.getSortType(a);
            var asc = direction === 'asc';
            return _this.compare(aVal, bVal, type, asc);
        };
        this.sorting(rows, compareMethod.bind(this));
    };
    ElementSorter.prototype.getSortValue = function (elm) {
        var sortValue = elm.dataset[this.options.datasetName.sortValue];
        if (!sortValue) {
            sortValue = elm.textContent;
        }
        return sortValue.toUpperCase();
    };
    ElementSorter.prototype.getSortType = function (elm) {
        return elm.dataset[this.options.datasetName.sortType] || null;
    };
    ElementSorter.prototype.getSortDirection = function (elm) {
        return elm.dataset[this.options.datasetName.sortDirection];
    };
    ElementSorter.prototype.toggleSortDirection = function (elm) {
        elm.dataset[this.options.datasetName.sortDirection]
            = this.getSortDirection(elm) === 'asc' ? 'desc' : 'asc';
    };
    ElementSorter.prototype.compare = function (a, b, type, asc) {
        if (asc === void 0) { asc = true; }
        var compareNumber = function (aVal, bVal) {
            var aNum = parseFloat(aVal);
            var bNum = parseFloat(b);
            return asc ? aNum - bNum : bNum - aNum;
        };
        var compareDate = function (aVal, bVal) {
            var aDate = new Date(aVal);
            var bDate = new Date(bVal);
            return asc
                ? aDate.getTime() - bDate.getTime()
                : bDate.getTime() - aDate.getTime();
        };
        if (type === 'number') {
            return compareNumber(a, b);
        }
        else if (type === 'date') {
            return compareDate(a, b);
        }
        else {
            // default: compare as string.
            return asc ? a.localeCompare(b) : b.localeCompare(a);
        }
    };
    return ElementSorter;
}());
/* harmony default export */ __webpack_exports__["a"] = (ElementSorter);


/***/ })
/******/ ]);
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ElementMeasurer"] = factory();
	else
		root["ElementMeasurer"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Element measurer.
 *
 * @export
 * @class ElementMeasurer
 */
var ElementMeasurer = /** @class */ (function () {
    /**
     * constructor
     * @param target
     */
    function ElementMeasurer(target) {
        if (target === void 0) { target = document.documentElement; }
        this.setTarget(target);
    }
    Object.defineProperty(ElementMeasurer.prototype, "isDocument", {
        /**
         * Returns whether target is document or html element.
         * @return
         */
        get: function () {
            return this.target === document.documentElement
                || this.target === document.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "isDocumentTarget", {
        /**
         * Returns whether target is document or html element.
         * @deprecated use isDocument instead.
         * @return
         */
        get: function () {
            return this.isDocument;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "clientWidth", {
        /**
         * Returns inner width of an element in pixels.
         * @return
         */
        get: function () {
            return this.isDocument
                ? window.innerWidth
                : this.target.getBoundingClientRect().width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "clientHeight", {
        /**
         * Returns inner height of an element in pixels.
         * @return
         */
        get: function () {
            return this.isDocument
                ? window.innerHeight
                : this.target.getBoundingClientRect().height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollTop", {
        /**
         * Gets or sets the number of pixels that an element's content is scrolled vertically.
         * @return
         */
        get: function () {
            return this.isDocument ? window.pageYOffset : this.target.scrollTop;
        },
        set: function (val) {
            if (this.isDocument) {
                window.scrollTo(this.scrollLeft, val);
            }
            else {
                this.target.scrollTop = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollLeft", {
        /**
         * Gets or sets the number of pixels that an element's content is scrolled to the left.
         * @return
         */
        get: function () {
            return this.isDocument ? window.pageXOffset : this.target.scrollLeft;
        },
        set: function (val) {
            if (this.isDocument) {
                window.scrollTo(val, this.scrollTop);
            }
            else {
                this.target.scrollLeft = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollWidth", {
        /**
         * Returns the width of the entire content of an element.
         * @return
         */
        get: function () {
            return this.target.scrollWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollHeight", {
        /**
         * Returns the height of the entire content of an element.
         * @return
         */
        get: function () {
            return this.target.scrollHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "maxScrollTop", {
        /**
         * Returns maximum top scroll offset possible for the element.
         * @return
         */
        get: function () {
            return this.scrollHeight - this.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "maxScrollLeft", {
        /**
         * Returns maximum left scroll offset possible for the element.
         * @return
         */
        get: function () {
            return this.scrollWidth - this.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set target element.
     * @param  val
     * @return
     */
    ElementMeasurer.prototype.setTarget = function (val) {
        if (val instanceof HTMLElement) {
            this.target = val;
        }
        else if (val instanceof Element) {
            this.target = val;
        }
        else if (val === window || val === document) {
            this.target = document.documentElement;
        }
        else if (typeof val === 'string') {
            this.target = document.querySelector(val);
        }
        else {
            throw new TypeError('Target value is not correct type.');
        }
        return this;
    };
    /**
     * Returns top and left values that indicates offset distance to html document.
     * @see https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element#answer-442474
     */
    ElementMeasurer.prototype.getOffset = function () {
        var elm = this.target;
        var top = 0;
        var left = 0;
        while (elm && !isNaN(elm.offsetLeft) && !isNaN(elm.offsetTop)) {
            left += elm.offsetLeft - elm.scrollLeft;
            top += elm.offsetTop - elm.scrollTop;
            elm = elm.offsetParent;
        }
        return { top: top, left: left };
    };
    return ElementMeasurer;
}());
/* harmony default export */ __webpack_exports__["default"] = (ElementMeasurer);


/***/ })
/******/ ]);
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_button_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_button_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_button_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_button_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4478e1c0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_close_button_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4478e1c0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_close_button_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4478e1c0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_close_button_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\close-button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4478e1c0", Component.options)
  } else {
    hotAPI.reload("data-v-4478e1c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MooColor"] = factory();
	else
		root["MooColor"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = padStart;
/* unused harmony export padEnd */
/* harmony export (immutable) */ __webpack_exports__["a"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["c"] = degree;
/* harmony export (immutable) */ __webpack_exports__["e"] = resolveAlpha;
/* harmony export (immutable) */ __webpack_exports__["b"] = decimal;
function padStart(str, length, chars) {
    var space = length - str.length;
    return space > 0 ? "" + makePad(chars, space) + str : str;
}
function padEnd(str, length, chars) {
    var space = length - str.length;
    return space > 0 ? "" + str + makePad(chars, space) : str;
}
function makePad(chars, limit) {
    while (chars.length < limit) {
        chars += chars;
    }
    return chars.length > limit ? chars.substring(chars.length - limit) : chars;
}
function clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
}
function degree(num) {
    return ((parseFloat(num.toString()) % 360) + 360) % 360;
}
function resolveAlpha(a) {
    a = typeof a === 'number' ? a.toString() : a;
    var num = parseFloat(a);
    return clamp(isNaN(num) ? 1 : num, 0, 1);
}
// @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
function decimal(num, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(num * factor) / factor;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hslToRgb;
/* harmony export (immutable) */ __webpack_exports__["j"] = rgbToHsl;
/* harmony export (immutable) */ __webpack_exports__["f"] = hwbToRgb;
/* harmony export (immutable) */ __webpack_exports__["l"] = rgbToHwb;
/* harmony export (immutable) */ __webpack_exports__["a"] = cmykToRgb;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbToCmyk;
/* harmony export (immutable) */ __webpack_exports__["d"] = hsvToRgb;
/* harmony export (immutable) */ __webpack_exports__["k"] = rgbToHsv;
/* harmony export (immutable) */ __webpack_exports__["c"] = hsvToHwb;
/* harmony export (immutable) */ __webpack_exports__["e"] = hwbToHsv;
/* harmony export (immutable) */ __webpack_exports__["i"] = rgbToHex;
/* unused harmony export hexToRgb */
/* harmony export (immutable) */ __webpack_exports__["g"] = resolveHwb;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__(0);

/**
 * Converts an HSL to RGB.
 * @see https://www.rapidtables.com/convert/color/hsl-to-rgb.html
 * @export
 * @param {number} h hue
 * @param {number} s saturation 0-100
 * @param {number} l lightness 0-100
 * @returns {number[]} [red, green, blue] 0-255
 */
function hslToRgb(h, s, l) {
    h /= 60, s /= 100, l /= 100;
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs(h % 2 - 1));
    var m = l - c / 2;
    var r;
    var g;
    var b;
    switch (Math.floor(h)) {
        case 0:
            r = c, g = x, b = 0;
            break;
        case 1:
            r = x, g = c, b = 0;
            break;
        case 2:
            r = 0, g = c, b = x;
            break;
        case 3:
            r = 0, g = x, b = c;
            break;
        case 4:
            r = x, g = 0, b = c;
            break;
        case 5:
            r = c, g = 0, b = x;
            break;
    }
    return [r, g, b].map(function (val) { return (val + m) * 255; });
}
/**
 * Converts RGB to HSL.
 * @see https://www.rapidtables.com/convert/color/rgb-to-hsl.html
 * @export
 * @param {number} r red 0-255
 * @param {number} g green 0-255
 * @param {number} b blue 0-255
 * @returns {number[]} [hue, saturation, lightness] (0-360, 0-100, 0-100)
 */
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    var h;
    var s;
    var l;
    if (delta === 0) {
        h = 0;
    }
    else if (max === r) {
        h = 60 * ((g - b) / delta % 6);
    }
    else if (max === g) {
        h = 60 * ((b - r) / delta + 2);
    }
    else {
        h = 60 * ((r - g) / delta + 4);
    }
    l = (max + min) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    return [h, s * 100, l * 100];
}
/**
 * Converts HWB to RGB.
 * @export
 * @param {number} hue hue 0-360
 * @param {number} white whiteness 0-100
 * @param {number} black blackness 0-100
 * @returns {number[]} [red, green, blue] 0-255
 */
function hwbToRgb(hue, white, black) {
    var _a = hwbToHsv(hue, white, black), h = _a[0], s = _a[1], v = _a[2];
    return hsvToRgb(h, s, v);
}
/**
 * Converts RGB to HWB.
 * @export
 * @param {number} r red 0-255
 * @param {number} g green 0-255
 * @param {number} b blue 0-255
 * @returns {number[]} [hue, whiteness, blackness] (0-360, 0-100, 0-100)
 */
function rgbToHwb(r, g, b) {
    var _a = rgbToHsv(r, g, b), h = _a[0], s = _a[1], v = _a[2];
    return hsvToHwb(h, s, v);
}
/**
 * Converts CMYK to RGB.
 * @see https://www.rapidtables.com/convert/color/cmyk-to-rgb.html
 * @export
 * @param {number} c cyan 0-100
 * @param {number} m magenta 0-100
 * @param {number} y yellow 0-100
 * @param {number} k black 0-100
 * @returns {number[]} [red, green, blue] 0-255
 */
function cmykToRgb(c, m, y, k) {
    c /= 100, m /= 100, y /= 100, k /= 100;
    var red = 255 * (1 - c) * (1 - k);
    var green = 255 * (1 - m) * (1 - k);
    var blue = 255 * (1 - y) * (1 - k);
    return [red, green, blue];
}
/**
 * Converts RGB to CMYK
 * @see https://www.rapidtables.com/convert/color/rgb-to-cmyk.html
 * @export
 * @param {number} r red 0-255
 * @param {number} g green 0-255
 * @param {number} b blue 0-255
 * @returns {number[]} [cyan, magenta, yellow, black] 0-100
 */
function rgbToCmyk(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var k = 1 - Math.max(r, g, b);
    var c = (1 - r - k) / (1 - k);
    var m = (1 - g - k) / (1 - k);
    var y = (1 - b - k) / (1 - k);
    return [c, m, y, k].map(function (x) { return x * 100; });
}
/**
 * Converts HSV to RGB.
 * @see https://www.rapidtables.com/convert/color/hsv-to-rgb.html
 * @export
 * @param {number} h hue 0-360
 * @param {number} s saturation 0-100
 * @param {number} v value 0-100
 * @returns {number[]} [red, green, blue] 0-255
 */
function hsvToRgb(h, s, v) {
    s /= 100;
    v /= 100;
    var r;
    var g;
    var b;
    var i = h / 60;
    var c = v * s;
    var x = c * (1 - Math.abs(i % 2 - 1));
    var m = v - c;
    switch (Math.floor(i)) {
        case 0:
            r = c, g = x, b = 0;
            break;
        case 1:
            r = x, g = c, b = 0;
            break;
        case 2:
            r = 0, g = c, b = x;
            break;
        case 3:
            r = 0, g = x, b = c;
            break;
        case 4:
            r = x, g = 0, b = c;
            break;
        case 5:
            r = c, g = 0, b = x;
            break;
    }
    return [r, g, b].map(function (val) { return (val + m) * 255; });
}
/**
 * Converts RGB to HSV.
 * @see https://www.rapidtables.com/convert/color/rgb-to-hsv.html
 * @export
 * @param {number} r red 0-255
 * @param {number} g green 0-255
 * @param {number} b blue 0-255
 * @returns {number[]} [hue, saturation, value] (0-360, 0-100, 0-100)
 */
function rgbToHsv(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var h;
    var s;
    var v;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    if (delta === 0) {
        h = 0;
    }
    else if (max === r) {
        h = 60 * ((g - b) / delta % 6);
    }
    else if (max === g) {
        h = 60 * ((b - r) / delta + 2);
    }
    else {
        h = 60 * ((r - g) / delta + 4);
    }
    s = max === 0 ? 0 : delta / max;
    v = max;
    return [h, s * 100, v * 100];
}
/**
 * Converts HSV to HWB
 * @see https://en.wikipedia.org/wiki/HWB_color_model
 * @export
 * @param {number} h hue 0-360
 * @param {number} s saturation 0-100
 * @param {number} v value 0-100
 * @returns {number[]} [hue, whiteness, blackness] (0-360, 0-100, 0-100)
 */
function hsvToHwb(h, s, v) {
    s /= 100, v /= 100;
    var white = (1 - s) * v;
    var black = 1 - v;
    return [h, white * 100, black * 100];
}
/**
 * Converts HWB to HSV.
 * @see https://en.wikipedia.org/wiki/HWB_color_model
 * @export
 * @param {number} h hue 0-360
 * @param {number} w whiteness 0-100
 * @param {number} b blackness 0-100
 * @returns {number[]} [hue, saturation, value] (0-360, 0-100, 0-100)
 */
function hwbToHsv(h, w, b) {
    _a = resolveHwb(h, w, b), h = _a[0], w = _a[1], b = _a[2];
    w /= 100, b /= 100;
    var s = 1 - w / (1 - b);
    var v = 1 - b;
    return [h, s * 100, v * 100];
    var _a;
}
/**
 * Converts RGB to HEX string.
 * @export
 * @param {number} r red 0-255
 * @param {number} g green 0-255
 * @param {number} b blue 0-255
 * @param {(number|null)} [a] alpha 0-1 or null
 * @param {boolean} [enableShort] enable shorthand, default is false.
 * @returns {string} Hex string. e.g. 'ff0000'
 */
function rgbToHex(r, g, b, a, enableShort) {
    var arr = [r, g, b];
    if (typeof a === 'number') {
        arr.push(Math.round(a * 255));
    }
    var hex = arr.map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* padStart */])(x.toString(16), 2, '0'); }).join('');
    return enableShort ? hexToShorthand(hex) : hex;
}
function hexToShorthand(hex) {
    var check = true;
    var rgb = hex.match(/.{2}/g);
    rgb.forEach(function (x) {
        if (!x.match(/(.)\1+/)) {
            check = false;
        }
    });
    return check ? rgb.map(function (x) { return x.substring(1); }).join('') : hex;
}
/**
 * Converts HEX string to RGB.
 * @export
 * @param {string} hex hex string. e.g. 'ff0000', 'f00', 'ff000080'
 * @returns {number[]} [red, green, blue, alpha?] (rgb: 0-255, alpha: 0-1)
 */
function hexToRgb(hex) {
    var short = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
    return hex.replace(short, function (m, r, g, b, a) {
        a = typeof a === 'undefined' ? '' : a;
        return r + r + g + g + b + b + a + a;
    })
        .match(/.{2}/g)
        .map(function (x, i) { return i !== 3 ? parseInt(x, 16) : parseInt(x, 16) / 255; });
}
/**
 * Resolve HWB values.
 * @see https://drafts.csswg.org/css-color/#the-hwb-notation
 * @export
 * @param {number} h hue 0-360
 * @param {number} w whiteness 0-100
 * @param {number} b blackness 0-100
 * @returns {number[]} [hue, whiteness, blackness]
 */
function resolveHwb(h, w, b) {
    var total = w + b;
    if (total > 100) {
        w = Number((w / total).toFixed(4)) * 100;
        b = Number((b / total).toFixed(4)) * 100;
    }
    return [h, w, b];
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MooColor", function() { return MooColor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_formatter__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var MooColor = /** @class */ (function (_super) {
    __extends(MooColor, _super);
    /**
     * Creates an instance of MooColor.
     * @param {*} [color] color string. e.g. '#ff0000' 'rgba(255, 0, 0, .5)' 'hsl(120, 50%, 100%)'
     */
    function MooColor(color) {
        var _this = _super.call(this) || this;
        color = color ? color : '#000';
        _this.setColorByParser(color);
        return _this;
    }
    MooColor.mix = function (color1, color2, percentOf1) {
        if (percentOf1 === void 0) { percentOf1 = 50; }
        var c1 = (typeof color1 === 'string') ? new MooColor(color1) : color1;
        var c2 = (typeof color2 === 'string') ? new MooColor(color2) : color2;
        return c2.mix(c1, percentOf1);
    };
    MooColor.prototype.setColorByParser = function (str) {
        var color = Object(__WEBPACK_IMPORTED_MODULE_1__input_parser__["a" /* default */])(str);
        if (!color) {
            throw new Error('parsing error!');
        }
        return this.setColor(color);
    };
    MooColor.prototype.clone = function () {
        return new MooColor().setColor(this.color);
    };
    Object.defineProperty(MooColor.prototype, "brightness", {
        /**
         * Color brightness. 0-255 (It based RGB)
         * @see https://www.w3.org/TR/AERT/#color-contrast
         * @readonly
         * @type {number}
         */
        get: function () {
            var _a = this.getColorAs('rgb').values, r = _a[0], g = _a[1], b = _a[2];
            return ((r * 299) + (g * 587) + (b * 114)) / 1000;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MooColor.prototype, "isLight", {
        /**
         * Returns whether color is light or not.
         * @readonly
         * @type {boolean}
         */
        get: function () {
            return this.brightness >= 128;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MooColor.prototype, "isDark", {
        /**
         * Returns whether color is dark or not.
         * @readonly
         * @type {boolean}
         */
        get: function () {
            return this.brightness < 128;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MooColor.prototype, "luminance", {
        /**
         * Returns luminance value of color.
         * @see https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast
         * @readonly
         * @type {number}
         */
        get: function () {
            var _a = this.getColorAs('rgb').values.map(function (x) { return x / 255; }), r = _a[0], g = _a[1], b = _a[2];
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns contrast ratio with other color. range from 0 to 21.
     * @see https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#contrast-ratiodef
     * @param {MooColor} color
     * @returns {number} 0-21
     */
    MooColor.prototype.contrastRatioWith = function (color) {
        var max = Math.max(this.luminance, color.luminance);
        var min = Math.min(this.luminance, color.luminance);
        return (max + 0.05) / (min + 0.05);
    };
    /**
     * Return true if contrast ratio >= 4.5
     * @param {MooColor} color
     * @returns {boolean}
     */
    MooColor.prototype.isContrastEnough = function (color) {
        return this.contrastRatioWith(color) >= 4.5;
    };
    /**
     * Increase lightness.
     * @param {number} amount 0-100
     * @returns {this}
     */
    MooColor.prototype.lighten = function (amount) {
        return this.manipulate('hsl', function (h, s, l) {
            l = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(l + amount, 0, 100);
            return [h, s, l];
        });
    };
    /**
     * Decrease lightness.
     * @param {number} amount 0-100
     * @returns {this}
     */
    MooColor.prototype.darken = function (amount) {
        return this.manipulate('hsl', function (h, s, l) {
            l = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(l - amount, 0, 100);
            return [h, s, l];
        });
    };
    /**
     * Increase saturation.
     * @param {number} amount 0-100
     * @returns {this}
     */
    MooColor.prototype.saturate = function (amount) {
        return this.manipulate('hsl', function (h, s, l) {
            s = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(s + amount, 0, 100);
            return [h, s, l];
        });
    };
    /**
     * Decrease saturation.
     * @param {number} amount 0-100
     * @returns {this}
     */
    MooColor.prototype.desaturate = function (amount) {
        return this.manipulate('hsl', function (h, s, l) {
            s = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(s - amount, 0, 100);
            return [h, s, l];
        });
    };
    /**
     * Set saturation to 0.
     * @returns {this}
     */
    MooColor.prototype.grayscale = function () {
        return this.manipulate('hsl', function (h, s, l) { return [h, 0, l]; });
    };
    /**
     * Modify whiteness.
     * @param {number} amount -100-100
     * @returns {this}
     */
    MooColor.prototype.whiten = function (amount) {
        var _this = this;
        return this.manipulate('hwb', function (h, w, b) { return _this.resolveHwb(h, Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(w + amount, 0, 100), b); });
    };
    /**
     * Modify blackness.
     * @param {number} amount -100-100
     * @returns {this}
     */
    MooColor.prototype.blacken = function (amount) {
        var _this = this;
        return this.manipulate('hwb', function (h, w, b) { return _this.resolveHwb(h, w, Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(b + amount, 0, 100)); });
    };
    /**
     * Rotate hue value.
     * @param {number} d degree 0-360
     * @returns {this}
     */
    MooColor.prototype.rotate = function (d) {
        return this.manipulate('hsl', function (h, s, l) { return [Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["c" /* degree */])(h + d), s, l]; });
    };
    /**
     * Mix two colors.
     * @param {MooColor} color the color to mixed.
     * @param {number} [percent=50] percentage of color to be mixed.
     * @returns {MooColor}
     */
    MooColor.prototype.mix = function (color, percent) {
        if (percent === void 0) { percent = 50; }
        percent /= 100;
        var m = this.getModel();
        var c1 = this.getColorAs('rgb');
        var c2 = color.getColorAs('rgb');
        var val = c1.values.map(function (v, i) { return v + (c2.values[i] - v) * percent; });
        var a = c1.alpha + (c2.alpha - c1.alpha) * percent;
        return new MooColor().setColor({
            model: 'rgb',
            values: val,
            alpha: a,
        }).changeModel(m);
    };
    MooColor.prototype.manipulate = function (asModel, callback) {
        var m = this.color.model;
        var color = this.getColorAs(asModel);
        color.values = callback.apply(void 0, color.values);
        return this.setColor(color).changeModel(m);
    };
    return MooColor;
}(__WEBPACK_IMPORTED_MODULE_0__color_formatter__["a" /* ColorFormatter */]));



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_converter__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(0);


var ColorFormatter = /** @class */ (function () {
    function ColorFormatter() {
        // In hwb model, whiteness and blackness value's adjust will required.
        this.resolveHwb = __WEBPACK_IMPORTED_MODULE_0__color_converter__["g" /* resolveHwb */];
    }
    ColorFormatter.prototype.setColor = function (color) {
        color.alpha = Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["e" /* resolveAlpha */])(color.alpha);
        this.color = color;
        return this;
    };
    ColorFormatter.prototype.getColor = function () {
        return this.color;
    };
    ColorFormatter.prototype.getColorAs = function (model) {
        return this.color.model === model
            ? this.color
            : this.convert(this.color, model);
    };
    ColorFormatter.prototype.getModel = function () {
        return this.color ? this.color.model : undefined;
    };
    ColorFormatter.prototype.changeModel = function (model) {
        return this.color.model === model
            ? this
            : this.setColor(this.convert(this.color, model));
    };
    ColorFormatter.prototype.getAlpha = function () {
        return this.color.alpha;
    };
    ColorFormatter.prototype.setAlpha = function (alpha) {
        this.color.alpha = alpha;
        return this;
    };
    ColorFormatter.prototype.convert = function (color, m) {
        var val;
        switch (color.model) {
            case 'rgb':
                val = this.convertFromRgb(color.values, m);
                break;
            case 'hwb':
                val = this.convertFromHwb(color.values, m);
                break;
            case 'hsl':
                val = this.convertFromHsl(color.values, m);
                break;
            case 'hsv':
                val = this.convertFromHsv(color.values, m);
                break;
            case 'cmyk':
                val = this.convertFromCmyk(color.values, m);
                break;
        }
        if (!val.length) {
            throw new Error('Converting Error!');
        }
        return {
            model: m,
            values: val,
            alpha: color.alpha,
        };
    };
    ColorFormatter.prototype.toString = function (model) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        model = model ? model : this.color.model;
        switch (model) {
            case 'hex': return this.toHex(args[0]);
            case 'hwb': return this.toHwb();
            case 'hsl': return this.toHsl();
            case 'hsv': return this.toHsv();
            case 'cmyk': return this.toCmyk();
            default: return this.toRgb();
        }
    };
    /**
     * Represents color as HEX notation.
     * @see https://www.w3.org/TR/css-color-4/#hex-notation
     * @param {boolean} [enableShort] default is false.
     * @returns {string}
     */
    ColorFormatter.prototype.toHex = function (enableShort) {
        var color = this.getColorAs('rgb');
        var _a = color.values.map(function (x) { return Math.round(x); }), r = _a[0], g = _a[1], b = _a[2];
        var a = color.alpha === 1 ? null : color.alpha;
        return "#" + __WEBPACK_IMPORTED_MODULE_0__color_converter__["i" /* rgbToHex */](r, g, b, a, true);
    };
    /**
     * Represents color as RGB notation.
     * @see https://www.w3.org/TR/css-color-4/#rgb-functions
     * @returns {string}
     */
    ColorFormatter.prototype.toRgb = function () {
        var color = this.getColorAs('rgb');
        var _a = color.values.map(function (x) { return Math.round(x); }), r = _a[0], g = _a[1], b = _a[2];
        return color.alpha === 1
            ? "rgb(" + r + ", " + g + ", " + b + ")"
            : "rgba(" + r + ", " + g + ", " + b + ", " + color.alpha + ")";
    };
    /**
     * Represents color as HWB notation.
     * @see https://www.w3.org/TR/css-color-4/#the-hwb-notation
     * @returns {string} e.g. 'hwb(0, 0%, 0%, 0)'
     */
    ColorFormatter.prototype.toHwb = function () {
        var color = this.getColorAs('hwb');
        var _a = color.values.map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["b" /* decimal */])(x, 2); }), h = _a[0], w = _a[1], b = _a[2];
        var a = color.alpha === 1 ? '' : ", " + color.alpha;
        return "hwb(" + h + ", " + w + "%, " + b + "%" + a + ")";
    };
    /**
     * Represents color as HSL notation.
     * @see https://www.w3.org/TR/css-color-4/#the-hsl-notation
     * @returns {string}
     */
    ColorFormatter.prototype.toHsl = function () {
        var color = this.getColorAs('hsl');
        var _a = color.values.map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["b" /* decimal */])(x, 2); }), h = _a[0], s = _a[1], l = _a[2];
        return color.alpha === 1
            ? "hsl(" + h + ", " + s + "%, " + l + "%)"
            : "hsla(" + h + ", " + s + "%, " + l + "%, " + color.alpha + ")";
    };
    /**
     * Represents color as HSV notation. This format is similar to HSL.
     * @returns {string}
     */
    ColorFormatter.prototype.toHsv = function () {
        var color = this.getColorAs('hsv');
        var _a = color.values.map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["b" /* decimal */])(x, 2); }), h = _a[0], s = _a[1], v = _a[2];
        return color.alpha === 1
            ? "hsv(" + h + ", " + s + "%, " + v + "%)"
            : "hsva(" + h + ", " + s + "%, " + v + "%, " + color.alpha + ")";
    };
    /**
     * Represents color as CMYK notation. e.g. 'cmyk(0%, 0%, 0%, 0%)'
     * @see https://www.w3.org/TR/css-color-4/#cmyk-colors
     * @returns {string}
     */
    ColorFormatter.prototype.toCmyk = function () {
        var color = this.getColorAs('cmyk');
        var _a = color.values.map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["b" /* decimal */])(x, 2); }), c = _a[0], m = _a[1], y = _a[2], k = _a[3];
        var a = color.alpha === 1 ? '' : ", " + color.alpha;
        return "cmyk(" + c + "%, " + m + "%, " + y + "%, " + k + "%" + a + ")";
    };
    ColorFormatter.prototype.convertFromRgb = function (values, model) {
        var r = values[0], g = values[1], b = values[2];
        switch (model) {
            case 'rgb': break;
            case 'hwb':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["l" /* rgbToHwb */](r, g, b);
                break;
            case 'hsl':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["j" /* rgbToHsl */](r, g, b);
                break;
            case 'hsv':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["k" /* rgbToHsv */](r, g, b);
                break;
            case 'cmyk':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["h" /* rgbToCmyk */](r, g, b);
                break;
        }
        return values;
    };
    ColorFormatter.prototype.convertFromHwb = function (values, model) {
        var h = values[0], w = values[1], b = values[2];
        var rgb = __WEBPACK_IMPORTED_MODULE_0__color_converter__["f" /* hwbToRgb */](h, w, b);
        var red = rgb[0], green = rgb[1], blue = rgb[2];
        switch (model) {
            case 'rgb':
                values = rgb;
                break;
            case 'hwb': break;
            case 'hsl':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["j" /* rgbToHsl */](red, green, blue);
                break;
            case 'hsv':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["e" /* hwbToHsv */](h, w, b);
                break;
            case 'cmyk':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["h" /* rgbToCmyk */](red, green, blue);
                break;
        }
        return values;
    };
    ColorFormatter.prototype.convertFromHsl = function (values, model) {
        var h = values[0], s = values[1], l = values[2];
        var rgb = __WEBPACK_IMPORTED_MODULE_0__color_converter__["b" /* hslToRgb */](h, s, l);
        var red = rgb[0], green = rgb[1], blue = rgb[2];
        switch (model) {
            case 'rgb':
                values = rgb;
                break;
            case 'hwb':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["l" /* rgbToHwb */](red, green, blue);
                break;
            case 'hsl': break;
            case 'hsv':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["k" /* rgbToHsv */](red, green, blue);
                break;
            case 'cmyk':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["h" /* rgbToCmyk */](red, green, blue);
                break;
        }
        return values;
    };
    ColorFormatter.prototype.convertFromHsv = function (values, model) {
        var h = values[0], s = values[1], v = values[2];
        var rgb = __WEBPACK_IMPORTED_MODULE_0__color_converter__["d" /* hsvToRgb */](h, s, v);
        var red = rgb[0], green = rgb[1], blue = rgb[2];
        switch (model) {
            case 'rgb':
                values = rgb;
                break;
            case 'hwb':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["c" /* hsvToHwb */](h, s, v);
                break;
            case 'hsl':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["j" /* rgbToHsl */](red, green, blue);
                break;
            case 'hsv': break;
            case 'cmyk':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["h" /* rgbToCmyk */](red, green, blue);
                break;
        }
        return values;
    };
    ColorFormatter.prototype.convertFromCmyk = function (values, model) {
        var c = values[0], m = values[1], y = values[2], k = values[3];
        var rgb = __WEBPACK_IMPORTED_MODULE_0__color_converter__["a" /* cmykToRgb */](c, m, y, k);
        var red = rgb[0], green = rgb[1], blue = rgb[2];
        switch (model) {
            case 'rgb':
                values = rgb;
                break;
            case 'hwb':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["l" /* rgbToHwb */](red, green, blue);
                break;
            case 'hsl':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["j" /* rgbToHsl */](red, green, blue);
                break;
            case 'hsv':
                values = __WEBPACK_IMPORTED_MODULE_0__color_converter__["k" /* rgbToHsv */](red, green, blue);
                break;
            case 'cmyk': break;
        }
        return values;
    };
    return ColorFormatter;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inputParser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_converter__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_names__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(0);



function inputParser(input) {
    if (typeof input === 'string') {
        if (input in __WEBPACK_IMPORTED_MODULE_1__color_names__["a" /* default */]) {
            // Named colors.
            return {
                model: 'rgb',
                values: __WEBPACK_IMPORTED_MODULE_1__color_names__["a" /* default */][input],
                alpha: 1,
            };
        }
        else if (input === 'transparent') {
            // 'transparent'.
            return {
                model: 'rgb',
                values: [0, 0, 0],
                alpha: 0,
            };
        }
        else {
            // parse string.
            var prefix = input.substr(0, 3).toLowerCase();
            switch (prefix) {
                case 'hwb': return parseHwb(input);
                case 'hsl': return parseHsl(input);
                case 'hsv': return parseHsv(input);
                case 'cmy': return parseCmyk(input);
                default: return parseRgb(input);
            }
        }
    }
}
function parseRgb(input) {
    var hex = /^#?([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var shortHex = /^#?([a-f0-9]{3})([a-f0-9]{1})?$/i;
    var rgba = /^rgba?\s*\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
    // tslint:disable-next-line:max-line-length
    var percent = /^rgba?\s*\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
    var match;
    var hexToAlpha = function (num) { return Math.round((parseInt(num, 16) / 255) * 100) / 100; };
    var val;
    var a;
    if (hex.test(input)) {
        match = input.match(hex);
        var hexPart = match[1];
        var alphaPart = match[2];
        val = hexPart.match(/.{2}/g).map(function (x) { return parseInt(x, 16); });
        a = alphaPart ? hexToAlpha(alphaPart) : 1;
    }
    else if (shortHex.test(input)) {
        match = input.match(shortHex);
        var hexPart = match[1];
        var alphaPart = match[2];
        val = hexPart.match(/.{1}/g).map(function (x) { return parseInt(x + x, 16); });
        a = alphaPart ? hexToAlpha(alphaPart) : 1;
    }
    else if (rgba.test(input)) {
        match = input.match(rgba);
        val = match.slice(1, 4).map(function (x) { return parseInt(x, 0); });
        a = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* resolveAlpha */])(match[4]);
    }
    else if (percent.test(input)) {
        match = input.match(percent);
        val = match.slice(1, 4).map(function (x) { return Math.round(parseFloat(x) * 2.55); });
        a = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* resolveAlpha */])(match[4]);
    }
    else {
        return null;
    }
    return {
        model: 'rgb',
        values: val.map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(x, 0, 255); }),
        alpha: Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(a, 0, 1),
    };
}
function parseHsl(input) {
    // tslint:disable-next-line:max-line-length
    var hsl = /^hsla?\s*\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i;
    if (hsl.test(input)) {
        var match = input.match(hsl);
        return {
            model: 'hsl',
            values: [
                Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["c" /* degree */])(match[1]),
                Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(parseFloat(match[2]), 0, 100),
                Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(parseFloat(match[3]), 0, 100),
            ],
            alpha: Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* resolveAlpha */])(match[4]),
        };
    }
    else {
        return null;
    }
}
function parseHwb(input) {
    // tslint:disable-next-line:max-line-length
    var hwb = /^hwba?\s*\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i;
    if (hwb.test(input)) {
        var match = input.match(hwb);
        var h = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["c" /* degree */])(match[1]);
        var w = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(parseFloat(match[2]), 0, 100);
        var b = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(parseFloat(match[3]), 0, 100);
        return {
            model: 'hwb',
            values: Object(__WEBPACK_IMPORTED_MODULE_0__color_converter__["g" /* resolveHwb */])(h, w, b),
            alpha: Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* resolveAlpha */])(match[4]),
        };
    }
    else {
        return null;
    }
}
function parseHsv(input) {
    // tslint:disable-next-line:max-line-length
    var hsv = /^hsva?\s*\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i;
    if (hsv.test(input)) {
        var match = input.match(hsv);
        return {
            model: 'hsv',
            values: [
                Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["c" /* degree */])(match[1]),
                Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(parseFloat(match[2]), 0, 100),
                Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(parseFloat(match[3]), 0, 100),
            ],
            alpha: Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* resolveAlpha */])(match[4]),
        };
    }
    else {
        return null;
    }
}
function parseCmyk(input) {
    // tslint:disable-next-line:max-line-length
    var cmyk = /^cmyk\s*\(\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i;
    if (cmyk.test(input)) {
        var match = input.match(cmyk);
        return {
            model: 'cmyk',
            values: [
                Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(parseFloat(match[1]), 0, 100),
                Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(parseFloat(match[2]), 0, 100),
                Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(parseFloat(match[3]), 0, 100),
                Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* clamp */])(parseFloat(match[4]), 0, 100),
            ],
            alpha: Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* resolveAlpha */])(match[5]),
        };
    }
    else {
        return null;
    }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color_name__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color_name___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_color_name__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_color_name__);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ })
/******/ ]);
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrowLeft = __webpack_require__(45);

Object.defineProperty(exports, 'arrowLeft', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowLeft).default;
  }
});

var _arrowRight = __webpack_require__(46);

Object.defineProperty(exports, 'arrowRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowRight).default;
  }
});

var _arrowUp = __webpack_require__(47);

Object.defineProperty(exports, 'arrowUp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowUp).default;
  }
});

var _arrowDown = __webpack_require__(48);

Object.defineProperty(exports, 'arrowDown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowDown).default;
  }
});

var _caretUp = __webpack_require__(49);

Object.defineProperty(exports, 'caretUp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_caretUp).default;
  }
});

var _caretDown = __webpack_require__(50);

Object.defineProperty(exports, 'caretDown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_caretDown).default;
  }
});

var _caretLeft = __webpack_require__(51);

Object.defineProperty(exports, 'caretLeft', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_caretLeft).default;
  }
});

var _caretRight = __webpack_require__(52);

Object.defineProperty(exports, 'caretRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_caretRight).default;
  }
});

var _close = __webpack_require__(53);

Object.defineProperty(exports, 'close', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_close).default;
  }
});

var _check = __webpack_require__(54);

Object.defineProperty(exports, 'check', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_check).default;
  }
});

var _search = __webpack_require__(55);

Object.defineProperty(exports, 'search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_search).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeUtil = __webpack_require__(8);

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_nodeUtil2.default],
  props: {
    tag: {
      type: String,
      required: true
    },
    owned: {
      type: Boolean,
      default: false
    }
  },
  render: function render(createElement) {
    // create kebab-case id
    var text = this.getChildrenTextContent(this.$slots.default);
    var tagId = (0, _util.strToKebab)(text);
    var data = {
      attrs: {
        id: this.owned ? tagId : false
      }
    };
    var children = [createElement('a', {
      attrs: {
        href: '#' + tagId
      }
    }, this.$slots.default)];

    return createElement(this.tag, data, children);
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {

    /**
     * get text content from children nodes.
     *
     * @param  {Array} children  An array of VNodes.
     * @return {String}
     */
    getChildrenTextContent: function getChildrenTextContent(children) {
      var _this = this;

      return children.map(function (node) {
        return node.children ? _this.getChildrenTextContent(node.children) : node.text;
      }).join('');
    },


    /**
     * Remove children's elements.
     *
     * @param  {Array} children An array of VNodes.
     * @return {void}
     */
    clearChildren: function clearChildren(children) {
      children.forEach(function (node) {
        node.elm.parentNode.removeChild(node.elm);
      });
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mooColor = __webpack_require__(5);

var _closeButton = __webpack_require__(4);

var _closeButton2 = _interopRequireDefault(_closeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    closeable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imgAlt: {
      type: String,
      default: ''
    }
  },
  render: function render(createElement) {
    return createElement(this.tag, this.dataObject(), this.childrenArray(createElement));
  },

  methods: {
    dataObject: function dataObject() {
      return {
        'class': {
          chip: true
        }
      };
    },
    childrenArray: function childrenArray(createElement) {
      var children = [];
      // <img>
      if (this.imgSrc) {
        children.push(createElement('img', {
          attrs: {
            src: this.imgSrc,
            alt: this.imgAlt
          }
        }));
      }
      // <span>
      children.push(createElement('span', {}, this.$slots.default));
      // <close-button>
      if (this.closeable) {
        children.push(createElement(_closeButton2.default, {
          props: {
            action: 'remove'
          }
        }));
      }
      return children;
    },
    coloring: function coloring() {
      if (!this.color) return;
      var color = new _mooColor.MooColor(this.color);
      this.$el.style.backgroundColor = color.toHex(true);
      this.$el.style.color = color.isLight ? '#333' : '#fff';
    }
  },
  mounted: function mounted() {
    this.coloring();
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(2);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//

exports.default = {
  props: {
    position: {
      type: String,
      default: '' // '' (no specified) | top-right | middle-right
    },
    action: {
      type: String,
      default: 'hide' // hide | remove | '' (no-action)
    },
    target: {
      type: String,
      default: '' // '' (parentNode) | selector
    },
    related: {
      type: Boolean,
      default: false // If it true, parent node's style position is set 'relative'.
    }
  },
  data: function data() {
    return {
      classObject: {
        'close-button': true,
        'at-corner': this.position == 'top-right',
        'at-right-middle': this.position == 'middle-right'
      }
    };
  },
  mounted: function mounted() {
    if (this.related || this.position !== '') {
      this.$el.parentNode.style.position = 'relative';
    }
    if (this.$el.innerHTML === '') {
      // Appends 'close' icon if default slot is empty.
      this.$el.appendChild((0, _util.makeIcon)('close'));
    }
  },

  methods: {
    onClick: function onClick(event) {
      var btn = event.currentTarget;
      var target = this.target ? _elementUtil2.default.findAncestor(btn, this.target) : btn.parentNode;

      this.$emit('close', target);
      if (this.action == 'hide') {
        _elementUtil2.default.hide(target);
      } else if (this.action == 'remove') {
        target.parentNode.removeChild(target);
      }
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66110ba6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66110ba6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66110ba6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\collapse.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66110ba6", Component.options)
  } else {
    hotAPI.reload("data-v-66110ba6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    id: {
      type: String,
      required: true
    },
    expanded: {
      type: Boolean,
      default: false
    },
    accordion: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      show: this.expanded
    };
  },

  computed: {
    state: function state() {
      return {
        id: this.id,
        expanded: this.show,
        accordion: this.accordion
      };
    }
  },
  watch: {
    expanded: function expanded(val) {
      this.show = val;
    }
  },
  methods: {
    expanding: function expanding(el) {
      el.style.maxHeight = 'none';
      var realHeight = window.getComputedStyle(el).height;
      el.style.maxHeight = '0px';
      el.offsetHeight; // Force repaint
      el.style.maxHeight = realHeight;
    },
    collapsing: function collapsing(el) {
      el.style.maxHeight = 'none';
      var realHeight = window.getComputedStyle(el).height;
      el.style.maxHeight = realHeight;
      el.offsetHeight; // Force repaint
      el.style.maxHeight = '0px';
    },
    clearHeight: function clearHeight(el) {
      el.style.maxHeight = '';
    },


    /**
     * toggle collapse item.
     *
     * @param {string} id collapse-id.
     * @param {string} action toggle|show|hide
     * @param {function|null} cb (state) => void
     */
    toggleCollapse: function toggleCollapse(id) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'toggle';
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (id !== this.id) return;
      switch (action.toLowerCase()) {
        case 'show':
          this.show = true;break;
        case 'hide':
          this.show = false;break;
        case 'toggle':
        default:
          this.show = !this.show;
      }
      if (typeof cb === 'function') cb(this.state); // return to callback.
      this.emitCurrentState();
    },


    /**
     * toggle accordion
     * @param {string} accordion accordion group name.
     * @param {string} id collapse id.
     * @param {string} action toggle|show|hide
     */
    toggleAccordion: function toggleAccordion(accordion, id) {
      var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'toggle';

      if (accordion !== this.accordion) return;
      var isSelf = this.id === id;
      switch (action.toLowerCase()) {
        case 'show':
          this.show = isSelf ? true : false;break;
        case 'hide':
          if (isSelf) this.show = false;break;
        case 'toggle':
        default:
          this.show = isSelf ? !this.show : false;
      }
      this.emitCurrentState();
    },

    // emit collapse or accordion's state to $root.
    emitCurrentState: function emitCurrentState() {
      this.$root.$emit('collapse-state', this.state);
    }
  },
  beforeMount: function beforeMount() {
    this.$root.$on('collapse-toggle', this.toggleCollapse.bind(this));
    if (this.accordion) {
      this.$root.$on('accordion-toggle', this.toggleAccordion.bind(this));
    }
    this.emitCurrentState();
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popper = __webpack_require__(14);

var _popper2 = _interopRequireDefault(_popper);

var _elementUtil = __webpack_require__(2);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    toggle: {
      type: String,
      default: 'toggle' // toggle|hover
    },
    placement: {
      type: String,
      default: 'bottom' // auto|top|right|bottom|left (surfix: '-start'|'-end')
    },
    modifiers: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    offset: {
      type: String,
      default: '1, 1'
    },
    flip: {
      type: String,
      default: 'on' // on|off
    },
    preventOverflow: {
      type: String,
      default: 'on' // on|off
    },
    withArrow: {
      // NOTE: This is experimental prop.
      type: Boolean,
      default: false
    },
    buttonWithCaret: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      btn: null,
      content: null,
      items: [],
      isShown: false,
      pop: undefined
    };
  },

  watch: {
    isShown: function isShown(val) {
      if (val) this.updatePopper();
    }
  },
  computed: {
    contentClass: function contentClass() {
      return {
        'dropdown-content': true,
        'show': this.isShown,
        'with-arrow': this.withArrow
      };
    }
  },
  methods: {
    show: function show() {
      this.isShown = true;
    },
    hide: function hide() {
      this.isShown = false;
    },
    toggleShow: function toggleShow() {
      this.isShown ? this.hide() : this.show();
    },
    onOtherClick: function onOtherClick(event) {
      var isOwn = _elementUtil2.default.findAncestor(event.target, this.$el) != null;

      if (!isOwn && this.isShown == true) this.hide();
    },
    onBtnKeydown: function onBtnKeydown(event) {
      if (event.key.match(/Escape|Esc/)) {
        this.hide();
        this.btn.focus();
      }
      if (event.key.match(/ArrowUp|ArrowDown|Up|Down/)) {
        event.preventDefault();
        if (!this.isShown) this.show();
        if (event.key.match(/ArrowUp|Up/)) {
          this.items[this.items.length - 1].focus();
        }
        if (event.key.match(/ArrowDown|Down/)) {
          this.items[0].focus();
        }
      }
    },
    onItemKeydown: function onItemKeydown(event) {
      if (event.key.match(/Escape|Esc/)) {
        this.hide();
        this.btn.focus();
      }
      if (event.key.match(/ArrowUp|ArrowDown|Up|Down/)) {
        event.preventDefault();
        var index = this.items.findIndex(function (item) {
          return item == event.currentTarget;
        });
        if (index === -1) return;
        if (event.key.match(/ArrowUp|Up/)) {
          index = index == 0 ? this.items.length - 1 : index - 1;
          this.items[index].focus();
        }
        if (event.key.match(/ArrowDown|Down/)) {
          index = index == this.items.length - 1 ? 0 : index + 1;
          this.items[index].focus();
        }
      }
    },
    createPopper: function createPopper() {
      var modifiers = Object.assign(this.modifiers, {
        offset: { offset: this.offset },
        flip: { enabled: this.flip === 'on' },
        preventOverflow: { enabled: this.preventOverflow === 'on' },
        hide: { enabled: this.preventOverflow === 'on' }
      });
      this.pop = new _popper2.default(this.btn, this.content, {
        placement: this.placement,
        modifiers: modifiers
      });
    },
    updatePopper: function updatePopper() {
      if (this.pop) {
        this.pop.scheduleUpdate();
      } else {
        this.createPopper();
        this.updatePopper();
      }
    },
    initElements: function initElements() {
      // button.
      this.btn = this.$slots.button[0].elm;
      this.btn.classList.add('dropdown-button');
      if (this.buttonWithCaret) {
        this.btn.appendChild((0, _util.makeIcon)('caret-down'));
      }
      // content.
      this.content = this.$el.querySelector('.dropdown-content');
      // items.
      var items = this.content.querySelectorAll('.dropdown-item:not([disabled])');
      this.items = _elementUtil2.default.nodeListToArray(items);
    },
    addListeners: function addListeners() {
      var _this = this;

      if (this.toggle === 'toggle') {
        this.btn.addEventListener('click', this.toggleShow.bind(this));
        window.addEventListener('click', this.onOtherClick.bind(this));
      } else if (this.toggle === 'hover') {
        this.$el.addEventListener('mouseover', this.show.bind(this));
        this.$el.addEventListener('mouseout', this.hide.bind(this));
      }
      // Navigation by key.
      this.btn.addEventListener('keydown', this.onBtnKeydown.bind(this));
      this.items.forEach(function (item) {
        return item.addEventListener('keydown', _this.onItemKeydown.bind(_this));
      });
    }
  },
  mounted: function mounted() {
    this.initElements();
    this.addListeners();
  }
}; //
//
//
//
//
//
//
//
//
//

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.13.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE10$1() && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(62)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a61f9c4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a61f9c4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a61f9c4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\message.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9a61f9c4", Component.options)
  } else {
    hotAPI.reload("data-v-9a61f9c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _closeButton = __webpack_require__(4);

var _closeButton2 = _interopRequireDefault(_closeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { CloseButton: _closeButton2.default },
  props: {
    status: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'fade'
    },
    closeHtml: {
      type: String,
      default: ''
    }
  },
  computed: {
    effectName: function effectName() {
      return 'message-' + this.effect;
    },
    classObject: function classObject() {
      var obj = { message: true };
      var status = this.status.toLowerCase();
      if (this.status) obj[status] = true;
      return obj;
    }
  },
  data: function data() {
    return {
      show: true
    };
  },

  methods: {
    onClose: function onClose() {
      this.$emit('close', this);
      this.show = false;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = __webpack_require__(15);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { Message: _message2.default },
  props: {
    effect: {
      type: String,
      default: 'fade'
    },
    closeHtml: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      incresement: 0,
      messages: []
    };
  },

  methods: {
    add: function add(text) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

      this.messages.push({
        id: this.incresement,
        status: status,
        text: text
      });
      this.incresement++;
    },
    clear: function clear() {
      this.messages = [];
    },
    remove: function remove(id) {
      var index = this.messages.findIndex(function (item) {
        return item.id === id;
      });
      this.messages.splice(index, 1);
    }
  },
  beforeMount: function beforeMount() {
    var _this = this;

    // Attach helper methods to Moss object.
    // message-box should be unique.
    if (typeof window.Moss !== 'undefined' && typeof window.Moss.messageBox === 'undefined') {
      this.$root.$on('message-box-add', function (text, status) {
        _this.add(text, status);
      });
      this.$root.$on('message-box-clear', function () {
        _this.clear();
      });

      window.Moss.messageBox = {
        add: function add(text) {
          var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

          _this.$root.$emit('message-box-add', text, status);
        },
        clear: function clear() {
          _this.$root.$emit('message-box-clear');
        }
      };
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(2);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _closeButton = __webpack_require__(4);

var _closeButton2 = _interopRequireDefault(_closeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: { CloseButton: _closeButton2.default },
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'from-top'
    },
    closeButtonHtml: {
      type: String,
      default: ''
    },
    closeOn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    effectName: function effectName() {
      return 'modal-' + this.effect;
    }
  },
  data: function data() {
    return {
      show: false
    };
  },

  watch: {
    show: function show(shown) {
      var body = document.querySelector('body');
      if (shown) {
        body.classList.add('modal-shown');
      } else {
        body.classList.remove('modal-shown');
      }
    }
  },
  methods: {
    toggleModal: function toggleModal(name) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'toggle';

      if (name !== this.name) return;
      switch (action.toLowerCase()) {
        case 'show':
          this.show = true;break;
        case 'close':
          this.show = false;break;
        case 'toggle':
        default:
          this.show = !this.show;break;
      }
    },
    onKeydown: function onKeydown(event) {
      if (this.show && event.key.match(/Escape|Esc/)) {
        event.preventDefault();
        this.show = false;
      }
    }
  },
  beforeMount: function beforeMount() {
    var _this = this;

    // add key listener. close modal if 'esc' key downed.
    window.addEventListener('keydown', this.onKeydown.bind(this));
    // register events to $root and self.
    this.$root.$on('modal-toggle', this.toggleModal.bind(this));
    this.$on('close', function () {
      _this.$root.$emit('modal-toggle', _this.name, 'close');
    });

    // Attaches helper methods to Moss object.
    if (typeof window.Moss !== 'undefined' && typeof window.Moss.modal === 'undefined') {
      window.Moss.modal = {
        show: function show(name) {
          return _this.$root.$emit('modal-toggle', name, 'show');
        },
        close: function close(name) {
          return _this.$root.$emit('modal-toggle', name, 'close');
        },
        toggle: function toggle(name) {
          var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'toggle';
          return _this.$root.$emit('modal-toggle', name, action);
        }
      };
    }

    if (this.closeOn) {
      window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal-mask')) {
          _this.$root.$emit('modal-toggle', _this.name, 'close');
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    // Add data-toggle listeners. 'cancel'|'close'
    var elms = _elementUtil2.default.getElements('[data-toggle="cancel"],[data-toggle="close"]', this.$el);
    _elementUtil2.default.addListener(elms, 'click', function () {
      return _this2.toggleModal(_this2.name, 'close');
    });
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navbarToggle = __webpack_require__(20);

var _navbarToggle2 = _interopRequireDefault(_navbarToggle);

var _collapse = __webpack_require__(11);

var _collapse2 = _interopRequireDefault(_collapse);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { NavbarToggle: _navbarToggle2.default, Collapse: _collapse2.default },
  props: {
    align: {
      type: String,
      default: ''
    },
    headerAlign: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      toggleColor: '',
      toggleExpanded: false,
      navShow: true
    };
  },

  computed: {
    headerClass: function headerClass() {
      var obj = { 'navbar-header': true };
      if (this.headerAlign) obj['justify-content-' + this.headerAlign] = true;
      return obj;
    },
    bodyClass: function bodyClass() {
      var obj = { 'navbar-body': true };
      if (this.align) obj['justify-content-' + this.align] = true;
      return obj;
    }
  },
  methods: {
    onToggleClick: function onToggleClick() {
      this.toggleExpanded = !this.toggleExpanded;
      this.navShow = this.toggleExpanded;
    },
    responsiveBody: function responsiveBody() {
      if ((0, _util.isMobileSize)(768)) {
        this.toggleExpanded = this.navShow = false;
      } else {
        this.toggleExpanded = false;
        this.navShow = true;
      }
    }
  },
  mounted: function mounted() {
    // Auto toggle color.
    this.toggleColor = window.getComputedStyle(this.$el).color;

    // Add resize listener.
    window.addEventListener('resize', this.responsiveBody.bind(this));
    this.responsiveBody();
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_toggle_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_toggle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_toggle_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_toggle_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_toggle_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58978af0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_toggle_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_toggle_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58978af0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_toggle_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58978af0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_toggle_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\navbar-toggle.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58978af0", Component.options)
  } else {
    hotAPI.reload("data-v-58978af0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObject: function classObject() {
      return {
        'navbar-toggle': true,
        change: this.opened
      };
    },
    barStyle: function barStyle() {
      return {
        backgroundColor: this.color ? this.color : null
      };
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: {
    href: {
      type: String,
      default: '/'
    },
    type: {
      type: String,
      default: 'text' // text | image
    }
  },
  computed: {
    classObject: function classObject() {
      var obj = { 'navbar-brand': true };
      if (this.isText) obj['text'] = true;
      return obj;
    },
    isText: function isText() {
      return this.type.toLowerCase() === 'text';
    }
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: {
    align: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObject: function classObject() {
      var obj = { 'navbar-nav': true };
      if (this.align) obj['justify-content-' + this.align] = true;
      return obj;
    }
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeUtil = __webpack_require__(8);

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_nodeUtil2.default],
  props: {
    href: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasHref: function hasHref() {
      return this.href !== '';
    }
  },
  data: function data() {
    return {
      linkText: this.text
    };
  },

  methods: {
    convertLinkText: function convertLinkText() {
      if (this.hasHref && this.$slots.default) {
        this.linkText = this.getChildrenTextContent(this.$slots.default);
        this.clearChildren(this.$slots.default);
        this.$slots.default = [];
      }
    }
  },
  mounted: function mounted() {
    this.convertLinkText();
  }
}; //
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {
  props: {
    src: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data: function data() {
    return {
      styleObject: {
        backgroundImage: 'url("' + this.src + '")',
        height: this.height
      }
    };
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementMeasurer = __webpack_require__(3);

var _elementMeasurer2 = _interopRequireDefault(_elementMeasurer);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    duration: {
      type: Number,
      default: 600
    },
    easing: {
      type: String,
      default: 'easeOutCubic'
    },
    offset: {
      type: Number,
      default: 0
    },
    topHtml: {
      type: String,
      default: ''
    },
    bottomHtml: {
      type: String,
      default: ''
    },
    disableTop: {
      type: Boolean,
      default: false
    },
    disableBottom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    topIcon: function topIcon() {
      return this.topHtml || (0, _util.makeIconHtml)('arrow-up');
    },
    bottomIcon: function bottomIcon() {
      return this.bottomHtml || (0, _util.makeIconHtml)('arrow-down');
    }
  },
  data: function data() {
    return {
      showToTop: true,
      showToBottom: true,
      docSize: new _elementMeasurer2.default()
    };
  },
  mounted: function mounted() {
    if (this.offset) {
      window.addEventListener('scroll', this.onScroll.bind(this));
      this.onScroll(); // for initialize.
    }
  },

  methods: {
    toTop: function toTop() {
      (0, _util.scrollIt)(0, this.duration, this.easing);
    },
    toBottom: function toBottom() {
      (0, _util.scrollIt)(this.docSize.maxScrollTop, this.duration, this.easing);
    },
    onScroll: function onScroll() {
      this.showToTop = this.docSize.scrollTop >= this.offset;
      this.showToBottom = this.docSize.maxScrollTop - this.docSize.scrollTop >= this.offset;
    }
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(2);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    view: {
      type: String,
      default: 'read'
    }
  },
  data: function data() {
    return {
      state: this.view
    };
  },

  methods: {
    changeView: function changeView() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'read';

      this.state = state;
    },
    addListener: function addListener(selector, listener) {
      var elms = _elementUtil2.default.getElements(selector, this.$el);
      _elementUtil2.default.addListener(elms, 'click', listener);
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Add class to slots.
    this.$slots.read[0].elm.classList.add('read');
    this.$slots.update[0].elm.classList.add('update');
    this.$slots.delete[0].elm.classList.add('delete');

    // Add toggle listener.
    this.addListener('[data-toggle="read"]', function () {
      return _this.changeView('read');
    });
    this.addListener('[data-toggle="cancel"]', function () {
      return _this.changeView('read');
    });
    this.addListener('[data-toggle="update"]', function () {
      return _this.changeView('update');
    });
    this.addListener('[data-toggle="delete"]', function () {
      return _this.changeView('delete');
    });
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_303b232c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tab_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_303b232c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tab_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_303b232c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tab_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\tab.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-303b232c", Component.options)
  } else {
    hotAPI.reload("data-v-303b232c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      isActive: this.selected,
      effectName: ''
    };
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(28);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { Tab: _tab2.default },
  props: {
    effect: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'start'
    },
    growEnabled: {
      type: Boolean,
      default: false
    },
    containerStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    effectName: function effectName() {
      return this.effect ? 'tab-' + this.effect : '';
    },
    tabsClass: function tabsClass() {
      var classObject = { tabs: true };
      classObject['justify-content-' + this.align] = true;
      return classObject;
    }
  },
  data: function data() {
    return {
      tabs: []
    };
  },

  methods: {
    selectTab: function selectTab(selectedTab) {
      this.tabs.forEach(function (tab) {
        return tab.isActive = tab.name === selectedTab.name;
      });
      this.$emit('tab-selected', selectedTab);
    },
    tabClass: function tabClass(tab) {
      var obj = {
        'tab-link': true,
        active: tab.isActive
      };
      if (tab.activeColor) obj[tab.activeColor] = true;
      return obj;
    }
  },
  created: function created() {
    this.tabs = this.$children;
  },
  mounted: function mounted() {
    var _this = this;

    this.tabs.forEach(function (tab) {
      return tab.effectName = _this.effectName;
    });
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    position: {
      type: String,
      default: 'bottom-center'
    },
    duration: {
      type: Number,
      default: 3000
    },
    transitionDuration: {
      type: Number,
      default: 600
    }
  },
  data: function data() {
    return {
      toasts: [],
      increasement: 0
    };
  },

  computed: {
    containerClass: function containerClass() {
      var obj = { 'toast-container': true };
      obj[this.position] = true;
      return obj;
    }
  },
  methods: {
    show: function show(text) {
      var _this = this;

      var toast = this.add(text);

      this.$emit('show', toast); // emit 'show' event.

      setTimeout(function () {
        _this.remove(toast.id);
      }, this.duration);
    },
    add: function add(text) {
      var toast = {
        id: this.increasement,
        text: text
      };
      this.toasts.push(toast);
      this.increasement++;
      return toast;
    },
    remove: function remove(id) {
      var index = this.toasts.findIndex(function (item) {
        return item.id === id;
      });
      this.toasts.splice(index, 1);
    }
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    this.$root.$on('toast-show', function (text) {
      return _this2.show(text);
    });

    // Register helper function to global object.
    if (!window.Moss) window.Moss = {};
    window.Moss.toast = function (text) {
      return _this2.$root.$emit('toast-show', text);
    };
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _treeItem = __webpack_require__(33);

var _treeItem2 = _interopRequireDefault(_treeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { TreeItem: _treeItem2.default },
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    opened: {
      type: Boolean,
      default: false
    },
    openedHtml: {
      type: String,
      default: ''
    },
    closedHtml: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted() {
    if (this.opened) this.openTreeItems(this.$children);
  },

  methods: {
    openTreeItems: function openTreeItems(children) {
      var _this = this;

      children.forEach(function (component) {
        var tag = component.$vnode.componentOptions.tag;
        if (tag == 'tree' || tag == 'tree-item') {
          _this.openTreeItems(component.$children);
          if (tag == 'tree-item') component.open = true;
        }
      });
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6677548e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_item_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6677548e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6677548e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\tree-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6677548e", Component.options)
  } else {
    hotAPI.reload("data-v-6677548e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

exports.default = {
  props: {
    item: {
      type: Object,
      required: true
    },
    openedHtml: {
      type: String,
      default: ''
    },
    closedHtml: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      open: this.item.opened ? true : false
    };
  },

  computed: {
    hasItems: function hasItems() {
      return this.item.items && this.item.items.length;
    },
    itemClass: function itemClass() {
      return {
        'tree-item': true,
        'has-items': this.hasItems
      };
    },
    openedIcon: function openedIcon() {
      return this.openedHtml || (0, _util.makeIconHtml)('arrow-down');
    },
    closedIcon: function closedIcon() {
      return this.closedHtml || (0, _util.makeIconHtml)('arrow-right');
    }
  },
  methods: {
    toggle: function toggle() {
      if (this.hasItems) this.open = !this.open;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(6);

exports.default = {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: function _default() {
        // use function syntax because access 'this._uid'.
        return 'input-check-id-' + this._uid;
      }
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    modelValue: {
      type: String | Array,
      default: undefined
    },
    className: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      svg: _svg.check
    };
  },

  computed: {
    state: function state() {
      if (this.modelValue === undefined) {
        return this.checked;
      }
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.indexOf(this.value) > -1;
      }
      return this.modelValue;
    }
  },
  methods: {
    toggle: function toggle() {
      var value = void 0;

      if (Array.isArray(this.modelValue)) {
        value = this.modelValue.slice(0);

        if (this.state) {
          value.splice(value.indexOf(this.value), 1);
        } else {
          value.push(this.value);
        }
      } else {
        value = !this.state;
      }

      this.$emit('change', value);
    }
  },
  watch: {
    checked: function checked(newValue) {
      if (newValue !== this.state) {
        this.toggle();
      }
    }
  },
  mounted: function mounted() {
    if (this.checked && !this.state) {
      this.toggle();
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: function _default() {
        // use function syntax because access 'this._uid'.
        return 'input-radio-id-' + this._uid;
      }
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: undefined
    },
    className: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    state: function state() {
      return this.modelValue === undefined ? this.checked : this.modelValue === this.value;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit('change', this.state ? '' : this.value);
    }
  },
  watch: {
    checked: function checked(newValue) {
      if (newValue !== this.state) {
        this.toggle();
      }
    }
  },
  mounted: function mounted() {
    if (this.checked && !this.state) {
      this.toggle();
    }
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'agile',

    props: {
        arrows: {
            type: Boolean,
            default: true
        },

        autoplay: {
            type: Boolean,
            default: false
        },

        autoplaySpeed: {
            type: Number,
            default: 3000
        },

        dots: {
            type: Boolean,
            default: true
        },

        fade: {
            type: Boolean,
            default: false
        },

        infinite: {
            type: Boolean,
            default: true
        },

        mobileFirst: {
            type: Boolean,
            default: true
        },

        nextArrow: {
            type: String,
            default: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z"/></svg>'
        },

        options: {
            type: Object,
            default: function _default() {
                return null;
            }
        },

        pauseOnDotsHover: {
            type: Boolean,
            default: false
        },

        pauseOnHover: {
            type: Boolean,
            default: true
        },

        prevArrow: {
            type: String,
            default: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z"/></svg>'
        },

        responsive: {
            type: Object,
            default: function _default() {
                return null;
            }
        },

        show: {
            type: Boolean,
            default: true
        },

        speed: {
            type: Number,
            default: 300
        },

        timing: {
            type: String,
            default: 'ease' // linear, ease-in, ease-out, ease-in-out
        },

        unagile: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            slides: null,
            slidesCount: 0,
            autoplayStatus: false,
            autoplayTimeout: null,
            allSlidesCount: 0,
            currentSlide: 0,
            mouseDown: false,
            dragStartX: 0,
            dragStaryY: 0,
            dragDistance: 0,
            swipeDistance: 50,
            transform: 0,
            transitionDelay: 0,
            width: {
                document: 0,
                container: 0,
                slide: 0,
                track: 0
            },
            slidesToShow: 1,
            defaultSettings: {
                prevArrow: this.prevArrow,
                nextArrow: this.nextArrow,
                arrows: this.arrows,
                autoplay: this.autoplay,
                autoplaySpeed: this.autoplaySpeed,
                dots: this.dots,
                fade: this.fade,
                infinite: this.infinite,
                mobileFirst: this.mobileFirst,
                pauseOnDotsHover: this.pauseOnDotsHover,
                pauseOnHover: this.pauseOnHover,
                responsive: this.responsive,
                speed: this.speed,
                timing: this.timing,
                unagile: this.unagile
            },
            settings: {}
        };
    },
    created: function created() {
        // Read settings from options object
        if (this.options) {
            for (var key in this.options) {
                this.defaultSettings[key] = this.options[key];
            }
        }

        // Sort breakpoints
        if (this.defaultSettings.responsive) {
            this.defaultSettings.responsive.sort(this.compare);
        }

        // Set first load settings
        Object.assign(this.settings, this.defaultSettings);
    },
    mounted: function mounted() {
        // Prepare slides
        this.slides = this.$refs.track.children;
        this.slidesCount = this.slides.length;

        for (var i = 0; i < this.slidesCount; ++i) {
            this.slides[i].classList.add('agile__slide');

            // Prepare slides for fade mode
            if (this.settings.fade) {
                this.slides[i].style.transition = 'opacity ' + this.timing + ' ' + this.speed + 'ms';
            }
        }

        // Windows resize listener
        window.addEventListener('resize', this.getWidth);

        // Mouse and touch events
        if ('ontouchstart' in window) {
            this.$refs.track.addEventListener('touchstart', this.handleMouseDown);
            this.$refs.track.addEventListener('touchend', this.handleMouseUp);
            this.$refs.track.addEventListener('touchmove', this.handleMouseMove);
        } else {
            this.$refs.track.addEventListener('mousedown', this.handleMouseDown);
            this.$refs.track.addEventListener('mouseup', this.handleMouseUp);
            this.$refs.track.addEventListener('mousemove', this.handleMouseMove);
        }

        // Get width on start
        this.getWidth();
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('resize', this.getWidth);

        if ('ontouchstart' in window) {
            this.$refs.track.removeEventListener('touchstart', this.handleMouseDown);
            this.$refs.track.removeEventListener('touchend', this.handleMouseUp);
            this.$refs.track.removeEventListener('touchmove', this.handleMouseMove);
        } else {
            this.$refs.track.removeEventListener('mousedown', this.handleMouseDown);
            this.$refs.track.removeEventListener('mouseup', this.handleMouseUp);
            this.$refs.track.removeEventListener('mousemove', this.handleMouseMove);
        }

        this.disableAutoplayMode();
    },


    methods: {
        getWidth: function getWidth() {
            this.width = {
                document: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                container: this.$refs.list.clientWidth,
                slide: !this.settings.unagile ? this.$refs.list.clientWidth / this.slidesToShow : 'auto'
            };
        },
        compare: function compare(a, b) {
            if (a.breakpoint < b.breakpoint) {
                return this.defaultSettings.mobileFirst ? -1 : 1;
            } else if (a.breakpoint > b.breakpoint) {
                return this.defaultSettings.mobileFirst ? 1 : -1;
            } else {
                return 0;
            }
        },
        handleMouseDown: function handleMouseDown(e) {
            if (!e.touches) {
                e.preventDefault();
            }

            this.mouseDown = true;
            this.dragStartX = 'ontouchstart' in window ? e.touches[0].clientX : e.clientX;
            this.dragStartY = 'ontouchstart' in window ? e.touches[0].clientY : e.clientY;
        },
        handleMouseMove: function handleMouseMove(e) {
            var positionX = 'ontouchstart' in window ? e.touches[0].clientX : e.clientX;
            var positionY = 'ontouchstart' in window ? e.touches[0].clientY : e.clientY;

            var dragDistanceX = Math.abs(positionX - this.dragStartX);
            var dragDistanceY = Math.abs(positionY - this.dragStartY);

            if (dragDistanceX > 3 * dragDistanceY) {
                this.dragDistance = positionX - this.dragStartX;
                this.disableScroll();
            }
        },
        handleMouseUp: function handleMouseUp() {
            this.mouseDown = false;
            this.enableScroll();
        },
        handleMouseOver: function handleMouseOver(element) {
            if (this.settings.autoplay) {
                if (element === 'dot' && this.settings.pauseOnDotsHover || element === 'track' && this.settings.pauseOnHover) {
                    this.disableAutoplayMode();
                }
            }
        },
        handleMouseOut: function handleMouseOut(element) {
            if (this.settings.autoplay) {
                if (element === 'dot' && this.settings.pauseOnDotsHover || element === 'track' && this.settings.pauseOnHover) {
                    this.enableAutoplayMode();
                }
            }
        },
        enableInfiniteMode: function enableInfiniteMode() {
            if (!this.settings.fade && !this.$refs.list.getElementsByClassName('agile__slide--cloned')[0]) {
                var firstSlide = this.$refs.track.firstChild.cloneNode(true);
                var lastSlide = this.$refs.track.lastChild.cloneNode(true);

                firstSlide.classList.add('agile__slide--cloned');
                lastSlide.classList.add('agile__slide--cloned');

                this.$refs.track.insertBefore(lastSlide, this.slides[0]);
                this.$refs.track.insertBefore(firstSlide, this.slides[this.slidesCount].nextSibling);
            }

            this.countSlides();
        },
        disableInfiniteMode: function disableInfiniteMode() {
            var clonedSlides = this.$refs.list.getElementsByClassName('agile__slide--cloned');

            while (clonedSlides[0]) {
                clonedSlides[0].parentNode.removeChild(clonedSlides[0]);
            }

            this.countSlides();
        },
        enableAutoplayMode: function enableAutoplayMode() {
            // Protection against contradictory settings
            if (!this.settings.infinite) {
                this.settings.infinite = true;
                this.enableInfiniteMode();
            }

            this.stopAutoplay();
            this.startAutoplay();
            this.autoplayStatus = true;
        },
        disableAutoplayMode: function disableAutoplayMode() {
            this.autoplayStatus = false;
            this.stopAutoplay();
        },
        countSlides: function countSlides() {
            if (this.settings.infinite && !this.settings.fade && !this.settings.unagile) {
                this.allSlidesCount = this.slidesCount + 2;
            } else {
                this.allSlidesCount = this.slidesCount;
            }
        },
        disableScroll: function disableScroll() {
            document.ontouchmove = function (e) {
                e.preventDefault();
            };
        },
        enableScroll: function enableScroll() {
            document.ontouchmove = function (e) {
                return true;
            };
        },
        addActiveClass: function addActiveClass(i) {
            this.slides[i].classList.add('agile__slide--active');
        },
        startAutoplay: function startAutoplay() {
            var _this = this;

            this.autoplayTimeout = setTimeout(function () {
                if (!_this.settings.autoplay) {
                    _this.stopAutoplay();
                    _this.disableAutoplayMode();
                    return false;
                }

                _this.nextSlide();
            }, this.autoplaySpeed);
        },
        stopAutoplay: function stopAutoplay() {
            clearTimeout(this.autoplayTimeout);
        },
        setSlide: function setSlide(n) {
            var _this2 = this;

            var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var autoplayTimeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (this.settings.unagile) {
                return false;
            }

            // Reset autoplay timeout and set new
            if (this.settings.autoplay && autoplayTimeout) {
                this.stopAutoplay();
                this.startAutoplay();
            }

            if (this.settings.fade) {
                // Disable transition for initial slide
                if (transition === false) {
                    this.slides[n].style.transition = '0ms';

                    setTimeout(function () {
                        _this2.slides[n].style.transition = 'opacity ' + _this2.timing + ' ' + _this2.speed + 'ms';
                    }, 10);
                }

                for (var i = 0; i < this.allSlidesCount; ++i) {
                    this.slides[i].classList.remove('agile__slide--expiring');
                }

                if (this.settings.infinite && n < 0) {
                    n = this.slidesCount - 1;
                } else if (n >= this.slidesCount) {
                    n = 0;
                }

                // Set current slide as expiring
                var e = this.currentSlide;
                this.slides[e].classList.add('agile__slide--expiring');

                setTimeout(function () {
                    _this2.slides[e].classList.remove('agile__slide--expiring');
                }, this.settings.speed);

                this.transform = 0;
            } else {
                this.transform = n * this.width.slide;
            }

            for (var _i = 0; _i < this.allSlidesCount; ++_i) {
                this.slides[_i].classList.remove('agile__slide--active');
            }

            if (this.settings.infinite && !this.settings.fade) {
                this.transform += this.width.slide;
                this.addActiveClass(n + 1);
            } else {
                this.addActiveClass(n);
            }

            if (!transition) {
                this.transitionDelay = 0;
            } else {
                this.transitionDelay = this.speed;
            }

            if (this.settings.infinite && n < 0) {
                this.currentSlide = this.slidesCount - 1;

                setTimeout(function () {
                    _this2.setSlide(_this2.slidesCount - 1, false);
                }, this.speed);
            } else if (this.settings.infinite && n >= this.slidesCount) {
                this.currentSlide = 0;

                setTimeout(function () {
                    _this2.setSlide(0, false);
                }, this.settings.speed);
            } else {
                this.currentSlide = n;
            }
        },
        nextSlide: function nextSlide() {
            this.setSlide(this.currentSlide + 1);
        },
        prevSlide: function prevSlide() {
            this.setSlide(this.currentSlide - 1);
        },
        reload: function reload() {
            var _this3 = this;

            // Responsive
            if (this.defaultSettings.responsive) {
                var responsiveSettings = {};
                Object.assign(responsiveSettings, this.defaultSettings);

                responsiveSettings.responsive.forEach(function (responsive) {
                    if (_this3.defaultSettings.mobileFirst) {
                        if (responsive.breakpoint < _this3.width.document) {
                            for (var key in responsive.settings) {
                                responsiveSettings[key] = responsive.settings[key];
                            }
                        }
                    } else {
                        if (responsive.breakpoint > _this3.width.document) {
                            for (var _key in responsive.settings) {
                                responsiveSettings[_key] = responsive.settings[_key];
                            }
                        }
                    }
                });

                Object.assign(this.settings, responsiveSettings);
            }

            // Check infinity mode status and enable/disable
            if (this.settings.infinite && !this.settings.fade && !this.settings.unagile) {
                this.enableInfiniteMode();
            } else {
                this.disableInfiniteMode();
            }

            // Check autoplay mode status and enable/disable
            if (this.settings.autoplay && !this.autoplayStatus) {
                this.enableAutoplayMode();
            }

            if (!this.settings.autoplay && this.autoplayStatus || this.settings.unagile) {
                this.disableAutoplayMode();
            }

            // Actions on document resize
            for (var i = 0; i < this.allSlidesCount; ++i) {
                this.slides[i].style.width = this.width.container + 'px';

                // Prepare slides for fade mode
                if (this.settings.fade && !this.settings.unagile) {
                    this.slides[i].style.transform = 'translate(-' + i * this.width.slide + 'px)';
                } else {
                    this.slides[i].style.transform = 'translate(0)';
                }
            }

            // Prepare track
            if (this.settings.unagile) {
                this.width.track = this.width.container;
                this.transform = 0;
            } else {
                this.width.track = this.width.container * this.allSlidesCount;
                this.setSlide(this.currentSlide, false, false);
            }
        }
    },

    computed: {
        documentWidth: function documentWidth() {
            return this.width.document;
        }
    },

    watch: {
        show: function show() {
            this.getWidth();
            this.reload();
        },
        documentWidth: function documentWidth() {
            this.reload();
        },
        dragDistance: function dragDistance() {
            if (this.mouseDown) {
                if (this.dragDistance > this.swipeDistance) {
                    if (!this.settings.infinite && this.currentSlide === 0) {
                        return;
                    }

                    this.prevSlide();
                    this.handleMouseUp();
                }

                if (this.dragDistance < -1 * this.swipeDistance) {
                    if (!this.settings.infinite && this.currentSlide === this.slidesCount - 1) {
                        return;
                    }

                    this.nextSlide();
                    this.handleMouseUp();
                }
            }
        }
    }
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3846121c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3846121c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3846121c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\icon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3846121c", Component.options)
  } else {
    hotAPI.reload("data-v-3846121c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

exports.default = {
  props: {
    name: {
      type: String,
      default: ''
    },
    svg: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      svgContent: this.svg || (0, _util.getSvgByName)(this.name) || ''
    };
  }
}; //
//
//
//

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(38);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    target: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    },
    accordion: {
      // accordion group name.
      type: String,
      default: ''
    }
  },
  render: function render(createElement) {
    var icon = createElement(_icon2.default, {
      props: { name: 'arrow-right' }
    });
    var span = createElement('span', {}, this.$slots.default);
    var directive = this.accordion ? this.getAccordionDirective() : this.getCollapseDirective();
    return createElement(this.tag, {
      class: { 'collapse-toggle': true },
      directives: [directive]
    }, [icon, span]);
  },

  methods: {
    getCollapseDirective: function getCollapseDirective() {
      return {
        name: 'collapse',
        arg: this.target
      };
    },
    getAccordionDirective: function getAccordionDirective() {
      return {
        name: 'accordion',
        arg: this.target,
        value: this.accordion
      };
    }
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
module.exports = __webpack_require__(130);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Util = exports.Svg = exports.ElementUtil = exports.ElementMeasurer = exports.Color = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * moss-ui - The front-end UI framework with Vue.js and SCSS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @version v0.4.3
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @link https://github.com/archco/moss-ui
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _elementUtil = __webpack_require__(2);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _elementMeasurer = __webpack_require__(3);

var _elementMeasurer2 = _interopRequireDefault(_elementMeasurer);

var _mooColor = __webpack_require__(5);

var _util = __webpack_require__(1);

var Util = _interopRequireWildcard(_util);

var _components = __webpack_require__(56);

var components = _interopRequireWildcard(_components);

var _directives = __webpack_require__(105);

var directives = _interopRequireWildcard(_directives);

var _svg = __webpack_require__(6);

var Svg = _interopRequireWildcard(_svg);

var _version = __webpack_require__(129);

var _version2 = _interopRequireDefault(_version);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultOptions = {
  enableGlobalComponents: true
};

var lib = {
  Color: _mooColor.MooColor,
  ElementMeasurer: _elementMeasurer2.default,
  ElementUtil: _elementUtil2.default,
  Svg: Svg,
  Util: Util
};

function addMossObject(Vue) {
  var Moss = { version: _version2.default, lib: lib };
  window.Moss = Vue.Moss = Vue.prototype.$moss = Moss;
}

var MossUI = {
  version: _version2.default,
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) return;
    this.installed = true;

    options = Object.assign(DefaultOptions, options);

    // Add object for convenience.
    addMossObject(Vue);

    // Add components.
    if (options.enableGlobalComponents) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.entries(components)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = _slicedToArray(_ref, 2);

          var key = _ref2[0];
          var val = _ref2[1];

          Vue.component(Util.strToKebab(key), val);
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
    }

    // Add directives.
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = Object.entries(directives)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _ref3 = _step2.value;

        var _ref4 = _slicedToArray(_ref3, 2);

        var _key = _ref4[0];
        var _val = _ref4[1];

        Vue.directive(Util.strToKebab(_key), _val);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MossUI);
}

exports.Color = _mooColor.MooColor;
exports.ElementMeasurer = _elementMeasurer2.default;
exports.ElementUtil = _elementUtil2.default;
exports.Svg = Svg;
exports.Util = Util;
exports.default = MossUI;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollIt;
/**
 * scrollIt
 * @links https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
 * @links https://docs111.mootools.net/Effects/Fx-Transitions // easing types.
 *
 * @param  {Number|Element} destination
 * @param  {Number}   [duration=200]
 * @param  {String}   [easing='linear']
 * @param  {Function} callback
 * @return {void}
 */
function scrollIt(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments[3];


  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };

  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) callback();
    return;
  }

  function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) callback();
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSvgByName = getSvgByName;
exports.makeIcon = makeIcon;
exports.makeIconHtml = makeIconHtml;

var _util = __webpack_require__(1);

var _svg = __webpack_require__(6);

var Svg = _interopRequireWildcard(_svg);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Get svg string by name.
 *
 * @param {string} name the name of svg-icon. e.g. arrow-down or arrowDown
 * @returns {string}
 */
function getSvgByName(name) {
  return Svg[(0, _util.strToCamel)(name, true)] || '';
}

/**
 * Make icon element by svg-icon name.
 *
 * @param {string} name
 * @returns {HTMLElement}
 */
function makeIcon(name) {
  var i = document.createElement('i');
  i.classList.add('icon');
  i.innerHTML = getSvgByName(name);
  return i;
}

/**
 * Make icon html string by svg-icon name.
 *
 * @param {string} name
 * @returns {string}
 */
function makeIconHtml(name) {
  return '<i class="icon">' + getSvgByName(name) + '</i>';
}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"arrow-left\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__2GvJOc___cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>arrow-left</title><polyline class=\"__2GvJOc___cls-1 \" points=\"10.83 13.66 5.17 8 10.83 2.34\"></polyline></svg>"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"arrow-right\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__3aCiuLN__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>arrow-right</title><polyline class=\"__3aCiuLN__cls-1 \" points=\"5.17 2.34 10.83 8 5.17 13.66\"></polyline></svg>"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"arrow-up\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__LjpxLLk__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>arrow-up</title><polyline class=\"__LjpxLLk__cls-1 \" points=\"2.34 10.83 8 5.17 13.66 10.83\"></polyline></svg>"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"arrow-down\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__1gd2QAI__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>arrow-down</title><polyline class=\"__1gd2QAI__cls-1 \" points=\"13.66 5.17 8 10.83 2.34 5.17\"></polyline></svg>"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"caret-up\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__b93E2uj__cls-1{fill:currentColor;}</style></defs><title>caret-up</title><path class=\"__b93E2uj__cls-1 \" d=\"M8.5,5.12a.53.53,0,0,0-1,0L4.17,10.88c-.28.48,0,.87.5.87h6.66c.55,0,.77-.39.5-.87Z\"></path></svg>"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"caret-down\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__3RRJRTc__cls-1{fill:currentColor;}</style></defs><title>caret-down</title><path class=\"__3RRJRTc__cls-1 \" d=\"M7.5,10.88a.53.53,0,0,0,1,0l3.33-5.77c.27-.48,0-.87-.5-.87H4.67c-.55,0-.78.39-.5.87Z\"></path></svg>"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"caret-left\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__1I4fSS8__cls-1{fill:currentColor;}</style></defs><title>caret-left</title><path class=\"__1I4fSS8__cls-1 \" d=\"M5.12,7.5a.53.53,0,0,0,0,1l5.77,3.33c.48.27.87,0,.87-.5V4.67c0-.55-.39-.78-.87-.5Z\"></path></svg>"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"caret-right\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__3x70OrN__cls-1{fill:currentColor;}</style></defs><title>caret-right</title><path class=\"__3x70OrN__cls-1 \" d=\"M10.88,8.5a.53.53,0,0,0,0-1L5.12,4.17c-.48-.28-.87,0-.87.5v6.66c0,.55.39.77.87.5Z\"></path></svg>"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"close\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__5pVlV0m__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><title>close</title><path class=\"__5pVlV0m__cls-1 \" d=\"M3.76 3.76 L12.24 12.24 M12.24 3.76 L3.76 12.24\"></path></svg>"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"check\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__1ewOVC4__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>check</title><polyline class=\"__1ewOVC4__cls-1 \" points=\"3 8 6.33 11.5 13 4.5\"></polyline></svg>"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"search\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__1jzGpc-__cls-1,.__1jzGpc-__cls-2{fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:1.5px;}.__1jzGpc-__cls-2{stroke-linecap:round;}</style></defs><title>search</title><circle class=\"__1jzGpc-__cls-1 \" cx=\"6.49\" cy=\"6.49\" r=\"4\"></circle><line class=\"__1jzGpc-__cls-2 \" x1=\"13.51\" y1=\"13.51\" x2=\"9.97\" y2=\"9.97\"></line></svg>"

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anchoredTag = __webpack_require__(57);

Object.defineProperty(exports, 'AnchoredTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_anchoredTag).default;
  }
});

var _chip = __webpack_require__(58);

Object.defineProperty(exports, 'Chip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_chip).default;
  }
});

var _closeButton = __webpack_require__(4);

Object.defineProperty(exports, 'CloseButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_closeButton).default;
  }
});

var _collapse = __webpack_require__(11);

Object.defineProperty(exports, 'Collapse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_collapse).default;
  }
});

var _dropdown = __webpack_require__(61);

Object.defineProperty(exports, 'Dropdown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dropdown).default;
  }
});

var _message = __webpack_require__(15);

Object.defineProperty(exports, 'Message', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_message).default;
  }
});

var _messageBox = __webpack_require__(65);

Object.defineProperty(exports, 'MessageBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_messageBox).default;
  }
});

var _modal = __webpack_require__(67);

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _navbar = __webpack_require__(69);

Object.defineProperty(exports, 'Navbar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navbar).default;
  }
});

var _navbarBrand = __webpack_require__(72);

Object.defineProperty(exports, 'NavbarBrand', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navbarBrand).default;
  }
});

var _navbarNav = __webpack_require__(74);

Object.defineProperty(exports, 'NavbarNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navbarNav).default;
  }
});

var _navbarToggle = __webpack_require__(20);

Object.defineProperty(exports, 'NavbarToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navbarToggle).default;
  }
});

var _navItem = __webpack_require__(76);

Object.defineProperty(exports, 'NavItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navItem).default;
  }
});

var _parallax = __webpack_require__(78);

Object.defineProperty(exports, 'Parallax', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parallax).default;
  }
});

var _scrollTo = __webpack_require__(80);

Object.defineProperty(exports, 'ScrollTo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollTo).default;
  }
});

var _simpleCrud = __webpack_require__(82);

Object.defineProperty(exports, 'SimpleCRUD', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_simpleCrud).default;
  }
});

var _tab = __webpack_require__(28);

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tab).default;
  }
});

var _tabs = __webpack_require__(85);

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabs).default;
  }
});

var _toast = __webpack_require__(87);

Object.defineProperty(exports, 'Toast', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toast).default;
  }
});

var _tree = __webpack_require__(89);

Object.defineProperty(exports, 'Tree', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tree).default;
  }
});

var _treeItem = __webpack_require__(33);

Object.defineProperty(exports, 'TreeItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_treeItem).default;
  }
});

var _inputCheck = __webpack_require__(92);

Object.defineProperty(exports, 'InputCheck', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_inputCheck).default;
  }
});

var _inputRadio = __webpack_require__(94);

Object.defineProperty(exports, 'InputRadio', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_inputRadio).default;
  }
});

var _agile = __webpack_require__(96);

Object.defineProperty(exports, 'Carousel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_agile).default;
  }
});

var _icon = __webpack_require__(38);

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_icon).default;
  }
});

var _collapseToggle = __webpack_require__(104);

Object.defineProperty(exports, 'CollapseToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_collapseToggle).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_anchored_tag_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_anchored_tag_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_anchored_tag_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_anchored_tag_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_anchored_tag_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_anchored_tag_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\anchored-tag.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f908d44c", Component.options)
  } else {
    hotAPI.reload("data-v-f908d44c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_chip_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_chip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_chip_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_chip_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_chip_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_chip_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\chip.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72f42d45", Component.options)
  } else {
    hotAPI.reload("data-v-72f42d45", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      class: _vm.classObject,
      attrs: { type: "button" },
      on: { click: _vm.onClick }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4478e1c0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "collapsing" },
      on: {
        enter: _vm.expanding,
        afterEnter: _vm.clearHeight,
        leave: _vm.collapsing,
        afterLeave: _vm.clearHeight
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show"
            }
          ]
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66110ba6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_646e5a0a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_646e5a0a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_646e5a0a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\dropdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-646e5a0a", Component.options)
  } else {
    hotAPI.reload("data-v-646e5a0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 62 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dropdown" },
    [
      _vm._t("button"),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.contentClass },
        [
          _vm._t("default"),
          _vm._v(" "),
          _vm.withArrow ? _c("div", { attrs: { "x-arrow": "" } }) : _vm._e()
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-646e5a0a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: _vm.effectName } }, [
    _vm.show
      ? _c(
          "div",
          { class: _vm.classObject },
          [
            _c("span", [_vm._t("default")], 2),
            _vm._v(" "),
            _c("close-button", {
              attrs: { action: "" },
              domProps: { innerHTML: _vm._s(_vm.closeHtml) },
              on: { close: _vm.onClose }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9a61f9c4", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_box_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_box_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_box_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_box_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_box_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c43d39c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_box_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_box_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c43d39c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_box_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c43d39c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_box_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\message-box.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c43d39c", Component.options)
  } else {
    hotAPI.reload("data-v-4c43d39c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.messages, function(message) {
      return _c(
        "message",
        {
          key: message.id,
          attrs: {
            status: message.status,
            effect: _vm.effect,
            "close-html": _vm.closeHtml
          },
          on: {
            close: function($event) {
              _vm.remove(message.id)
            }
          }
        },
        [_vm._v("\n    " + _vm._s(message.text) + "\n  ")]
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c43d39c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modal_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modal_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modal_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modal_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e972e84_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modal_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modal_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e972e84_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modal_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e972e84_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modal_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e972e84", Component.options)
  } else {
    hotAPI.reload("data-v-6e972e84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: _vm.effectName } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass: "modal-mask"
      },
      [
        _c("div", { staticClass: "modal-content" }, [
          _c(
            "div",
            { staticClass: "modal-header" },
            [
              _c("h3", [_vm._v(_vm._s(_vm.title))]),
              _vm._v(" "),
              _c("close-button", {
                attrs: { action: "" },
                domProps: { innerHTML: _vm._s(_vm.closeButtonHtml) },
                on: {
                  close: function($event) {
                    _vm.$emit("close")
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [_vm._t("default")], 2),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [_vm._t("actions")], 2)
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6e972e84", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f24c26e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f24c26e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f24c26e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f24c26e", Component.options)
  } else {
    hotAPI.reload("data-v-9f24c26e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("button", { class: _vm.classObject, attrs: { type: "button" } }, [
    _c("div", { staticClass: "icon-bar1", style: _vm.barStyle }),
    _vm._v(" "),
    _c("div", { staticClass: "icon-bar2", style: _vm.barStyle }),
    _vm._v(" "),
    _c("div", { staticClass: "icon-bar3", style: _vm.barStyle })
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58978af0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "navbar" },
    [
      _c(
        "div",
        { class: _vm.headerClass },
        [
          _vm._t("brand"),
          _vm._v(" "),
          _c("navbar-toggle", {
            staticClass: "hide-tablet-up",
            attrs: { color: _vm.toggleColor, opened: _vm.toggleExpanded },
            nativeOn: {
              click: function($event) {
                _vm.onToggleClick($event)
              }
            }
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "collapse",
        {
          class: _vm.bodyClass,
          attrs: { id: "navbar-body", expanded: _vm.navShow }
        },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9f24c26e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_brand_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_brand_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_brand_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_brand_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_brand_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f1beefa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_brand_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_brand_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f1beefa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_brand_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f1beefa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_brand_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\navbar-brand.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f1beefa", Component.options)
  } else {
    hotAPI.reload("data-v-8f1beefa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    { class: _vm.classObject, attrs: { href: _vm.href } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8f1beefa", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_nav_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_nav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_nav_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_nav_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_nav_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f51611f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_nav_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_nav_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f51611f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_nav_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f51611f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_nav_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\navbar-nav.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f51611f", Component.options)
  } else {
    hotAPI.reload("data-v-3f51611f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.classObject }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f51611f", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_item_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1309d14_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nav_item_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1309d14_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nav_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1309d14_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nav_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\nav-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1309d14", Component.options)
  } else {
    hotAPI.reload("data-v-c1309d14", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { staticClass: "nav-item" },
    [
      _vm.hasHref
        ? _c("a", { staticClass: "nav-link", attrs: { href: _vm.href } }, [
            _vm._v("\n    " + _vm._s(_vm.linkText) + "\n  ")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c1309d14", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_parallax_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_parallax_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_parallax_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_parallax_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_parallax_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f475dee0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_parallax_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_parallax_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f475dee0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_parallax_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f475dee0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_parallax_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\parallax.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f475dee0", Component.options)
  } else {
    hotAPI.reload("data-v-f475dee0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "parallax", style: _vm.styleObject })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f475dee0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_to_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_to_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_to_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_to_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_to_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b0ad325c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_scroll_to_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_to_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b0ad325c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_scroll_to_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b0ad325c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_scroll_to_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\scroll-to.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b0ad325c", Component.options)
  } else {
    hotAPI.reload("data-v-b0ad325c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "scroll-to-container" }, [
    !_vm.disableTop
      ? _c("button", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showToTop,
              expression: "showToTop"
            }
          ],
          staticClass: "scroll-to-top",
          attrs: { type: "button" },
          domProps: { innerHTML: _vm._s(_vm.topIcon) },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.toTop($event)
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    !_vm.disableBottom
      ? _c("button", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showToBottom,
              expression: "showToBottom"
            }
          ],
          staticClass: "scroll-to-bottom",
          attrs: { type: "button" },
          domProps: { innerHTML: _vm._s(_vm.bottomIcon) },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.toBottom($event)
            }
          }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b0ad325c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simple_crud_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simple_crud_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simple_crud_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simple_crud_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simple_crud_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dff165e0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_simple_crud_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_simple_crud_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dff165e0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_simple_crud_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dff165e0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_simple_crud_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\simple-crud.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dff165e0", Component.options)
  } else {
    hotAPI.reload("data-v-dff165e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "simple-crud-item" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.state == "read",
            expression: "state == 'read'"
          }
        ]
      },
      [_vm._t("read")],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.state == "update",
            expression: "state == 'update'"
          }
        ]
      },
      [_vm._t("update")],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.state == "delete",
            expression: "state == 'delete'"
          }
        ]
      },
      [_vm._t("delete")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dff165e0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: _vm.effectName } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isActive,
            expression: "isActive"
          }
        ]
      },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-303b232c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a563912_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a563912_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a563912_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\tabs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a563912", Component.options)
  } else {
    hotAPI.reload("data-v-4a563912", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      {
        directives: [
          { name: "wrap", rawName: "v-wrap:responsive", arg: "responsive" }
        ],
        class: _vm.tabsClass
      },
      _vm._l(_vm.tabs, function(tab) {
        return _c(
          "li",
          { key: tab.name, style: { flexGrow: _vm.growEnabled ? "1" : "" } },
          [
            _c(
              "a",
              {
                class: _vm.tabClass(tab),
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.selectTab(tab)
                  }
                }
              },
              [_vm._v("\n        " + _vm._s(tab.name) + "\n      ")]
            )
          ]
        )
      })
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "tabs-container", style: _vm.containerStyle },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4a563912", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toast_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toast_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toast_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toast_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toast_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_06290604_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_toast_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toast_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_06290604_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_toast_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_06290604_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_toast_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\toast.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06290604", Component.options)
  } else {
    hotAPI.reload("data-v-06290604", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.containerClass },
    [
      _c(
        "transition-group",
        { attrs: { name: "toast-fade", tag: "div" } },
        _vm._l(_vm.toasts, function(toast) {
          return _c("div", {
            key: toast.id,
            staticClass: "toast",
            domProps: { textContent: _vm._s(toast.text) }
          })
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-06290604", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62781397_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62781397_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62781397_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\tree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62781397", Component.options)
  } else {
    hotAPI.reload("data-v-62781397", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", [
    _c("div", { class: _vm.itemClass, on: { click: _vm.toggle } }, [
      _vm.hasItems
        ? _c("span", {
            domProps: {
              innerHTML: _vm._s(_vm.open ? _vm.openedIcon : _vm.closedIcon)
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("span", { domProps: { innerHTML: _vm._s(_vm.item.name) } })
    ]),
    _vm._v(" "),
    _vm.hasItems
      ? _c("tree", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.open,
              expression: "open"
            }
          ],
          tag: "ul",
          attrs: {
            items: _vm.item.items,
            "opened-html": _vm.openedHtml,
            "closed-html": _vm.closedHtml
          }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6677548e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "tree-list" },
    _vm._l(_vm.items, function(item) {
      return _c("tree-item", {
        key: item.name,
        tag: "li",
        attrs: {
          item: item,
          "opened-html": _vm.openedHtml,
          "closed-html": _vm.closedHtml
        }
      })
    })
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62781397", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_check_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_check_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_check_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_check_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_check_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1fafeddc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_check_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_check_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1fafeddc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_check_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1fafeddc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_check_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\input-check.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fafeddc", Component.options)
  } else {
    hotAPI.reload("data-v-1fafeddc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    { staticClass: "input-check", attrs: { for: _vm.id } },
    [
      _c("input", {
        class: _vm.className,
        attrs: {
          type: "checkbox",
          id: _vm.id,
          name: _vm.name,
          required: _vm.required
        },
        domProps: { value: _vm.value, checked: _vm.state },
        on: { change: _vm.toggle }
      }),
      _vm._v(" "),
      _vm._t("input-box", [
        _c("span", {
          staticClass: "input-box",
          domProps: { innerHTML: _vm._s(_vm.svg) }
        })
      ]),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1fafeddc", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_radio_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_radio_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_radio_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_radio_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63cd2962_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_radio_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_radio_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63cd2962_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_radio_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63cd2962_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_radio_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\input-radio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63cd2962", Component.options)
  } else {
    hotAPI.reload("data-v-63cd2962", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    { staticClass: "input-radio", attrs: { for: _vm.id } },
    [
      _c("input", {
        class: _vm.className,
        attrs: {
          type: "radio",
          id: _vm.id,
          name: _vm.name,
          required: _vm.required
        },
        domProps: { value: _vm.value, checked: _vm.state },
        on: { change: _vm.toggle }
      }),
      _vm._v(" "),
      _vm._t("input-box", [_vm._m(0)]),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-box" }, [
      _c("span", { staticClass: "input-box-circle" })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-63cd2962", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_agile_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_agile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_agile_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_agile_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_agile_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_4b103a4e_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_agile_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(97)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_agile_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_4b103a4e_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_agile_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_4b103a4e_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_agile_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\vue-agile\\src\\agile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b103a4e", Component.options)
  } else {
    hotAPI.reload("data-v-4b103a4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(100).default
var update = add("1d8492ee", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b103a4e\",\"scoped\":false,\"sourceMap\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./agile.vue", function() {
     var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b103a4e\",\"scoped\":false,\"sourceMap\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./agile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(99)(true);
// imports


// module
exports.push([module.i, "\n.agile {\n  position: relative;\n}\n.agile:focus, .agile:active, .agile *:focus, .agile *:active {\n    outline: none;\n}\n.agile__list {\n    display: block;\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n}\n.agile__track {\n    align-items: center;\n    display: flex;\n    justify-content: flex-start;\n}\n.agile--disabled .agile__track {\n      display: block;\n}\n.agile__slide {\n    display: block;\n}\n.agile--fade .agile__slide {\n      opacity: 0;\n      position: relative;\n      z-index: 0;\n}\n.agile--fade .agile__slide--active {\n        opacity: 1;\n        z-index: 2;\n}\n.agile--fade .agile__slide--expiring {\n        opacity: 1;\n        transition-duration: 0s;\n        z-index: 1;\n}\n.agile__arrow[disabled] {\n    cursor: default;\n}\n.agile__dots {\n    align-items: center;\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    white-space: nowrap;\n}\n.agile__dot button {\n    cursor: pointer;\n    display: block;\n    font-size: 0;\n    line-height: 0;\n}\n", "", {"version":3,"sources":["J:/Devdoc/_package/moss-ui/node_modules/vue-agile/src/agile.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;CAAE;AACrB;IACE,cAAc;CAAE;AAClB;IACE,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;CAAE;AAChB;IACE,oBAAoB;IACpB,cAAc;IACd,4BAA4B;CAAE;AAC9B;MACE,eAAe;CAAE;AACrB;IACE,eAAe;CAAE;AACjB;MACE,WAAW;MACX,mBAAmB;MACnB,WAAW;CAAE;AACb;QACE,WAAW;QACX,WAAW;CAAE;AACf;QACE,WAAW;QACX,wBAAwB;QACxB,WAAW;CAAE;AACnB;IACE,gBAAgB;CAAE;AACpB;IACE,oBAAoB;IACpB,cAAc;IACd,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,oBAAoB;CAAE;AACxB;IACE,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,eAAe;CAAE","file":"agile.vue","sourcesContent":[".agile {\n  position: relative; }\n  .agile:focus, .agile:active, .agile *:focus, .agile *:active {\n    outline: none; }\n  .agile__list {\n    display: block;\n    overflow: hidden;\n    position: relative;\n    width: 100%; }\n  .agile__track {\n    align-items: center;\n    display: flex;\n    justify-content: flex-start; }\n    .agile--disabled .agile__track {\n      display: block; }\n  .agile__slide {\n    display: block; }\n    .agile--fade .agile__slide {\n      opacity: 0;\n      position: relative;\n      z-index: 0; }\n      .agile--fade .agile__slide--active {\n        opacity: 1;\n        z-index: 2; }\n      .agile--fade .agile__slide--expiring {\n        opacity: 1;\n        transition-duration: 0s;\n        z-index: 1; }\n  .agile__arrow[disabled] {\n    cursor: default; }\n  .agile__dots {\n    align-items: center;\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    white-space: nowrap; }\n  .agile__dot button {\n    cursor: pointer;\n    display: block;\n    font-size: 0;\n    line-height: 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(101);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "agile",
      class: {
        "agile--fade": _vm.settings.fade && !_vm.settings.unagile,
        "agile--disabled": _vm.settings.unagile
      }
    },
    [
      _c("div", { ref: "list", staticClass: "agile__list" }, [
        _c(
          "div",
          {
            ref: "track",
            staticClass: "agile__track",
            style: {
              width: _vm.width.track + "px",
              transform: "translate(-" + _vm.transform + "px)",
              transition:
                "transform " +
                _vm.settings.timing +
                " " +
                _vm.transitionDelay +
                "ms"
            },
            on: {
              mouseover: function($event) {
                _vm.handleMouseOver("track")
              },
              mouseout: function($event) {
                _vm.handleMouseOut("track")
              }
            }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _vm.settings.dots && !_vm.settings.unagile
        ? _c(
            "ul",
            { ref: "dots", staticClass: "agile__dots" },
            _vm._l(_vm.slidesCount, function(n) {
              return _c(
                "li",
                {
                  staticClass: "agile__dot",
                  class: { "agile__dot--current": n - 1 === _vm.currentSlide },
                  on: {
                    mouseover: function($event) {
                      _vm.handleMouseOver("dot")
                    },
                    mouseout: function($event) {
                      _vm.handleMouseOut("dot")
                    }
                  }
                },
                [
                  _c(
                    "button",
                    {
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.setSlide(n - 1)
                        }
                      }
                    },
                    [_vm._v(_vm._s(n))]
                  )
                ]
              )
            })
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.settings.arrows && !_vm.settings.unagile
        ? _c("button", {
            staticClass: "agile__arrow agile__arrow--prev",
            attrs: {
              disabled: _vm.currentSlide === 0 && !_vm.settings.infinite
            },
            domProps: { innerHTML: _vm._s(_vm.settings.prevArrow) },
            on: { click: _vm.prevSlide }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.settings.arrows && !_vm.settings.unagile
        ? _c("button", {
            staticClass: "agile__arrow agile__arrow--next",
            attrs: {
              disabled:
                _vm.currentSlide === _vm.slidesCount - 1 &&
                !_vm.settings.infinite
            },
            domProps: { innerHTML: _vm._s(_vm.settings.nextArrow) },
            on: { click: _vm.nextSlide }
          })
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4b103a4e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("i", {
    staticClass: "icon",
    domProps: { innerHTML: _vm._s(_vm.svgContent) }
  })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3846121c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_toggle_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_toggle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_toggle_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_toggle_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_toggle_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_toggle_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\components\\collapse-toggle.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85f9e9ea", Component.options)
  } else {
    hotAPI.reload("data-v-85f9e9ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _accordion = __webpack_require__(106);

Object.defineProperty(exports, 'Accordion', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_accordion).default;
  }
});

var _activator = __webpack_require__(107);

Object.defineProperty(exports, 'Activator', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_activator).default;
  }
});

var _clipboard = __webpack_require__(108);

Object.defineProperty(exports, 'Clipboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_clipboard).default;
  }
});

var _collapse = __webpack_require__(117);

Object.defineProperty(exports, 'Collapse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_collapse).default;
  }
});

var _confirm = __webpack_require__(118);

Object.defineProperty(exports, 'Confirm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_confirm).default;
  }
});

var _focus = __webpack_require__(119);

Object.defineProperty(exports, 'Focus', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_focus).default;
  }
});

var _modal = __webpack_require__(120);

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _ripple = __webpack_require__(121);

Object.defineProperty(exports, 'Ripple', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ripple).default;
  }
});

var _scrollspy = __webpack_require__(122);

Object.defineProperty(exports, 'Scrollspy', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollspy).default;
  }
});

var _setValue = __webpack_require__(124);

Object.defineProperty(exports, 'SetValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_setValue).default;
  }
});

var _tooltip = __webpack_require__(125);

Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltip).default;
  }
});

var _trigger = __webpack_require__(127);

Object.defineProperty(exports, 'Trigger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_trigger).default;
  }
});

var _wrap = __webpack_require__(128);

Object.defineProperty(exports, 'Wrap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrap).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  v-collapse:{arg}.{modifiers}="'{value}'"

  modifiers: [none = toggle] | 'show' | 'hide'
  arg: collapse id.
  value: {String} accordion group name.
 */
exports.default = {
  bind: function bind(el, binding, vnode) {
    var accordion = binding.value;
    var collapseId = binding.arg;
    var action = binding.modifiers.show ? 'show' : binding.modifiers.hide ? 'hide' : 'toggle';

    // registerToggles(el, binding, vnode); // register to toggle list.

    el.addEventListener('click', function () {
      vnode.context.$root.$emit('accordion-toggle', accordion, collapseId, action);
    });
    vnode.context.$root.$on('collapse-state', function (item) {
      if (item.accordion === accordion && item.id === collapseId) {
        el.dataset.expanded = item.expanded;
      }
    });
  }
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

/*
  v-activator.{modifiers}="'{value}'"

  modifiers:
    self: If this given, active class into self element, not parentNode.
    this: If this given, activator on own element, not childNodes.
  value: {String} selector. default value is 'a'.
 */
exports.default = {
  inserted: function inserted(el, binding) {
    var isSelf = binding.modifiers.self;
    var isThis = binding.modifiers.this;
    var selector = binding.value || 'a';
    var links = isThis ? [el] : el.querySelectorAll(selector);
    if (!links.length) return;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var a = _step.value;

        if (compareWithLocation(a)) {
          if (isSelf) {
            a.classList.add('active');
          } else {
            a.parentNode.classList.add('active');
          }
        }
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
  }
};


function compareWithLocation(anchor) {
  var l = {
    path: lastTerm(document.location.pathname),
    query: (0, _util.locationSearchToObject)()
  };
  var a = {
    path: lastTerm(anchor.pathname),
    query: (0, _util.searchToObject)(anchor.search)
  };

  if (anchor.getAttribute('href') == '#') {
    // sample link (e.g. <a href="#">)
    return false;
  }

  if (l.path == a.path) {
    if (!a.query || (0, _util.isContains)(l.query, a.query)) return true;
  }

  return false;
}

function lastTerm(string) {
  return string.substr(string.lastIndexOf('/'));
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                                This directive is based on clipboard.js
                                                                                                                                                                                                                                                                                @link https://github.com/zenorocha/clipboard.js
                                                                                                                                                                                                                                                                                @license MIT License © Zeno Rocha
                                                                                                                                                                                                                                                                               */


var _clipboard = __webpack_require__(109);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _elementUtil = __webpack_require__(2);

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
  bind: function bind(el, binding, vnode) {
    var options = resolveOptionsForClipboard(binding);
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


function resolveOptionsForClipboard(binding) {
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

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(110), __webpack_require__(112), __webpack_require__(113)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(111)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 111 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(114);
var delegate = __webpack_require__(115);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(116);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  v-collapse:{arg}.{modifiers}

  modifiers: [none = toggle] | 'show' | 'hide'
  arg: collapse id.
 */
exports.default = {
  bind: function bind(el, binding, vnode) {
    var collapseId = binding.arg;
    var action = binding.modifiers.show ? 'show' : binding.modifiers.hide ? 'hide' : 'toggle';

    el.addEventListener('click', function () {
      vnode.context.$root.$emit('collapse-toggle', collapseId, action);
    });
    vnode.context.$root.$on('collapse-state', function (item) {
      if (item.id === collapseId) {
        el.dataset.expanded = item.expanded;
      }
    });
  }
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  v-confirm:{arg}="'{value}'"

  arg: event type.
  value: {String} confirm message. default value is 'Are you confirm?'.
 */
exports.default = {
  bind: function bind(el, binding) {
    var message = binding.value || 'Are you confirm?';
    el.addEventListener(binding.arg, function (event) {
      if (!confirm(message)) event.preventDefault();
    }, true); // use capture.
  }
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  v-focus
 */
exports.default = {
  inserted: function inserted(el) {
    el.focus();
  }
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  v-modal:{arg}.{modifier}

  arg: modal's name.
  modifier:
    [ none ]: toggling modal.
    show: show modal.
    close: close modal.
 */
exports.default = {
  bind: function bind(el, binding, vnode) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      var action = binding.modifiers.show ? 'show' : binding.modifiers.close ? 'close' : 'toggle';

      vnode.context.$root.$emit('modal-toggle', binding.arg, action);
    });
  }
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mooColor = __webpack_require__(5);

var _elementMeasurer = __webpack_require__(3);

var _elementMeasurer2 = _interopRequireDefault(_elementMeasurer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  v-ripple.{modifiers}="{value}"

  modifiers: [auto] or light or dark
  value: {
    color: '#fff' // ripple color.
  }
 */
exports.default = {
  bind: function bind(el, binding) {
    el.classList.add('ripple');

    el.addEventListener('click', function (e) {
      var offset = new _elementMeasurer2.default(el).getOffset();
      var xPos = e.pageX - offset.left;
      var yPos = e.pageY - offset.top;
      var div = document.createElement('div');
      var size = getShortLength(el);

      div.classList.add('ripple-effect');
      div.style.width = size + 'px';
      div.style.height = size + 'px';
      div.style.top = yPos - size / 2 + 'px';
      div.style.left = xPos - size / 2 + 'px';
      div.style.backgroundColor = getRippleColor(el, binding);
      el.appendChild(div);

      window.setTimeout(function () {
        return div.remove();
      }, 1500);
    });
  }
};


function getShortLength(elm) {
  var width = elm.getBoundingClientRect().width;
  var height = elm.getBoundingClientRect().height;
  return width < height ? width : height;
}

function getRippleColor(el, binding) {
  var opt = binding.value || {};
  var mod = binding.modifiers;
  var getContrastColor = function getContrastColor(elm) {
    var style = window.getComputedStyle(elm);
    var color = new _mooColor.MooColor(style.backgroundColor);
    return color.isLight ? '#000' : '#fff';
  };

  return opt.color ? opt.color : mod.light ? '#fff' : mod.dark ? '#000' : getContrastColor(el);
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollspy = __webpack_require__(123);

var _scrollspy2 = _interopRequireDefault(_scrollspy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  v-scrollspy="{ value }"

  value: {
    linkSelector: 'a',
    scrollElement: 'body', // 'body' | element | selector
    activeTarget: 'parent', // 'parent' | 'self' | selector
    activeClass: 'active',
    offset: 24,
    onActivate: null,
  }
 */
exports.default = {
  inserted: function inserted(el, binding, vnode) {
    var onActivate = function onActivate(item) {
      vnode.context.$root.$emit('scrollspy-activate', item);
      if (binding.value && typeof binding.value.onActivate === 'function') {
        binding.value.onActivate(item);
      }
    };

    var options = Object.assign({}, binding.value, { onActivate: onActivate });
    var scrollspy = new _scrollspy2.default(el, options);

    vnode.context.$root.$on('scrollspy-refresh', function () {
      return scrollspy.refresh();
    });
  }
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elementUtil = __webpack_require__(2);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _elementMeasurer = __webpack_require__(3);

var _elementMeasurer2 = _interopRequireDefault(_elementMeasurer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scrollspy = function () {
  /**
   * constructor
   *
   * @param  {Element|String} elm Links container element.
   * @param  {Object} options
   */
  function Scrollspy(elm, options) {
    _classCallCheck(this, Scrollspy);

    this.options = Object.assign(this.getDefaultOptions(), options);
    this._linksContainerElement = _elementUtil2.default.getElement(elm);
    this._items = [];
    this._currentActive = null;
    this._scrollHeight = 0;
    this._scrollElement = _elementUtil2.default.getElement(this.options.scrollElement);
    this._scrollElementSize = new _elementMeasurer2.default(this._scrollElement);

    this.refresh();
    this.addListener();
    this.process();
  }

  // public

  /**
   * getDefaultOptions
   *
   * @return {Object}
   */


  _createClass(Scrollspy, [{
    key: 'getDefaultOptions',
    value: function getDefaultOptions() {
      return {
        linkSelector: 'a',
        scrollElement: 'body', // 'body' | element | selector
        activeTarget: 'parent', // 'parent' | 'self' | selector
        activeClass: 'active',
        offset: 24,
        onActivate: null
      };
    }

    /**
     * Add event listener.
     *
     * @return {void}
     */

  }, {
    key: 'addListener',
    value: function addListener() {
      var _this = this;

      var base = this._scrollElementSize.isDocument ? window : this._scrollElement;
      base.addEventListener('scroll', this.process.bind(this));
      this._items.forEach(function (item) {
        item.link.addEventListener('click', _this.process.bind(_this), true);
      });
    }

    /**
     * Refresh properties.
     *
     * @return {void}
     */

  }, {
    key: 'refresh',
    value: function refresh() {
      var _this2 = this;

      var linkNodes = _elementUtil2.default.getElements(this.options.linkSelector, this._linksContainerElement);
      var links = _elementUtil2.default.nodeListToArray(linkNodes).filter(function (elm) {
        return elm.hash;
      });
      this._items = [];
      this._scrollHeight = this._scrollElementSize.scrollHeight;

      links.forEach(function (link) {
        var elm = _elementUtil2.default.getElement(link.hash);
        if (!elm) return;
        _this2._items.push({
          elm: elm,
          link: link,
          offsetTop: new _elementMeasurer2.default(elm).getOffset().top
        });
      });

      this._items.sort(function (a, b) {
        return a.offsetTop - b.offsetTop;
      });
    }

    /**
     * Process for scrollspy.
     *
     * @return {void}
     */

  }, {
    key: 'process',
    value: function process() {
      var _this3 = this;

      var scrollTop = this._scrollElementSize.scrollTop + this.options.offset;
      var scrollHeight = this._scrollElementSize.scrollHeight;
      var maxScroll = this._scrollElementSize.maxScrollTop + this.options.offset;

      if (this._scrollHeight !== scrollHeight) this.refresh();

      // If scrolled max, then activate last items link.
      if (scrollTop >= maxScroll) {
        this._activate(this._items[this._items.length - 1]);
        return;
      }

      // If scroll position is between 0 and first item, then remove active class in all links.
      if (this._currentActive && scrollTop < this._items[0].offsetTop && this._items[0].offsetTop > 0) {
        this._currentActive = null;
        this._clear();
        return;
      }

      this._items.forEach(function (item, i) {
        var nextItem = _this3._items[i + 1];
        if (_this3._currentActive !== item && scrollTop >= item.offsetTop && (typeof nextItem === 'undefined' || scrollTop < nextItem.offsetTop)) {
          _this3._activate(item);
        }
      });
    }

    // private

  }, {
    key: '_activate',
    value: function _activate(item) {
      this._clear();
      this._currentActive = item;
      this._getActiveTarget(item.link).classList.add(this.options.activeClass);
      if (typeof this.options.onActivate === 'function') {
        this.options.onActivate(item);
      }
    }
  }, {
    key: '_clear',
    value: function _clear() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          this._getActiveTarget(item.link).classList.remove(this.options.activeClass);
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
    }
  }, {
    key: '_getActiveTarget',
    value: function _getActiveTarget(link) {
      if (this.options.activeTarget == 'self') {
        return link;
      } else if (this.options.activeTarget == 'parent') {
        return link.parentNode;
      } else {
        return _elementUtil2.default.findAncestor(link, this.options.activeTarget);
      }
    }
  }]);

  return Scrollspy;
}();

exports.default = Scrollspy;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

/*
  v-set-value:{arg}="'{value}'"

  arg: Key of query string.
  value: {String} Set value directly.
 */
exports.default = {
  bind: function bind(el, binding) {
    if (binding.value) {
      el.value = binding.value;
    } else {
      var queries = (0, _util.locationSearchToObject)();

      if (queries && queries[binding.arg]) {
        el.value = queries[binding.arg];
      }
    }
  }
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _tooltip = __webpack_require__(126);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  v-tooltip:{arg}.{modifiers}="'{value}'"

  arg: placement. top (default) | right | bottom | left (and additional suffix: '-start' and '-end')
  modifiers: trigger. hover (default) | focus | click | manual (no actions)
  value: {String|Object} - If value type is `String`, then tooltip title set by this value.
    If value type is `Object`, then option of Tooltip.js will set by this object value.
 */
exports.default = {
  inserted: function inserted(el, binding) {
    new _tooltip2.default(el, parseOption(binding));
  }
};


function getDefaultOption() {
  return {
    placement: 'auto',
    title: '',
    template: '<div class="tooltip with-arrow" role="tooltip"><div class="tooltip-arrow" x-arrow></div><div class="tooltip-inner"></div></div>', // jscs:ignore maximumLineLength
    offset: '1px,1px'
  };
}

function parseOption(binding) {
  var option = {};

  // arg: placement.
  if (binding.arg) option.placement = binding.arg;

  // modifiers: trigger - [hover]|focus|click|manual
  var mods = Object.keys(binding.modifiers);
  if (mods.length) {
    option.trigger = mods.join(' ');
  }

  // value: (object) option or (string) title.
  if (_typeof(binding.value) === 'object') {
    option = binding.value;
  } else {
    option.title = binding.value;
  }

  return Object.assign(getDefaultOption(), option);
}

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_popper_js__ = __webpack_require__(14);
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.1.7
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  title: '',
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  offset: 0
};

var Tooltip = function () {
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options
   * @param {String} options.placement=bottom
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `innerText`.
   * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
   * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @return {Object} instance - The generated tooltip instance
   */
  function Tooltip(reference, options) {
    classCallCheck(this, Tooltip);

    _initialiseProps.call(this);

    // apply user options over default ones
    options = _extends({}, DEFAULT_OPTIONS, options);

    reference.jquery && (reference = reference[0]);

    // cache reference and options
    this.reference = reference;
    this.options = options;

    // get events list
    var events = typeof options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) {
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    }) : [];

    // set initial state
    this._isOpen = false;
    this._popperOptions = {};

    // set event listeners
    this._setEventListeners(reference, events, options);
  }

  //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */


  /**
   * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#hide
   * @memberof Tooltip
   */


  /**
   * Hides and destroys an element’s tooltip.
   * @method Tooltip#dispose
   * @memberof Tooltip
   */


  /**
   * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#toggle
   * @memberof Tooltip
   */


  //
  // Defaults
  //


  //
  // Private methods
  //

  createClass(Tooltip, [{
    key: '_create',


    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLelement} tooltipNode
     */
    value: function _create(reference, template, title, allowHtml) {
      // create tooltip element
      var tooltipGenerator = window.document.createElement('div');
      tooltipGenerator.innerHTML = template.trim();
      var tooltipNode = tooltipGenerator.childNodes[0];

      // add unique ID to our tooltip (needed for accessibility reasons)
      tooltipNode.id = 'tooltip_' + Math.random().toString(36).substr(2, 10);

      // set initial `aria-hidden` state to `false` (it's visible!)
      tooltipNode.setAttribute('aria-hidden', 'false');

      // add title to tooltip
      var titleNode = tooltipGenerator.querySelector(this.innerSelector);
      if (title.nodeType === 1 || title.nodeType === 11) {
        // if title is a element node or document fragment, append it only if allowHtml is true
        allowHtml && titleNode.appendChild(title);
      } else if (isFunction(title)) {
        // if title is a function, call it and set innerText or innerHtml depending by `allowHtml` value
        var titleText = title.call(reference);
        allowHtml ? titleNode.innerHTML = titleText : titleNode.innerText = titleText;
      } else {
        // if it's just a simple text, set innerText or innerHtml depending by `allowHtml` value
        allowHtml ? titleNode.innerHTML = title : titleNode.innerText = title;
      }

      // return the generated tooltip node
      return tooltipNode;
    }
  }, {
    key: '_show',
    value: function _show(reference, options) {
      // don't show if it's already visible
      // or if it's not being showed
      if (this._isOpen && !this._isOpening) {
        return this;
      }
      this._isOpen = true;

      // if the tooltipNode already exists, just show it
      if (this._tooltipNode) {
        this._tooltipNode.style.display = '';
        this._tooltipNode.setAttribute('aria-hidden', 'false');
        this.popperInstance.update();
        return this;
      }

      // get title
      var title = reference.getAttribute('title') || options.title;

      // don't show tooltip if no title is defined
      if (!title) {
        return this;
      }

      // create tooltip node
      var tooltipNode = this._create(reference, options.template, title, options.html);

      // Add `aria-describedby` to our reference element for accessibility reasons
      reference.setAttribute('aria-describedby', tooltipNode.id);

      // append tooltip to container
      var container = this._findContainer(options.container, reference);

      this._append(tooltipNode, container);

      this._popperOptions = _extends({}, options.popperOptions, {
        placement: options.placement
      });

      this._popperOptions.modifiers = _extends({}, this._popperOptions.modifiers, {
        arrow: {
          element: this.arrowSelector
        },
        offset: {
          offset: options.offset
        }
      });

      if (options.boundariesElement) {
        this._popperOptions.modifiers.preventOverflow = {
          boundariesElement: options.boundariesElement
        };
      }

      this.popperInstance = new __WEBPACK_IMPORTED_MODULE_0_popper_js__["default"](reference, tooltipNode, this._popperOptions);

      this._tooltipNode = tooltipNode;

      return this;
    }
  }, {
    key: '_hide',
    value: function _hide() /*reference, options*/{
      // don't hide if it's already hidden
      if (!this._isOpen) {
        return this;
      }

      this._isOpen = false;

      // hide tooltipNode
      this._tooltipNode.style.display = 'none';
      this._tooltipNode.setAttribute('aria-hidden', 'true');

      return this;
    }
  }, {
    key: '_dispose',
    value: function _dispose() {
      var _this = this;

      // remove event listeners first to prevent any unexpected behaviour
      this._events.forEach(function (_ref) {
        var func = _ref.func,
            event = _ref.event;

        _this.reference.removeEventListener(event, func);
      });
      this._events = [];

      if (this._tooltipNode) {
        this._hide();

        // destroy instance
        this.popperInstance.destroy();

        // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element
        if (!this.popperInstance.options.removeOnDestroy) {
          this._tooltipNode.parentNode.removeChild(this._tooltipNode);
          this._tooltipNode = null;
        }
      }
      return this;
    }
  }, {
    key: '_findContainer',
    value: function _findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }
      return container;
    }

    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltip
     * @param {HTMLElement|String|false} container
     */

  }, {
    key: '_append',
    value: function _append(tooltipNode, container) {
      container.appendChild(tooltipNode);
    }
  }, {
    key: '_setEventListeners',
    value: function _setEventListeners(reference, events, options) {
      var _this2 = this;

      var directEvents = [];
      var oppositeEvents = [];

      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            break;
          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            break;
          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        }
      });

      // schedule show tooltip
      directEvents.forEach(function (event) {
        var func = function func(evt) {
          if (_this2._isOpening === true) {
            return;
          }
          evt.usedByTooltip = true;
          _this2._scheduleShow(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });

      // schedule hide tooltip
      oppositeEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByTooltip === true) {
            return;
          }
          _this2._scheduleHide(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });
    }
  }, {
    key: '_scheduleShow',
    value: function _scheduleShow(reference, delay, options /*, evt */) {
      var _this3 = this;

      this._isOpening = true;
      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0;
      this._showTimeout = window.setTimeout(function () {
        return _this3._show(reference, options);
      }, computedDelay);
    }
  }, {
    key: '_scheduleHide',
    value: function _scheduleHide(reference, delay, options, evt) {
      var _this4 = this;

      this._isOpening = false;
      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0;
      window.setTimeout(function () {
        window.clearTimeout(_this4._showTimeout);
        if (_this4._isOpen === false) {
          return;
        }
        if (!document.body.contains(_this4._tooltipNode)) {
          return;
        }

        // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it
        if (evt.type === 'mouseleave') {
          var isSet = _this4._setTooltipNodeEvent(evt, reference, delay, options);

          // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary
          if (isSet) {
            return;
          }
        }

        _this4._hide(reference, options);
      }, computedDelay);
    }
  }]);
  return Tooltip;
}();

/**
 * Placement function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback PlacementFunction
 * @param {HTMLElement} tooltip - tooltip DOM node.
 * @param {HTMLElement} reference - reference DOM node.
 * @return {String} placement - One of the allowed placement options.
 */

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */


var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.show = function () {
    return _this5._show(_this5.reference, _this5.options);
  };

  this.hide = function () {
    return _this5._hide();
  };

  this.dispose = function () {
    return _this5._dispose();
  };

  this.toggle = function () {
    if (_this5._isOpen) {
      return _this5.hide();
    } else {
      return _this5.show();
    }
  };

  this.arrowSelector = '.tooltip-arrow, .tooltip__arrow';
  this.innerSelector = '.tooltip-inner, .tooltip__inner';
  this._events = [];

  this._setTooltipNodeEvent = function (evt, reference, delay, options) {
    var relatedreference = evt.relatedreference || evt.toElement || evt.relatedTarget;

    var callback = function callback(evt2) {
      var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget;

      // Remove event listener after call
      _this5._tooltipNode.removeEventListener(evt.type, callback);

      // If the new reference is not the reference element
      if (!reference.contains(relatedreference2)) {
        // Schedule to hide tooltip
        _this5._scheduleHide(reference, options.delay, options, evt2);
      }
    };

    if (_this5._tooltipNode.contains(relatedreference)) {
      // listen to mouseleave on the tooltip element to be able to hide the tooltip
      _this5._tooltipNode.addEventListener(evt.type, callback);
      return true;
    }

    return false;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
  v-trigger:{arg}="[{value}]"

  arg: event name.
  value: {Array} Arguments for event listener.
 */
exports.default = {
  bind: function bind(el, binding, vnode) {
    el.addEventListener('click', function (event) {
      var _vnode$context$$root;

      event.preventDefault();
      (_vnode$context$$root = vnode.context.$root).$emit.apply(_vnode$context$$root, [binding.arg].concat(_toConsumableArray(binding.value)));
    });
  }
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(2);

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
  inserted: function inserted(el, binding) {
    var className = binding.modifiers.raw ? binding.arg : binding.arg + '-wrapper';
    var tagName = binding.value || 'div';

    _elementUtil2.default.wrap(el, className, tagName);
  }
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '0.4.3';

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=moss.js.map