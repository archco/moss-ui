export as namespace scrollFire;

/**
 * The target element that occurs actions when scrolled at it.
 */
export type Target = number | [number, number] | string | HTMLElement;

/**
 * Strict range of target position. [minY, maxY]
 */
export type TargetPosition = [number, number]; // minY, maxY

/**
 * The point what references target element. "start", "center" or "end". default value is "start".
 */
export type ElementReferencePoint = 'default' | 'start' | 'center' | 'end';

/**
 * This value determines when occurs actions which direction of scroll direction. "forward", "reverse" or "both". default value is "both".
 */
export type ActionDirection = 'forward' | 'reverse' | 'both';

/**
 * Action handler.
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
  /** Throttle value for controls frequency of action. */
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

export class ScrollFire {
  targetPosition: TargetPosition;
  listeners: ListenerMap;
  options: Options;

  constructor(options?: Options);

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
   * Adds action to action list.
   * @param action
   */
  addAction(action: Action): this;

  /**
   * Add all listeners.
   */
  addListeners(): void;

  /**
   * Remove all listeners.
   */
  destroy(): void;
}
