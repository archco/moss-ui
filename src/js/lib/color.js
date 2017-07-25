/************************************************************
  Color
*************************************************************/
const Default = {
  lightnessPoint: 166, // 65%
  darkDefault: '#000',
  lightDefault: '#fff',
};

export default class Color {
  /**
   * constructor
   *
   * @param  {String|Array|Object} color
   * @param  {Object} [options={}]
   * @return {Color}
   */
  constructor(color, options = {}) {
    this.option = Object.assign(Default, options);
    return this.setColor(color);
  }

  // static

  /**
   * Return lightness value. (0 ~ 255)
   *
   * @param  {String|Array|Object} color
   * @return {Number} 0 ~ 255
   */
  static lightness(color) {
    return new this(color).lightness();
  }

  /**
   * Return contrast color of given color.
   *
   * @param  {String|Array|Object} color
   * @param  {String} [ dark = Default.darkDefault ]
   * @param  {String} [ light = Default.lightDefault ]
   * @return {String} dark or light
   */
  static contrast(color, dark = Default.darkDefault, light = Default.lightDefault) {
    return new this(color).contrast(dark, light);
  }

  // public

  setColor(color) {
    if (typeof color === 'string') {
      this._color = this._stringToColor(color);
    } else if (Array.isArray(color)) {
      this._color = this._arrayToColor(color);
    } else if (typeof color === 'object') {
      this._color = color;
    } else {
      throw new TypeError('color only "string", "array" or "object".');
    }

    return this;
  }

  /**
   * Return color value by hex color format.
   *
   * @param  {Boolean} [shorthand=false]
   * @return {String}
   */
  toHex(shorthand = false) {
    let array = [
      this._color.r,
      this._color.g,
      this._color.b,
    ];
    let hex = '#' + array.map(x => x.toString(16).padStart(2, '0')).join('');

    return shorthand ? this._hexToShorthand(hex) : hex;
  }

  lightness() {
    // Color lightness formula.
    // @link https://www.w3.org/TR/AERT#color-contrast
    return ((this._color.r * 299) + (this._color.g * 587) + (this._color.b * 114)) / 1000;
  }

  contrast(dark = this.option.darkDefault, light = this.option.lightDefault) {
    return (this.lightness() > this.option.lightnessPoint) ? dark : light;
  }

  // private

  _stringToColor(string) {
    if (string.substr(0, 1) === '#') {
      return this._hexToColor(string);
    } else {
      throw new Error('stringToColor parsing error.');
    }
  }

  _arrayToColor(array) {
    return {
      r: array[0],
      g: array[1],
      b: array[2],
    };
  }

  /**
   * Convert hex color to color object.
   * @link http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   *
   * @param  {String} hex
   * @return {Object}
   */
  _hexToColor(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    let rgbArray = hex.replace(shorthandRegex, (m, r, g, b) =>
      '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16));

    return this._arrayToColor(rgbArray);
  }

  _hexToShorthand(hex) {
    let check = true;
    let rgb = hex.substring(1).match(/.{2}/g);

    // check.
    rgb.map(x => {
      if (!x.match(/(.)\1+/)) check = false;
    });

    return check ? '#' + rgb.map(x => x.substring(1)).join('') : hex;
  }
}
