/**
 * @see https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
*/

// eslint-disable-next-line
const REGEX = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;

/**
 * Determine whether is mobile browser or not.
 *
 * @returns {boolean}
 */
export default function isMobileBrowser() {
  let check = false;
  (function(a) {
    if (REGEX.test(a)) check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
