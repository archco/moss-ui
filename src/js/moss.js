/*!
 * moss-ui - The front-end UI framework with Vue.js and SCSS.
 * @version v0.6.1
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
};

function addMossObject(Vue) {
  const Moss = { version, lib };
  window.Moss = Vue.Moss = Vue.prototype.$moss = Moss;
}

export {
  Color,
  Components,
  Directives,
  ElementMeasurer,
  ElementUtil,
  Svg,
  Util,
};

export default {
  version: version,
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
