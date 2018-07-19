# Util

> source: [js/lib/util](../../src/js/lib/util.js)

The javascript library that includes utility methods.

### Table of contents

- [Basic usage](#basic-usage)
- [Functions](#functions)
  - [locationSearchToObject](#locationsearchtoobject)
  - [searchToObject](#searchtoobject)
  - [isContains](#iscontains)
  - [isEmpty](#isempty)
  - [isMobileSize](#ismobilesize)
  - [scrollTo](#scrollto)
  - [addSvg](#addsvg)
  - [getSvgByName](#getsvgbyname)
  - [makeIcon](#makeicon)
  - [makeIconHtml](#makeiconhtml)

## Basic usage

``` js
// Import member from package.
import { Util } from 'moss-ui';
let obj = Util.locationSearchToObject();

// or use from global 'Moss' object.
let isMobile = window.Moss.lib.Util.isMobileSize();
```

## Functions

### locationSearchToObject

Converts current `location.search` to object.

- Syntax

  ``` js
  let obj = Util.locationSearchToObject();
  ```

- Return `Object|null`

### searchToObject

Converts [`HTMLHyperlinkElementUtils.search`] to object.

- Syntax

  ``` js
  let obj = Util.searchToObject(search);
  ```

- Param `string` search - value of [`HTMLHyperlinkElementUtils.search`]
- Return `object|null`

### isContains

Returns true if "big object" contains "small object".

- Syntax

  ``` js
  let bool = Util.isContains(big, small);
  ```

- Param `any` big
- Param `any` small
- Return: `Boolean`

### isEmpty

Determine whether value is empty.

- Syntax

  ``` js
  let bool = Util.isEmpty(val);
  ```

- Param `any` val
- Return: `Boolean`

### isMobileSize

- Syntax

  ``` js
  let bool = Util.isMobileSize(size = 800);
  ```

- Param `Number` [ size = 800 ] - width (px)
- Return `Boolean`

### strToCamel

> **Deprecated in 0.6.x** - use `Case.camel` or `Case.pascal` instead.

Converts string to CamelCase.

- Syntax

  ``` js
  let str = Util.strToCamel(str, isSmallCamel = false);
  ```

- Param `string` str
- Param `boolean` [ isSmallCamel = false ] - If true, returns as smallCamelCase.
- Returns `string`

### strToKebab

> **Deprecated in 0.6.x** - use `Case.kebab` instead.

Converts string to kebab-case.

- Syntax

  ``` js
  let str = Util.strToKebab(str);
  ```

- Param `string` str
- Returns `string`

### strToNormal

> **Deprecated in 0.6.x** - use `Case.lower` instead.

Converts string to normal case. e.g. 'HelloWorld' -> 'hello world'

- Syntax

  ``` js
  let str = Util.strToNormal(str);
  ```

- Param `string` str
- Returns `string`

### capitalize

> **Deprecated in 0.6.x** - use `Case.capital` instead.

Capitalize first letters.

- Syntax

  ``` js
  let str = Util.capitalize(str);
  ```

- Param `string` str
- Returns `string`

### scrollTo

Scroll to destination with transition.

- Syntax

  ``` js
  Util.scrollTo(dest, options = {});
  ```

- Param `DestType` dest - Destination types. If it's `number` means scrollTop destination. or if it's `[number, number]` means [scrollTop, scrollLeft] destination. If it's `string` or `HTMLElement`, then sets destination as Element.

  ``` ts
  type DestType = number|[number, number]|string|HTMLElement;
  ```

- Param `ScrollTopOptions` [options={}]

  ``` ts
  interface ScrollToOptions {
    /** 
     * Transition duration time. unit is milliseconds.
     * If this value sets 0, then scroll position sets destination immediately.
     */
    duration?: number;

    /**
     * Specify an easing type.
     * available common keywords is `linear`, `ease`, `easIn`, `easeOut` or `easeInOut`.
     * default value is `linear`.
     */
    easing?: string;

    /**
     * Specify a callback function that will called after scroll moved done.
     */
    callback?: () => void;

    /**
     * Specify the base element. default is `document.documentElement`.
     * If you want to move scrolling within an element with has style such as `overflow: auto;`,
     * then you should set this value to target element.
     */
    base?: string|HTMLElement;
  }
  ```

- Returns `Promise<void>`

### addSvg

Add custom svg icon into the SVG icon list.

- Syntax

  ``` ts
  addSvg(name: string, value: string): void;
  ```

- Param `string` name - the name of an svg-icon.
- Param `string` value - string of the svg. e.g. `'<svg>..</svg>'`
- Returns `void`

### getSvgByName

Get svg string by name.

- Syntax

  ``` ts
  getSvgByName(name: string): string;
  ```

- Param `string` name - the name of an svg-icon.
- Returns `string` string of the svg. e.g. `'<svg>..</svg>'`

### makeIcon

Make icon element by svg-icon name.

- Syntax

  ``` ts
  makeIcon(name: string): HTMLElement;
  ```

- Param `string` name - the name of an svg-icon.
- Returns `HTMLElement`

### makeIconHtml

Make icon html string by svg-icon name.

- Syntax

  ``` ts
  makeIconHtml(name: string): string;
  ```

- Param `string` name - the name of an svg-icon.
- Returns `string` html string. e.g. `'<i class="moss-icon"><svg>..</svg></i>'`

[`HTMLHyperlinkElementUtils.search`]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search
