/*!
 * moss-ui - The front-end UI framework with Vue.js and SCSS.
 * @version v0.8.0
 * @link https://github.com/archco/moss-ui
 * @license MIT
 */
import * as Case from 'cake-case';
import * as ElementUtil from 'element-util';
import ElementMeasurer from 'element-measurer';
import Color from 'moo-color';
import * as Util from './lib/util';
import * as Components from './components';
import * as Directives from './directives';
import * as Svg from '../svg';
import ScrollFire from './lib/classes/ScrollFire';
import version from '../../task/version';

const DefaultOptions = {
  enableGlobalComponents: true,
};

const lib = {
  Case,
  Color,
  ElementMeasurer,
  ElementUtil,
  Svg,
  Util,
  ScrollFire,
};

function addMossObject(Vue) {
  const Moss = {
    version,
    lib,
    addSvg: Util.addSvg,
  };
  window.Moss = Vue.Moss = Vue.prototype.$moss = Moss;
}

export {
  Case,
  Color,
  Components,
  Directives,
  ElementMeasurer,
  ElementUtil,
  Svg,
  Util,
  ScrollFire,
};

export default {
  version,
  install(Vue, options = {}) {
    if (this.installed) return;
    this.installed = true;

    options = Object.assign(DefaultOptions, options);

    // Add object for convenience.
    addMossObject(Vue);

    // Add components.
    if (options.enableGlobalComponents) {
      for (const [key, val] of Object.entries(Components)) {
        Vue.component(Case.kebab(key), val);
      }
    }

    // Add directives.
    for (const [key, val] of Object.entries(Directives)) {
      Vue.directive(Case.kebab(key), val);
    }
  },
};
