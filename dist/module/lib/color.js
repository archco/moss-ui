'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  Color
*************************************************************/
var Config = {
  lightnessPoint: 166, // 65%
  darkDefault: '#000',
  lightDefault: '#fff'
};

var Color = function () {
  function Color(color) {
    _classCallCheck(this, Color);

    this._color = Color.colorToArray(color);
  }

  _createClass(Color, [{
    key: 'getContrast',
    value: function getContrast() {
      var dark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Config.darkDefault;
      var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.lightDefault;

      return Color.contrast(this._color, dark, light);
    }

    // static

    /**
     * color to rgb array.
     *
     * @param  {String|Array} color
     * @return {Array}  [red, green, blue]
     */

  }], [{
    key: 'colorToArray',
    value: function colorToArray(color) {
      var array = [];
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

  }, {
    key: 'hexToRgb',
    value: function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

      return hex.replace(shorthandRegex, function (m, r, g, b) {
        return '#' + r + r + g + g + b + b;
      }).substring(1).match(/.{2}/g).map(function (x) {
        return parseInt(x, 16);
      });
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

  }, {
    key: 'rgbToHex',
    value: function rgbToHex(r, g, b) {
      var toShort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var hex = '#' + [r, g, b].map(function (x) {
        return x.toString(16).padStart(2, '0');
      }).join('');

      return toShort ? this._hexToShorthand(hex) : hex;
    }
  }, {
    key: '_hexToShorthand',
    value: function _hexToShorthand(hex) {
      var check = true;
      var rgb = hex.substring(1).match(/.{2}/g);

      // check.
      rgb.map(function (x) {
        if (!x.match(/(.)\1+/)) check = false;
      });

      return check ? '#' + rgb.map(function (x) {
        return x.substring(1);
      }).join('') : hex;
    }

    /**
     * get rgb color's lightness value.
     *
     * @param  {String|Array} color
     * @return {Number}  (0 ~ 255)
     */

  }, {
    key: 'lightness',
    value: function lightness(color) {
      var rgb = this.colorToArray(color);

      // Color lightness formula.
      // @link https://www.w3.org/TR/AERT#color-contrast
      return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    }

    /**
     * return contrast color of input.
     *
     * @param  {String|Array} color
     * @param  {String}  dark
     * @param  {String}  light
     * @return {String}  dark or light
     */

  }, {
    key: 'contrast',
    value: function contrast(color) {
      var dark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.darkDefault;
      var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Config.lightDefault;

      return this.lightness(color) > Config.lightnessPoint ? dark : light;
    }
  }]);

  return Color;
}();

exports.default = Color;