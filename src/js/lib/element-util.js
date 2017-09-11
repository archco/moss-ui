const ClassName = {
  SHOW: 'display-show',
  HIDE: 'display-hide',
};
const DataSet = {
  SORT_DIRECTION: 'sortDirection',
  SORT_VALUE: 'sortValue',
  SORT_TYPE: 'sortType',
};

export default class ElementUtil {
  /**
   * getElement
   *
   * @param  {String|Element|NodeList} selector
   * @param  {String|Element} [ base = document ]
   * @return {Element}
   */
  static getElement(selector, base = document) {
    if (typeof base === 'string') {
      base = document.querySelector(base);
    }

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
   * @param  {String|Element} [ base = document ]
   * @return {NodeList}
   */
  static getElements(selector, base = document) {
    if (typeof base === 'string') {
      base = document.querySelector(base);
    }

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
   * removeElements
   *
   * @param  {String|Element|NodeList} selector
   * @param  {String|Element} [ base = document ]
   * @return {Number} number of affected.
   */
  static removeElements(selector, base = document) {
    if (typeof base === 'string') {
      base = document.querySelector(base);
    }

    let elms = this.getElements(selector, base);
    for (let elm of elms) {
      elm.parentNode.removeChild(elm);
    }

    return elms.length;
  }

  /**
   * Element to NodeList
   *
   * @param  {Element} element
   * @return {NodeList}
   */
  static toNodeList(element) {
    element.setAttribute('toNodeList', '');
    let nodelist = document.querySelectorAll('[toNodeList]');
    element.removeAttribute('toNodeList');
    return nodelist;
  }

  /**
   * Converting a NodeList to an Array.
   *
   * @param  {NodeList} nodelist
   * @return {Array}
   */
  static nodeListToArray(nodelist) {
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
  static addListener(selector, type, listener, useCapture = false) {
    let elements = this.getElements(selector);
    if (!elements.length) return null;

    for (let element of elements) {
      element.addEventListener(type, listener, useCapture);
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
  static findAncestor(element, selector) {
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
  static wrap(selector, className, tagName = 'DIV') {
    let elements = this.getElements(selector);

    for (let elm of elements) {
      let parent = elm.parentNode;
      let sibling = elm.nextSibling;
      let div = document.createElement(tagName);
      div.classList.add(className);

      div.appendChild(elm);

      if (sibling) {
        parent.insertBefore(div, sibling);
      } else {
        parent.appendChild(div);
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
  static wrapAll(selector, className, tagName = 'DIV') {
    let elements = this.getElements(selector);
    let parent = elements[0].parentNode;
    let sibling = elements[0].nextSibling;
    let div = document.createElement(tagName);
    div.classList.add(className);

    elements.forEach(elm => div.appendChild(elm));

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
  static submitConfirm(selector, message = 'Are you confirm?') {
    this.addListener(selector, 'submit', event => {
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
  static addClass(selector, className) {
    let elm = this.getElement(selector);
    elm.classList.add(className);
  }

  /**
   * removeClass
   *
   * @param  {String} selector
   * @param  {String} className
   * @return {void}
   */
  static removeClass(selector, className) {
    let elm = this.getElement(selector);
    elm.classList.remove(className);
  }

  /**
   * toggleClass
   *
   * @param  {String} selector
   * @param  {String} className
   * @return {void}
   */
  static toggleClass(selector, className) {
    let elm = this.getElement(selector);
    elm.classList.toggle(className);
  }

  /**
   * hide element
   *
   * @param  {String} selector
   * @return {void}
   */
  static hide(selector) {
    this.addClass(selector, ClassName.HIDE);
  }

  /**
   * show element
   *
   * @param  {String} selector
   * @return {void}
   */
  static show(selector) {
    this.removeClass(selector, ClassName.HIDE);
  }

  /**
   * toggleShow
   *
   * @param  {String} selector
   * @return {void}
   */
  static toggleShow(selector) {
    let elm = this.getElement(selector);
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
  static filter(selector, filter, htmlMode = false) {
    let elms = this.getElements(selector);

    if (elms.length === 1 && elms[0].tagName === 'TABLE') {
      return this.filterTable(elms[0], filter, htmlMode);
    } else {
      return this.filterElements(elms, filter, htmlMode);
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
  static filterElements(selector, filter, htmlMode = false) {
    let elms = this.getElements(selector);

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
  static filterTable(selector, filter, htmlMode = false) {
    let table = this.getElement(selector);
    let tableRows = this.getElements('tbody tr', table);

    return this._filtering(tableRows, filter, htmlMode);
  }

  static _filtering(nodes, filter, htmlMode = false) {
    let hit = 0;
    filter = filter.toUpperCase();

    for (let node of nodes) {
      let content = htmlMode ? node.innerHTML : node.textContent;

      if (content.toUpperCase().indexOf(filter) === -1) {
        this.hide(node);
      } else {
        this.show(node);
        hit++;
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
  static sortElements(selector, itemSelector) {
    let parent = this.getElement(selector);
    let items = this.nodeListToArray(this.getElements(itemSelector, parent));
    let compareMethod = (a, b) => {
      let aVal = this._getSortValue(a);
      let bVal = this._getSortValue(b);
      let type = parent.dataset[DataSet.SORT_TYPE] || a.dataset[DataSet.SORT_TYPE] || null;
      let asc = (parent.dataset[DataSet.SORT_DIRECTION] === 'asc');

      return this._compare(aVal, bVal, type, asc);
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
  static sortTable(selector) {
    let table = this.getElement(selector);
    let heads = this.getElements('thead th', table);
    let rows = this.nodeListToArray(this.getElements('tbody tr', table));

    for (let [i, v] of heads.entries()) {
      v.addEventListener('click', (e) => {
        e.preventDefault();
        let th = e.currentTarget;
        this._toggleSortDirection(th);
        this._sortingTable(
          rows,
          i + 1,
          th.dataset[DataSet.SORT_TYPE],
          th.dataset[DataSet.SORT_DIRECTION]
        );
      });
    }
  }

  static _sortingTable(rows, nth, type, direction) {
    let compareMethod = (a, b) => {
      a = this.getElement(`td:nth-child(${nth})`, a);
      b = this.getElement(`td:nth-child(${nth})`, b);
      let aVal = this._getSortValue(a);
      let bVal = this._getSortValue(b);
      let asc = (direction === 'asc');
      type = type || a.dataset[DataSet.SORT_TYPE] || null;

      return this._compare(aVal, bVal, type, asc);
    };

    this._sorting(rows, compareMethod.bind(this));
  }

  static _getSortValue(element) {
    let sortValue = element.dataset[DataSet.SORT_VALUE];
    if (!sortValue) sortValue = element.textContent;

    return sortValue.toUpperCase();
  }

  static _sorting(items, compareMethod) {
    items.sort(compareMethod);
    items.forEach(v => {
      let p = v.parentNode;
      p.removeChild(v);
      p.appendChild(v);
    });
  }

  static _toggleSortDirection(elm) {
    if (elm.dataset[DataSet.SORT_DIRECTION] === 'asc') {
      elm.dataset[DataSet.SORT_DIRECTION] = 'desc';
    } else {
      elm.dataset[DataSet.SORT_DIRECTION] = 'asc';
    }
  }

  static _compare(a, b, type, asc = true) {
    if (type === 'number') {
      return this._compareNumber(a, b, asc);
    } else if (type === 'date') {
      return this._compareDate(a, b, asc);
    } else {
      // default: string
      return asc ? a.localeCompare(b) : b.localeCompare(a);
    }
  }

  static _compareNumber(a, b, asc = true) {
    a = parseFloat(a);
    b = parseFloat(b);

    return asc ? a - b : b - a;
  }

  static _compareDate(a, b, asc = true) {
    a = new Date(a);
    b = new Date(b);

    return asc ? a - b : b - a;
  }
}
