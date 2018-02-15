import { strToCamel } from '../lib/util';
import * as Svg from '../../svg';

export default {
  methods: {

    /**
     * Get svg string by name.
     *
     * @param {string} name the name of svg-icon. e.g. arrow-down or arrowDown
     * @returns {string}
     */
    getSvgByName(name) {
      return Svg[strToCamel(name, true)] || '';
    },

    /**
     * Make icon element by svg-icon name.
     *
     * @param {string} name
     * @returns {HTMLElement}
     */
    makeIcon(name) {
      const i = document.createElement('i');
      i.classList.add('icon');
      i.innerHTML = this.getSvgByName(name);
      return i;
    },

    /**
     * Make icon html string by svg-icon name.
     *
     * @param {string} name
     * @returns {string}
     */
    makeIconHtml(name) {
      return `<i class="icon">${this.getSvgByName(name)}</i>`;
    },
  }
};
