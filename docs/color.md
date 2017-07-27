# Color
> source: [js/lib/color.js](../src/js/lib/color.js)

Javascript color utility library.

### Usage
```javascript
// Import member from package.
import { Color } from 'moss-ui';
let value = Color.contrast('#28a745');

// or use from global 'Moss' object.
let lightness = window.Moss.lib.Color.lightness('#dde4e9');
```
#### Using Instance
```javascript
let color = new Color({ r: 255, g: 128, b: 0 });
color.lightness(); // 151.381
color.contrast(); // #fff
color.toHex(); // #ff8000
```

## Static Methods
#### lightness
get RGB color's lightness value.
> Reference links  
https://www.w3.org/TR/AERT#color-contrast  
https://en.wikipedia.org/wiki/HSL_and_HSV#Lightness

- Syntax
```javascript
let value = Color.lightness(color);
```
- Param {String|Array} color
- Return {Number} (0 ~ 255)

#### contrast
return contrast color
> If use contrast method in scss, use function `getContrast($color, $dark, $light)`
[source](../src/scss/lib/_functions.scss#L7)

- Syntax
```javascript
let color = Color.contrast(color, dark = '#000', light = '#fff');
```
- Param {String|Array} color
- Param {String} [ dark = '#000' ]
- Param {String} [ light = '#fff' ]
- Return {String} - dark or light color.

## Methods
#### constructor
Available color parameter type: String, Array, Object.
```javascript
// String.
let color = new Color('#f80');
let color = new Color('rgb(42, 128, 255)');
let color = new Color('rgba(64, 255, 32, 0.3)');
// Array.
let color = new Color([255, 136, 0]);
// Object.
let color = new Color({ r: 255, g: 136, b: 0 });
```

#### toHex
Return color value by hex color format.

- Syntax
```javascript
let hexColor = color.toHex(shorthand = false);
```
- Param {Boolean} shorthand - If this true, return it as a shorthand if possible.
- Return {String}

#### toRgb
Return color to rgb format.

- Syntax
```javascript
let rgbColor = color.toRgb();
```
- Return {String} e.g. `rgb(255, 64, 0)`

#### toRgba
Return color to rgba format.

- Syntax
```javascript
let rgbaColor = color.toRgba(alpha = null);
```
- Param {Number} [alpha=null] - If this value is null, alpha value is color's alpha or 1.
- Return {String} e.g. `rgba(0, 0, 0, 0.5)`
