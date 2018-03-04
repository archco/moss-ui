import { VueConstructor } from 'vue';
import * as ElementUtil from 'element-util';

export { MooColor as Color } from 'moo-color';
export { default as ElementMeasurer } from 'element-measurer';
export { ElementUtil };

export namespace Svg {
  export const arrowLeft: string;
  export const arrowRight: string;
  export const arrowUp: string;
  export const arrowDown: string;
  export const caretLeft: string;
  export const caretRight: string;
  export const caretUp: string;
  export const caretDown: string;
  export const close: string;
  export const check: string;
  export const search: string;
}

export namespace Util {
  /**
   * location.search to Object.
   *
   * @return {object|null}
   */
  export function locationSearchToObject(): object|null;

  /**
   * searchToObject
   *
   * @param  {string} search HTMLAnchorElement.search
   * @return {object|null}
   */
  export function searchToObject(search: string): object|null;

  /**
   * returns true if 'big' contains 'small'.
   *
   * @param  {any}  big
   * @param  {any}  small
   * @return {boolean}
   */
  export function isContains(big: any, small: any): boolean;

  /**
   * Determine whether value is empty.
   * @link https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
   *
   * @param  {any}  val
   * @return {boolean}
   */
  export function isEmpty(val: any): boolean;

  /**
   * isMobileSize
   *
   * @param  {number}  [size = 800] window width point. (pixels)
   * @return {boolean}
   */
  export function isMobileSize(size?: number): boolean;

  /**
   * String to CamelCase
   *
   * @param {string} str
   * @param {boolean} [isSmallCamel=false] If true, returns as smallCamelCase.
   * @returns {string}
   */
  export function strToCamel(str: string, isSmallCamel?: boolean): string;

  /**
   * String to kebab-case.
   *
   * @param {string} str
   * @returns {string}
   */
  export function strToKebab(str: string): string;

  /**
   * String to normal case. e.g. 'hello world'
   *
   * @param {string} str
   * @returns {string}
   */
  export function strToNormal(str: string): string;

  /**
   * Capitalize first letters.
   *
   * @param {string} str
   * @returns {string}
   */
  export function capitalize(str: string): string;
}

export interface MossOptions {
  /** Import components to global vue model automatically. default value is true. */
  enableGlobalComponents: boolean;
}

export default interface MossUI {
  version: string;
  install(Vue: VueConstructor, options?: MossOptions): void;
}
