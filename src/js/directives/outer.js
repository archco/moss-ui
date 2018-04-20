/// <reference path="../vue.d.ts" />
import { getElement } from 'element-util';

/*
  v-outer.{modifiers}="{value}"

  modifiers: event type.
  value: options object or event callback function.

  interface OuterOptions {
    root: HTMLElement|window; // default = document.documentElement
    target: HTMLElement; // default = el
    events: string[];
    callback: (event: Event) => void;
  }
*/
export default {
  /**
   * Bind directive and element.
   *
   * @param {HTMLElement} el
   * @param {Vue.VNodeDirective} binding
   */
  inserted(el, binding) {
    const options = resolveOptions(el, binding);
    const { root, events } = options;
    events.forEach(name => {
      root.addEventListener(name, eventHandler.bind(options));
    });
  },

  unbind(el, binding) {
    const options = resolveOptions(el, binding);
    const { root, events } = options;
    events.forEach(name => {
      root.removeEventListener(name, eventHandler);
    });
  }
};

const DefaultOptions = {
  /** @type {HTMLElement|Window} */
  root: document.documentElement,
  /** @type {HTMLElement} */
  target: null,
  /** @type {string[]} */
  events: [],
  /** @type {(event: Event) => void} */
  callback: null,
};

/**
 * Resolve options.
 *
 * @param {HTMLElement} el
 * @param {Vue.VNodeDirective} binding
 * @returns {Options}
 */
function resolveOptions(el, binding) {
  let options = Object.assign(DefaultOptions, { target: el });
  if (typeof binding.value === 'function') {
    options.callback = binding.value;
  } else {
    options = Object.assign(options, binding.value);
  }
  if (binding.modifiers) {
    options.events = Object.keys(binding.modifiers);
  }
  options.target = getElement(options.target);
  options.root = getElement(options.root);
  return options;
}

/**
 * Event handler.
 *
 * @param {Event} event
 */
function eventHandler(event) {
  const { target, callback } = this;
  if (target !== event.target
    && !target.contains(event.target)) {
    callback(event);
  }
}
