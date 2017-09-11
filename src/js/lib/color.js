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

  /**
   * Return color value by rgb format.
   *
   * @return {String}
   */
  toRgb() {
    let c = this._color;
    return `rgb(${c.r}, ${c.g}, ${c.b})`;
  }

  /**
   * Return color to rgba format.
   *
   * @param  {Number|null} [alpha=null]
   * @return {String}
   */
  toRgba(alpha = null) {
    let c = this._color;
    c.a = alpha || c.a || 1;

    return `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`;
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
    } else if (string.substr(0, 3) === 'rgb') {
      return this._rgbToColor(string);
    } else {
      throw new Error('stringToColor parsing error.');
    }
  }

  _arrayToColor(array) {
    let obj = {
      r: array[0],
      g: array[1],
      b: array[2],
    };

    if (array[3]) {
      obj.a = array[3];
    }

    return obj;
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

  _rgbToColor(str) {
    let array = this._bracketsToArray(str);
    return this._arrayToColor(array);
  }

  _bracketsToArray(str) {
    let res = /\(([^)]+)\)/.exec(str);
    if (res) {
      return res[1].split(',').map(elm => parseFloat(elm));
    } else {
      throw new Error('String parsing error.');
    }
  }
}
