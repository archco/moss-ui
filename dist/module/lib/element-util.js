'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  ElementUtil
*************************************************************/
var ClassName = {
  SHOW: 'display-show',
  HIDE: 'display-hide'
};
var DataSet = {
  SORT_DIRECTION: 'sortDirection',
  SORT_VALUE: 'sortValue',
  SORT_TYPE: 'sortType'
};

var ElementUtil = function () {
  function ElementUtil() {
    _classCallCheck(this, ElementUtil);
  }

  _createClass(ElementUtil, null, [{
    key: 'getElement',

    /**
     * getElement
     *
     * @param  {String|Element|NodeList} selector
     * @param  {Element} [ base = document ]
     * @return {Element}
     */
    value: function getElement(selector) {
      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      if (typeof selector === 'string') {
        return base.querySelector(selector);
      } else if (selector instanceof Element) {
        return selector;
      } else if (selector instanceof NodeList) {
        return selector[0];
      } else {
        throw new TypeError('selector is must be String or Element');
      }
    }

    /**
     * getElements
     *
     * @param  {String|Element|NodeList} selector
     * @param  {Element} [ base = document ]
     * @return {NodeList}
     */

  }, {
    key: 'getElements',
    value: function getElements(selector) {
      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      if (typeof selector === 'string') {
        return base.querySelectorAll(selector);
      } else if (selector instanceof Element) {
        return this.toNodeList(selector);
      } else if (selector instanceof NodeList) {
        return selector;
      } else {
        throw new TypeError('selector is must be String or NodeList');
      }
    }

    /**
     * Element to NodeList
     *
     * @param  {Element} element
     * @return {NodeList}
     */

  }, {
    key: 'toNodeList',
    value: function toNodeList(element) {
      element.setAttribute('toNodeList', '');
      var nodelist = document.querySelectorAll('[toNodeList]');
      element.removeAttribute('toNodeList');
      return nodelist;
    }

    /**
     * Converting a NodeList to an Array.
     *
     * @param  {NodeList} nodelist
     * @return {Array}
     */

  }, {
    key: 'nodeListToArray',
    value: function nodeListToArray(nodelist) {
      return Array.prototype.slice.call(nodelist);
    }

    /**
     * add event listener on selector.
     *
     * @param {String}   selector
     * @param {String}   type  event type
     * @param {Function} listener
     * @param {Boolean}  [ useCapture = false ]
     */

  }, {
    key: 'addListener',
    value: function addListener(selector, type, listener) {
      var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var elements = this.getElements(selector);
      if (!elements.length) return null;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;

          element.addEventListener(type, listener, useCapture);
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

      return elements.length;
    }

    /**
     * find ancestor by selector.
     *
     * @param  {Element|String} element or querySelector
     * @param  {String}  selector
     * @return {Element|null}
     */

  }, {
    key: 'findAncestor',
    value: function findAncestor(element, selector) {
      element = this.getElement(element);
      do {
        if (element == this.getElement('html')) return null;
        element = element.parentElement;
      } while (!element.matches(selector));
      return element;
    }

    /**
     * wrap elements by wrapper, one by one.
     *
     * @param  {String} selector
     * @param  {String} className wrapper's class name.
     * @param  {String} [ tagName = 'DIV' ] wrapper's tag name.
     * @return {void}
     */

  }, {
    key: 'wrap',
    value: function wrap(selector, className) {
      var tagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DIV';

      var elements = this.getElements(selector);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var elm = _step2.value;

          var parent = elm.parentNode;
          var sibling = elm.nextSibling;
          var div = document.createElement(tagName);
          div.classList.add(className);

          div.appendChild(elm);

          if (sibling) {
            parent.insertBefore(div, sibling);
          } else {
            parent.appendChild(div);
          }
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

    /**
     * wrap all elements inside to wrapper.
     *
     * @param  {String} selector
     * @param  {String} className wrapper's class name.
     * @param  {String} [ tagName = 'DIV' ] wrapper's tag name.
     * @return {void}
     */

  }, {
    key: 'wrapAll',
    value: function wrapAll(selector, className) {
      var tagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DIV';

      var elements = this.getElements(selector);
      var parent = elements[0].parentNode;
      var sibling = elements[0].nextSibling;
      var div = document.createElement(tagName);
      div.classList.add(className);

      elements.forEach(function (elm) {
        return div.appendChild(elm);
      });

      if (sibling) {
        parent.insertBefore(div, sibling);
      } else {
        parent.appendChild(div);
      }
    }

    /**
     * submitConfirm
     *
     * @param  {String|Element|NodeList} selector
     * @param  {String} [ message = 'Are you confirm?' ]
     * @return {void}
     */

  }, {
    key: 'submitConfirm',
    value: function submitConfirm(selector) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you confirm?';

      this.addListener(selector, 'submit', function (event) {
        if (!confirm(message)) event.preventDefault();
      }, true); // use capture.
    }

    /**
     * addClass
     *
     * @param  {String} selector
     * @param  {String} className
     * @return {void}
     */

  }, {
    key: 'addClass',
    value: function addClass(selector, className) {
      var elm = this.getElement(selector);
      elm.classList.add(className);
    }

    /**
     * removeClass
     *
     * @param  {String} selector
     * @param  {String} className
     * @return {void}
     */

  }, {
    key: 'removeClass',
    value: function removeClass(selector, className) {
      var elm = this.getElement(selector);
      elm.classList.remove(className);
    }

    /**
     * toggleClass
     *
     * @param  {String} selector
     * @param  {String} className
     * @return {void}
     */

  }, {
    key: 'toggleClass',
    value: function toggleClass(selector, className) {
      var elm = this.getElement(selector);
      elm.classList.toggle(className);
    }

    /**
     * hide element
     *
     * @param  {String} selector
     * @return {void}
     */

  }, {
    key: 'hide',
    value: function hide(selector) {
      this.addClass(selector, ClassName.HIDE);
    }

    /**
     * show element
     *
     * @param  {String} selector
     * @return {void}
     */

  }, {
    key: 'show',
    value: function show(selector) {
      this.removeClass(selector, ClassName.HIDE);
    }

    /**
     * toggleShow
     *
     * @param  {String} selector
     * @return {void}
     */

  }, {
    key: 'toggleShow',
    value: function toggleShow(selector) {
      var elm = this.getElement(selector);
      if (elm.classList.contains(ClassName.HIDE)) {
        this.show(selector);
      } else {
        this.hide(selector);
      }
    }

    /**
     * filter
     *
     * @param  {String}  selector
     * @param  {String}  filter
     * @param  {Boolean} [htmlMode=false]
     * @return {Number}  hit number
     */

  }, {
    key: 'filter',
    value: function filter(selector, _filter) {
      var htmlMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var elms = this.getElements(selector);

      if (elms.length === 1 && elms[0].tagName === 'TABLE') {
        return this.filterTable(elms[0], _filter, htmlMode);
      } else {
        return this.filterElements(elms, _filter, htmlMode);
      }
    }

    /**
     * filterElements
     *
     * @param  {String}  selector
     * @param  {String}  filter
     * @param  {Boolean} [htmlMode=false]
     * @return {Number}  hit number
     */

  }, {
    key: 'filterElements',
    value: function filterElements(selector, filter) {
      var htmlMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var elms = this.getElements(selector);

      return this._filtering(elms, filter, htmlMode);
    }

    /**
     * filterTable
     *
     * @param  {String}  selector
     * @param  {String}  filter
     * @param  {Boolean} [htmlMode=false]
     * @return {Number}  hit number
     */

  }, {
    key: 'filterTable',
    value: function filterTable(selector, filter) {
      var htmlMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var table = this.getElement(selector);
      var tableRows = this.getElements('tbody tr', table);

      return this._filtering(tableRows, filter, htmlMode);
    }
  }, {
    key: '_filtering',
    value: function _filtering(nodes, filter) {
      var htmlMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var hit = 0;
      filter = filter.toUpperCase();

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = nodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var node = _step3.value;

          var content = htmlMode ? node.innerHTML : node.textContent;

          if (content.toUpperCase().indexOf(filter) === -1) {
            this.hide(node);
          } else {
            this.show(node);
            hit++;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return hit;
    }

    /**
     * sortElements
     *
     * @param  {String} selector
     * @param  {String} itemSelector
     * @return {void}
     */

  }, {
    key: 'sortElements',
    value: function sortElements(selector, itemSelector) {
      var _this = this;

      var parent = this.getElement(selector);
      var items = this.nodeListToArray(this.getElements(itemSelector, parent));
      var compareMethod = function compareMethod(a, b) {
        var aVal = _this._getSortValue(a);
        var bVal = _this._getSortValue(b);
        var type = parent.dataset[DataSet.SORT_TYPE] || a.dataset[DataSet.SORT_TYPE] || null;
        var asc = parent.dataset[DataSet.SORT_DIRECTION] === 'asc';

        return _this._compare(aVal, bVal, type, asc);
      };

      this._toggleSortDirection(parent);
      this._sorting(items, compareMethod.bind(this));
    }

    /**
     * sortTable
     *
     * @param  {String} selector
     * @return {void}
     */

  }, {
    key: 'sortTable',
    value: function sortTable(selector) {
      var _this2 = this;

      var table = this.getElement(selector);
      var heads = this.getElements('thead th', table);
      var rows = this.nodeListToArray(this.getElements('tbody tr', table));

      var _loop = function _loop(i, v) {
        v.addEventListener('click', function (e) {
          e.preventDefault();
          var th = e.currentTarget;
          _this2._toggleSortDirection(th);
          _this2._sortingTable(rows, i + 1, th.dataset[DataSet.SORT_TYPE], th.dataset[DataSet.SORT_DIRECTION]);
        });
      };

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = heads.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _ref = _step4.value;

          var _ref2 = _slicedToArray(_ref, 2);

          var i = _ref2[0];
          var v = _ref2[1];

          _loop(i, v);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: '_sortingTable',
    value: function _sortingTable(rows, nth, type, direction) {
      var _this3 = this;

      var compareMethod = function compareMethod(a, b) {
        a = _this3.getElement('td:nth-child(' + nth + ')', a);
        b = _this3.getElement('td:nth-child(' + nth + ')', b);
        var aVal = _this3._getSortValue(a);
        var bVal = _this3._getSortValue(b);
        var asc = direction === 'asc';
        type = type || a.dataset[DataSet.SORT_TYPE] || null;

        return _this3._compare(aVal, bVal, type, asc);
      };

      this._sorting(rows, compareMethod.bind(this));
    }
  }, {
    key: '_getSortValue',
    value: function _getSortValue(element) {
      var sortValue = element.dataset[DataSet.SORT_VALUE];
      if (!sortValue) sortValue = element.textContent;

      return sortValue.toUpperCase();
    }
  }, {
    key: '_sorting',
    value: function _sorting(items, compareMethod) {
      items.sort(compareMethod);
      items.forEach(function (v) {
        var p = v.parentNode;
        p.removeChild(v);
        p.appendChild(v);
      });
    }
  }, {
    key: '_toggleSortDirection',
    value: function _toggleSortDirection(elm) {
      if (elm.dataset[DataSet.SORT_DIRECTION] === 'asc') {
        elm.dataset[DataSet.SORT_DIRECTION] = 'desc';
      } else {
        elm.dataset[DataSet.SORT_DIRECTION] = 'asc';
      }
    }
  }, {
    key: '_compare',
    value: function _compare(a, b, type) {
      var asc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (type === 'number') {
        return this._compareNumber(a, b, asc);
      } else if (type === 'date') {
        return this._compareDate(a, b, asc);
      } else {
        // default: string
        return asc ? a.localeCompare(b) : b.localeCompare(a);
      }
    }
  }, {
    key: '_compareNumber',
    value: function _compareNumber(a, b) {
      var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      a = parseFloat(a);
      b = parseFloat(b);

      return asc ? a - b : b - a;
    }
  }, {
    key: '_compareDate',
    value: function _compareDate(a, b) {
      var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      a = new Date(a);
      b = new Date(b);

      return asc ? a - b : b - a;
    }
  }]);

  return ElementUtil;
}();

exports.default = ElementUtil;