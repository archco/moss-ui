/*!
 * cosmos-ui - The user interface framework for front-end.
 * @version v0.0.0
 * @link https://github.com/archco/cosmos-ui
 * @license MIT
 */
import Color from './lib/color';
import Util from './lib/util';
import ElementUtil from './lib/element-util';
import { EventBus } from './lib/event-bus';
import components from './components.js';
import { version } from '../../package.json';

const DefaultOptions = {
  insteadName: {},
};

export default {
  version: version,
  install(Vue, options = {}) {
    if (this.installed) return;
    this.installed = true;

    options = Object.assign(DefaultOptions, options);

    // Add components.
    components.forEach(component => {
      let name = (options.insteadName && options.insteadName[component.name])
        ? options.insteadName[component.name]
        : component.name;

      Vue.component(name, component);
    });

    // Add object for convenience.
    const Cosmos = {
      version,
      EventBus,
      lib: {
        Color,
        Util,
        ElementUtil,
      },
    };
    window.Cosmos = Vue.Cosmos = Vue.prototype.$cosmos = Cosmos;
  }
};

export {
  Color,
  Util,
  ElementUtil,
  EventBus,
};
