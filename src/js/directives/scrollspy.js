import Util from '../lib/util';
import ElementUtil from '../lib/element-util';

/*
  v-scrollspy="{ value }"

  value: {
    selector: 'a',
    activeClass: 'active',
    activeTarget: 'parent', // 'parent' | 'self' | selector
    offset: 24,
    baseElement: 'body', // 'body' | Element | Selector
  }
 */
export default {
  name: 'scrollspy',

  inserted(el, binding, vnode) {
    let scrollspy = new Scrollspy(el, binding.value);
    scrollspy.addListener();
    console.log(scrollspy);

    // TODO: event register to vue. onChange, emitRefresh..
  },
};

// TODO: Separate a class to the other file.
class Scrollspy {
  constructor(element, options) {
    this._elm = element;
    this.options = Object.assign(this.getDefaultOptions(), options);
    this._items = [];
    this._currentActive = null;
    this._scrollHeight = 0;
    this._baseElement = this.options.baseElement === 'body'
      ? null
      : ElementUtil.getElement(this.options.baseElement);

    this.refresh();
    this.process();
  }

  // public

  getDefaultOptions() {
    return {
      selector: 'a',
      activeClass: 'active',
      activeTarget: 'parent',
      offset: 24,
      baseElement: 'body',
    };
  }

  addListener() {
    let base = this._baseElement || window;
    base.addEventListener('scroll', this.process.bind(this));

    this._items.forEach(item => {
      item.link.addEventListener('click', this.process.bind(this), true);
    });
  }

  refresh() {
    let linkNodes = ElementUtil.getElements(this.options.selector, this._elm);
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

  process() {
    const scrollTop = this._getScrollTop() + this.options.offset;
    const scrollHeight = this._getScrollHeight();
    const maxScroll = this._getMaxScroll() + this.options.offset;

    console.log(`t: ${scrollTop}, h: ${scrollHeight}, m: ${maxScroll}`);

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

    for (let [i, item] of this._items.entries()) {
      let nextItem = this._items[i + 1];
      if (
        this._currentActive !== item
        && scrollTop >= item.offsetTop
        && (typeof nextItem === 'undefined' || scrollTop < nextItem.offsetTop)
      ) {
        console.log('active: ', this);
        this._activate(item);
      }
    }
  }

  // private

  _activate(item) {
    this._clear();
    let activeTarget = this._getActiveTarget(item.link);
    this._currentActive = item;
    activeTarget.classList.add(this.options.activeClass);
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
    } while (elm && elm !== this._baseElement);

    return val;
  }

  _getScrollTop() {
    return Util.getScrollTop(this._baseElement);
  }

  _getScrollHeight() {
    return Util.getScrollHeight(this._baseElement);
  }

  _getMaxScroll() {
    return Util.getMaxScroll(this._baseElement);
  }
}
