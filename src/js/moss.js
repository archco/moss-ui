/*!
 * moss-ui - The front-end UI framework with Vue.js and SCSS.
 * @version v0.4.3
 * @link https://github.com/archco/moss-ui
 * @license MIT
 */
import ElementUtil from 'element-util';
import ElementMeasurer from 'element-measurer';
import { MooColor as Color } from 'moo-color';
import * as Util from './lib/util';
import * as components from './components';
import * as directives from './directives';
import * as Svg from '../svg';
import { version } from '../../package.json';

const DefaultOptions = {
  enableGlobalComponents: true,
};

const MossUI = {
  version: version,
  install(Vue, options = {}) {
    if (this.installed) return;
    this.installed = true;

    options = Object.assign(DefaultOptions, options);

    // Add object for convenience.
    this.addMossObject(Vue);

    // Add components.
    if (options.enableGlobalComponents) {
      for (const [key, val] of Object.entries(components)) {
        Vue.component(Util.strToKebab(key), val);
      }
    }

    // Add directives.
    for (const [key, val] of Object.entries(directives)) {
      Vue.directive(Util.strToKebab(key), val);
    }
  },

  addMossObject(Vue) {
    const Moss = {
      version,
      lib: {
        Color,
        Util,
        ElementUtil,
        ElementMeasurer,
        Svg,
      },
    };
    window.Moss = Vue.Moss = Vue.prototype.$moss = Moss;
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MossUI);
}

export {
  Color,
  Util,
  ElementUtil,
  ElementMeasurer,
};

export default MossUI;
