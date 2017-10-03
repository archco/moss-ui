import Util from '../lib/util';
import ElementUtil from '../lib/element-util';

/*
  v-scrollspy="{ value }"

  value: {
    selector: 'a',
    activeClass: 'active',
    activeTarget: 'self', // self | parent | selector
    offset: 10,
  }
 */
export default {
  name: 'scrollspy',

  bind(el, binding, vnode) {
    let scrollspy = new Scrollspy(el, binding.value, vnode.context);
    scrollspy.addListener();

    // TODO: event register to vue. onChange, emitRefresh..
  },
};

class Scrollspy {
  constructor(element, options, context) {
    // TODO: scrollElement 옵션이 필요하다. element의 scroll을 이용하려할때.. 기본은 window로..
    this._elm = element;
    this._context = context;
    this.options = Object.assign(this.getDefaultOptions(), options);
    this._items = [];
    this._currentActive = null;

    this.refresh();
    this.process();
  }

  getDefaultOptions() {
    return {
      selector: 'a',
      activeClass: 'active',
      activeTarget: 'parent',
      offset: 10,
    };
  }

  addListener() {
    window.addEventListener('scroll', this.process.bind(this));
    this._items.forEach(item => {
      item.link.addEventListener('click', this.process.bind(this));
    });
  }

  process() {
    let scrollTop = Util.getScrollTop();
    let scrollBottom = Util.getScrollBottom();

    if (scrollBottom === 0) {
      // activate last link.
      this._activate(this._items[this._items.length - 1].link);
      return;
    }

    for (let item of this._items) {
      // FIXME: 스크롤 위치의 미세조정.
      if (item.offsetTop + this.options.offset > scrollTop) {
        this._activate(item.link);
        break;
      }
    }
  }

  refresh() {
    let linkNodes = ElementUtil.getElements(this.options.selector, this._elm);
    let links = ElementUtil.nodeListToArray(linkNodes).filter(elm => elm.hash);

    links.forEach(link => {
      let elm = ElementUtil.getElement(link.hash);
      let item = {
        elm,
        link,
        offsetTop: elm.offsetTop,
      };
      this._items.push(item);
    });

    this._items.sort((a, b) => a.offsetTop - b.offsetTop);
  }

  _activate(link) {
    this._clear();
    let activeTarget = this._getActiveTarget(link);
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
}
