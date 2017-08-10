/*!
 * moss-ui - The user interface framework for front-end.
 * @version v0.2.0
 * @link https://github.com/archco/moss-ui
 * @license MIT
 */
import Color from './lib/color';
import Util from './lib/util';
import ElementUtil from './lib/element-util';
import components from './components/_index';
import directives from './directives/_index';
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

    // Add object for convenience.
    this.addMossObject(Vue);

    // Add components.
    components.forEach(component => {
      let name = (options.insteadName && options.insteadName[component.name])
        ? options.insteadName[component.name]
        : component.name;

      Vue.component(name, component);
    });

    // Add directives.
    directives.forEach(directive => {
      Vue.directive(directive.name, directive);
    });
  },

  addMossObject(Vue) {
    const Moss = {
      version,
      lib: {
        Color,
        Util,
        ElementUtil,
      },
    };
    window.Moss = Vue.Moss = Vue.prototype.$moss = Moss;
  },
};

export {
  Color,
  Util,
  ElementUtil,
};
