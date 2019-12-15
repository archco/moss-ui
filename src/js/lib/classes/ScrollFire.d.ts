export as namespace scrollFire;

/**
 * The target element that occurs actions when scrolled at it.
 */
export type Target = number | [number, number] | string | HTMLElement;

/**
 * Strict range of target position. [minY, maxY]
 */
export type TargetPosition = [number, number];

/**
 * The point what references target element. "start", "center" or "end". default value is "start".
 */
export type ElementReferencePoint = 'default' | 'start' | 'center' | 'end';

/**
 * This value determines when occurs actions which direction of scroll direction. "forward", "reverse" or "both". default value is "both".
 */
export type ActionDirection = 'forward' | 'reverse' | 'both';

/**
 * A function for action handling when became scroll in target position.
 */
export type ActionHandler = (elm?: HTMLElement) => void;

/**
 * The action that occurs when scroll at target position.
 */
export interface Action {
  /** Action handler. */
  handler: ActionHandler,
  /** Scroll direction. "forward", "reverse" or "both". default value is "both". */
  direction?: ActionDirection,
  /** Throttle value for controls frequency of action. <milliseconds> */
  throttle?: number,
}

/**
 * Listener Map.
 */
export interface ListenerMap extends Map<string, EventListener> {}

/**
 * The options of ScrollFire Class.
 */
export interface Options {
  /** The target element that occurs actions when scrolled at it. */
  target?: Target,
  /** The point what references target element. "start", "center" or "end". default value is "start". */
  referencePoint?: ElementReferencePoint,
  /** The offset will gives extra value for TargetPosition. */
  offset?: number,
  /** List of actions. */
  actions?: Action[],
}

/**
 * ScrollFire is helpful class for makes scene that react by scroll event.
 */
export class ScrollFire {
  targetPosition: TargetPosition;
  listeners: ListenerMap;
  options: Options;

  /**
   * Constructor
   * @param options if given argument type is string, then would setting target element only. and other options would setting default.
   */
  constructor(options?: Options|string);

  /**
   * Returns default options of ScrollFire.
   */
  getDefaultOptions(): Options;

  /**
   * Set options.
   * @param options
   */
  setOptions(options: Options): this;

  /**
   * Refresh inside variables.
   */
  refresh(): void;

  /**
   * Set target position.
   * @param target target element.
   * @param ref reference point.
   */
  setTargetPosition(target: Target, ref?: ElementReferencePoint): this;

  /**
   * Returns target position. [minY, maxY]
   */
  getTargetPosition(): TargetPosition;

  /**
   * Adds action to scroll event listener.
   * @param action
   */
  addAction(action: Action|ActionHandler): this;

  /**
   * Remove all listeners.
   */
  destroy(): void;
}
