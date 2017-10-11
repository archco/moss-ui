'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elementUtil = require('element-util');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _elementMeasurer = require('element-measurer');

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
    this._scrollElmentSize = new _elementMeasurer2.default(this._scrollElement);
    this._isDocument = this._scrollElmentSize.isDocumentTarget();

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

      var base = this._isDocument ? window : this._scrollElement;
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
      this._scrollHeight = this._scrollElmentSize.scrollHeight;

      links.forEach(function (link) {
        var elm = _elementUtil2.default.getElement(link.hash);
        if (!elm) return;

        var item = {
          elm: elm,
          link: link,
          offsetTop: _this2._getOffset(elm)
        };
        _this2._items.push(item);
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

      var scrollTop = this._scrollElmentSize.scrollTop + this.options.offset;
      var scrollHeight = this._scrollElmentSize.scrollHeight;
      var maxScroll = this._scrollElmentSize.maxScrollTop + this.options.offset;

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
      var activeTarget = this._getActiveTarget(item.link);
      this._currentActive = item;
      activeTarget.classList.add(this.options.activeClass);
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
  }, {
    key: '_getOffset',
    value: function _getOffset(elm) {
      var isLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var val = 0;
      var offset = isLeft ? 'offsetLeft' : 'offsetTop';

      do {
        val += elm[offset];
        elm = elm.offsetParent;
      } while (elm && elm !== this._scrollElement);

      return val;
    }
  }]);

  return Scrollspy;
}();

exports.default = Scrollspy;