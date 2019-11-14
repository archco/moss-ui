/// <reference path="./ScrollFire.d.ts" />

import { getElement } from 'element-util';
import ElementMeasurer from 'element-measurer';

/**
 * ScrollFire is helpful class for makes scene that react by scroll event.
 *
 * @type {scrollFire.ScrollFire}
 */
export default class ScrollFire {
  /**
   * Create instance of ScrollFire
   *
   * @param {scrollFire.Options} options
   */
  constructor(options = {}) {
    // initialize properties
    /** @type {scrollFire.TargetPosition} */
    this.targetPosition = [0, 0];
    /** @type {scrollFire.ListenerMap} */
    this.listeners = new Map();
    this._scrollElementSize = new ElementMeasurer();
    this._scrollHeight = this._scrollElementSize.scrollHeight;
    this._targetElement = null;

    // type of option
    options = typeof options === 'string'
      ? { target: options }
      : options;

    // set options
    /** @type {scrollFire.Options} */
    this.options = this.getDefaultOptions();
    this.setOptions(options);
  }

  /**
   * Returns default options
   *
   * @returns {scrollFire.Options}
   */
  getDefaultOptions() {
    return {
      referencePoint: 'default',
      offset: 0,
      actions: [],
    };
  }

  /**
   * Set options
   *
   * @param {scrollFire.Options} options
   * @returns {this}
   */
  setOptions(options) {
    /** @type {scrollFire.Options} */
    const {actions} = this.options = {...this.options, ...options};

    // set properties.
    this.refresh();

    // set actions
    if (actions.length > 0) actions.forEach(a => this.addAction(a));

    return this;
  }

  /**
   * Refresh properties
   *
   * @returns {void}
   */
  refresh() {
    const { target, referencePoint } = this.options;
    this.setTargetPosition(target, referencePoint);
    this._scrollHeight = this._scrollElementSize.scrollHeight;
  }

  /**
   * Set target position
   *
   * @param {scrollFire.Target} target
   * @param {scrollFire.ElementReferencePoint} ref
   * @returns {this}
   */
  setTargetPosition(target, ref = 'default') {
    // update options.
    this.options.target = target;
    this.options.referencePoint = ref;

    if (typeof target === 'number' || Array.isArray(target)) {
      this.targetPosition = target;
    } else {
      this._targetElement = getElement(target);
      const elmSize = new ElementMeasurer(this._targetElement);
      const offsetTop = elmSize.getOffset().top;
      const elmHeight = elmSize.getRect().height;
      let position;

      switch (ref) {
        case 'start':
          position = offsetTop;
          break;
        case 'center':
          position = offsetTop + elmHeight / 2;
          break;
        case 'end':
          position = offsetTop + elmHeight;
          break;
        default:
          position = [offsetTop, offsetTop + elmHeight];
          break;
      }

      this.targetPosition = typeof position === 'number'
        ? [position, position]
        : position;
    }

    return this;
  }

  /**
   * Returns the target position values which offset is calculated.
   *
   * @returns {scrollFire.TargetPosition}
   */
  getTargetPosition() {
    const offset = this.options.offset;
    const [minY, maxY] = this.targetPosition;
    return [minY - offset, maxY + offset];
  }

  /**
   * Adds action to scroll event listener.
   *
   * @param {scrollFire.Action|scrollFire.ActionHandler} action
   * @returns {this}
   */
  addAction(action) {
    action = typeof action === 'function' ? { handler: action } : action;
    const id = this._makeId(10);
    this.listeners.set(id, this._generateListener(action).bind(this));
    window.addEventListener('scroll', this.listeners.get(id));
    return this;
  }

  /**
   * Remove all listeners.
   *
   * @returns {void}
   */
  destroy() {
    for (let key of this.listeners.keys()) {
      window.removeEventListener('scroll', this.listeners.get(key));
    }
    this.listeners.clear();
  }

  /**
   * Generate listener from action.
   *
   * @param {scrollFire.Action} action
   * @returns {EventListener}
   */
  _generateListener(action) {
    let lastY = this._scrollElementSize.scrollTop;
    let time = performance.now();
    const wait = action.throttle || 0;

    const isRightDirection = (current, last) => {
      return action.direction == 'forward'
        ? current > last
        : action.direction == 'reverse'
        ? current < last
        : true; // both (default), always true.
    };

    return () => {
      const currY = this._scrollElementSize.scrollTop;
      const now = performance.now();
      const [minY, maxY] = this.getTargetPosition();
      const maxScrollTop = this._scrollElementSize.maxScrollTop;

      if (this._scrollElementSize.scrollHeight !== this._scrollHeight) this.refresh();

      if (isRightDirection(currY, lastY) && time + wait < now) {
        if (
          (minY == 0 && currY == 0)
          || (maxY >= maxScrollTop && currY == maxScrollTop)
        ) {
          action.handler(this._targetElement);
          time = now;
        }
        if (minY <= currY && currY <= maxY) {
          action.handler(this._targetElement);
          time = now;
        }
      }

      lastY = currY;
    };
  }

  /**
   * make random id.
   * @link https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
   *
   * @param {number} length
   * @returns {string}
   */
  _makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
   return result;
  }
}
