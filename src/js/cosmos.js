/*!
 * cosmos-ui - The user interface framework for front-end.
 * @version v0.0.0
 * @link https://github.com/archco/cosmos-ui
 * @license MIT
 */
import Color from './lib/color';
import Util from './lib/util';
import ElementUtil from './lib/element-util';
import components from './components.js';
import { version } from '../../package.json';

export default {
  version: version,
  install(Vue, options = {}) {
    if (this.installed) return;
    this.installed = true;

    components.forEach(component => {
      Vue.component(component.name, component);
    });

    console.log(options);

    Vue.prototype.$cosmos = {
      version: version,
      lib: {
        Color,
        Util,
        ElementUtil,
      },
    };
  },
};

export {
  Color,
  Util,
  ElementUtil,
};
