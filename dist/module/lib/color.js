'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  Color
*************************************************************/
var Default = {
  lightnessPoint: 166, // 65%
  darkDefault: '#000',
  lightDefault: '#fff'
};

var Color = function () {
  /**
   * constructor
   *
   * @param  {String|Array|Object} color
   * @param  {Object} [options={}]
   * @return {Color}
   */
  function Color(color) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Color);

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


  _createClass(Color, [{
    key: 'setColor',


    // public

    value: function setColor(color) {
      if (typeof color === 'string') {
        this._color = this._stringToColor(color);
      } else if (Array.isArray(color)) {
        this._color = this._arrayToColor(color);
      } else if ((typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object') {
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

  }, {
    key: 'toHex',
    value: function toHex() {
      var shorthand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var array = [this._color.r, this._color.g, this._color.b];
      var hex = '#' + array.map(function (x) {
        return x.toString(16).padStart(2, '0');
      }).join('');

      return shorthand ? this._hexToShorthand(hex) : hex;
    }

    /**
     * Return color value by rgb format.
     *
     * @return {String}
     */

  }, {
    key: 'toRgb',
    value: function toRgb() {
      var c = this._color;
      return 'rgb(' + c.r + ', ' + c.g + ', ' + c.b + ')';
    }

    /**
     * Return color to rgba format.
     *
     * @param  {Number|null} [alpha=null]
     * @return {String}
     */

  }, {
    key: 'toRgba',
    value: function toRgba() {
      var alpha = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var c = this._color;
      c.a = alpha || c.a || 1;

      return 'rgba(' + c.r + ', ' + c.g + ', ' + c.b + ', ' + c.a + ')';
    }
  }, {
    key: 'lightness',
    value: function lightness() {
      // Color lightness formula.
      // @link https://www.w3.org/TR/AERT#color-contrast
      return (this._color.r * 299 + this._color.g * 587 + this._color.b * 114) / 1000;
    }
  }, {
    key: 'contrast',
    value: function contrast() {
      var dark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.option.darkDefault;
      var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option.lightDefault;

      return this.lightness() > this.option.lightnessPoint ? dark : light;
    }

    // private

  }, {
    key: '_stringToColor',
    value: function _stringToColor(string) {
      if (string.substr(0, 1) === '#') {
        return this._hexToColor(string);
      } else if (string.substr(0, 3) === 'rgb') {
        return this._rgbToColor(string);
      } else {
        throw new Error('stringToColor parsing error.');
      }
    }
  }, {
    key: '_arrayToColor',
    value: function _arrayToColor(array) {
      var obj = {
        r: array[0],
        g: array[1],
        b: array[2]
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

  }, {
    key: '_hexToColor',
    value: function _hexToColor(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      var rgbArray = hex.replace(shorthandRegex, function (m, r, g, b) {
        return '#' + r + r + g + g + b + b;
      }).substring(1).match(/.{2}/g).map(function (x) {
        return parseInt(x, 16);
      });

      return this._arrayToColor(rgbArray);
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
  }, {
    key: '_rgbToColor',
    value: function _rgbToColor(str) {
      var array = this._bracketsToArray(str);
      return this._arrayToColor(array);
    }
  }, {
    key: '_bracketsToArray',
    value: function _bracketsToArray(str) {
      var res = /\(([^)]+)\)/.exec(str);
      if (res) {
        return res[1].split(',').map(function (elm) {
          return parseFloat(elm);
        });
      } else {
        throw new Error('String parsing error.');
      }
    }
  }], [{
    key: 'lightness',
    value: function lightness(color) {
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

  }, {
    key: 'contrast',
    value: function contrast(color) {
      var dark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Default.darkDefault;
      var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Default.lightDefault;

      return new this(color).contrast(dark, light);
    }
  }]);

  return Color;
}();

exports.default = Color;