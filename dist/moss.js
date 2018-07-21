(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MossUI"] = factory();
	else
		root["MossUI"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/anchored-tag.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/anchored-tag.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cakeCase = __webpack_require__(/*! cake-case */ "./node_modules/cake-case/dist/module/cake-case.js");

var _nodeUtil = __webpack_require__(/*! ../mixins/node-util */ "./src/js/mixins/node-util.js");

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

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
    var tagId = (0, _cakeCase.kebab)(text);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/chip.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/chip.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mooColor = __webpack_require__(/*! moo-color */ "./node_modules/moo-color/dist/moo-color.js");

var _mooColor2 = _interopRequireDefault(_mooColor);

var _closeButton = __webpack_require__(/*! ./close-button.vue */ "./src/js/components/close-button.vue");

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
    closeAction: {
      type: String,
      default: 'remove' // 'hide'|'remove'|''(no-action)
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
      var _this = this;

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
            action: this.closeAction
          },
          on: {
            close: function close() {
              return _this.$emit('close', _this);
            }
          }
        }));
      }
      return children;
    },
    coloring: function coloring() {
      if (!this.color) return;
      var color = new _mooColor2.default(this.color);
      this.$el.style.backgroundColor = color.toHex(true);
      this.$el.style.color = color.isLight ? '#333' : '#fff';
    }
  },
  mounted: function mounted() {
    this.coloring();
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/close-button.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/close-button.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

var _util = __webpack_require__(/*! ../lib/util */ "./src/js/lib/util.js");

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
      var target = this.target ? (0, _elementUtil.findAncestor)(btn, this.target) : btn.parentNode;

      this.$emit('close', target);
      if (this.action == 'hide') {
        (0, _elementUtil.hide)(target);
      } else if (this.action == 'remove') {
        target.parentNode.removeChild(target);
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/collapse-toggle.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/collapse-toggle.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(/*! ./icon.vue */ "./src/js/components/icon.vue");

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/collapse.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/collapse.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
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
    },
    direction: {
      type: String,
      default: 'vertical' // 'vertical'|'horizontal'
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
      var style = function style() {
        return window.getComputedStyle(el);
      };

      if (this.direction === 'vertical') {
        var realHeight = style().height;
        el.style.maxHeight = '0px';
        el.offsetHeight; // Force repaint
        el.style.maxHeight = realHeight;
      } else {
        el.style.maxWidth = 'none';

        var _style = style(),
            width = _style.width,
            height = _style.height;

        el.style.maxWidth = '0px';
        el.offsetWidth; // Force repaint
        el.style.maxWidth = width;
        el.style.maxHeight = height;
      }
    },
    collapsing: function collapsing(el) {
      var style = function style() {
        return window.getComputedStyle(el);
      };

      if (this.direction === 'vertical') {
        el.style.maxHeight = style().height; // real height.
        el.offsetHeight; // Force repaint
        el.style.maxHeight = '0px';
      } else {
        var _style2 = style(),
            width = _style2.width,
            height = _style2.height;

        el.style.maxWidth = width;
        el.style.maxHeight = height;
        el.offsetWidth; // Force repaint
        el.style.maxWidth = '0px';
      }
    },
    clearHeight: function clearHeight(el) {
      el.style.maxWidth = '';
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
      this.$emit('state', this.state);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/dropdown.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/dropdown.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

var _popper2 = _interopRequireDefault(_popper);

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

var _util = __webpack_require__(/*! ../lib/util */ "./src/js/lib/util.js");

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
    appendIcon: {
      type: String,
      default: 'off'
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
      this.$emit('state', val);
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
  mounted: function mounted() {
    this.initElements();
    this.addListeners();
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
    onOuterClick: function onOuterClick() {
      if (this.isShown) this.hide();
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
      if (this.appendIcon != 'off') {
        var iconName = this.appendIcon.length == 0 || this.appendIcon == 'on' ? 'caret-down' : this.appendIcon;
        var icon = (0, _util.makeIcon)(iconName);
        icon.classList.add('appended-icon');
        this.btn.appendChild(icon);
      }
      // content.
      this.content = this.$el.querySelector('.dropdown-content');
      // items.
      this.items = (0, _elementUtil.getElementsAsArray)('.dropdown-item:not([disabled])', this.content);
    },
    addListeners: function addListeners() {
      var _this = this;

      if (this.toggle === 'toggle') {
        this.btn.addEventListener('click', this.toggleShow.bind(this));
        (0, _elementUtil.addOuterListener)(document.documentElement, this.$el, 'click', this.onOuterClick.bind(this));
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/icon.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/icon.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(/*! ../lib/util */ "./src/js/lib/util.js");

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/message-box.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/message-box.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = __webpack_require__(/*! ./message.vue */ "./src/js/components/message.vue");

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/message.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/message.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _closeButton = __webpack_require__(/*! ./close-button.vue */ "./src/js/components/close-button.vue");

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/modal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/modal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

var _closeButton = __webpack_require__(/*! ./close-button.vue */ "./src/js/components/close-button.vue");

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
      default: '' // 'from-top' or 'fade'.
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
      var _this = this;

      var c = 'modal-shown';
      var openedModals = this.$moss.modal.opened;
      if (shown) {
        openedModals.push(this.name);
        document.body.classList.add(c);
      } else {
        openedModals.splice(openedModals.findIndex(function (x) {
          return x == _this.name;
        }), 1);
        if (openedModals.length < 1) document.body.classList.remove(c);
      }
      this.$emit('state', shown);
    }
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    // add key listener. close modal if 'esc' key downed.
    window.addEventListener('keydown', this.onKeydown.bind(this));
    // register events to $root and self.
    this.$root.$on('modal-toggle', this.toggleModal.bind(this));
    this.$on('close', function () {
      _this2.toggleModal(_this2.name, 'close');
    });

    // Attaches helper methods to Moss object.
    if (typeof window.Moss !== 'undefined' && typeof window.Moss.modal === 'undefined') {
      window.Moss.modal = {
        opened: [],
        show: function show(name) {
          return _this2.$root.$emit('modal-toggle', name, 'show');
        },
        close: function close(name) {
          return _this2.$root.$emit('modal-toggle', name, 'close');
        },
        toggle: function toggle(name) {
          var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'toggle';
          return _this2.$root.$emit('modal-toggle', name, action);
        }
      };
    }

    if (this.closeOn) {
      document.documentElement.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal-mask')) {
          var lastModal = window.Moss.modal.opened.slice(-1).pop();
          _this2.toggleModal(lastModal, 'close');
          event.stopPropagation();
        }
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    // Add data-toggle listeners. 'cancel'|'close'
    var elms = (0, _elementUtil.getElements)('[data-toggle="cancel"],[data-toggle="close"]', this.$el);
    (0, _elementUtil.addListener)(elms, 'click', function () {
      return _this3.toggleModal(_this3.name, 'close');
    });
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
      if (this.show && /Escape|Esc/.test(event.key)) {
        event.preventDefault();
        this.show = false;
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/nav-drawer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/nav-drawer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

var _collapse = __webpack_require__(/*! ./collapse.vue */ "./src/js/components/collapse.vue");

var _collapse2 = _interopRequireDefault(_collapse);

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

exports.default = {
  components: { Collapse: _collapse2.default },
  props: ['id'],
  computed: {
    shown: function shown() {
      return this.$refs.collapse.show;
    }
  },
  mounted: function mounted() {
    (0, _elementUtil.addOuterListener)(document.documentElement, this.$el, 'click', this.onOtherClick.bind(this), true);
  },

  methods: {
    onOtherClick: function onOtherClick() {
      if (this.shown) this.close();
    },
    open: function open() {
      this.$refs.collapse.toggleCollapse(this.id, 'show');
    },
    close: function close() {
      this.$refs.collapse.toggleCollapse(this.id, 'close');
    },
    onStateChange: function onStateChange(state) {
      this.$emit('state', state);
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/nav-item.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/nav-item.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeUtil = __webpack_require__(/*! ../mixins/node-util */ "./src/js/mixins/node-util.js");

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/navbar-brand.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/navbar-brand.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/navbar-nav.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/navbar-nav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/navbar-toggle.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/navbar-toggle.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/navbar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/navbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navbarToggle = __webpack_require__(/*! ./navbar-toggle.vue */ "./src/js/components/navbar-toggle.vue");

var _navbarToggle2 = _interopRequireDefault(_navbarToggle);

var _collapse = __webpack_require__(/*! ./collapse.vue */ "./src/js/components/collapse.vue");

var _collapse2 = _interopRequireDefault(_collapse);

var _util = __webpack_require__(/*! ../lib/util */ "./src/js/lib/util.js");

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
    },
    headerStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/parallax.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/parallax.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/scroll-button.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/scroll-button.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementMeasurer = __webpack_require__(/*! element-measurer */ "./node_modules/element-measurer/dist/element-measurer.js");

var _elementMeasurer2 = _interopRequireDefault(_elementMeasurer);

var _util = __webpack_require__(/*! ../lib/util */ "./src/js/lib/util.js");

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
      default: 'easeInOut'
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
      (0, _util.scrollTo)(0, { duration: this.duration, easing: this.easing });
    },
    toBottom: function toBottom() {
      (0, _util.scrollTo)(this.docSize.maxScrollTop, { duration: this.duration, easing: this.easing });
    },
    onScroll: function onScroll() {
      this.showToTop = this.docSize.scrollTop >= this.offset;
      this.showToBottom = this.docSize.maxScrollTop - this.docSize.scrollTop >= this.offset;
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/search.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

var _fuse = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");

var _fuse2 = _interopRequireDefault(_fuse);

var _popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

var _popper2 = _interopRequireDefault(_popper);

var _util = __webpack_require__(/*! ../lib/util */ "./src/js/lib/util.js");

var _icon = __webpack_require__(/*! ./icon.vue */ "./src/js/components/icon.vue");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { Icon: _icon2.default },
  props: {
    collection: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    searchOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    popperOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    inputPlaceholder: {
      type: String,
      default: ''
    },
    resultLimit: {
      type: Number,
      default: 0 // no limit.
    },
    autoWidth: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      input: '',
      result: [],
      suggestions: [],
      elm: {},
      fuse: new _fuse2.default(this.collection, this.searchOptions),
      popper: null,
      showResult: false,
      itemKeydownListenerAttached: false
    };
  },

  computed: {
    useFuse: function useFuse() {
      return !(0, _util.isEmpty)(this.collection);
    }
  },
  watch: {
    input: function input(val) {
      if (this.useFuse) this.setResult(this.fuse.search(val));
      this.$emit('input-change', { input: val, vnode: this });
    },
    result: function result(val) {
      if (val.length > 0) {
        this.itemKeydownListenerAttached = false;
        this.showResult = true;
      } else {
        this.showResult = false;
      }
    },
    showResult: function showResult(val) {
      if (!this.popper) this.createPopper();
      if (val) this.popper.scheduleUpdate();
    },
    suggestions: function suggestions(val) {
      this.setResult(val);
    }
  },
  mounted: function mounted() {
    this.initElements();
    this.addListeners();
    if (this.autoWidth) this.setAutoWidth(); // auto width to result-list.
  },

  methods: {
    setResult: function setResult(arr) {
      if (this.resultLimit > 0) {
        arr = arr.slice(0, this.resultLimit);
      }
      this.result = arr;
    },
    onClickItem: function onClickItem(item) {
      this.$emit('item-clicked', item);
    },
    onSubmit: function onSubmit() {
      if (!this.input) return;
      var data = {
        input: this.input,
        result: this.result
      };
      this.$emit('submit', data);
    },
    onKeydownItem: function onKeydownItem(event) {
      // result-item - ArrowUp|ArrowDown|Enter|Escape
      if (event.key.match(/Escape|Esc/)) {
        this.elm.input.focus();
      }
      if (event.key.match(/Enter/)) {
        event.currentTarget.click();
      }
      if (event.key.match(/ArrowUp|ArrowDown|Up|Down/)) {
        event.preventDefault();
        var items = this.getCurrentItems();
        var index = items.findIndex(function (item) {
          return item === event.currentTarget;
        });
        if (index === -1) return;
        if (event.key.match(/ArrowUp|Up/)) {
          index = index === 0 ? items.length - 1 : index - 1;
          items[index].focus();
        }
        if (event.key.match(/ArrowDown|Down/)) {
          index = index === items.length - 1 ? 0 : index + 1;
          items[index].focus();
        }
      }
    },
    initElements: function initElements() {
      this.elm.form = this.$el.querySelector('.search-form');
      this.elm.input = this.$el.querySelector('.search-input');
      this.elm.resultList = this.$el.querySelector('.search-result-list');
    },
    createPopper: function createPopper() {
      var options = Object.assign({
        // default options.
        placement: 'bottom',
        modifiers: {
          flip: {
            enabled: false
          }
        }
      }, this.popperOptions);
      this.popper = new _popper2.default(this.elm.form, this.elm.resultList, options);
    },
    addListeners: function addListeners() {
      var _this = this;

      // input - ArrowUp|ArrowDown
      this.elm.input.addEventListener('keydown', function (event) {
        if (event.key.match(/ArrowUp|ArrowDown|Up|Down/)) {
          event.preventDefault();
          var items = _this.getCurrentItems();
          if (event.key.match(/ArrowUp|Up/)) {
            items[items.length - 1].focus();
          }
          if (event.key.match(/ArrowDown|Down/)) {
            items[0].focus();
          }
          // attach keydown listener to items.
          if (!_this.itemKeydownListenerAttached) {
            _this.itemKeydownListenerAttached = true;
            items.forEach(function (item) {
              item.addEventListener('keydown', _this.onKeydownItem.bind(_this));
            });
          }
        }
      });
      // other click.
      document.documentElement.addEventListener('click', function (event) {
        var isOwn = (0, _elementUtil.findAncestor)(event.target, _this.$el) !== null;
        if (!isOwn && _this.showResult) _this.showResult = false;
      });
    },
    setAutoWidth: function setAutoWidth() {
      var formWidth = window.getComputedStyle(this.elm.form).width;
      formWidth = Math.floor(parseFloat(formWidth));
      this.elm.resultList.style.width = formWidth + 'px';
    },
    getCurrentItems: function getCurrentItems() {
      return (0, _elementUtil.getElementsAsArray)('li', this.elm.resultList);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/simple-crud.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/simple-crud.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

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
      var elms = (0, _elementUtil.getElements)(selector, this.$el);
      (0, _elementUtil.addListener)(elms, 'click', listener);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/tab.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/tab.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/tabs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/tabs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(/*! ./tab.vue */ "./src/js/components/tab.vue");

var _tab2 = _interopRequireDefault(_tab);

var _wrap = __webpack_require__(/*! ../directives/wrap */ "./src/js/directives/wrap.js");

var _wrap2 = _interopRequireDefault(_wrap);

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
  components: { Tab: _tab2.default },
  directives: { Wrap: _wrap2.default },
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
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/toast.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/toast.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/tree-item.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/tree-item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(/*! ../lib/util */ "./src/js/lib/util.js");

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/tree.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/js/components/tree.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _treeItem = __webpack_require__(/*! ./tree-item.vue */ "./src/js/components/tree-item.vue");

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

/***/ "./node_modules/cake-case/dist/module/cake-case.js":
/*!*********************************************************!*\
  !*** ./node_modules/cake-case/dist/module/cake-case.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function normal(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return str.replace(/([A-Z][a-z]|[0-9][a-zA-Z])/g, ' $1')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([0-9])([a-zA-Z])/g, '$1 $2')
        .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
        .replace(/([\W|_]+)/g, ' ')
        .trim()
        .replace(/\s+/g, fill);
}
exports.normal = normal;
function lower(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return normal(str, fill).toLowerCase();
}
exports.lower = lower;
function upper(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return normal(str, fill).toUpperCase();
}
exports.upper = upper;
function capital(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return lower(str, ' ').split(' ')
        .map(function (word) { return word[0].toUpperCase() + word.substr(1); })
        .join(' ').replace(/\s+/g, fill);
}
exports.capital = capital;
function camel(str) {
    str = capital(str, '');
    return str[0].toLowerCase() + str.substr(1);
}
exports.camel = camel;
function pascal(str) {
    return capital(str, '');
}
exports.pascal = pascal;
function kebab(str) {
    return lower(str, '-');
}
exports.kebab = kebab;
function snake(str) {
    return lower(str, '_');
}
exports.snake = snake;


/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(6);
var delegate = __webpack_require__(5);

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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(4);

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
/* 6 */
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
/* 7 */
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


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/element-measurer/dist/element-measurer.js":
/*!****************************************************************!*\
  !*** ./node_modules/element-measurer/dist/element-measurer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/element-measurer.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/element-measurer.ts":
/*!*********************************!*\
  !*** ./src/element-measurer.ts ***!
  \*********************************/
/*! exports provided: ElementMeasurer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementMeasurer", function() { return ElementMeasurer; });
/**
 * The library class that can measures size of element.
 *
 * @export
 * @class ElementMeasurer
 */
var ElementMeasurer = /** @class */ (function () {
    /**
     * Creates an instance of ElementMeasurer.
     * @param {AllowedTarget} [target=document.documentElement]
     * @memberof ElementMeasurer
     */
    function ElementMeasurer(target) {
        if (target === void 0) { target = document.documentElement; }
        this.setTarget(target);
    }
    Object.defineProperty(ElementMeasurer.prototype, "isDocument", {
        /**
         * Returns whether target is document or html element.
         *
         * @readonly
         * @type {boolean}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.target === document.documentElement
                || this.target === document.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "clientWidth", {
        /**
         * Returns inner width of an element in pixels.
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
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
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
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
         *
         * @type {number}
         * @memberof ElementMeasurer
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
         *
         * @type {number}
         * @memberof ElementMeasurer
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
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
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
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
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
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
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
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.scrollWidth - this.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set target element.
     *
     * @param {AllowedTarget} val target element.
     * @returns {this}
     * @memberof ElementMeasurer
     */
    ElementMeasurer.prototype.setTarget = function (val) {
        if (val instanceof HTMLElement || val instanceof Element) {
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
     * @returns {Offsets} {top, left}
     * @memberof ElementMeasurer
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

/******/ });
});


/***/ }),

/***/ "./node_modules/element-util/dist/element-util.js":
/*!********************************************************!*\
  !*** ./node_modules/element-util/dist/element-util.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/element-util.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/element-filter.ts":
/*!***************************************!*\
  !*** ./src/classes/element-filter.ts ***!
  \***************************************/
/*! exports provided: filter, ElementFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementFilter", function() { return ElementFilter; });
/* harmony import */ var _methods_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/base */ "./src/methods/base.ts");
/* harmony import */ var _methods_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../methods/util */ "./src/methods/util.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


/**
 * Filtering elements. (It's helper method for the ElementFilter.)
 *
 * @export
 * @param {ElementTarget} selector target elements.
 * @param {string} [str=''] filter string.
 * @param {FilterOptions} [options={}] options.
 * @returns {FilterResult} {elms, filtered}
 */
function filter(selector, str, options) {
    if (str === void 0) { str = ''; }
    if (options === void 0) { options = {}; }
    return new ElementFilter(selector, str, options).execute();
}
var ElementFilter = /** @class */ (function () {
    /**
     * Creates an instance of ElementFilter.
     * @param {ElementTarget} selector target elements.
     * @param {string} [str=''] filter string.
     * @param {FilterOptions} [options={}]
     * @memberof ElementFilter
     */
    function ElementFilter(selector, str, options) {
        if (str === void 0) { str = ''; }
        if (options === void 0) { options = {}; }
        this.filtered = [];
        this.elms = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])(selector);
        this.setFilter(str);
        this.options = this.getDefaultOptions();
        this.setOptions(options);
    }
    /**
     * Get default options.
     *
     * @returns {FilterOptions}
     * @memberof ElementFilter
     */
    ElementFilter.prototype.getDefaultOptions = function () {
        return {
            enableHTML: false,
        };
    };
    /**
     * Set options.
     *
     * @param {FilterOptions} options
     * @returns {this}
     * @memberof ElementFilter
     */
    ElementFilter.prototype.setOptions = function (options) {
        this.options = __assign({}, this.options, options);
        return this;
    };
    /**
     * Set filter string.
     *
     * @param {string} str string for filtering.
     * @returns {this}
     * @memberof ElementFilter
     */
    ElementFilter.prototype.setFilter = function (str) {
        this.filter = str;
        return this;
    };
    /**
     * Execute filtering.
     *
     * @returns {FilterResult}
     * @memberof ElementFilter
     */
    ElementFilter.prototype.execute = function () {
        if (this.elmsIsTable()) {
            this.filteringTable();
        }
        else {
            this.filteringNodes(this.elms);
        }
        return {
            elms: this.elms,
            filtered: this.filtered,
        };
    };
    ElementFilter.prototype.filteringTable = function () {
        var tableRows = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])('tbody tr', this.elms[0]);
        this.filteringNodes(tableRows);
    };
    ElementFilter.prototype.filteringNodes = function (elms) {
        var str = this.filter.toUpperCase();
        for (var _i = 0, elms_1 = elms; _i < elms_1.length; _i++) {
            var elm = elms_1[_i];
            var content = this.options.enableHTML
                ? elm.innerHTML
                : elm.textContent;
            if (content.toUpperCase().indexOf(str) === -1) {
                this.actionToElm(elm, false);
            }
            else {
                this.actionToElm(elm, true);
                this.filtered.push(elm);
            }
        }
    };
    ElementFilter.prototype.actionToElm = function (elm, isMatched) {
        var action = this.options.action;
        if (action === 'hideOthers') {
            isMatched ? Object(_methods_util__WEBPACK_IMPORTED_MODULE_1__["show"])(elm) : Object(_methods_util__WEBPACK_IMPORTED_MODULE_1__["hide"])(elm);
        }
        else if (typeof action === 'string' && /^(addClass:)/.test(action)) {
            var _a = action.split(':').map(function (x) { return x.trim(); }), className = _a[1];
            isMatched ? Object(_methods_util__WEBPACK_IMPORTED_MODULE_1__["addClass"])(elm, className) : Object(_methods_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(elm, className);
        }
        else if (typeof action === 'function') {
            action(elm, isMatched);
        }
    };
    ElementFilter.prototype.elmsIsTable = function () {
        return this.elms.length === 1
            && this.elms[0].tagName === 'TABLE';
    };
    return ElementFilter;
}());



/***/ }),

/***/ "./src/classes/element-sorter.ts":
/*!***************************************!*\
  !*** ./src/classes/element-sorter.ts ***!
  \***************************************/
/*! exports provided: sort, ElementSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementSorter", function() { return ElementSorter; });
/* harmony import */ var _methods_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/base */ "./src/methods/base.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

/**
 * Sorting elements. (It's helper method of the ElementSorter.)
 *
 * @export
 * @param {ElementTarget} elm base element.
 * @param {SorterOptions} [options={}] options for ElementSorter.
 * @returns {HTMLElement[]} sorted elements.
 */
function sort(elm, options) {
    if (options === void 0) { options = {}; }
    var s = new ElementSorter(elm, options);
    return s.execute().getItems();
}
var ElementSorter = /** @class */ (function () {
    /**
     * Creates an instance of ElementSorter.
     * @param {ElementTarget} elm Base element. e.g. `<ul>`, `<ol>` or `<table>`..
     * @param {SorterOptions} [options={}] items: 'auto'|selector|NodeList, datasetName: object
     * @memberof ElementSorter
     */
    function ElementSorter(elm, options) {
        if (options === void 0) { options = {}; }
        this.options = this.getDefaultOptions();
        this.setOptions(options);
        this.setElement(elm);
        this.setItems(this.options.items);
    }
    /**
     * Get default options.
     *
     * @returns {SorterOptions}
     * @memberof ElementSorter
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
     * Set options.
     *
     * @param {SorterOptions} options items: 'auto'|selector|NodeList, datasetName: object
     * @returns {this}
     * @memberof ElementSorter
     */
    ElementSorter.prototype.setOptions = function (options) {
        this.options = __assign({}, this.options, options);
        return this;
    };
    /**
     * Set base element.
     *
     * @param {ElementTarget} elm
     * @returns {this}
     * @memberof ElementSorter
     */
    ElementSorter.prototype.setElement = function (elm) {
        this.elm = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(elm);
        return this;
    };
    /**
     * Get items.
     *
     * @returns {HTMLElement[]}
     * @memberof ElementSorter
     */
    ElementSorter.prototype.getItems = function () {
        return this.items;
    };
    /**
     * Set target items for to be sorted.
     *
     * @param {ItemsSettable} items
     * @returns {this}
     * @memberof ElementSorter
     */
    ElementSorter.prototype.setItems = function (items) {
        if (this.elmIsTable()) {
            this.items = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])('tbody tr', this.elm);
        }
        else if (items === 'auto') {
            this.items = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["nodeListToArray"])(this.elm.childNodes)
                .filter(function (node) { return node.tagName; });
        }
        else {
            this.items = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])(items, this.elm);
        }
        return this;
    };
    /**
     * Execute sort.
     *
     * @returns {this}
     * @memberof ElementSorter
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
        var heads = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])('thead th', this.elm);
        heads.forEach(function (head, i) {
            head.style.cursor = 'pointer'; // Set cursor style to `pointer`.
            head.addEventListener('click', function (event) {
                event.preventDefault();
                var th = event.currentTarget;
                _this.toggleSortDirection(th);
                _this.sortingTable(_this.items, i + 1, _this.getSortType(th), _this.getSortDirection(th));
            });
        });
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
            a = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])("td:nth-child(" + nth + ")", a);
            b = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])("td:nth-child(" + nth + ")", b);
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



/***/ }),

/***/ "./src/element-util.ts":
/*!*****************************!*\
  !*** ./src/element-util.ts ***!
  \*****************************/
/*! exports provided: getElement, getElements, getElementsAsArray, removeElements, toNodeList, nodeListToArray, findAncestor, addListener, addOuterListener, wrap, wrapAll, submitConfirm, addClass, removeClass, toggleClass, hide, show, toggleShow, makeHiddenInput, appendHiddenInput, filter, ElementFilter, sort, ElementSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _methods_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/base */ "./src/methods/base.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["getElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElements", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["getElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementsAsArray", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeElements", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["removeElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNodeList", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["toNodeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeListToArray", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["nodeListToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findAncestor", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["findAncestor"]; });

/* harmony import */ var _methods_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/util */ "./src/methods/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["addListener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addOuterListener", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["addOuterListener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapAll", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["wrapAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submitConfirm", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["submitConfirm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["toggleClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "show", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["show"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleShow", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["toggleShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeHiddenInput", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["makeHiddenInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendHiddenInput", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["appendHiddenInput"]; });

/* harmony import */ var _classes_element_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/element-filter */ "./src/classes/element-filter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _classes_element_filter__WEBPACK_IMPORTED_MODULE_2__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementFilter", function() { return _classes_element_filter__WEBPACK_IMPORTED_MODULE_2__["ElementFilter"]; });

/* harmony import */ var _classes_element_sorter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/element-sorter */ "./src/classes/element-sorter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return _classes_element_sorter__WEBPACK_IMPORTED_MODULE_3__["sort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementSorter", function() { return _classes_element_sorter__WEBPACK_IMPORTED_MODULE_3__["ElementSorter"]; });







/***/ }),

/***/ "./src/methods/base.ts":
/*!*****************************!*\
  !*** ./src/methods/base.ts ***!
  \*****************************/
/*! exports provided: getElement, getElements, getElementsAsArray, removeElements, toNodeList, nodeListToArray, findAncestor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElements", function() { return getElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementsAsArray", function() { return getElementsAsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElements", function() { return removeElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNodeList", function() { return toNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeListToArray", function() { return nodeListToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAncestor", function() { return findAncestor; });
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
 * Get a single element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {Element}
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
}
/**
 * Get elements as NodeList.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {NodeList}
 */
function getElements(selector, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    if (typeof selector === 'string') {
        return base.querySelectorAll(selector);
    }
    else if (selector instanceof Element) {
        return toNodeList(selector, base);
    }
    else if (selector instanceof NodeList) {
        return selector;
    }
}
/**
 * Get elements as array of HTMLElements.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {HTMLElement[]}
 */
function getElementsAsArray(selector, base) {
    if (base === void 0) { base = document; }
    var nodeList = getElements(selector, base);
    return nodeListToArray(nodeList);
}
/**
 * Remove elements.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {number} The number of removed.
 */
function removeElements(selector, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    var elms = getElementsAsArray(selector, base);
    elms.forEach(function (elm) { return elm.parentElement.removeChild(elm); });
    return elms.length;
}
/**
 * Convert a single element to NodeList.
 *
 * @export
 * @param {(Element|string)} elm
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {NodeList}
 */
function toNodeList(elm, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    elm = getElement(elm);
    elm.setAttribute('toNodeList', '');
    var nodeList = base.querySelectorAll('[toNodeList]');
    elm.removeAttribute('toNodeList');
    return nodeList;
}
/**
 * Converts NodeList to Array.
 *
 * @export
 * @param {(NodeList|any[]|string)} list
 * @returns {any[]}
 */
function nodeListToArray(list) {
    return Array.isArray(list)
        ? list
        : [].slice.call(getElements(list));
}
/**
 * Find ancestor element.
 *
 * @export
 * @param {ElementTarget} self
 * @param {ElementTarget} ancestor
 * @returns {(Element|null)}
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

/***/ "./src/methods/util.ts":
/*!*****************************!*\
  !*** ./src/methods/util.ts ***!
  \*****************************/
/*! exports provided: addListener, addOuterListener, wrap, wrapAll, submitConfirm, addClass, removeClass, toggleClass, hide, show, toggleShow, makeHiddenInput, appendHiddenInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOuterListener", function() { return addOuterListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapAll", function() { return wrapAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitConfirm", function() { return submitConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleShow", function() { return toggleShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeHiddenInput", function() { return makeHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendHiddenInput", function() { return appendHiddenInput; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/methods/base.ts");

/**
 * Add event listener for each element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} type event type
 * @param {EventListener} listener
 * @param {(boolean|AddEventListenerOptions)} [options=false]
 */
function addListener(selector, type, listener, options) {
    if (options === void 0) { options = false; }
    var elms = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])(selector);
    elms.forEach(function (elm) { return elm.addEventListener(type, listener, options); });
}
/**
 * Add listener for the event that occurs outer of the target element.
 *
 * @export
 * @param {(Window|ElementTarget)} base the event target.
 * @param {ElementTarget} target the target element that will be ignored an event.
 * @param {string} type event type.
 * @param {EventListener} listener
 * @param {(boolean|AddEventListenerOptions)} [options=false]
 */
function addOuterListener(base, target, type, listener, options) {
    if (options === void 0) { options = false; }
    var root = base === window ? window : Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(base);
    var targetElm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(target);
    root.addEventListener(type, function (event) {
        var eventTarget = event.target;
        if (targetElm !== eventTarget
            && !targetElm.contains(eventTarget)) {
            listener(event);
        }
    }, options);
}
/**
 * Wrap for each element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className wrapper's class name.
 * @param {string} [tagName='div'] wrapper's tag name.
 */
function wrap(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])(selector);
    for (var _i = 0, elms_1 = elms; _i < elms_1.length; _i++) {
        var elm = elms_1[_i];
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
/**
 * Wrap all elements to inside a one wrapper.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className wrapper's class name.
 * @param {string} [tagName='div'] wrapper's tag name.
 */
function wrapAll(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])(selector);
    var parent = elms[0].parentNode;
    var preSibling = elms[0].previousSibling;
    var div = document.createElement(tagName);
    addClass(div, className);
    for (var _i = 0, elms_2 = elms; _i < elms_2.length; _i++) {
        var elm = elms_2[_i];
        div.appendChild(elm);
    }
    if (preSibling) {
        parent.insertBefore(div, preSibling.nextSibling);
    }
    else {
        parent.appendChild(div);
    }
}
/**
 * Add confirm on the 'submit' event.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} [message='Are you confirm?'] confirm message.
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
 * Add classes to element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className
 */
function addClass(selector, className) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.add(c); });
}
/**
 * Remove classes from element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className
 */
function removeClass(selector, className) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.remove(c); });
}
/**
 * Toggling classes to element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className
 */
function toggleClass(selector, className) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.toggle(c); });
}
/**
 * Hide element. It will set value of style.display to 'none'.
 *
 * @export
 * @param {ElementTarget} selector
 */
function hide(selector) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    elm.style.display = 'none';
}
/**
 * Show element. It will just remove 'display: none;'.
 *
 * @export
 * @param {ElementTarget} selector
 */
function show(selector) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    if (elm.style.display && elm.style.display === 'none') {
        elm.style.display = '';
    }
}
/**
 * Toggling show/hide element.
 *
 * @export
 * @param {ElementTarget} selector
 */
function toggleShow(selector) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    elm.style.display !== 'none' ? hide(elm) : show(elm);
}
/**
 * Make a hidden input.
 *
 * @export
 * @param {string} name name attribute.
 * @param {string} value value attribute.
 * @returns {HTMLInputElement}
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
 *
 * @export
 * @param {ElementTarget} target
 * @param {string} name name attribute.
 * @param {string} value value attribute.
 */
function appendHiddenInput(target, name, value) {
    var targetElm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(target);
    // Remove if already has input.
    Object(_base__WEBPACK_IMPORTED_MODULE_0__["removeElements"])("input[name=\"" + name + "\"]", target);
    targetElm.appendChild(makeHiddenInput(name, value));
}


/***/ })

/******/ });
});


/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.js":
/*!*******************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.2.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return !Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    // console.log('score', score, finalScore)

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // console.log('FINAL SCORE', finalScore)

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];
          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var currScore = 1;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            currScore *= nScore;
          }
        }

        results[i].score = bestScore === 1 ? currScore : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      if (this.options.verbose) {
        this._log('\n\nOutput:\n\n', JSON.stringify(results));
      }

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };
            if (item.key) {
              obj.key = item.key;
            }
            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});


/***/ }),

/***/ "./node_modules/moo-color/dist/moo-color.js":
/*!**************************************************!*\
  !*** ./node_modules/moo-color/dist/moo-color.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/moo-color.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
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


/***/ }),

/***/ "./src/color-converter.ts":
/*!********************************!*\
  !*** ./src/color-converter.ts ***!
  \********************************/
/*! exports provided: hslToRgb, rgbToHsl, hwbToRgb, rgbToHwb, cmykToRgb, rgbToCmyk, hsvToRgb, rgbToHsv, hsvToHwb, hwbToHsv, rgbToHex, hexToRgb, resolveHwb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsl", function() { return rgbToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hwbToRgb", function() { return hwbToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHwb", function() { return rgbToHwb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cmykToRgb", function() { return cmykToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToCmyk", function() { return rgbToCmyk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return hsvToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return rgbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToHwb", function() { return hsvToHwb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hwbToHsv", function() { return hwbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveHwb", function() { return resolveHwb; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/util */ "./src/util/util.ts");

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
    var _a;
    _a = resolveHwb(h, w, b), h = _a[0], w = _a[1], b = _a[2];
    w /= 100, b /= 100;
    var s = 1 - w / (1 - b);
    var v = 1 - b;
    return [h, s * 100, v * 100];
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
    var hex = arr.map(function (x) { return Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["padStart"])(x.toString(16), 2, '0'); }).join('');
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

/***/ "./src/color-formatter.ts":
/*!********************************!*\
  !*** ./src/color-formatter.ts ***!
  \********************************/
/*! exports provided: ColorFormatter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorFormatter", function() { return ColorFormatter; });
/* harmony import */ var _color_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-converter */ "./src/color-converter.ts");
/* harmony import */ var _color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-names */ "./src/color-names.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/util */ "./src/util/util.ts");



var ColorFormatter = /** @class */ (function () {
    function ColorFormatter() {
        // In hwb model, whiteness and blackness value's adjust will required.
        this.resolveHwb = _color_converter__WEBPACK_IMPORTED_MODULE_0__["resolveHwb"];
    }
    ColorFormatter.prototype.setColor = function (color) {
        color.alpha = Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["resolveAlpha"])(color.alpha);
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
    ColorFormatter.prototype.convert = function (color, model) {
        var values;
        switch (color.model) {
            case 'rgb':
                values = this.convertFromRgb(color.values, model);
                break;
            case 'hwb':
                values = this.convertFromHwb(color.values, model);
                break;
            case 'hsl':
                values = this.convertFromHsl(color.values, model);
                break;
            case 'hsv':
                values = this.convertFromHsv(color.values, model);
                break;
            case 'cmyk':
                values = this.convertFromCmyk(color.values, model);
                break;
        }
        if (!values.length) {
            throw new Error('Converting Error!');
        }
        return { model: model, values: values, alpha: color.alpha };
    };
    /**
     * Represents color as notation of specific color model.
     *
     * @param {(AcceptedModel|'hex')} [model] - Specify color model.
     * If not specifying this value, then returns current color model.
     * @param {...any[]} args - Arguments for the represent methods.
     * @returns {string}
     */
    ColorFormatter.prototype.toString = function (model) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        model = model ? model : this.color.model;
        switch (model) {
            case 'hex': return this.toHex.apply(this, args);
            case 'hwb': return this.toHwb();
            case 'hsl': return this.toHsl();
            case 'hsv': return this.toHsv();
            case 'cmyk': return this.toCmyk();
            default: return this.toRgb.apply(this, args);
        }
    };
    /**
     * Represents color as HEX notation.
     * @see https://www.w3.org/TR/css-color-4/#hex-notation
     *
     * @param {HexMode} [mode='full'] 'full'|'short'|'name'
     * @returns {string}
     */
    ColorFormatter.prototype.toHex = function (mode) {
        if (mode === void 0) { mode = 'full'; }
        var color = this.getColorAs('rgb');
        var _a = color.values.map(function (x) { return Math.round(x); }), r = _a[0], g = _a[1], b = _a[2];
        var a = color.alpha === 1 ? null : color.alpha;
        var nameOrShort = function () {
            var name = '';
            for (var _i = 0, _a = Object.keys(_color_names__WEBPACK_IMPORTED_MODULE_1__["default"]); _i < _a.length; _i++) {
                var key = _a[_i];
                if (Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["arrayIsEqual"])(_color_names__WEBPACK_IMPORTED_MODULE_1__["default"][key], [r, g, b])) {
                    name = key;
                    break;
                }
            }
            return a === null && name !== '' ? name : "#" + _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"](r, g, b, a, true);
        };
        switch (mode) {
            case 'name': return nameOrShort();
            case 'short': return "#" + _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"](r, g, b, a, true);
            case 'full':
            default: return "#" + _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"](r, g, b, a);
        }
    };
    /**
     * Represents color as RGB notation.
     * @see https://www.w3.org/TR/css-color-4/#rgb-functions
     *
     * @param {RgbMode} [mode='default'] 'default'|'percent'
     * @returns {string}
     */
    ColorFormatter.prototype.toRgb = function (mode) {
        var _a;
        if (mode === void 0) { mode = 'default'; }
        var color = this.getColorAs('rgb');
        var _b = color.values.map(function (x) { return Math.round(x); }), r = _b[0], g = _b[1], b = _b[2];
        if (mode === 'percent') {
            _a = [r, g, b].map(function (x) { return x / 255 * 100 + "%"; }), r = _a[0], g = _a[1], b = _a[2];
        }
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
        var _a = color.values.map(function (x) { return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["decimal"])(x, 2); }), h = _a[0], w = _a[1], b = _a[2];
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
        var _a = color.values.map(function (x) { return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["decimal"])(x, 2); }), h = _a[0], s = _a[1], l = _a[2];
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
        var _a = color.values.map(function (x) { return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["decimal"])(x, 2); }), h = _a[0], s = _a[1], v = _a[2];
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
        var _a = color.values.map(function (x) { return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["decimal"])(x, 2); }), c = _a[0], m = _a[1], y = _a[2], k = _a[3];
        var a = color.alpha === 1 ? '' : ", " + color.alpha;
        return "cmyk(" + c + "%, " + m + "%, " + y + "%, " + k + "%" + a + ")";
    };
    ColorFormatter.prototype.convertFromRgb = function (_a, model) {
        var r = _a[0], g = _a[1], b = _a[2];
        switch (model) {
            case 'rgb': return [r, g, b];
            case 'hwb': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHwb"](r, g, b);
            case 'hsl': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"](r, g, b);
            case 'hsv': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"](r, g, b);
            case 'cmyk': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToCmyk"](r, g, b);
        }
    };
    ColorFormatter.prototype.convertFromHwb = function (_a, model) {
        var h = _a[0], w = _a[1], b = _a[2];
        var _b = _color_converter__WEBPACK_IMPORTED_MODULE_0__["hwbToRgb"](h, w, b), red = _b[0], green = _b[1], blue = _b[2];
        switch (model) {
            case 'rgb': return [red, green, blue];
            case 'hwb': return [h, w, b];
            case 'hsl': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"](red, green, blue);
            case 'hsv': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["hwbToHsv"](h, w, b);
            case 'cmyk': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToCmyk"](red, green, blue);
        }
    };
    ColorFormatter.prototype.convertFromHsl = function (_a, model) {
        var h = _a[0], s = _a[1], l = _a[2];
        var _b = _color_converter__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"](h, s, l), red = _b[0], green = _b[1], blue = _b[2];
        switch (model) {
            case 'rgb': return [red, green, blue];
            case 'hwb': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHwb"](red, green, blue);
            case 'hsl': return [h, s, l];
            case 'hsv': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"](red, green, blue);
            case 'cmyk': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToCmyk"](red, green, blue);
        }
    };
    ColorFormatter.prototype.convertFromHsv = function (_a, model) {
        var h = _a[0], s = _a[1], v = _a[2];
        var _b = _color_converter__WEBPACK_IMPORTED_MODULE_0__["hsvToRgb"](h, s, v), red = _b[0], green = _b[1], blue = _b[2];
        switch (model) {
            case 'rgb': return [red, green, blue];
            case 'hwb': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["hsvToHwb"](h, s, v);
            case 'hsl': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"](red, green, blue);
            case 'hsv': return [h, s, v];
            case 'cmyk': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToCmyk"](red, green, blue);
        }
    };
    ColorFormatter.prototype.convertFromCmyk = function (_a, model) {
        var c = _a[0], m = _a[1], y = _a[2], k = _a[3];
        var _b = _color_converter__WEBPACK_IMPORTED_MODULE_0__["cmykToRgb"](c, m, y, k), red = _b[0], green = _b[1], blue = _b[2];
        switch (model) {
            case 'rgb': return [red, green, blue];
            case 'hwb': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHwb"](red, green, blue);
            case 'hsl': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"](red, green, blue);
            case 'hsv': return _color_converter__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"](red, green, blue);
            case 'cmyk': return [c, m, y, k];
        }
    };
    return ColorFormatter;
}());

/* harmony default export */ __webpack_exports__["default"] = (ColorFormatter);


/***/ }),

/***/ "./src/color-names.ts":
/*!****************************!*\
  !*** ./src/color-names.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color_name__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (color_name__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/input-parser.ts":
/*!*****************************!*\
  !*** ./src/input-parser.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inputParser; });
/* harmony import */ var _color_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-converter */ "./src/color-converter.ts");
/* harmony import */ var _color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-names */ "./src/color-names.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/util */ "./src/util/util.ts");



function inputParser(input) {
    if (input in _color_names__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        // Named colors.
        return {
            model: 'rgb',
            values: _color_names__WEBPACK_IMPORTED_MODULE_1__["default"][input],
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
function parseRgb(input) {
    var hex = /^#?([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var shortHex = /^#?([a-f0-9]{3})([a-f0-9]{1})?$/i;
    var rgba = /^rgba?\s*\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
    // tslint:disable-next-line:max-line-length
    var percent = /^rgba?\s*\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
    var hexToAlpha = function (num) { return Math.round((parseInt(num, 16) / 255) * 100) / 100; };
    var values;
    var alpha;
    if (hex.test(input)) {
        var _a = input.match(hex), h = _a[1], a = _a[2];
        values = h.match(/.{2}/g).map(function (x) { return parseInt(x, 16); });
        alpha = a ? hexToAlpha(a) : 1;
    }
    else if (shortHex.test(input)) {
        var _b = input.match(shortHex), h = _b[1], a = _b[2];
        values = h.match(/.{1}/g).map(function (x) { return parseInt(x + x, 16); });
        alpha = a ? hexToAlpha(a) : 1;
    }
    else if (rgba.test(input)) {
        var _c = input.match(rgba), r = _c[1], g = _c[2], b = _c[3], a = _c[4];
        values = [r, g, b].map(function (x) { return parseInt(x, 0); });
        alpha = Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["resolveAlpha"])(a);
    }
    else if (percent.test(input)) {
        var _d = input.match(percent), r = _d[1], g = _d[2], b = _d[3], a = _d[4];
        values = [r, g, b].map(function (x) { return Math.round(parseFloat(x) * 2.55); });
        alpha = Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["resolveAlpha"])(a);
    }
    else {
        return null;
    }
    return {
        model: 'rgb',
        values: values.map(function (x) { return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(x, 0, 255); }),
        alpha: Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(alpha, 0, 1),
    };
}
function parseHsl(input) {
    // tslint:disable-next-line:max-line-length
    var hsl = /^hsla?\s*\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i;
    if (hsl.test(input)) {
        var _a = input.match(hsl), h = _a[1], s = _a[2], l = _a[3], a = _a[4];
        return {
            model: 'hsl',
            values: [
                Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["degree"])(h),
                Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(parseFloat(s), 0, 100),
                Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(parseFloat(l), 0, 100),
            ],
            alpha: Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["resolveAlpha"])(a),
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
        var _a = input.match(hwb), h = _a[1], w = _a[2], b = _a[3], a = _a[4];
        return {
            model: 'hwb',
            values: Object(_color_converter__WEBPACK_IMPORTED_MODULE_0__["resolveHwb"])(Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["degree"])(h), Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(parseFloat(w), 0, 100), Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(parseFloat(b), 0, 100)),
            alpha: Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["resolveAlpha"])(a),
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
        var _a = input.match(hsv), h = _a[1], s = _a[2], v = _a[3], a = _a[4];
        return {
            model: 'hsv',
            values: [
                Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["degree"])(h),
                Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(parseFloat(s), 0, 100),
                Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(parseFloat(v), 0, 100),
            ],
            alpha: Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["resolveAlpha"])(a),
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
        var _a = input.match(cmyk), c = _a[1], m = _a[2], y = _a[3], k = _a[4], a = _a[5];
        return {
            model: 'cmyk',
            values: [
                Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(parseFloat(c), 0, 100),
                Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(parseFloat(m), 0, 100),
                Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(parseFloat(y), 0, 100),
                Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["clamp"])(parseFloat(k), 0, 100),
            ],
            alpha: Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["resolveAlpha"])(a),
        };
    }
    else {
        return null;
    }
}


/***/ }),

/***/ "./src/moo-color.ts":
/*!**************************!*\
  !*** ./src/moo-color.ts ***!
  \**************************/
/*! exports provided: ColorFormatter, MooColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MooColor", function() { return MooColor; });
/* harmony import */ var _color_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-converter */ "./src/color-converter.ts");
/* harmony import */ var _color_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-formatter */ "./src/color-formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorFormatter", function() { return _color_formatter__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _input_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-parser */ "./src/input-parser.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/util */ "./src/util/util.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
     * @param {(string|Color)} [color] color value. e.g. '#ff0000' 'rgba(255, 0, 0, .5)' 'hsl(120, 50%, 100%)'
     * @memberof MooColor
     */
    function MooColor(color) {
        var _this = _super.call(this) || this;
        if (typeof color === 'object' && color !== null) {
            _this.setColor(color);
        }
        else if (typeof color === 'string' || typeof color === 'undefined') {
            color = color ? color : '#000';
            _this.setColorByParser(color);
        }
        return _this;
    }
    MooColor.mix = function (color1, color2, percentOf1) {
        if (percentOf1 === void 0) { percentOf1 = 50; }
        var c1 = (color1 instanceof MooColor) ? color1 : new MooColor(color1);
        var c2 = (color2 instanceof MooColor) ? color2 : new MooColor(color2);
        return c2.mix(c1, percentOf1);
    };
    /**
     * Create random color as HWB color model.
     *
     * @static
     * @param {RandomArguments} [{hue, white, black}={}]
     * @returns {MooColor}
     * @memberof MooColor
     */
    MooColor.random = function (_a) {
        var _b;
        var _c = _a === void 0 ? {} : _a, hue = _c.hue, white = _c.white, black = _c.black;
        _b = [hue, white, black].map(function (x, i) {
            if (typeof x === 'number') {
                return x;
            }
            else if (Array.isArray(x)) {
                var precision = i === 0 ? 0 : 2;
                return Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["getRandom"])(Math.min.apply(Math, x), Math.max.apply(Math, x), precision);
            }
            else {
                return i === 0 ? Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["getRandom"])(0, 360) : Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["getRandom"])(0, 100, 2);
            }
        }), hue = _b[0], white = _b[1], black = _b[2];
        return new MooColor({
            model: 'hwb',
            values: Object(_color_converter__WEBPACK_IMPORTED_MODULE_0__["resolveHwb"])(Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["degree"])(hue), Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["clamp"])(white, 0, 100), Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["clamp"])(black, 0, 100)),
            alpha: 1,
        });
    };
    MooColor.prototype.setColorByParser = function (str) {
        var color = Object(_input_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(str);
        if (!color) {
            throw new Error('parsing error!');
        }
        return this.setColor(color);
    };
    MooColor.prototype.clone = function () {
        return new MooColor(this.color);
    };
    Object.defineProperty(MooColor.prototype, "brightness", {
        /**
         * Returns color brightness from 0 to 255. (It based RGB)
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
         * Returns luminance value of the color. value from 0 to 1.
         * @see https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
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
     * @see https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
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
     * @see https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast
     * @param {MooColor} color
     * @returns {boolean}
     */
    MooColor.prototype.isContrastEnough = function (color) {
        return this.contrastRatioWith(color) >= 4.5;
    };
    /**
     * Increase lightness.
     * @param {number} amount The amount from 0 to 100.
     * @returns {this}
     */
    MooColor.prototype.lighten = function (amount) {
        return this.manipulate('hsl', function (h, s, l) {
            l = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["clamp"])(l + amount, 0, 100);
            return [h, s, l];
        });
    };
    /**
     * Decrease lightness.
     * @param {number} amount The amount from 0 to 100.
     * @returns {this}
     */
    MooColor.prototype.darken = function (amount) {
        return this.manipulate('hsl', function (h, s, l) {
            l = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["clamp"])(l - amount, 0, 100);
            return [h, s, l];
        });
    };
    /**
     * Increase saturation.
     * @param {number} amount The amount from 0 to 100.
     * @returns {this}
     */
    MooColor.prototype.saturate = function (amount) {
        return this.manipulate('hsl', function (h, s, l) {
            s = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["clamp"])(s + amount, 0, 100);
            return [h, s, l];
        });
    };
    /**
     * Decrease saturation.
     * @param {number} amount The amount from 0 to 100.
     * @returns {this}
     */
    MooColor.prototype.desaturate = function (amount) {
        return this.manipulate('hsl', function (h, s, l) {
            s = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["clamp"])(s - amount, 0, 100);
            return [h, s, l];
        });
    };
    /**
     * Sets saturation value to 0.
     * @returns {this}
     */
    MooColor.prototype.grayscale = function () {
        return this.manipulate('hsl', function (h, s, l) { return [h, 0, l]; });
    };
    /**
     * Modify whiteness.
     * @param {number} amount The amount from -100 to 100.
     * @returns {this}
     */
    MooColor.prototype.whiten = function (amount) {
        var _this = this;
        return this.manipulate('hwb', function (h, w, b) { return _this.resolveHwb(h, Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["clamp"])(w + amount, 0, 100), b); });
    };
    /**
     * Modify blackness.
     * @param {number} amount The amount from -100 to 100.
     * @returns {this}
     */
    MooColor.prototype.blacken = function (amount) {
        var _this = this;
        return this.manipulate('hwb', function (h, w, b) { return _this.resolveHwb(h, w, Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["clamp"])(b + amount, 0, 100)); });
    };
    /**
     * Rotate hue value.
     * @param {number} d degree 0-360
     * @returns {this}
     */
    MooColor.prototype.rotate = function (d) {
        return this.manipulate('hsl', function (h, s, l) { return [Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["degree"])(h + d), s, l]; });
    };
    /**
     * Mix two colors.
     * @param {MooColor} color The color to mixed.
     * @param {number} [percent=50] The percentage value of color to be mixed.
     * @returns {MooColor} The mixed color that as a new instance of `MooColor`.
     */
    MooColor.prototype.mix = function (color, percent) {
        if (percent === void 0) { percent = 50; }
        percent /= 100;
        var m = this.getModel();
        var c1 = this.getColorAs('rgb');
        var c2 = color.getColorAs('rgb');
        return new MooColor({
            model: 'rgb',
            values: c1.values.map(function (v, i) { return v + (c2.values[i] - v) * percent; }),
            alpha: c1.alpha + (c2.alpha - c1.alpha) * percent,
        }).changeModel(m);
    };
    /**
     * Sets color to the complement of a color.
     *
     * @returns {this}
     */
    MooColor.prototype.complement = function () {
        return this.manipulate('hsl', function (h, s, l) { return [Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["degree"])(h + 180), s, l]; });
    };
    /**
     * Sets color to the inverse (negative) of a color.
     *
     * @param {number} [percent=100] The relative percent of the color that inverse.
     * @returns {this}
     */
    MooColor.prototype.invert = function (percent) {
        if (percent === void 0) { percent = 100; }
        percent /= 100;
        var absRound = function (x) { return Math.round(Math.abs(x)); };
        return this.manipulate('rgb', function (r, g, b) { return [r, g, b].map(function (x) { return absRound(255 * percent - x); }); });
    };
    MooColor.prototype.manipulate = function (asModel, callback) {
        var m = this.color.model;
        var color = this.getColorAs(asModel);
        color.values = callback.apply(void 0, color.values);
        return this.setColor(color).changeModel(m);
    };
    return MooColor;
}(_color_formatter__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (MooColor);


/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/*! exports provided: padStart, padEnd, clamp, degree, resolveAlpha, decimal, getRandom, arrayIsEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padStart", function() { return padStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padEnd", function() { return padEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degree", function() { return degree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveAlpha", function() { return resolveAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decimal", function() { return decimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandom", function() { return getRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayIsEqual", function() { return arrayIsEqual; });
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
    return chars.substring(0, limit);
}
function clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
}
function degree(num) {
    num = typeof num === 'string' ? parseFloat(num) : num;
    return (num % 360 + 360) % 360;
}
function resolveAlpha(a) {
    a = typeof a === 'string' ? parseFloat(a) : a;
    return clamp(isNaN(a) ? 1 : a, 0, 1);
}
// @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
function decimal(num, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(num * factor) / factor;
}
function getRandom(min, max, precision) {
    if (precision === void 0) { precision = 0; }
    var num = Math.random() * (max - min) + min;
    return decimal(num, precision);
}
// https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript#answer-19746771
function arrayIsEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(function (v, i) {
        return Array.isArray(v) ? arrayIsEqual(v, arr2[i]) : v === arr2[i];
    });
}


/***/ })

/******/ });
});


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
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

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
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

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

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
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

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
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
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

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

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
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
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

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

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
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
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
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

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

  for (var i = 0; i < prefixes.length; i++) {
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
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
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
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

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

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
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

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

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

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

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
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tooltip.js/dist/esm/tooltip.js":
/*!*****************************************************!*\
  !*** ./node_modules/tooltip.js/dist/esm/tooltip.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.2.0
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
   * @param {String|PlacementFunction} options.placement=top
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `textContent`.
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
   * @param {String|HTMLElement} options.boundariesElement
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


  /**
   * Updates the tooltip's title content
   * @method Tooltip#updateTitleContent
   * @memberof Tooltip
   * @param {String|HTMLElement} title - The new content to use for the title
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
     * @return {HTMLElement} tooltipNode
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
      this._addTitleContent(reference, title, allowHtml, titleNode);

      // return the generated tooltip node
      return tooltipNode;
    }
  }, {
    key: '_addTitleContent',
    value: function _addTitleContent(reference, title, allowHtml, titleNode) {
      if (title.nodeType === 1 || title.nodeType === 11) {
        // if title is a element node or document fragment, append it only if allowHtml is true
        allowHtml && titleNode.appendChild(title);
      } else if (isFunction(title)) {
        // if title is a function, call it and set textContent or innerHtml depending by `allowHtml` value
        var titleText = title.call(reference);
        allowHtml ? titleNode.innerHTML = titleText : titleNode.textContent = titleText;
      } else {
        // if it's just a simple text, set textContent or innerHtml depending by `allowHtml` value
        allowHtml ? titleNode.innerHTML = title : titleNode.textContent = title;
      }
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

      this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_0__["default"](reference, tooltipNode, this._popperOptions);

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
     * @param {HTMLElement} tooltipNode
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
  }, {
    key: '_updateTitleContent',
    value: function _updateTitleContent(title) {
      if (typeof this._tooltipNode === 'undefined') {
        if (typeof this.options.title !== 'undefined') {
          this.options.title = title;
        }
        return;
      }
      var titleNode = this._tooltipNode.parentNode.querySelector(this.innerSelector);
      this._clearTitleContent(titleNode, this.options.html, this.reference.getAttribute('title') || this.options.title);
      this._addTitleContent(this.reference, title, this.options.html, titleNode);
      this.options.title = title;
      this.popperInstance.update();
    }
  }, {
    key: '_clearTitleContent',
    value: function _clearTitleContent(titleNode, allowHtml, lastTitle) {
      if (lastTitle.nodeType === 1 || lastTitle.nodeType === 11) {
        allowHtml && titleNode.removeChild(lastTitle);
      } else {
        allowHtml ? titleNode.innerHTML = '' : titleNode.textContent = '';
      }
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

  this.updateTitleContent = function (title) {
    return _this5._updateTitleContent(title);
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

/***/ "./node_modules/transition-timing/dist/transition-timing.min.js":
/*!**********************************************************************!*\
  !*** ./node_modules/transition-timing/dist/transition-timing.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(r,e){ true?module.exports=e():undefined}(this,function(){return function(r){var e={};function n(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)n.d(t,o,function(e){return r[e]}.bind(null,o));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s="./src/index.ts")}({"./node_modules/bezier-easing/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bezier-easing/src/index.js ***!
  \*************************************************/
/*! no static exports found */function(r,e){var n=4,t=.001,o=1e-7,u=10,i=11,f=1/(i-1),c="function"==typeof Float32Array;function s(r,e){return 1-3*e+3*r}function a(r,e){return 3*e-6*r}function l(r){return 3*r}function d(r,e,n){return((s(e,n)*r+a(e,n))*r+l(e))*r}function p(r,e,n){return 3*s(e,n)*r*r+2*a(e,n)*r+l(e)}function y(r){return r}r.exports=function(r,e,s,a){if(!(0<=r&&r<=1&&0<=s&&s<=1))throw new Error("bezier x values must be in [0, 1] range");if(r===e&&s===a)return y;for(var l=c?new Float32Array(i):new Array(i),v=0;v<i;++v)l[v]=d(v*f,r,s);function b(e){for(var c=0,a=1,y=i-1;a!==y&&l[a]<=e;++a)c+=f;var v=c+(e-l[--a])/(l[a+1]-l[a])*f,b=p(v,r,s);return b>=t?function(r,e,t,o){for(var u=0;u<n;++u){var i=p(e,t,o);if(0===i)return e;e-=(d(e,t,o)-r)/i}return e}(e,v,r,s):0===b?v:function(r,e,n,t,i){var f,c,s=0;do{(f=d(c=e+(n-e)/2,t,i)-r)>0?n=c:e=c}while(Math.abs(f)>o&&++s<u);return c}(e,c,c+f,r,s)}return function(r){return 0===r?0:1===r?1:d(b(r),e,a)}}},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: cubicBezier, steps, Common, easing */function(r,e,n){"use strict";n.r(e),n.d(e,"Common",function(){return u}),n.d(e,"easing",function(){return i});var t=n(/*! bezier-easing */"./node_modules/bezier-easing/src/index.js");n.d(e,"cubicBezier",function(){return t});var o=n(/*! ./steps */"./src/steps.ts");n.d(e,"steps",function(){return o.steps});var u={linear:[0,0,1,1],ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1]};function i(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var n=[];if(1===r.length&&"string"==typeof r[0]){if(!(n=u[r[0]]))throw new ReferenceError("Wrong common keyword.")}else if(1===r.length&&Array.isArray(r[0]))n=r[0];else{if(4!==r.length||!r.every(function(r){return"number"==typeof r}))throw new TypeError("Wrong arguments.");n=r}var o=n[0],i=n[1],f=n[2],c=n[3];return t(o,i,f,c)}},"./src/steps.ts":
/*!**********************!*\
  !*** ./src/steps.ts ***!
  \**********************/
/*! exports provided: steps */function(r,e,n){"use strict";function t(r,e){var n="start"===e;return function(e){switch(e){case 0:return 0;case 1:return 1}for(var t=1;t<=r;t++){var o=t/r;if(o>e)return n?o:(t-1)/r}}}n.r(e),n.d(e,"steps",function(){return t})}})});

/***/ }),

/***/ "./node_modules/vue-agile/dist/vue-agile.min.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-agile/dist/vue-agile.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="/",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Agile=void 0;var s=i(41),o=n(s),r=function(t){t.component("agile",o.default)};e.default={install:r},e.Agile=o.default},function(t,e,i){t.exports=!i(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var i=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=i)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,i){var n=i(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){var i=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:i)(t)}},function(t,e,i){var n=i(7),s=i(6);t.exports=function(t){return n(s(t))}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(11),o=n(s);e.default={name:"agile",props:{arrows:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!1},autoplaySpeed:{type:Number,default:3e3},dots:{type:Boolean,default:!0},fade:{type:Boolean,default:!1},infinite:{type:Boolean,default:!0},mobileFirst:{type:Boolean,default:!0},nextArrow:{type:String,default:'<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z"/></svg>'},options:{type:Object,default:function(){return null}},pauseOnDotsHover:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},prevArrow:{type:String,default:'<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z"/></svg>'},responsive:{type:Object,default:function(){return null}},show:{type:Boolean,default:!0},speed:{type:Number,default:300},timing:{type:String,default:"ease"},unagile:{type:Boolean,default:!1}},data:function(){return{slides:null,slidesCount:0,autoplayStatus:!1,autoplayTimeout:null,allSlidesCount:0,currentSlide:0,mouseDown:!1,dragStartX:0,dragStaryY:0,dragDistance:0,swipeDistance:50,transform:0,transitionDelay:0,width:{document:0,container:0,slide:0,track:0},slidesToShow:1,defaultSettings:{prevArrow:this.prevArrow,nextArrow:this.nextArrow,arrows:this.arrows,autoplay:this.autoplay,autoplaySpeed:this.autoplaySpeed,dots:this.dots,fade:this.fade,infinite:this.infinite,mobileFirst:this.mobileFirst,pauseOnDotsHover:this.pauseOnDotsHover,pauseOnHover:this.pauseOnHover,responsive:this.responsive,speed:this.speed,timing:this.timing,unagile:this.unagile},settings:{}}},created:function(){if(this.options)for(var t in this.options)this.defaultSettings[t]=this.options[t];this.defaultSettings.responsive&&this.defaultSettings.responsive.sort(this.compare),(0,o.default)(this.settings,this.defaultSettings)},mounted:function(){this.slides=this.$refs.track.children,this.slidesCount=this.slides.length;for(var t=0;t<this.slidesCount;++t)this.slides[t].classList.add("agile__slide"),this.settings.fade&&(this.slides[t].style.transition="opacity "+this.timing+" "+this.speed+"ms");window.addEventListener("resize",this.getWidth),"ontouchstart"in window?(this.$refs.track.addEventListener("touchstart",this.handleMouseDown),this.$refs.track.addEventListener("touchend",this.handleMouseUp),this.$refs.track.addEventListener("touchmove",this.handleMouseMove)):(this.$refs.track.addEventListener("mousedown",this.handleMouseDown),this.$refs.track.addEventListener("mouseup",this.handleMouseUp),this.$refs.track.addEventListener("mousemove",this.handleMouseMove)),this.getWidth()},beforeDestroy:function(){window.removeEventListener("resize",this.getWidth),"ontouchstart"in window?(this.$refs.track.removeEventListener("touchstart",this.handleMouseDown),this.$refs.track.removeEventListener("touchend",this.handleMouseUp),this.$refs.track.removeEventListener("touchmove",this.handleMouseMove)):(this.$refs.track.removeEventListener("mousedown",this.handleMouseDown),this.$refs.track.removeEventListener("mouseup",this.handleMouseUp),this.$refs.track.removeEventListener("mousemove",this.handleMouseMove)),this.disableAutoplayMode()},methods:{getWidth:function(){this.width={document:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,container:this.$refs.list.clientWidth,slide:this.settings.unagile?"auto":this.$refs.list.clientWidth/this.slidesToShow}},compare:function(t,e){return t.breakpoint<e.breakpoint?this.defaultSettings.mobileFirst?-1:1:t.breakpoint>e.breakpoint?this.defaultSettings.mobileFirst?1:-1:0},handleMouseDown:function(t){t.touches||t.preventDefault(),this.mouseDown=!0,this.dragStartX="ontouchstart"in window?t.touches[0].clientX:t.clientX,this.dragStartY="ontouchstart"in window?t.touches[0].clientY:t.clientY},handleMouseMove:function(t){var e="ontouchstart"in window?t.touches[0].clientX:t.clientX,i="ontouchstart"in window?t.touches[0].clientY:t.clientY,n=Math.abs(e-this.dragStartX),s=Math.abs(i-this.dragStartY);n>3*s&&(this.dragDistance=e-this.dragStartX,this.disableScroll())},handleMouseUp:function(){this.mouseDown=!1,this.enableScroll()},handleMouseOver:function(t){this.settings.autoplay&&("dot"===t&&this.settings.pauseOnDotsHover||"track"===t&&this.settings.pauseOnHover)&&this.disableAutoplayMode()},handleMouseOut:function(t){this.settings.autoplay&&("dot"===t&&this.settings.pauseOnDotsHover||"track"===t&&this.settings.pauseOnHover)&&this.enableAutoplayMode()},enableInfiniteMode:function(){if(!this.settings.fade&&!this.$refs.list.getElementsByClassName("agile__slide--cloned")[0]){var t=this.$refs.track.firstChild.cloneNode(!0),e=this.$refs.track.lastChild.cloneNode(!0);t.classList.add("agile__slide--cloned"),e.classList.add("agile__slide--cloned"),this.$refs.track.insertBefore(e,this.slides[0]),this.$refs.track.insertBefore(t,this.slides[this.slidesCount].nextSibling)}this.countSlides()},disableInfiniteMode:function(){for(var t=this.$refs.list.getElementsByClassName("agile__slide--cloned");t[0];)t[0].parentNode.removeChild(t[0]);this.countSlides()},enableAutoplayMode:function(){this.settings.infinite||(this.settings.infinite=!0,this.enableInfiniteMode()),this.stopAutoplay(),this.startAutoplay(),this.autoplayStatus=!0},disableAutoplayMode:function(){this.autoplayStatus=!1,this.stopAutoplay()},countSlides:function(){!this.settings.infinite||this.settings.fade||this.settings.unagile?this.allSlidesCount=this.slidesCount:this.allSlidesCount=this.slidesCount+2},disableScroll:function(){document.ontouchmove=function(t){t.preventDefault()}},enableScroll:function(){document.ontouchmove=function(t){return!0}},addActiveClass:function(t){this.slides[t].classList.add("agile__slide--active")},startAutoplay:function(){var t=this;this.autoplayTimeout=setTimeout(function(){return t.settings.autoplay?void t.nextSlide():(t.stopAutoplay(),t.disableAutoplayMode(),!1)},this.autoplaySpeed)},stopAutoplay:function(){clearTimeout(this.autoplayTimeout)},setSlide:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(this.settings.unagile)return!1;if(this.settings.autoplay&&n&&(this.stopAutoplay(),this.startAutoplay()),this.settings.fade){i===!1&&(this.slides[t].style.transition="0ms",setTimeout(function(){e.slides[t].style.transition="opacity "+e.timing+" "+e.speed+"ms"},10));for(var s=0;s<this.allSlidesCount;++s)this.slides[s].classList.remove("agile__slide--expiring");this.settings.infinite&&t<0?t=this.slidesCount-1:t>=this.slidesCount&&(t=0);var o=this.currentSlide;this.slides[o].classList.add("agile__slide--expiring"),setTimeout(function(){e.slides[o].classList.remove("agile__slide--expiring")},this.settings.speed),this.transform=0}else this.transform=t*this.width.slide;for(var r=0;r<this.allSlidesCount;++r)this.slides[r].classList.remove("agile__slide--active");this.settings.infinite&&!this.settings.fade?(this.transform+=this.width.slide,this.addActiveClass(t+1)):this.addActiveClass(t),i?this.transitionDelay=this.speed:this.transitionDelay=0,this.settings.infinite&&t<0?(this.currentSlide=this.slidesCount-1,setTimeout(function(){e.setSlide(e.slidesCount-1,!1)},this.speed)):this.settings.infinite&&t>=this.slidesCount?(this.currentSlide=0,setTimeout(function(){e.setSlide(0,!1)},this.settings.speed)):this.currentSlide=t},nextSlide:function(){this.setSlide(this.currentSlide+1)},prevSlide:function(){this.setSlide(this.currentSlide-1)},reload:function(){var t=this;if(this.defaultSettings.responsive){var e={};(0,o.default)(e,this.defaultSettings),e.responsive.forEach(function(i){if(t.defaultSettings.mobileFirst){if(i.breakpoint<t.width.document)for(var n in i.settings)e[n]=i.settings[n]}else if(i.breakpoint>t.width.document)for(var s in i.settings)e[s]=i.settings[s]}),(0,o.default)(this.settings,e)}!this.settings.infinite||this.settings.fade||this.settings.unagile?this.disableInfiniteMode():this.enableInfiniteMode(),this.settings.autoplay&&!this.autoplayStatus&&this.enableAutoplayMode(),(!this.settings.autoplay&&this.autoplayStatus||this.settings.unagile)&&this.disableAutoplayMode();for(var i=0;i<this.allSlidesCount;++i)this.slides[i].style.width=this.width.container+"px",this.settings.fade&&!this.settings.unagile?this.slides[i].style.transform="translate(-"+i*this.width.slide+"px)":this.slides[i].style.transform="translate(0)";this.settings.unagile?(this.width.track=this.width.container,this.transform=0):(this.width.track=this.width.container*this.allSlidesCount,this.setSlide(this.currentSlide,!1,!1))}},computed:{documentWidth:function(){return this.width.document}},watch:{show:function(){this.getWidth(),this.reload()},documentWidth:function(){this.reload()},dragDistance:function(){if(this.mouseDown){if(this.dragDistance>this.swipeDistance){if(!this.settings.infinite&&0===this.currentSlide)return;this.prevSlide(),this.handleMouseUp()}if(this.dragDistance<-1*this.swipeDistance){if(!this.settings.infinite&&this.currentSlide===this.slidesCount-1)return;this.nextSlide(),this.handleMouseUp()}}}}}},function(t,e,i){t.exports={default:i(12),__esModule:!0}},function(t,e,i){i(38),t.exports=i(5).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var n=i(4);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,i){var n=i(9),s=i(34),o=i(33);t.exports=function(t){return function(e,i,r){var a,u=n(e),l=s(u.length),d=o(r,l);if(t&&i!=i){for(;l>d;)if(a=u[d++],a!=a)return!0}else for(;l>d;d++)if((t||d in u)&&u[d]===i)return t||d||0;return!t&&-1}}},function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,e,i){var n=i(13);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,s){return t.call(e,i,n,s)}}return function(){return t.apply(e,arguments)}}},function(t,e,i){var n=i(4),s=i(3).document,o=n(s)&&n(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,i){var n=i(3),s=i(5),o=i(17),r=i(22),a="prototype",u=function(t,e,i){var l,d,c,f=t&u.F,h=t&u.G,p=t&u.S,g=t&u.P,v=t&u.B,m=t&u.W,y=h?s:s[e]||(s[e]={}),b=y[a],w=h?n:p?n[e]:(n[e]||{})[a];h&&(i=e);for(l in i)d=!f&&w&&void 0!==w[l],d&&l in y||(c=d?w[l]:i[l],y[l]=h&&"function"!=typeof w[l]?i[l]:v&&d?o(c,n):m&&w[l]==c?function(t){var e=function(e,i,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,n)}return t.apply(this,arguments)};return e[a]=t[a],e}(c):g&&"function"==typeof c?o(Function.call,c):c,g&&((y.virtual||(y.virtual={}))[l]=c,t&u.R&&b&&!b[l]&&r(b,l,c)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},function(t,e,i){var n=i(25),s=i(30);t.exports=i(1)?function(t,e,i){return n.f(t,e,s(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e,i){t.exports=!i(1)&&!i(2)(function(){return 7!=Object.defineProperty(i(18)("div"),"a",{get:function(){return 7}}).a})},function(t,e,i){"use strict";var n=i(28),s=i(26),o=i(29),r=i(35),a=i(7),u=Object.assign;t.exports=!u||i(2)(function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach(function(t){e[t]=t}),7!=u({},t)[i]||Object.keys(u({},e)).join("")!=n})?function(t,e){for(var i=r(t),u=arguments.length,l=1,d=s.f,c=o.f;u>l;)for(var f,h=a(arguments[l++]),p=d?n(h).concat(d(h)):n(h),g=p.length,v=0;g>v;)c.call(h,f=p[v++])&&(i[f]=h[f]);return i}:u},function(t,e,i){var n=i(14),s=i(23),o=i(36),r=Object.defineProperty;e.f=i(1)?Object.defineProperty:function(t,e,i){if(n(t),e=o(e,!0),n(i),s)try{return r(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,i){var n=i(21),s=i(9),o=i(15)(!1),r=i(31)("IE_PROTO");t.exports=function(t,e){var i,a=s(t),u=0,l=[];for(i in a)i!=r&&n(a,i)&&l.push(i);for(;e.length>u;)n(a,i=e[u++])&&(~o(l,i)||l.push(i));return l}},function(t,e,i){var n=i(27),s=i(19);t.exports=Object.keys||function(t){return n(t,s)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){var n=i(32)("keys"),s=i(37);t.exports=function(t){return n[t]||(n[t]=s(t))}},function(t,e,i){var n=i(3),s="__core-js_shared__",o=n[s]||(n[s]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,i){var n=i(8),s=Math.max,o=Math.min;t.exports=function(t,e){return t=n(t),t<0?s(t+e,0):o(t,e)}},function(t,e,i){var n=i(8),s=Math.min;t.exports=function(t){return t>0?s(n(t),9007199254740991):0}},function(t,e,i){var n=i(6);t.exports=function(t){return Object(n(t))}},function(t,e,i){var n=i(4);t.exports=function(t,e){if(!n(t))return t;var i,s;if(e&&"function"==typeof(i=t.toString)&&!n(s=i.call(t)))return s;if("function"==typeof(i=t.valueOf)&&!n(s=i.call(t)))return s;if(!e&&"function"==typeof(i=t.toString)&&!n(s=i.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},function(t,e){var i=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+n).toString(36))}},function(t,e,i){var n=i(20);n(n.S+n.F,"Object",{assign:i(24)})},function(t,e,i){e=t.exports=i(40)(),e.push([t.id,".agile{position:relative}.agile:active,.agile :active,.agile:focus,.agile :focus{outline:none}.agile__list{display:block;overflow:hidden;position:relative;width:100%}.agile__track{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}.agile--disabled .agile__track,.agile__slide{display:block}.agile--fade .agile__slide{opacity:0;position:relative;z-index:0}.agile--fade .agile__slide--active{opacity:1;z-index:2}.agile--fade .agile__slide--expiring{opacity:1;transition-duration:0s;z-index:1}.agile__arrow[disabled]{cursor:default}.agile__dots{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;list-style:none;margin:0;padding:0;white-space:nowrap}.agile__dot button{cursor:pointer;display:block;font-size:0;line-height:0}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(n[o]=!0)}for(s=0;s<e.length;s++){var r=e[s];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},function(t,e,i){var n,s;i(44),n=i(10);var o=i(42);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"agile",class:{"agile--fade":t.settings.fade&&!t.settings.unagile,"agile--disabled":t.settings.unagile}},[i("div",{ref:"list",staticClass:"agile__list"},[i("div",{ref:"track",staticClass:"agile__track",style:{width:t.width.track+"px",transform:"translate(-"+t.transform+"px)",transition:"transform "+t.settings.timing+" "+t.transitionDelay+"ms"},on:{mouseover:function(e){t.handleMouseOver("track")},mouseout:function(e){t.handleMouseOut("track")}}},[t._t("default")],2)]),t._v(" "),t.settings.dots&&!t.settings.unagile?i("ul",{ref:"dots",staticClass:"agile__dots"},t._l(t.slidesCount,function(e){return i("li",{staticClass:"agile__dot",class:{"agile__dot--current":e-1===t.currentSlide},on:{mouseover:function(e){t.handleMouseOver("dot")},mouseout:function(e){t.handleMouseOut("dot")}}},[i("button",{attrs:{type:"button"},on:{click:function(i){t.setSlide(e-1)}}},[t._v(t._s(e))])])})):t._e(),t._v(" "),t.settings.arrows&&!t.settings.unagile?i("button",{staticClass:"agile__arrow agile__arrow--prev",attrs:{disabled:0===t.currentSlide&&!t.settings.infinite},domProps:{innerHTML:t._s(t.settings.prevArrow)},on:{click:t.prevSlide}}):t._e(),t._v(" "),t.settings.arrows&&!t.settings.unagile?i("button",{staticClass:"agile__arrow agile__arrow--next",attrs:{disabled:t.currentSlide===t.slidesCount-1&&!t.settings.infinite},domProps:{innerHTML:t._s(t.settings.nextArrow)},on:{click:t.nextSlide}}):t._e()])},staticRenderFns:[]}},function(t,e,i){function n(t,e){for(var i=0;i<t.length;i++){var n=t[i],s=c[n.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](n.parts[o]);for(;o<n.parts.length;o++)s.parts.push(u(n.parts[o],e))}else{for(var r=[],o=0;o<n.parts.length;o++)r.push(u(n.parts[o],e));c[n.id]={id:n.id,refs:1,parts:r}}}}function s(t){for(var e=[],i={},n=0;n<t.length;n++){var s=t[n],o=s[0],r=s[1],a=s[2],u=s[3],l={css:r,media:a,sourceMap:u};i[o]?i[o].parts.push(l):e.push(i[o]={id:o,parts:[l]})}return e}function o(t,e){var i=p(),n=m[m.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function u(t,e){var i,n,s;if(e.singleton){var o=v++;i=g||(g=a(e)),n=l.bind(null,i,o,!1),s=l.bind(null,i,o,!0)}else i=a(e),n=d.bind(null,i),s=function(){r(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}function l(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function d(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var c={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=f(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=s(t);return n(i,e),function(t){for(var o=[],r=0;r<i.length;r++){var a=i[r],u=c[a.id];u.refs--,o.push(u)}if(t){var l=s(t);n(l,e)}for(var r=0;r<o.length;r++){var u=o[r];if(0===u.refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete c[u.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e,i){var n=i(39);"string"==typeof n&&(n=[[t.id,n,""]]);i(43)(n,{});n.locals&&(t.exports=n.locals)}])});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/close-button.vue?vue&type=template&id=4478e1c0&lang=html&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/close-button.vue?vue&type=template&id=4478e1c0&lang=html& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/collapse.vue?vue&type=template&id=66110ba6&lang=html&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/collapse.vue?vue&type=template&id=66110ba6&lang=html& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/dropdown.vue?vue&type=template&id=646e5a0a&lang=html&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/dropdown.vue?vue&type=template&id=646e5a0a&lang=html& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/icon.vue?vue&type=template&id=3846121c&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/icon.vue?vue&type=template&id=3846121c& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("i", {
    staticClass: "moss-icon",
    domProps: { innerHTML: _vm._s(_vm.svgContent) }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/message-box.vue?vue&type=template&id=4c43d39c&lang=html&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/message-box.vue?vue&type=template&id=4c43d39c&lang=html& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/message.vue?vue&type=template&id=9a61f9c4&lang=html&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/message.vue?vue&type=template&id=9a61f9c4&lang=html& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/modal.vue?vue&type=template&id=6e972e84&lang=html&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/modal.vue?vue&type=template&id=6e972e84&lang=html& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
        _c(
          "div",
          { staticClass: "modal-content" },
          [
            _vm._t("header", [
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
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [_vm._t("default")], 2),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [_vm._t("actions")], 2)
          ],
          2
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/nav-drawer.vue?vue&type=template&id=4544e994&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/nav-drawer.vue?vue&type=template&id=4544e994& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "collapse",
    {
      ref: "collapse",
      staticClass: "nav-drawer",
      attrs: { id: _vm.id, direction: "horizontal" },
      on: { state: _vm.onStateChange }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/nav-item.vue?vue&type=template&id=c1309d14&lang=html&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/nav-item.vue?vue&type=template&id=c1309d14&lang=html& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { staticClass: "nav-item" },
    [
      _vm.hasHref
        ? _c("a", {
            staticClass: "nav-link",
            attrs: { href: _vm.href },
            domProps: { textContent: _vm._s(_vm.linkText) }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/navbar-brand.vue?vue&type=template&id=8f1beefa&lang=html&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/navbar-brand.vue?vue&type=template&id=8f1beefa&lang=html& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/navbar-nav.vue?vue&type=template&id=3f51611f&lang=html&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/navbar-nav.vue?vue&type=template&id=3f51611f&lang=html& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.classObject }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/navbar-toggle.vue?vue&type=template&id=58978af0&lang=html&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/navbar-toggle.vue?vue&type=template&id=58978af0&lang=html& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/navbar.vue?vue&type=template&id=9f24c26e&lang=html&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/navbar.vue?vue&type=template&id=9f24c26e&lang=html& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
        { class: _vm.headerClass, style: _vm.headerStyle },
        [
          _vm._t("brand"),
          _vm._v(" "),
          _c("navbar-toggle", {
            staticClass: "hide-tablet-up",
            attrs: { color: _vm.toggleColor, opened: _vm.toggleExpanded },
            nativeOn: {
              click: function($event) {
                return _vm.onToggleClick($event)
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/parallax.vue?vue&type=template&id=f475dee0&lang=html&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/parallax.vue?vue&type=template&id=f475dee0&lang=html& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "parallax", style: _vm.styleObject })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/scroll-button.vue?vue&type=template&id=d6b6d6ee&lang=html&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/scroll-button.vue?vue&type=template&id=d6b6d6ee&lang=html& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "scroll-button-container" }, [
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
          staticClass: "scroll-button-top",
          attrs: { type: "button" },
          domProps: { innerHTML: _vm._s(_vm.topIcon) },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.toTop($event)
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
          staticClass: "scroll-button-bottom",
          attrs: { type: "button" },
          domProps: { innerHTML: _vm._s(_vm.bottomIcon) },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.toBottom($event)
            }
          }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/search.vue?vue&type=template&id=da93473e&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/search.vue?vue&type=template&id=da93473e& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "search-component" }, [
    _c(
      "form",
      {
        staticClass: "search-form",
        attrs: { action: "#", method: "get" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          }
        }
      },
      [
        _c("div", { staticClass: "input-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.input,
                expression: "input"
              }
            ],
            staticClass: "search-input",
            attrs: {
              type: "search",
              name: "input",
              placeholder: _vm.inputPlaceholder,
              autocomplete: "off"
            },
            domProps: { value: _vm.input },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.input = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append" }, [
            _c(
              "button",
              { staticClass: "btn", attrs: { type: "submit" } },
              [_c("icon", { attrs: { name: "search" } })],
              1
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "ul",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showResult,
            expression: "showResult"
          }
        ],
        staticClass: "list search-result-list"
      },
      [
        _vm._l(_vm.result, function(item) {
          return _vm._t(
            "result-item",
            [
              _c(
                "li",
                {
                  key: item._id,
                  attrs: { tabindex: "0" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.onClickItem(item)
                    }
                  }
                },
                [_vm._v("\n        " + _vm._s(item.name) + "\n      ")]
              )
            ],
            { item: item, onClickItem: _vm.onClickItem }
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/simple-crud.vue?vue&type=template&id=dff165e0&lang=html&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/simple-crud.vue?vue&type=template&id=dff165e0&lang=html& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/tab.vue?vue&type=template&id=303b232c&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/tab.vue?vue&type=template&id=303b232c& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/tabs.vue?vue&type=template&id=4a563912&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/tabs.vue?vue&type=template&id=4a563912& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/toast.vue?vue&type=template&id=06290604&lang=html&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/toast.vue?vue&type=template&id=06290604&lang=html& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/tree-item.vue?vue&type=template&id=6677548e&lang=html&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/tree-item.vue?vue&type=template&id=6677548e&lang=html& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/tree.vue?vue&type=template&id=62781397&lang=html&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/tree.vue?vue&type=template&id=62781397&lang=html& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
    options._scopeId = 'data-v-' + scopeId
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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/components/anchored-tag.vue":
/*!********************************************!*\
  !*** ./src/js/components/anchored-tag.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchored_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchored-tag.vue?vue&type=script&lang=js& */ "./src/js/components/anchored-tag.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _anchored_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _anchored_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _anchored_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\anchored-tag.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/anchored-tag.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/js/components/anchored-tag.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_anchored_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./anchored-tag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/anchored-tag.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_anchored_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_anchored_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_anchored_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_anchored_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_anchored_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/chip.vue":
/*!************************************!*\
  !*** ./src/js/components/chip.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip.vue?vue&type=script&lang=js& */ "./src/js/components/chip.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\chip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/chip.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/js/components/chip.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./chip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/chip.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/close-button.vue":
/*!********************************************!*\
  !*** ./src/js/components/close-button.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _close_button_vue_vue_type_template_id_4478e1c0_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-button.vue?vue&type=template&id=4478e1c0&lang=html& */ "./src/js/components/close-button.vue?vue&type=template&id=4478e1c0&lang=html&");
/* harmony import */ var _close_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-button.vue?vue&type=script&lang=js& */ "./src/js/components/close-button.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _close_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _close_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _close_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _close_button_vue_vue_type_template_id_4478e1c0_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _close_button_vue_vue_type_template_id_4478e1c0_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\close-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/close-button.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/js/components/close-button.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_close_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./close-button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/close-button.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_close_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_close_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_close_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_close_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_close_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/close-button.vue?vue&type=template&id=4478e1c0&lang=html&":
/*!*************************************************************************************!*\
  !*** ./src/js/components/close-button.vue?vue&type=template&id=4478e1c0&lang=html& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_close_button_vue_vue_type_template_id_4478e1c0_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./close-button.vue?vue&type=template&id=4478e1c0&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/close-button.vue?vue&type=template&id=4478e1c0&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_close_button_vue_vue_type_template_id_4478e1c0_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_close_button_vue_vue_type_template_id_4478e1c0_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/collapse-toggle.vue":
/*!***********************************************!*\
  !*** ./src/js/components/collapse-toggle.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse-toggle.vue?vue&type=script&lang=js& */ "./src/js/components/collapse-toggle.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _collapse_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _collapse_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _collapse_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\collapse-toggle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/collapse-toggle.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/js/components/collapse-toggle.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./collapse-toggle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/collapse-toggle.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/collapse.vue":
/*!****************************************!*\
  !*** ./src/js/components/collapse.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse_vue_vue_type_template_id_66110ba6_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse.vue?vue&type=template&id=66110ba6&lang=html& */ "./src/js/components/collapse.vue?vue&type=template&id=66110ba6&lang=html&");
/* harmony import */ var _collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse.vue?vue&type=script&lang=js& */ "./src/js/components/collapse.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _collapse_vue_vue_type_template_id_66110ba6_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _collapse_vue_vue_type_template_id_66110ba6_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\collapse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/collapse.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/js/components/collapse.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./collapse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/collapse.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/collapse.vue?vue&type=template&id=66110ba6&lang=html&":
/*!*********************************************************************************!*\
  !*** ./src/js/components/collapse.vue?vue&type=template&id=66110ba6&lang=html& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collapse_vue_vue_type_template_id_66110ba6_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./collapse.vue?vue&type=template&id=66110ba6&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/collapse.vue?vue&type=template&id=66110ba6&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collapse_vue_vue_type_template_id_66110ba6_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collapse_vue_vue_type_template_id_66110ba6_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/dropdown.vue":
/*!****************************************!*\
  !*** ./src/js/components/dropdown.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_vue_vue_type_template_id_646e5a0a_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.vue?vue&type=template&id=646e5a0a&lang=html& */ "./src/js/components/dropdown.vue?vue&type=template&id=646e5a0a&lang=html&");
/* harmony import */ var _dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.vue?vue&type=script&lang=js& */ "./src/js/components/dropdown.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dropdown_vue_vue_type_template_id_646e5a0a_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dropdown_vue_vue_type_template_id_646e5a0a_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/dropdown.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/js/components/dropdown.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/dropdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/dropdown.vue?vue&type=template&id=646e5a0a&lang=html&":
/*!*********************************************************************************!*\
  !*** ./src/js/components/dropdown.vue?vue&type=template&id=646e5a0a&lang=html& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_template_id_646e5a0a_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./dropdown.vue?vue&type=template&id=646e5a0a&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/dropdown.vue?vue&type=template&id=646e5a0a&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_template_id_646e5a0a_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_template_id_646e5a0a_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/icon.vue":
/*!************************************!*\
  !*** ./src/js/components/icon.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_vue_vue_type_template_id_3846121c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.vue?vue&type=template&id=3846121c& */ "./src/js/components/icon.vue?vue&type=template&id=3846121c&");
/* harmony import */ var _icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.vue?vue&type=script&lang=js& */ "./src/js/components/icon.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _icon_vue_vue_type_template_id_3846121c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _icon_vue_vue_type_template_id_3846121c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/icon.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/js/components/icon.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./icon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/icon.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/icon.vue?vue&type=template&id=3846121c&":
/*!*******************************************************************!*\
  !*** ./src/js/components/icon.vue?vue&type=template&id=3846121c& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_template_id_3846121c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./icon.vue?vue&type=template&id=3846121c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/icon.vue?vue&type=template&id=3846121c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_template_id_3846121c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_template_id_3846121c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/index.js":
/*!************************************!*\
  !*** ./src/js/components/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anchoredTag = __webpack_require__(/*! ./anchored-tag.vue */ "./src/js/components/anchored-tag.vue");

Object.defineProperty(exports, 'AnchoredTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_anchoredTag).default;
  }
});

var _chip = __webpack_require__(/*! ./chip.vue */ "./src/js/components/chip.vue");

Object.defineProperty(exports, 'Chip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_chip).default;
  }
});

var _closeButton = __webpack_require__(/*! ./close-button.vue */ "./src/js/components/close-button.vue");

Object.defineProperty(exports, 'CloseButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_closeButton).default;
  }
});

var _collapse = __webpack_require__(/*! ./collapse.vue */ "./src/js/components/collapse.vue");

Object.defineProperty(exports, 'Collapse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_collapse).default;
  }
});

var _dropdown = __webpack_require__(/*! ./dropdown.vue */ "./src/js/components/dropdown.vue");

Object.defineProperty(exports, 'Dropdown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dropdown).default;
  }
});

var _message = __webpack_require__(/*! ./message.vue */ "./src/js/components/message.vue");

Object.defineProperty(exports, 'Message', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_message).default;
  }
});

var _messageBox = __webpack_require__(/*! ./message-box.vue */ "./src/js/components/message-box.vue");

Object.defineProperty(exports, 'MessageBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_messageBox).default;
  }
});

var _modal = __webpack_require__(/*! ./modal.vue */ "./src/js/components/modal.vue");

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _navbar = __webpack_require__(/*! ./navbar.vue */ "./src/js/components/navbar.vue");

Object.defineProperty(exports, 'Navbar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navbar).default;
  }
});

var _navbarBrand = __webpack_require__(/*! ./navbar-brand.vue */ "./src/js/components/navbar-brand.vue");

Object.defineProperty(exports, 'NavbarBrand', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navbarBrand).default;
  }
});

var _navbarNav = __webpack_require__(/*! ./navbar-nav.vue */ "./src/js/components/navbar-nav.vue");

Object.defineProperty(exports, 'NavbarNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navbarNav).default;
  }
});

var _navbarToggle = __webpack_require__(/*! ./navbar-toggle.vue */ "./src/js/components/navbar-toggle.vue");

Object.defineProperty(exports, 'NavbarToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navbarToggle).default;
  }
});

var _navItem = __webpack_require__(/*! ./nav-item.vue */ "./src/js/components/nav-item.vue");

Object.defineProperty(exports, 'NavItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navItem).default;
  }
});

var _parallax = __webpack_require__(/*! ./parallax.vue */ "./src/js/components/parallax.vue");

Object.defineProperty(exports, 'Parallax', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parallax).default;
  }
});

var _scrollButton = __webpack_require__(/*! ./scroll-button.vue */ "./src/js/components/scroll-button.vue");

Object.defineProperty(exports, 'ScrollButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollButton).default;
  }
});

var _simpleCrud = __webpack_require__(/*! ./simple-crud.vue */ "./src/js/components/simple-crud.vue");

Object.defineProperty(exports, 'SimpleCRUD', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_simpleCrud).default;
  }
});

var _tab = __webpack_require__(/*! ./tab.vue */ "./src/js/components/tab.vue");

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tab).default;
  }
});

var _tabs = __webpack_require__(/*! ./tabs.vue */ "./src/js/components/tabs.vue");

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabs).default;
  }
});

var _toast = __webpack_require__(/*! ./toast.vue */ "./src/js/components/toast.vue");

Object.defineProperty(exports, 'Toast', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toast).default;
  }
});

var _tree = __webpack_require__(/*! ./tree.vue */ "./src/js/components/tree.vue");

Object.defineProperty(exports, 'Tree', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tree).default;
  }
});

var _treeItem = __webpack_require__(/*! ./tree-item.vue */ "./src/js/components/tree-item.vue");

Object.defineProperty(exports, 'TreeItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_treeItem).default;
  }
});

var _vueAgile = __webpack_require__(/*! vue-agile */ "./node_modules/vue-agile/dist/vue-agile.min.js");

Object.defineProperty(exports, 'Carousel', {
  enumerable: true,
  get: function get() {
    return _vueAgile.Agile;
  }
});

var _icon = __webpack_require__(/*! ./icon.vue */ "./src/js/components/icon.vue");

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_icon).default;
  }
});

var _collapseToggle = __webpack_require__(/*! ./collapse-toggle.vue */ "./src/js/components/collapse-toggle.vue");

Object.defineProperty(exports, 'CollapseToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_collapseToggle).default;
  }
});

var _search = __webpack_require__(/*! ./search.vue */ "./src/js/components/search.vue");

Object.defineProperty(exports, 'Search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_search).default;
  }
});

var _navDrawer = __webpack_require__(/*! ./nav-drawer.vue */ "./src/js/components/nav-drawer.vue");

Object.defineProperty(exports, 'NavDrawer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navDrawer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/js/components/message-box.vue":
/*!*******************************************!*\
  !*** ./src/js/components/message-box.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_box_vue_vue_type_template_id_4c43d39c_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-box.vue?vue&type=template&id=4c43d39c&lang=html& */ "./src/js/components/message-box.vue?vue&type=template&id=4c43d39c&lang=html&");
/* harmony import */ var _message_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-box.vue?vue&type=script&lang=js& */ "./src/js/components/message-box.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _message_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _message_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _message_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_box_vue_vue_type_template_id_4c43d39c_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _message_box_vue_vue_type_template_id_4c43d39c_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\message-box.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/message-box.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/js/components/message-box.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./message-box.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/message-box.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/message-box.vue?vue&type=template&id=4c43d39c&lang=html&":
/*!************************************************************************************!*\
  !*** ./src/js/components/message-box.vue?vue&type=template&id=4c43d39c&lang=html& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_box_vue_vue_type_template_id_4c43d39c_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./message-box.vue?vue&type=template&id=4c43d39c&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/message-box.vue?vue&type=template&id=4c43d39c&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_box_vue_vue_type_template_id_4c43d39c_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_box_vue_vue_type_template_id_4c43d39c_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/message.vue":
/*!***************************************!*\
  !*** ./src/js/components/message.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_vue_vue_type_template_id_9a61f9c4_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.vue?vue&type=template&id=9a61f9c4&lang=html& */ "./src/js/components/message.vue?vue&type=template&id=9a61f9c4&lang=html&");
/* harmony import */ var _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.vue?vue&type=script&lang=js& */ "./src/js/components/message.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_vue_vue_type_template_id_9a61f9c4_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _message_vue_vue_type_template_id_9a61f9c4_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\message.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/message.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/js/components/message.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./message.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/message.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/message.vue?vue&type=template&id=9a61f9c4&lang=html&":
/*!********************************************************************************!*\
  !*** ./src/js/components/message.vue?vue&type=template&id=9a61f9c4&lang=html& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_template_id_9a61f9c4_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./message.vue?vue&type=template&id=9a61f9c4&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/message.vue?vue&type=template&id=9a61f9c4&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_template_id_9a61f9c4_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_template_id_9a61f9c4_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/modal.vue":
/*!*************************************!*\
  !*** ./src/js/components/modal.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_vue_vue_type_template_id_6e972e84_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.vue?vue&type=template&id=6e972e84&lang=html& */ "./src/js/components/modal.vue?vue&type=template&id=6e972e84&lang=html&");
/* harmony import */ var _modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.vue?vue&type=script&lang=js& */ "./src/js/components/modal.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modal_vue_vue_type_template_id_6e972e84_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modal_vue_vue_type_template_id_6e972e84_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/modal.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/js/components/modal.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/modal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/modal.vue?vue&type=template&id=6e972e84&lang=html&":
/*!******************************************************************************!*\
  !*** ./src/js/components/modal.vue?vue&type=template&id=6e972e84&lang=html& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_6e972e84_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./modal.vue?vue&type=template&id=6e972e84&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/modal.vue?vue&type=template&id=6e972e84&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_6e972e84_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_6e972e84_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/nav-drawer.vue":
/*!******************************************!*\
  !*** ./src/js/components/nav-drawer.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_drawer_vue_vue_type_template_id_4544e994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-drawer.vue?vue&type=template&id=4544e994& */ "./src/js/components/nav-drawer.vue?vue&type=template&id=4544e994&");
/* harmony import */ var _nav_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-drawer.vue?vue&type=script&lang=js& */ "./src/js/components/nav-drawer.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nav_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nav_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nav_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_drawer_vue_vue_type_template_id_4544e994___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_drawer_vue_vue_type_template_id_4544e994___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\nav-drawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/nav-drawer.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/js/components/nav-drawer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./nav-drawer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/nav-drawer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/nav-drawer.vue?vue&type=template&id=4544e994&":
/*!*************************************************************************!*\
  !*** ./src/js/components/nav-drawer.vue?vue&type=template&id=4544e994& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_drawer_vue_vue_type_template_id_4544e994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./nav-drawer.vue?vue&type=template&id=4544e994& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/nav-drawer.vue?vue&type=template&id=4544e994&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_drawer_vue_vue_type_template_id_4544e994___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_drawer_vue_vue_type_template_id_4544e994___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/nav-item.vue":
/*!****************************************!*\
  !*** ./src/js/components/nav-item.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_item_vue_vue_type_template_id_c1309d14_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-item.vue?vue&type=template&id=c1309d14&lang=html& */ "./src/js/components/nav-item.vue?vue&type=template&id=c1309d14&lang=html&");
/* harmony import */ var _nav_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-item.vue?vue&type=script&lang=js& */ "./src/js/components/nav-item.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nav_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nav_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nav_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_item_vue_vue_type_template_id_c1309d14_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_item_vue_vue_type_template_id_c1309d14_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\nav-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/nav-item.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/js/components/nav-item.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./nav-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/nav-item.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_nav_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/nav-item.vue?vue&type=template&id=c1309d14&lang=html&":
/*!*********************************************************************************!*\
  !*** ./src/js/components/nav-item.vue?vue&type=template&id=c1309d14&lang=html& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_item_vue_vue_type_template_id_c1309d14_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./nav-item.vue?vue&type=template&id=c1309d14&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/nav-item.vue?vue&type=template&id=c1309d14&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_item_vue_vue_type_template_id_c1309d14_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_item_vue_vue_type_template_id_c1309d14_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/navbar-brand.vue":
/*!********************************************!*\
  !*** ./src/js/components/navbar-brand.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_brand_vue_vue_type_template_id_8f1beefa_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar-brand.vue?vue&type=template&id=8f1beefa&lang=html& */ "./src/js/components/navbar-brand.vue?vue&type=template&id=8f1beefa&lang=html&");
/* harmony import */ var _navbar_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-brand.vue?vue&type=script&lang=js& */ "./src/js/components/navbar-brand.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _navbar_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _navbar_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navbar_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navbar_brand_vue_vue_type_template_id_8f1beefa_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navbar_brand_vue_vue_type_template_id_8f1beefa_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\navbar-brand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/navbar-brand.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/js/components/navbar-brand.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./navbar-brand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/navbar-brand.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/navbar-brand.vue?vue&type=template&id=8f1beefa&lang=html&":
/*!*************************************************************************************!*\
  !*** ./src/js/components/navbar-brand.vue?vue&type=template&id=8f1beefa&lang=html& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_brand_vue_vue_type_template_id_8f1beefa_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./navbar-brand.vue?vue&type=template&id=8f1beefa&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/navbar-brand.vue?vue&type=template&id=8f1beefa&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_brand_vue_vue_type_template_id_8f1beefa_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_brand_vue_vue_type_template_id_8f1beefa_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/navbar-nav.vue":
/*!******************************************!*\
  !*** ./src/js/components/navbar-nav.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_nav_vue_vue_type_template_id_3f51611f_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar-nav.vue?vue&type=template&id=3f51611f&lang=html& */ "./src/js/components/navbar-nav.vue?vue&type=template&id=3f51611f&lang=html&");
/* harmony import */ var _navbar_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-nav.vue?vue&type=script&lang=js& */ "./src/js/components/navbar-nav.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _navbar_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _navbar_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navbar_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navbar_nav_vue_vue_type_template_id_3f51611f_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navbar_nav_vue_vue_type_template_id_3f51611f_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\navbar-nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/navbar-nav.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/js/components/navbar-nav.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./navbar-nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/navbar-nav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/navbar-nav.vue?vue&type=template&id=3f51611f&lang=html&":
/*!***********************************************************************************!*\
  !*** ./src/js/components/navbar-nav.vue?vue&type=template&id=3f51611f&lang=html& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_nav_vue_vue_type_template_id_3f51611f_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./navbar-nav.vue?vue&type=template&id=3f51611f&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/navbar-nav.vue?vue&type=template&id=3f51611f&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_nav_vue_vue_type_template_id_3f51611f_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_nav_vue_vue_type_template_id_3f51611f_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/navbar-toggle.vue":
/*!*********************************************!*\
  !*** ./src/js/components/navbar-toggle.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_toggle_vue_vue_type_template_id_58978af0_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar-toggle.vue?vue&type=template&id=58978af0&lang=html& */ "./src/js/components/navbar-toggle.vue?vue&type=template&id=58978af0&lang=html&");
/* harmony import */ var _navbar_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-toggle.vue?vue&type=script&lang=js& */ "./src/js/components/navbar-toggle.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _navbar_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _navbar_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navbar_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navbar_toggle_vue_vue_type_template_id_58978af0_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navbar_toggle_vue_vue_type_template_id_58978af0_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\navbar-toggle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/navbar-toggle.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/js/components/navbar-toggle.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./navbar-toggle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/navbar-toggle.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_toggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/navbar-toggle.vue?vue&type=template&id=58978af0&lang=html&":
/*!**************************************************************************************!*\
  !*** ./src/js/components/navbar-toggle.vue?vue&type=template&id=58978af0&lang=html& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_toggle_vue_vue_type_template_id_58978af0_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./navbar-toggle.vue?vue&type=template&id=58978af0&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/navbar-toggle.vue?vue&type=template&id=58978af0&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_toggle_vue_vue_type_template_id_58978af0_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_toggle_vue_vue_type_template_id_58978af0_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/navbar.vue":
/*!**************************************!*\
  !*** ./src/js/components/navbar.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_vue_vue_type_template_id_9f24c26e_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.vue?vue&type=template&id=9f24c26e&lang=html& */ "./src/js/components/navbar.vue?vue&type=template&id=9f24c26e&lang=html&");
/* harmony import */ var _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.vue?vue&type=script&lang=js& */ "./src/js/components/navbar.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navbar_vue_vue_type_template_id_9f24c26e_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navbar_vue_vue_type_template_id_9f24c26e_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/navbar.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/js/components/navbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/navbar.vue?vue&type=template&id=9f24c26e&lang=html&":
/*!*******************************************************************************!*\
  !*** ./src/js/components/navbar.vue?vue&type=template&id=9f24c26e&lang=html& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_9f24c26e_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=template&id=9f24c26e&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/navbar.vue?vue&type=template&id=9f24c26e&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_9f24c26e_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_9f24c26e_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/parallax.vue":
/*!****************************************!*\
  !*** ./src/js/components/parallax.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parallax_vue_vue_type_template_id_f475dee0_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parallax.vue?vue&type=template&id=f475dee0&lang=html& */ "./src/js/components/parallax.vue?vue&type=template&id=f475dee0&lang=html&");
/* harmony import */ var _parallax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallax.vue?vue&type=script&lang=js& */ "./src/js/components/parallax.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _parallax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _parallax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _parallax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _parallax_vue_vue_type_template_id_f475dee0_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _parallax_vue_vue_type_template_id_f475dee0_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\parallax.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/parallax.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/js/components/parallax.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_parallax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./parallax.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/parallax.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_parallax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_parallax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_parallax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_parallax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_parallax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/parallax.vue?vue&type=template&id=f475dee0&lang=html&":
/*!*********************************************************************************!*\
  !*** ./src/js/components/parallax.vue?vue&type=template&id=f475dee0&lang=html& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_parallax_vue_vue_type_template_id_f475dee0_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./parallax.vue?vue&type=template&id=f475dee0&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/parallax.vue?vue&type=template&id=f475dee0&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_parallax_vue_vue_type_template_id_f475dee0_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_parallax_vue_vue_type_template_id_f475dee0_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/scroll-button.vue":
/*!*********************************************!*\
  !*** ./src/js/components/scroll-button.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_button_vue_vue_type_template_id_d6b6d6ee_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-button.vue?vue&type=template&id=d6b6d6ee&lang=html& */ "./src/js/components/scroll-button.vue?vue&type=template&id=d6b6d6ee&lang=html&");
/* harmony import */ var _scroll_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-button.vue?vue&type=script&lang=js& */ "./src/js/components/scroll-button.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scroll_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scroll_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _scroll_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _scroll_button_vue_vue_type_template_id_d6b6d6ee_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _scroll_button_vue_vue_type_template_id_d6b6d6ee_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\scroll-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/scroll-button.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/js/components/scroll-button.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_scroll_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./scroll-button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/scroll-button.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_scroll_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_scroll_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_scroll_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_scroll_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_scroll_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/scroll-button.vue?vue&type=template&id=d6b6d6ee&lang=html&":
/*!**************************************************************************************!*\
  !*** ./src/js/components/scroll-button.vue?vue&type=template&id=d6b6d6ee&lang=html& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_scroll_button_vue_vue_type_template_id_d6b6d6ee_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./scroll-button.vue?vue&type=template&id=d6b6d6ee&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/scroll-button.vue?vue&type=template&id=d6b6d6ee&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_scroll_button_vue_vue_type_template_id_d6b6d6ee_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_scroll_button_vue_vue_type_template_id_d6b6d6ee_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/search.vue":
/*!**************************************!*\
  !*** ./src/js/components/search.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_da93473e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=da93473e& */ "./src/js/components/search.vue?vue&type=template&id=da93473e&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./src/js/components/search.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_da93473e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_da93473e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/search.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/js/components/search.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/search.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/search.vue?vue&type=template&id=da93473e&":
/*!*********************************************************************!*\
  !*** ./src/js/components/search.vue?vue&type=template&id=da93473e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_da93473e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=template&id=da93473e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/search.vue?vue&type=template&id=da93473e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_da93473e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_da93473e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/simple-crud.vue":
/*!*******************************************!*\
  !*** ./src/js/components/simple-crud.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_crud_vue_vue_type_template_id_dff165e0_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-crud.vue?vue&type=template&id=dff165e0&lang=html& */ "./src/js/components/simple-crud.vue?vue&type=template&id=dff165e0&lang=html&");
/* harmony import */ var _simple_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-crud.vue?vue&type=script&lang=js& */ "./src/js/components/simple-crud.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _simple_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _simple_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _simple_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _simple_crud_vue_vue_type_template_id_dff165e0_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _simple_crud_vue_vue_type_template_id_dff165e0_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\simple-crud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/simple-crud.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/js/components/simple-crud.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_simple_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./simple-crud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/simple-crud.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_simple_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_simple_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_simple_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_simple_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_simple_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/simple-crud.vue?vue&type=template&id=dff165e0&lang=html&":
/*!************************************************************************************!*\
  !*** ./src/js/components/simple-crud.vue?vue&type=template&id=dff165e0&lang=html& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_crud_vue_vue_type_template_id_dff165e0_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./simple-crud.vue?vue&type=template&id=dff165e0&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/simple-crud.vue?vue&type=template&id=dff165e0&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_crud_vue_vue_type_template_id_dff165e0_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_crud_vue_vue_type_template_id_dff165e0_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/tab.vue":
/*!***********************************!*\
  !*** ./src/js/components/tab.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab_vue_vue_type_template_id_303b232c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.vue?vue&type=template&id=303b232c& */ "./src/js/components/tab.vue?vue&type=template&id=303b232c&");
/* harmony import */ var _tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.vue?vue&type=script&lang=js& */ "./src/js/components/tab.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tab_vue_vue_type_template_id_303b232c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tab_vue_vue_type_template_id_303b232c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\tab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/tab.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/js/components/tab.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./tab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/tab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/tab.vue?vue&type=template&id=303b232c&":
/*!******************************************************************!*\
  !*** ./src/js/components/tab.vue?vue&type=template&id=303b232c& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_vue_vue_type_template_id_303b232c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tab.vue?vue&type=template&id=303b232c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/tab.vue?vue&type=template&id=303b232c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_vue_vue_type_template_id_303b232c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_vue_vue_type_template_id_303b232c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/tabs.vue":
/*!************************************!*\
  !*** ./src/js/components/tabs.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_vue_vue_type_template_id_4a563912___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.vue?vue&type=template&id=4a563912& */ "./src/js/components/tabs.vue?vue&type=template&id=4a563912&");
/* harmony import */ var _tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.vue?vue&type=script&lang=js& */ "./src/js/components/tabs.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabs_vue_vue_type_template_id_4a563912___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabs_vue_vue_type_template_id_4a563912___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/tabs.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/js/components/tabs.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/tabs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/tabs.vue?vue&type=template&id=4a563912&":
/*!*******************************************************************!*\
  !*** ./src/js/components/tabs.vue?vue&type=template&id=4a563912& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_template_id_4a563912___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tabs.vue?vue&type=template&id=4a563912& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/tabs.vue?vue&type=template&id=4a563912&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_template_id_4a563912___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_template_id_4a563912___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/toast.vue":
/*!*************************************!*\
  !*** ./src/js/components/toast.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toast_vue_vue_type_template_id_06290604_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.vue?vue&type=template&id=06290604&lang=html& */ "./src/js/components/toast.vue?vue&type=template&id=06290604&lang=html&");
/* harmony import */ var _toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.vue?vue&type=script&lang=js& */ "./src/js/components/toast.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _toast_vue_vue_type_template_id_06290604_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _toast_vue_vue_type_template_id_06290604_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\toast.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/toast.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/js/components/toast.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./toast.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/toast.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/toast.vue?vue&type=template&id=06290604&lang=html&":
/*!******************************************************************************!*\
  !*** ./src/js/components/toast.vue?vue&type=template&id=06290604&lang=html& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_template_id_06290604_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./toast.vue?vue&type=template&id=06290604&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/toast.vue?vue&type=template&id=06290604&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_template_id_06290604_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_template_id_06290604_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/tree-item.vue":
/*!*****************************************!*\
  !*** ./src/js/components/tree-item.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_item_vue_vue_type_template_id_6677548e_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-item.vue?vue&type=template&id=6677548e&lang=html& */ "./src/js/components/tree-item.vue?vue&type=template&id=6677548e&lang=html&");
/* harmony import */ var _tree_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-item.vue?vue&type=script&lang=js& */ "./src/js/components/tree-item.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tree_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tree_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tree_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tree_item_vue_vue_type_template_id_6677548e_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tree_item_vue_vue_type_template_id_6677548e_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\tree-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/tree-item.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/js/components/tree-item.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./tree-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/tree-item.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/tree-item.vue?vue&type=template&id=6677548e&lang=html&":
/*!**********************************************************************************!*\
  !*** ./src/js/components/tree-item.vue?vue&type=template&id=6677548e&lang=html& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_item_vue_vue_type_template_id_6677548e_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tree-item.vue?vue&type=template&id=6677548e&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/tree-item.vue?vue&type=template&id=6677548e&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_item_vue_vue_type_template_id_6677548e_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_item_vue_vue_type_template_id_6677548e_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/tree.vue":
/*!************************************!*\
  !*** ./src/js/components/tree.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_vue_vue_type_template_id_62781397_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.vue?vue&type=template&id=62781397&lang=html& */ "./src/js/components/tree.vue?vue&type=template&id=62781397&lang=html&");
/* harmony import */ var _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree.vue?vue&type=script&lang=js& */ "./src/js/components/tree.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tree_vue_vue_type_template_id_62781397_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tree_vue_vue_type_template_id_62781397_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\js\\components\\tree.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/tree.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/js/components/tree.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./tree.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/js/components/tree.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/tree.vue?vue&type=template&id=62781397&lang=html&":
/*!*****************************************************************************!*\
  !*** ./src/js/components/tree.vue?vue&type=template&id=62781397&lang=html& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_template_id_62781397_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tree.vue?vue&type=template&id=62781397&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/tree.vue?vue&type=template&id=62781397&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_template_id_62781397_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_template_id_62781397_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/directives/accordion.js":
/*!****************************************!*\
  !*** ./src/js/directives/accordion.js ***!
  \****************************************/
/*! no static exports found */
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

/***/ "./src/js/directives/activator.js":
/*!****************************************!*\
  !*** ./src/js/directives/activator.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(/*! ../lib/util */ "./src/js/lib/util.js");

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

/***/ "./src/js/directives/clipboard.js":
/*!****************************************!*\
  !*** ./src/js/directives/clipboard.js ***!
  \****************************************/
/*! no static exports found */
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


var _clipboard = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");

var _clipboard2 = _interopRequireDefault(_clipboard);

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

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
      vnode.context.$emit(eventName, event);

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
    if (binding.value.text) {
      options.text = function () {
        return binding.value.text;
      };
    }
    if (binding.value.target) {
      options.target = function () {
        return (0, _elementUtil.getElement)(binding.value.target);
      };
    }
  }
  return options;
}

/***/ }),

/***/ "./src/js/directives/collapse.js":
/*!***************************************!*\
  !*** ./src/js/directives/collapse.js ***!
  \***************************************/
/*! no static exports found */
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

/***/ "./src/js/directives/confirm.js":
/*!**************************************!*\
  !*** ./src/js/directives/confirm.js ***!
  \**************************************/
/*! no static exports found */
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

/***/ "./src/js/directives/focus.js":
/*!************************************!*\
  !*** ./src/js/directives/focus.js ***!
  \************************************/
/*! no static exports found */
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

/***/ "./src/js/directives/index.js":
/*!************************************!*\
  !*** ./src/js/directives/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _accordion = __webpack_require__(/*! ./accordion */ "./src/js/directives/accordion.js");

Object.defineProperty(exports, 'Accordion', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_accordion).default;
  }
});

var _activator = __webpack_require__(/*! ./activator */ "./src/js/directives/activator.js");

Object.defineProperty(exports, 'Activator', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_activator).default;
  }
});

var _clipboard = __webpack_require__(/*! ./clipboard */ "./src/js/directives/clipboard.js");

Object.defineProperty(exports, 'Clipboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_clipboard).default;
  }
});

var _collapse = __webpack_require__(/*! ./collapse */ "./src/js/directives/collapse.js");

Object.defineProperty(exports, 'Collapse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_collapse).default;
  }
});

var _confirm = __webpack_require__(/*! ./confirm */ "./src/js/directives/confirm.js");

Object.defineProperty(exports, 'Confirm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_confirm).default;
  }
});

var _focus = __webpack_require__(/*! ./focus */ "./src/js/directives/focus.js");

Object.defineProperty(exports, 'Focus', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_focus).default;
  }
});

var _modal = __webpack_require__(/*! ./modal */ "./src/js/directives/modal.js");

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _ripple = __webpack_require__(/*! ./ripple */ "./src/js/directives/ripple.js");

Object.defineProperty(exports, 'Ripple', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ripple).default;
  }
});

var _scrollspy = __webpack_require__(/*! ./scrollspy */ "./src/js/directives/scrollspy.js");

Object.defineProperty(exports, 'Scrollspy', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollspy).default;
  }
});

var _setValue = __webpack_require__(/*! ./set-value */ "./src/js/directives/set-value.js");

Object.defineProperty(exports, 'SetValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_setValue).default;
  }
});

var _tooltip = __webpack_require__(/*! ./tooltip */ "./src/js/directives/tooltip.js");

Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltip).default;
  }
});

var _trigger = __webpack_require__(/*! ./trigger */ "./src/js/directives/trigger.js");

Object.defineProperty(exports, 'Trigger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_trigger).default;
  }
});

var _wrap = __webpack_require__(/*! ./wrap */ "./src/js/directives/wrap.js");

Object.defineProperty(exports, 'Wrap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrap).default;
  }
});

var _outer = __webpack_require__(/*! ./outer */ "./src/js/directives/outer.js");

Object.defineProperty(exports, 'Outer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_outer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/js/directives/modal.js":
/*!************************************!*\
  !*** ./src/js/directives/modal.js ***!
  \************************************/
/*! no static exports found */
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

/***/ "./src/js/directives/outer.js":
/*!************************************!*\
  !*** ./src/js/directives/outer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

/*
  v-outer.{modifiers}="{value}"

  modifiers: event type.
  value: options object or event listener function.

  interface OuterOptions {
    root: HTMLElement|window; // default = document.documentElement
    target: HTMLElement; // default = el
    events: string[];
    listener: (event: Event) => void;
  }
*/
exports.default = {
  /**
   * Bind directive and element.
   *
   * @param {HTMLElement} el
   * @param {Vue.VNodeDirective} binding
   */
  inserted: function inserted(el, binding) {
    var options = resolveOptions(el, binding);
    var root = options.root,
        events = options.events,
        target = options.target,
        listener = options.listener;

    events.forEach(function (type) {
      (0, _elementUtil.addOuterListener)(root, target, type, listener);
    });
  }
}; /// <reference path="../vue.d.ts" />

var DefaultOptions = {
  /** @type {HTMLElement|Window} */
  root: document.documentElement,
  /** @type {HTMLElement} */
  target: null,
  /** @type {string[]} */
  events: [],
  /** @type {(event: Event) => void} */
  listener: null
};

/**
 * Resolve options.
 *
 * @param {HTMLElement} el
 * @param {Vue.VNodeDirective} binding
 * @returns {Options}
 */
function resolveOptions(el, binding) {
  var options = Object.assign(DefaultOptions, { target: el });
  if (typeof binding.value === 'function') {
    options.listener = binding.value;
  } else {
    options = Object.assign(options, binding.value);
  }
  if (binding.modifiers) {
    options.events = Object.keys(binding.modifiers);
  }
  return options;
}

/***/ }),

/***/ "./src/js/directives/ripple.js":
/*!*************************************!*\
  !*** ./src/js/directives/ripple.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mooColor = __webpack_require__(/*! moo-color */ "./node_modules/moo-color/dist/moo-color.js");

var _mooColor2 = _interopRequireDefault(_mooColor);

var _elementMeasurer = __webpack_require__(/*! element-measurer */ "./node_modules/element-measurer/dist/element-measurer.js");

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
    var color = new _mooColor2.default(style.backgroundColor);
    return color.isLight ? '#000' : '#fff';
  };

  return opt.color ? opt.color : mod.light ? '#fff' : mod.dark ? '#000' : getContrastColor(el);
}

/***/ }),

/***/ "./src/js/directives/scrollspy.js":
/*!****************************************!*\
  !*** ./src/js/directives/scrollspy.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollspy = __webpack_require__(/*! ../lib/classes/scrollspy */ "./src/js/lib/classes/scrollspy.js");

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
      vnode.context.$emit('scrollspy-activate', item);
      if (binding.value && typeof binding.value.onActivate === 'function') {
        binding.value.onActivate(item);
      }
    };

    var options = Object.assign({}, binding.value, { onActivate: onActivate });
    var scrollspy = new _scrollspy2.default(el, options);

    vnode.context.$on('scrollspy-refresh', function () {
      return scrollspy.refresh();
    });
  }
};

/***/ }),

/***/ "./src/js/directives/set-value.js":
/*!****************************************!*\
  !*** ./src/js/directives/set-value.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(/*! ../lib/util */ "./src/js/lib/util.js");

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

/***/ "./src/js/directives/tooltip.js":
/*!**************************************!*\
  !*** ./src/js/directives/tooltip.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _tooltip = __webpack_require__(/*! tooltip.js */ "./node_modules/tooltip.js/dist/esm/tooltip.js");

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

/***/ "./src/js/directives/trigger.js":
/*!**************************************!*\
  !*** ./src/js/directives/trigger.js ***!
  \**************************************/
/*! no static exports found */
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

/***/ "./src/js/directives/wrap.js":
/*!***********************************!*\
  !*** ./src/js/directives/wrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

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

    (0, _elementUtil.wrap)(el, className, tagName);
  }
};

/***/ }),

/***/ "./src/js/lib/classes/scrollspy.js":
/*!*****************************************!*\
  !*** ./src/js/lib/classes/scrollspy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

var _elementMeasurer = __webpack_require__(/*! element-measurer */ "./node_modules/element-measurer/dist/element-measurer.js");

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
    this._linksContainerElement = (0, _elementUtil.getElement)(elm);
    this._items = [];
    this._currentActive = null;
    this._scrollHeight = 0;
    this._scrollElement = (0, _elementUtil.getElement)(this.options.scrollElement);
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

      var links = (0, _elementUtil.getElementsAsArray)(this.options.linkSelector, this._linksContainerElement).filter(function (elm) {
        return elm.hash;
      });
      this._items = [];
      this._scrollHeight = this._scrollElementSize.scrollHeight;

      links.forEach(function (link) {
        var elm = (0, _elementUtil.getElement)(link.hash);
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
        return (0, _elementUtil.findAncestor)(link, this.options.activeTarget);
      }
    }
  }]);

  return Scrollspy;
}();

exports.default = Scrollspy;

/***/ }),

/***/ "./src/js/lib/methods/icon.js":
/*!************************************!*\
  !*** ./src/js/lib/methods/icon.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSvg = addSvg;
exports.getSvgByName = getSvgByName;
exports.makeIcon = makeIcon;
exports.makeIconHtml = makeIconHtml;

var _cakeCase = __webpack_require__(/*! cake-case */ "./node_modules/cake-case/dist/module/cake-case.js");

var _svg = __webpack_require__(/*! ../../../svg */ "./src/svg/index.js");

var Svg = _interopRequireWildcard(_svg);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Add custom svg-icon.
 *
 * @param {string} name
 * @param {string} value
 */
function addSvg(name, value) {
  Svg[(0, _cakeCase.camel)(name)] = value;
}

/**
 * Get svg string by name.
 *
 * @param {string} name the name of svg-icon. e.g. arrow-down or arrowDown
 * @returns {string}
 */
function getSvgByName(name) {
  return Svg[(0, _cakeCase.camel)(name)] || '';
}

/**
 * Make icon element by svg-icon name.
 *
 * @param {string} name
 * @returns {HTMLElement}
 */
function makeIcon(name) {
  var i = document.createElement('i');
  i.classList.add('moss-icon');
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
  return '<i class="moss-icon">' + getSvgByName(name) + '</i>';
}

/***/ }),

/***/ "./src/js/lib/methods/scrollTo.js":
/*!****************************************!*\
  !*** ./src/js/lib/methods/scrollTo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /// <reference path="./scrollTo.d.ts" />

exports.default = scrollTo;

var _elementMeasurer = __webpack_require__(/*! element-measurer */ "./node_modules/element-measurer/dist/element-measurer.js");

var _elementMeasurer2 = _interopRequireDefault(_elementMeasurer);

var _transitionTiming = __webpack_require__(/*! transition-timing */ "./node_modules/transition-timing/dist/transition-timing.min.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Scroll to destination with transition.
 *
 * @export
 * @param {ScrollTo.DestType} dest
 * @param {ScrollTo.ScrollToOptions} [options={}]
 * @returns {Promise<void>}
 */
function scrollTo(dest) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$duration = _ref.duration,
      duration = _ref$duration === undefined ? 300 : _ref$duration,
      _ref$easing = _ref.easing,
      easing = _ref$easing === undefined ? 'linear' : _ref$easing,
      _ref$callback = _ref.callback,
      callback = _ref$callback === undefined ? null : _ref$callback,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? document.documentElement : _ref$base;

  return new Promise(function (resolve, reject) {
    try {
      var baseSize = new _elementMeasurer2.default(base);
      var timeFn = (0, _transitionTiming.easing)(easing);
      var startTop = baseSize.scrollTop;
      var startLeft = baseSize.scrollLeft;
      var startTime = performance.now();

      var _getScrollDest = getScrollDest(dest, baseSize),
          _getScrollDest2 = _slicedToArray(_getScrollDest, 2),
          scrollTopDest = _getScrollDest2[0],
          scrollLeftDest = _getScrollDest2[1];

      if (duration === 0 || 'requestAnimationFrame' in window === false) {
        baseSize.scrollTop = scrollTopDest;
        baseSize.scrollLeft = scrollLeftDest;
        if (typeof callback === 'function') callback();
        resolve();
        return;
      }

      var scroll = function scroll(now) {
        var timeRatio = Math.min(1, (now - startTime) / duration);
        var outputRatio = timeFn(timeRatio);

        baseSize.scrollTop = Math.ceil(outputRatio * (scrollTopDest - startTop) + startTop);
        baseSize.scrollLeft = Math.ceil(outputRatio * (scrollLeftDest - startLeft) + startLeft);

        if (baseSize.scrollTop === scrollTopDest && baseSize.scrollLeft === scrollLeftDest) {
          if (typeof callback === 'function') callback();
          resolve();
          return;
        }

        requestAnimationFrame(scroll);
      };

      scroll(performance.now());
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Get scroll destination.
 *
 * @param {ScrollTo.DestType} dest
 * @param {ElementMeasurer} baseSize
 * @returns {[number, number]} scrollTop and scrollLeft.
 */
function getScrollDest(dest, baseSize) {
  var offsetTop = 0;
  var offsetLeft = 0;

  if (typeof dest === 'number') {
    offsetTop = dest;
  } else if (Array.isArray(dest)) {
    var _dest = _slicedToArray(dest, 2);

    offsetTop = _dest[0];
    offsetLeft = _dest[1];
  } else {
    var elmSize = new _elementMeasurer2.default(dest);
    offsetTop = elmSize.target.offsetTop;
    offsetLeft = elmSize.target.offsetLeft;
  }
  var scrollTopDest = baseSize.scrollHeight - offsetTop < baseSize.clientHeight ? baseSize.scrollHeight - baseSize.clientHeight : offsetTop;
  var scrollLeftDest = baseSize.scrollWidth - offsetLeft < baseSize.clientWidth ? baseSize.scrollWidth - baseSize.clientWidth : offsetLeft;
  return [scrollTopDest, scrollLeftDest].map(function (x) {
    return Math.max(Math.round(x), 0);
  });
}

/***/ }),

/***/ "./src/js/lib/util.js":
/*!****************************!*\
  !*** ./src/js/lib/util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _scrollTo = __webpack_require__(/*! ./methods/scrollTo */ "./src/js/lib/methods/scrollTo.js");

Object.defineProperty(exports, 'scrollTo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollTo).default;
  }
});

var _icon = __webpack_require__(/*! ./methods/icon */ "./src/js/lib/methods/icon.js");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts current `location.search` to object.
 *
 * @return {object|null}
 */
function locationSearchToObject() {
  return searchToObject(window.location.search);
}

/**
 * Converts `HTMLAnchorElement.search` to object.
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
 * Returns true if 'big' contains 'small'.
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

/***/ }),

/***/ "./src/js/mixins/node-util.js":
/*!************************************!*\
  !*** ./src/js/mixins/node-util.js ***!
  \************************************/
/*! no static exports found */
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
        if (node.elm) {
          node.elm.parentNode.removeChild(node.elm);
        } else {
          node.text = '';
        }
      });
    }
  }
};

/***/ }),

/***/ "./src/js/moss.js":
/*!************************!*\
  !*** ./src/js/moss.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Util = exports.Svg = exports.ElementUtil = exports.ElementMeasurer = exports.Directives = exports.Components = exports.Color = exports.Case = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * moss-ui - The front-end UI framework with Vue.js and SCSS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @version v0.7.2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @link https://github.com/archco/moss-ui
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _cakeCase = __webpack_require__(/*! cake-case */ "./node_modules/cake-case/dist/module/cake-case.js");

var Case = _interopRequireWildcard(_cakeCase);

var _elementUtil = __webpack_require__(/*! element-util */ "./node_modules/element-util/dist/element-util.js");

var ElementUtil = _interopRequireWildcard(_elementUtil);

var _elementMeasurer = __webpack_require__(/*! element-measurer */ "./node_modules/element-measurer/dist/element-measurer.js");

var _elementMeasurer2 = _interopRequireDefault(_elementMeasurer);

var _mooColor = __webpack_require__(/*! moo-color */ "./node_modules/moo-color/dist/moo-color.js");

var _mooColor2 = _interopRequireDefault(_mooColor);

var _util = __webpack_require__(/*! ./lib/util */ "./src/js/lib/util.js");

var Util = _interopRequireWildcard(_util);

var _components = __webpack_require__(/*! ./components */ "./src/js/components/index.js");

var Components = _interopRequireWildcard(_components);

var _directives = __webpack_require__(/*! ./directives */ "./src/js/directives/index.js");

var Directives = _interopRequireWildcard(_directives);

var _svg = __webpack_require__(/*! ../svg */ "./src/svg/index.js");

var Svg = _interopRequireWildcard(_svg);

var _version = __webpack_require__(/*! ../../task/version */ "./task/version.js");

var _version2 = _interopRequireDefault(_version);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var DefaultOptions = {
  enableGlobalComponents: true
};

var lib = {
  Case: Case,
  Color: _mooColor2.default,
  ElementMeasurer: _elementMeasurer2.default,
  ElementUtil: ElementUtil,
  Svg: Svg,
  Util: Util
};

function addMossObject(Vue) {
  var Moss = {
    version: _version2.default,
    lib: lib,
    addSvg: Util.addSvg
  };
  window.Moss = Vue.Moss = Vue.prototype.$moss = Moss;
}

exports.Case = Case;
exports.Color = _mooColor2.default;
exports.Components = Components;
exports.Directives = Directives;
exports.ElementMeasurer = _elementMeasurer2.default;
exports.ElementUtil = ElementUtil;
exports.Svg = Svg;
exports.Util = Util;
exports.default = {
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
        for (var _iterator = Object.entries(Components)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = _slicedToArray(_ref, 2);

          var key = _ref2[0];
          var val = _ref2[1];

          Vue.component(Case.kebab(key), val);
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
      for (var _iterator2 = Object.entries(Directives)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _ref3 = _step2.value;

        var _ref4 = _slicedToArray(_ref3, 2);

        var _key = _ref4[0];
        var _val = _ref4[1];

        Vue.directive(Case.kebab(_key), _val);
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

/***/ }),

/***/ "./src/scss/moss.scss":
/*!****************************!*\
  !*** ./src/scss/moss.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/svg/arrow-down.svg":
/*!********************************!*\
  !*** ./src/svg/arrow-down.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"arrow-down\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__2-DWHFj__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><polyline class=\"__2-DWHFj__cls-1 \" points=\"13.66 5.17 8 10.83 2.34 5.17\"></polyline></svg>"

/***/ }),

/***/ "./src/svg/arrow-left.svg":
/*!********************************!*\
  !*** ./src/svg/arrow-left.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"arrow-left\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__1EMiEkc__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><polyline class=\"__1EMiEkc__cls-1 \" points=\"10.83 13.66 5.17 8 10.83 2.34\"></polyline></svg>"

/***/ }),

/***/ "./src/svg/arrow-right.svg":
/*!*********************************!*\
  !*** ./src/svg/arrow-right.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"arrow-right\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__3_fbqAA__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><polyline class=\"__3_fbqAA__cls-1 \" points=\"5.17 2.34 10.83 8 5.17 13.66\"></polyline></svg>"

/***/ }),

/***/ "./src/svg/arrow-up.svg":
/*!******************************!*\
  !*** ./src/svg/arrow-up.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"arrow-up\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__l-ohweN__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><polyline class=\"__l-ohweN__cls-1 \" points=\"2.34 10.83 8 5.17 13.66 10.83\"></polyline></svg>"

/***/ }),

/***/ "./src/svg/caret-down.svg":
/*!********************************!*\
  !*** ./src/svg/caret-down.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"caret-down\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__3ptanXG__cls-1{fill:currentColor;}</style></defs><path class=\"__3ptanXG__cls-1 \" d=\"M7.5,10.88a.53.53,0,0,0,1,0l3.33-5.77c.27-.48,0-.87-.5-.87H4.67c-.55,0-.78.39-.5.87Z\"></path></svg>"

/***/ }),

/***/ "./src/svg/caret-left.svg":
/*!********************************!*\
  !*** ./src/svg/caret-left.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"caret-left\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__KS7ZD-k__cls-1{fill:currentColor;}</style></defs><path class=\"__KS7ZD-k__cls-1 \" d=\"M5.12,7.5a.53.53,0,0,0,0,1l5.77,3.33c.48.27.87,0,.87-.5V4.67c0-.55-.39-.78-.87-.5Z\"></path></svg>"

/***/ }),

/***/ "./src/svg/caret-right.svg":
/*!*********************************!*\
  !*** ./src/svg/caret-right.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"caret-right\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__353YwR8__cls-1{fill:currentColor;}</style></defs><path class=\"__353YwR8__cls-1 \" d=\"M10.88,8.5a.53.53,0,0,0,0-1L5.12,4.17c-.48-.28-.87,0-.87.5v6.66c0,.55.39.77.87.5Z\"></path></svg>"

/***/ }),

/***/ "./src/svg/caret-up.svg":
/*!******************************!*\
  !*** ./src/svg/caret-up.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"caret-up\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__Z94_uQ4__cls-1{fill:currentColor;}</style></defs><path class=\"__Z94_uQ4__cls-1 \" d=\"M8.5,5.12a.53.53,0,0,0-1,0L4.17,10.88c-.28.48,0,.87.5.87h6.66c.55,0,.77-.39.5-.87Z\"></path></svg>"

/***/ }),

/***/ "./src/svg/check.svg":
/*!***************************!*\
  !*** ./src/svg/check.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"check\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__asdzD7l__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><polyline class=\"__asdzD7l__cls-1 \" points=\"3 8 6.33 11.5 13 4.5\"></polyline></svg>"

/***/ }),

/***/ "./src/svg/close.svg":
/*!***************************!*\
  !*** ./src/svg/close.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"close\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__bTDb5ds__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class=\"__bTDb5ds__cls-1 \" d=\"M3.76 3.76 L12.24 12.24 M12.24 3.76 L3.76 12.24\"></path></svg>"

/***/ }),

/***/ "./src/svg/ellipsis-horizontal.svg":
/*!*****************************************!*\
  !*** ./src/svg/ellipsis-horizontal.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"ellipsis-horizontal\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__1j5HEso__a{fill:currentColor;}</style></defs><circle class=\"__1j5HEso__a \" cx=\"8\" cy=\"8\" r=\"1\"></circle><circle class=\"__1j5HEso__a \" cx=\"11.5\" cy=\"8\" r=\"1\"></circle><circle class=\"__1j5HEso__a \" cx=\"4.5\" cy=\"8\" r=\"1\"></circle></svg>"

/***/ }),

/***/ "./src/svg/ellipsis-vertical.svg":
/*!***************************************!*\
  !*** ./src/svg/ellipsis-vertical.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"ellipsis-vertical\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__Uo3Ph8H__a{fill:currentColor;}</style></defs><circle class=\"__Uo3Ph8H__a \" cx=\"8\" cy=\"8\" r=\"1\"></circle><circle class=\"__Uo3Ph8H__a \" cx=\"8\" cy=\"11.5\" r=\"1\"></circle><circle class=\"__Uo3Ph8H__a \" cx=\"8\" cy=\"4.5\" r=\"1\"></circle></svg>"

/***/ }),

/***/ "./src/svg/index.js":
/*!**************************!*\
  !*** ./src/svg/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrowLeft = __webpack_require__(/*! ./arrow-left.svg */ "./src/svg/arrow-left.svg");

Object.defineProperty(exports, 'arrowLeft', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowLeft).default;
  }
});

var _arrowRight = __webpack_require__(/*! ./arrow-right.svg */ "./src/svg/arrow-right.svg");

Object.defineProperty(exports, 'arrowRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowRight).default;
  }
});

var _arrowUp = __webpack_require__(/*! ./arrow-up.svg */ "./src/svg/arrow-up.svg");

Object.defineProperty(exports, 'arrowUp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowUp).default;
  }
});

var _arrowDown = __webpack_require__(/*! ./arrow-down.svg */ "./src/svg/arrow-down.svg");

Object.defineProperty(exports, 'arrowDown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowDown).default;
  }
});

var _caretUp = __webpack_require__(/*! ./caret-up.svg */ "./src/svg/caret-up.svg");

Object.defineProperty(exports, 'caretUp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_caretUp).default;
  }
});

var _caretDown = __webpack_require__(/*! ./caret-down.svg */ "./src/svg/caret-down.svg");

Object.defineProperty(exports, 'caretDown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_caretDown).default;
  }
});

var _caretLeft = __webpack_require__(/*! ./caret-left.svg */ "./src/svg/caret-left.svg");

Object.defineProperty(exports, 'caretLeft', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_caretLeft).default;
  }
});

var _caretRight = __webpack_require__(/*! ./caret-right.svg */ "./src/svg/caret-right.svg");

Object.defineProperty(exports, 'caretRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_caretRight).default;
  }
});

var _close = __webpack_require__(/*! ./close.svg */ "./src/svg/close.svg");

Object.defineProperty(exports, 'close', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_close).default;
  }
});

var _check = __webpack_require__(/*! ./check.svg */ "./src/svg/check.svg");

Object.defineProperty(exports, 'check', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_check).default;
  }
});

var _search = __webpack_require__(/*! ./search.svg */ "./src/svg/search.svg");

Object.defineProperty(exports, 'search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_search).default;
  }
});

var _menu = __webpack_require__(/*! ./menu.svg */ "./src/svg/menu.svg");

Object.defineProperty(exports, 'menu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_menu).default;
  }
});

var _ellipsisVertical = __webpack_require__(/*! ./ellipsis-vertical.svg */ "./src/svg/ellipsis-vertical.svg");

Object.defineProperty(exports, 'ellipsisVertical', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ellipsisVertical).default;
  }
});

var _ellipsisHorizontal = __webpack_require__(/*! ./ellipsis-horizontal.svg */ "./src/svg/ellipsis-horizontal.svg");

Object.defineProperty(exports, 'ellipsisHorizontal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ellipsisHorizontal).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/svg/menu.svg":
/*!**************************!*\
  !*** ./src/svg/menu.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"menu\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__E2JdyHf__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><line class=\"__E2JdyHf__a \" x1=\"4\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line class=\"__E2JdyHf__a \" x1=\"4\" y1=\"11.5\" x2=\"12\" y2=\"11.5\"></line><line class=\"__E2JdyHf__a \" x1=\"4\" y1=\"4.5\" x2=\"12\" y2=\"4.5\"></line></svg>"

/***/ }),

/***/ "./src/svg/search.svg":
/*!****************************!*\
  !*** ./src/svg/search.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"search\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><defs><style>.__2yZqk1a__cls-1,.__2yZqk1a__cls-2{fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:1.5px;}.__2yZqk1a__cls-2{stroke-linecap:round;}</style></defs><circle class=\"__2yZqk1a__cls-1 \" cx=\"6.49\" cy=\"6.49\" r=\"4\"></circle><line class=\"__2yZqk1a__cls-2 \" x1=\"13.51\" y1=\"13.51\" x2=\"9.97\" y2=\"9.97\"></line></svg>"

/***/ }),

/***/ "./task/version.js":
/*!*************************!*\
  !*** ./task/version.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '0.7.2';

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/scss/moss.scss ./src/js/moss.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scss/moss.scss */"./src/scss/moss.scss");
module.exports = __webpack_require__(/*! ./src/js/moss.js */"./src/js/moss.js");


/***/ })

/******/ });
});
//# sourceMappingURL=moss.js.map