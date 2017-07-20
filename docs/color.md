# Color
> source: [js/lib/color.js](../src/js/lib/color.js)

Javascript color utility library.

### Usage
```javascript
// Import member from package.
import { Color } from 'cosmos-ui';
let value = Color.contrast('#28a745');

// or use from global 'Cosmos' object.
let lightness = window.Cosmos.lib.Color.lightness('#dde4e9');
```

## Static Methods
#### hexToRgb
Hex color convert to RGB array.
- Syntax
```javascript
let rgbArray = Color.hexToRgb(hex);
```
- Param {String} hex - hex value of color.
- Return {Array} (e.g. [255, 255, 255])

#### rgbToHex
RGB values convert to hex color string.
- Syntax
```javascript
let hexColor = Color.rgbToHex(r, g, b, toShort = false);
```
- Param {Number} r - red value (0~255)
- Param {Number} g - green value (0~255)
- Param {Number} b - blue value (0~255)
- Param {Boolean} [ toShort = false ] if true, convert to shorthand.
- Return {String} (e.g. "#ffffff" or "#fff")

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
