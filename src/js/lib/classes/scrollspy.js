import {
  getElement,
  getElements,
  nodeListToArray,
  findAncestor,
} from 'element-util';
import ElementMeasurer from 'element-measurer';

export default class Scrollspy {
  /**
   * constructor
   *
   * @param  {Element|String} elm Links container element.
   * @param  {Object} options
   */
  constructor(elm, options) {
    this.options = Object.assign(this.getDefaultOptions(), options);
    this._linksContainerElement = getElement(elm);
    this._items = [];
    this._currentActive = null;
    this._scrollHeight = 0;
    this._scrollElement = getElement(this.options.scrollElement);
    this._scrollElementSize = new ElementMeasurer(this._scrollElement);

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
    const base = this._scrollElementSize.isDocument ? window : this._scrollElement;
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
    const linkNodes = getElements(
        this.options.linkSelector,
        this._linksContainerElement
      );
    const links = nodeListToArray(linkNodes).filter(elm => elm.hash);
    this._items = [];
    this._scrollHeight = this._scrollElementSize.scrollHeight;

    links.forEach(link => {
      const elm = getElement(link.hash);
      if (!elm) return;
      this._items.push({
        elm,
        link,
        offsetTop: new ElementMeasurer(elm).getOffset().top,
      });
    });

    this._items.sort((a, b) => a.offsetTop - b.offsetTop);
  }

  /**
   * Process for scrollspy.
   *
   * @return {void}
   */
  process() {
    const scrollTop = this._scrollElementSize.scrollTop + this.options.offset;
    const scrollHeight = this._scrollElementSize.scrollHeight;
    const maxScroll = this._scrollElementSize.maxScrollTop + this.options.offset;

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
      const nextItem = this._items[i + 1];
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
    this._currentActive = item;
    this._getActiveTarget(item.link).classList.add(this.options.activeClass);
    if (typeof this.options.onActivate === 'function') {
      this.options.onActivate(item);
    }
  }

  _clear() {
    for (const item of this._items) {
      this._getActiveTarget(item.link).classList.remove(this.options.activeClass);
    }
  }

  _getActiveTarget(link) {
    if (this.options.activeTarget == 'self') {
      return link;
    } else if (this.options.activeTarget == 'parent') {
      return link.parentNode;
    } else {
      return findAncestor(link, this.options.activeTarget);
    }
  }
}
