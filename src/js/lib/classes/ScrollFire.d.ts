export as namespace scrollFire;

export type Target = number | [number, number] | string | HTMLElement;
export type TargetPosition = [number, number]; // minY, maxY
export type ElementReferencePoint = 'default' | 'start' | 'center' | 'end';
export type ActionDirection = 'forward' | 'reverse' | 'both';
export type ActionHandler = (elm?: HTMLElement) => void;

export interface Action {
  handler: ActionHandler,
  direction?: ActionDirection,
  throttle?: number,
}

export interface Options {
  target?: Target,
  referencePoint?: ElementReferencePoint,
  offset?: number,
  actions?: Action[],
}

export class ScrollFire {
  targetPosition: TargetPosition;
  listeners: EventListener[];
  options: Options;

  constructor(options?: Options);

  getDefaultOptions(): Options;
  setOptions(options: Options): this;
  refresh(): void;
  setTargetPosition(target: Target, ref?: ElementReferencePoint): this;
  getTargetPosition(): TargetPosition;
  addAction(action: Action): this;
  addListeners(): void;
  destroy(): void;
}
