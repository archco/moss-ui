# ScrollFire

> source: [js/lib/classes/ScrollFire](../../src/js/lib/classes/ScrollFire.js)

ScrollFire is helpful class for makes scene that react by scroll event.

### Table of contents

- [Basic Usage](#basic-usage)
- [Types](#types)
  - [Target](#target)
  - [TargetPosition](#TargetPosition)
  - [ElementReferencePoint](#ElementReferencePoint)
  - [ActionDirection](#ActionDirection)
  - [ActionHandler](#ActionHandler)
  - [Action](#Action)
  - [Options](#Options)
- [Class](#class)
- [Example](#example)

## Basic Usage

``` js
import { ScrollFire } from 'moss-ui';

const scrollFire = new ScrollFire('#target');

scrollFire.addAction(elm => elm.classList.add('scrolled'));
```

## Types

> See [declaration file](../../src/js/lib/classes/ScrollFire.d.ts)

### Target

The target element that occurs actions when scrolled at it.

``` ts
type Target = number | [number, number] | string | HTMLElement;
```

### TargetPosition

Strict range of target position. [minY, maxY]

``` ts
type TargetPosition = [number, number];
```

### ElementReferencePoint

The point what references target element. "start", "center" or "end". **default value is "start"**.

``` ts
type ElementReferencePoint = 'default' | 'start' | 'center' | 'end';
```

### ActionDirection

This value determines when occurs actions which direction of scroll direction. "forward", "reverse" or "both". **default value is "both"**.

``` ts
type ActionDirection = 'forward' | 'reverse' | 'both';
```

### ActionHandler

A function for action handling when became scroll in target position.

``` ts
type ActionHandler = (elm?: HTMLElement) => void;
```

### Action

The action that occurs when scroll at target position.

``` ts
interface Action {
  /** Action handler. */
  handler: ActionHandler,
  /** Scroll direction. "forward", "reverse" or "both". default value is "both". */
  direction?: ActionDirection,
  /** Throttle value for controls frequency of action. <milliseconds> */
  throttle?: number,
}
```

### Options

The options of ScrollFire Class.

``` ts
interface Options {
  /** The target element that occurs actions when scrolled at it. */
  target?: Target,
  /** The point what references target element. "start", "center" or "end". default value is "start". */
  referencePoint?: ElementReferencePoint,
  /** The offset will gives extra value for TargetPosition. */
  offset?: number,
  /** List of actions. */
  actions?: Action[],
}
```

## Class

> See [declaration file](../../src/js/lib/classes/ScrollFire.d.ts)

``` ts
class ScrollFire {
  targetPosition: TargetPosition;
  listeners: ListenerMap;
  options: Options;

  constructor(options?: Options|string);

  getDefaultOptions(): Options;
  setOptions(options: Options): this;
  refresh(): void;
  setTargetPosition(target: Target, ref?: ElementReferencePoint): this;
  getTargetPosition(): TargetPosition;
  addAction(action: Action|ActionHandler): this;
  destroy(): void;
}
```

## Example

``` js
// If you want to setting target position as center position of the specific element, and gives some offset.
const scrollFire = new ScrollFire({
  target: '#target',
  referencePoint: 'center',
  offset: 200, // 200px
});

// Adds action
scrollFire.addAction({
  handler: () => console.log('target scrolled!');
  direction: 'forward',
  throttle: 500, // Once per 500ms.
});

// remove listeners
scrollFire.destroy();
```
