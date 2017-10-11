'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  v-focus
 */
exports.default = {
  name: 'focus',
  inserted: function inserted(el) {
    el.focus();
  }
};