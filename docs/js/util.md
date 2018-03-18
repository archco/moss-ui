# Util

> source: [js/lib/util](../../src/js/lib/util.js)

The utility library for javascript.

## Usage

``` js
// Import member from package.
import { Util } from 'moss-ui';
let obj = Util.locationSearchToObject();

// or use from global 'Moss' object.
let isMobile = window.Moss.lib.Util.isMobileSize();
```

## Functions

### locationSearchToObject

location.search to Object.

- Syntax

  ``` js
  let obj = Util.locationSearchToObject();
  ```

- Return `Object|null`

### searchToObject

> [HTMLAnchorElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)  
Convert HTMLAnchorElement.search to object.

- Syntax

  ``` js
  let obj = Util.searchToObject(search);
  ```

- Param `String` search - value of `HTMLAnchorElement.search`
- Return `Object|null`

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

Converts string to CamelCase.

- Syntax

  ``` js
  let str = Util.strToCamel(str, isSmallCamel = false);
  ```

- Param `string` str
- Param `boolean` [ isSmallCamel = false ] - If true, returns as smallCamelCase.
- Returns `string`

### strToKebab

Converts string to kebab-case.

- Syntax

  ``` js
  let str = Util.strToKebab(str);
  ```

- Param `string` str
- Returns `string`

### strToNormal

Converts string to normal case. e.g. 'HelloWorld' -> 'hello world'

- Syntax

  ``` js
  let str = Util.strToNormal(str);
  ```

- Param `string` str
- Returns `string`

### capitalize

Capitalize first letters.

- Syntax

  ``` js
  let str = Util.capitalize(str);
  ```

- Param `string` str
- Returns `string`
