import scrollIt from './utils/scroll-it.js';

class Util {

  /**
   * location.search to Object.
   *
   * @return {Object|null}
   */
  static locationSearchToObject() {
    return this.searchToObject(window.location.search);
  }

  /**
   * searchToObject
   *
   * @param  {String} search HTMLAnchorElement.search
   * @return {Object|null}
   */
  static searchToObject(search) {
    if (search === '') return null;

    let queries = search.substring(1).split('&');
    let obj = {};

    queries.forEach((value) => {
      let q = value.split('=');
      if (!q[1]) return;
      obj[decodeURIComponent(q[0])] = decodeURIComponent(q[1]);
    });

    return obj;
  }

  /**
   * returns true if 'big' contains 'small'.
   *
   * @param  {mixed}  big
   * @param  {mixed}  small
   * @return {Boolean}
   */
  static isContains(big, small) {
    if (typeof big !== typeof small) return false;

    if (Array.isArray(big) && Array.isArray(small)) {
      let correct = 0;
      big.forEach((v) => {
        if (small.includes(v)) correct++;
      });
      return correct == small.length;
    } else if (Object(big) === big && Object(small) === small) {
      for (let p in small) {
        if (!(p in big && this.isContains(big[p], small[p]))) return false;
      }

      return true;
    } else {
      return big === small;
    }
  }

  /**
   * Determine whether value is empty.
   * @link https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
   *
   * @param  {Mixed}  val
   * @return {Boolean}
   */
  static isEmpty(val) {
    if (typeof val === 'undefined') return true;
    if (val === null) return true;
    if (typeof val === 'boolean') return !val;
    if (typeof val === 'number') return val <= 0;
    if (typeof val === 'string') return val.length === 0;
    if (Array.isArray(val)) return val.length === 0;
    if (typeof val === 'object') {
      return Object.keys(val).length === 0 && val.constructor === Object;
    }
  }

  /**
   * isMobileSize
   *
   * @param  {Number}  [ size = 800 ]
   * @return {Boolean}
   */
  static isMobileSize(size = 800) {
    return window.innerWidth < size;
  }
}

Object.assign(Util, {
  scrollIt,
});

export default Util;
