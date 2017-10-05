import Util from '../util';
import ElementUtil from '../element-util';

// TODO: add callback. onChange.
export default class Scrollspy {
  /**
   * constructor
   *
   * @param  {Element|String} elm Links container element.
   * @param  {Object} options
   */
  constructor(elm, options) {
    this.options = Object.assign(this.getDefaultOptions(), options);
    this._linksContainerElement = ElementUtil.getElement(elm);
    this._items = [];
    this._currentActive = null;
    this._scrollHeight = 0;
    this._scrollElement = this.options.scrollElement === 'body'
      ? null
      : ElementUtil.getElement(this.options.scrollElement);

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
  getDefaultOptions() {
    return {
      linkSelector: 'a',
      scrollElement: 'body', // 'body' | element | selector
      activeTarget: 'parent', // 'parent' | 'self' | selector
      activeClass: 'active',
      offset: 24,
      onActivate: null,
    };
  }

  /**
   * Add event listener.
   *
   * @return {void}
   */
  addListener() {
    let base = this._scrollElement || window;
    base.addEventListener('scroll', this.process.bind(this));

    this._items.forEach(item => {
      item.link.addEventListener('click', this.process.bind(this), true);
    });
  }

  /**
   * Refresh properties.
   *
   * @return {void}
   */
  refresh() {
    let linkNodes = ElementUtil.getElements(
        this.options.linkSelector,
        this._linksContainerElement
      );
    let links = ElementUtil.nodeListToArray(linkNodes).filter(elm => elm.hash);
    this._items = [];
    this._scrollHeight = this._getScrollHeight();

    links.forEach(link => {
      let elm = ElementUtil.getElement(link.hash);
      if (!elm) return;

      let item = {
        elm,
        link,
        offsetTop: this._getOffset(elm),
      };
      this._items.push(item);
    });

    this._items.sort((a, b) => a.offsetTop - b.offsetTop);
  }

  /**
   * Process for scrollspy.
   *
   * @return {void}
   */
  process() {
    const scrollTop = this._getScrollTop() + this.options.offset;
    const scrollHeight = this._getScrollHeight();
    const maxScroll = this._getMaxScroll() + this.options.offset;

    if (this._scrollHeight !== scrollHeight) this.refresh();

    // If scrolled max, then activate last items link.
    if (scrollTop >= maxScroll) {
      this._activate(this._items[this._items.length - 1]);
      return;
    }

    // If scroll position is between 0 and first item, then remove active class in all links.
    if (
      this._currentActive
      && scrollTop < this._items[0].offsetTop
      && this._items[0].offsetTop > 0
    ) {
      this._currentActive = null;
      this._clear();
      return;
    }

    this._items.forEach((item, i) => {
      let nextItem = this._items[i + 1];
      if (
        this._currentActive !== item
        && scrollTop >= item.offsetTop
        && (typeof nextItem === 'undefined' || scrollTop < nextItem.offsetTop)
      ) {
        this._activate(item);
      }
    });
  }

  // private

  _activate(item) {
    this._clear();
    let activeTarget = this._getActiveTarget(item.link);
    this._currentActive = item;
    activeTarget.classList.add(this.options.activeClass);
    if (typeof this.options.onActivate === 'function') {
      this.options.onActivate(item);
    }
  }

  _clear() {
    for (let item of this._items) {
      this._getActiveTarget(item.link)
        .classList.remove(this.options.activeClass);
    }
  }

  _getActiveTarget(link) {
    if (this.options.activeTarget == 'self') {
      return link;
    } else if (this.options.activeTarget == 'parent') {
      return link.parentNode;
    } else {
      return ElementUtil.findAncestor(link, this.options.activeTarget);
    }
  }

  _getOffset(elm, isLeft = false) {
    let val = 0;
    let offset = isLeft ? 'offsetLeft' : 'offsetTop';

    do {
      val += elm[offset];
      elm = elm.offsetParent;
    } while (elm && elm !== this._scrollElement);

    return val;
  }

  _getScrollTop() {
    return Util.getScrollTop(this._scrollElement);
  }

  _getScrollHeight() {
    return Util.getScrollHeight(this._scrollElement);
  }

  _getMaxScroll() {
    return Util.getMaxScroll(this._scrollElement);
  }
}
