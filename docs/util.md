# Util
> source: [js/lib/util](../src/js/lib/util.js)

The utility library for javascript.

### Usage
```javascript
// Import member from package.
import { Util } from 'cosmos-ui';
let obj = Util.locationSearchToObject();

// or use from global 'Cosmos' object.
let isMobile = window.Cosmos.lib.Util.isMobileSize();
```

## Functions

#### locationSearchToObject
location.search to Object.
- Syntax
```javascript
let obj = Util.locationSearchToObject();
```
- Return {Object|null}

#### searchToObject
> [HTMLAnchorElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)  
Convert HTMLAnchorElement.search to object.

- Syntax
```javascript
let obj = Util.searchToObject(search);
```
- Param {String} search - value of HTMLAnchorElement.search
- Return {Object|null}

#### isContains
Returns true if "big object" contains "small object".
- Syntax
```javascript
let bool = Util.isContains(big, small);
```
- Param {mixed} big
- Param {mixed} small
- Return: {Boolean}

#### isMobileSize
- Syntax
```javascript
let bool = Util.isMobileSize(size = 800);
```
- Param {Number} [ size = 800 ] - width (px)
- Return {Boolean}