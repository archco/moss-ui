import { camel } from 'cake-case';
import * as Svg from '../../../svg';

/**
 * Add custom svg-icon.
 *
 * @param {string} name
 * @param {string} value
 */
export function addSvg(name, value) {
  Svg[camel(name)] = value;
}

/**
 * Get svg string by name.
 *
 * @param {string} name the name of svg-icon. e.g. arrow-down or arrowDown
 * @returns {string}
 */
export function getSvgByName(name) {
  return Svg[camel(name)] || '';
}

/**
 * Make icon element by svg-icon name.
 *
 * @param {string} name
 * @returns {HTMLElement}
 */
export function makeIcon(name) {
  const i = document.createElement('i');
  i.classList.add('moss-icon');
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
  return `<i class="moss-icon">${getSvgByName(name)}</i>`;
}
