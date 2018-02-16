import { strToCamel } from '../util';
import * as Svg from '../../../svg';

/**
 * Get svg string by name.
 *
 * @param {string} name the name of svg-icon. e.g. arrow-down or arrowDown
 * @returns {string}
 */
export function getSvgByName(name) {
  return Svg[strToCamel(name, true)] || '';
}

/**
 * Make icon element by svg-icon name.
 *
 * @param {string} name
 * @returns {HTMLElement}
 */
export function makeIcon(name) {
  const i = document.createElement('i');
  i.classList.add('icon');
  i.innerHTML = getSvgByName(name);
  return i;
}

/**
 * Make icon html string by svg-icon name.
 *
 * @param {string} name
 * @returns {string}
 */
export function makeIconHtml(name) {
  return `<i class="icon">${getSvgByName(name)}</i>`;
}
