/************************************************************
  Color
*************************************************************/
const Config = {
  lightnessPoint: 166, // 65%
  darkDefault: '#000',
  lightDefault: '#fff',
};

export default class Color {
  constructor(color) {
    this._color = Color.colorToArray(color);
  }

  getContrast(dark = Config.darkDefault, light = Config.lightDefault) {
    return Color.contrast(this._color, dark, light);
  }

  // static

  /**
   * color to rgb array.
   *
   * @param  {String|Array} color
   * @return {Array}  [red, green, blue]
   */
  static colorToArray(color) {
    let array = [];
    if (typeof color == 'string') {
      array = this.hexToRgb(color);
    } else if (Array.isArray(color)) {
      array = color;
    } else {
      throw new Error('parameter only "hex color" or "rgb array"');
    }

    return array;
  }

  /**
   * hex color to rgb array.
   * @link http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   *
   * @param  {String}  hex
   * @return {Array}
   */
  static hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

    return hex.replace(shorthandRegex, (m, r, g, b) => '#' + r + r + g + g + b + b)
              .substring(1).match(/.{2}/g)
              .map(x => parseInt(x, 16));
  }

  /**
   * rgb values to hex color string
   *
   * @param  {Number} r
   * @param  {Number} g
   * @param  {Number} b
   * @param  {Boolean} [ toShort = false ] convert to shorthand.
   * @return {String}
   */
  static rgbToHex(r, g, b, toShort = false) {
    let hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

    return toShort ? this._hexToShorthand(hex) : hex;
  }

  static _hexToShorthand(hex) {
    let check = true;
    let rgb = hex.substring(1).match(/.{2}/g);

    // check.
    rgb.map(x => {
      if (!x.match(/(.)\1+/)) check = false;
    });

    return check ? '#' + rgb.map(x => x.substring(1)).join('') : hex;
  }

  /**
   * get rgb color's lightness value.
   *
   * @param  {String|Array} color
   * @return {Number}  (0 ~ 255)
   */
  static lightness(color) {
    let rgb = this.colorToArray(color);

    // Color lightness formula.
    // @link https://www.w3.org/TR/AERT#color-contrast
    return ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
  }

  /**
   * return contrast color of input.
   *
   * @param  {String|Array} color
   * @param  {String}  dark
   * @param  {String}  light
   * @return {String}  dark or light
   */
  static contrast(color, dark = Config.darkDefault, light = Config.lightDefault) {
    return (this.lightness(color) > Config.lightnessPoint) ? dark : light;
  }
}
