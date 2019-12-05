export as namespace ScrollTo;

/**
 * Destination types. If it's `number` means scrollTop destination. or if it's `[number, number]` means [scrollTop, scrollLeft] destination. If it's `string` or `HTMLElement`, then sets destination as Element.
 */
export type DestType = number|[number, number]|string|HTMLElement;

export interface ScrollToOptions {
  /** Transition duration time. unit is milliseconds. If this value sets 0, then scroll position sets destination immediately.  */
  duration?: number;

  /** Specify an easing type. available common keywords is `linear`, `ease`, `easIn`, `easeOut` or `easeInOut`. default value is `linear`. */
  easing?: string;

  /** Specify the base element. default is `document.documentElement`. If you want to move scrolling within an element with has style such as `overflow: auto;`, then you should set this value to target element. */
  base?: string|HTMLElement;
}

/**
 * Scroll to destination with transition.
 *
 * @export
 * @param {ScrollTo.DestType} dest
 * @param {ScrollTo.ScrollToOptions} [options={}]
 * @returns {Promise<void>}
 */
export default function scrollTo(dest: DestType, options: ScrollToOptions): Promise<void>;
