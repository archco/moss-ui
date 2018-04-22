// Type definitions for moss-ui v0.6.0
// @link https://github.com/archco/moss-ui

import {
  DirectiveOptions,
  PluginObject,
  VueConstructor,
} from 'vue';
import * as Case from 'cake-case';
import * as ElementUtil from 'element-util';

export as namespace MossUI;

export { default as Color } from 'moo-color';
export { default as ElementMeasurer } from 'element-measurer';
export { Case, ElementUtil };

export namespace Components {
  export const AnchoredTag: VueConstructor;
  export const Chip: VueConstructor;
  export const CloseButton: VueConstructor;
  export const Collapse: VueConstructor;
  export const Dropdown: VueConstructor;
  export const Message: VueConstructor;
  export const MessageBox: VueConstructor;
  export const Modal: VueConstructor;
  export const Navbar: VueConstructor;
  export const NavbarBrand: VueConstructor;
  export const NavbarNav: VueConstructor;
  export const NavbarToggle: VueConstructor;
  export const NavItem: VueConstructor;
  export const NavDrawer: VueConstructor;
  export const Parallax: VueConstructor;
  export const ScrollTo: VueConstructor;
  export const SimpleCRUD: VueConstructor;
  export const Tab: VueConstructor;
  export const Tabs: VueConstructor;
  export const Toast: VueConstructor;
  export const Tree: VueConstructor;
  export const TreeItem: VueConstructor;
  export const InputCheck: VueConstructor;
  export const InputRadio: VueConstructor;
  export const Carousel: VueConstructor;
  export const Icon: VueConstructor;
  export const CollapseToggle: VueConstructor;
  export const Search: VueConstructor;
}

export namespace Directives {
  export const Accordion: DirectiveOptions;
  export const Activator: DirectiveOptions;
  export const Clipboard: DirectiveOptions;
  export const Collapse: DirectiveOptions;
  export const Confirm: DirectiveOptions;
  export const Focus: DirectiveOptions;
  export const Modal: DirectiveOptions;
  export const Outer: DirectiveOptions;
  export const Ripple: DirectiveOptions;
  export const Scrollspy: DirectiveOptions;
  export const SetValue: DirectiveOptions;
  export const Tooltip: DirectiveOptions;
  export const Trigger: DirectiveOptions;
  export const Wrap: DirectiveOptions;
}

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
   * @deprecated in v0.6.x. use Case.camel or Case.pascal instead.
   *
   * @param {string} str
   * @param {boolean} [isSmallCamel=false] If true, returns as smallCamelCase.
   * @returns {string}
   */
  export function strToCamel(str: string, isSmallCamel?: boolean): string;

  /**
   * String to kebab-case.
   * @deprecated in v0.6.x. use Case.kebab instead.
   *
   * @param {string} str
   * @returns {string}
   */
  export function strToKebab(str: string): string;

  /**
   * String to normal case. e.g. 'hello world'
   * @deprecated in v0.6.x. use Case.lower instead.
   *
   * @param {string} str
   * @returns {string}
   */
  export function strToNormal(str: string): string;

  /**
   * Capitalize first letters.
   * @deprecated in v0.6.x. use Case.capital instead.
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

declare const MossPlugin: PluginObject<MossOptions>;

export default MossPlugin;
