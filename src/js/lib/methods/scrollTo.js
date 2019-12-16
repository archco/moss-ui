/// <reference path="./scrollTo.d.ts" />

import ElementMeasurer from 'element-measurer';
import { easing as timing } from 'transition-timing';
import isMobileBrowser from './isMobileBrowser';

/**
 * Scroll to destination with transition.
 *
 * @export
 * @param {ScrollTo.DestType} dest
 * @param {ScrollTo.ScrollToOptions} [options={}]
 * @returns {Promise<void>}
 */
export default function scrollTo(
  dest,
  {
    duration = 300,
    easing = 'linear',
    base = document.documentElement
  } = {}
) {
  return new Promise((resolve) => {
    const baseSize = new ElementMeasurer(base);
    const timeFn = timing(easing);
    const startTop = baseSize.scrollTop;
    const startLeft = baseSize.scrollLeft;
    const startTime = performance.now();
    let [scrollTopDest, scrollLeftDest] = getScrollDest(dest, baseSize);

    if (duration === 0 || 'requestAnimationFrame' in window === false ) {
      baseSize.scrollTop = scrollTopDest;
      baseSize.scrollLeft = scrollLeftDest;
      resolve();
      return;
    }
    // in mobile browser, sometime occurs bug that sticked bottom. #152
    // using `window.scrollTo` instead.
    if (isMobileBrowser()) {
      window.scrollTo({
        top: scrollTopDest,
        left: scrollLeftDest,
        behavior: 'smooth'
      });
      resolve();
      return;
    }

    const scroll = (now) => {
      const timeRatio = Math.min(1, (now - startTime) / duration);
      const outputRatio = timeFn(timeRatio);
      // re-calculates destination, for prevent error when scrollHeight has been changed when during scrolling.
      [scrollTopDest, scrollLeftDest] = getScrollDest(dest, baseSize);

      baseSize.scrollTop = Math.ceil(outputRatio * (scrollTopDest - startTop) + startTop);
      baseSize.scrollLeft = Math.ceil(outputRatio * (scrollLeftDest - startLeft) + startLeft);

      if (baseSize.scrollTop === scrollTopDest
        && baseSize.scrollLeft === scrollLeftDest) {
        resolve();
        return;
      }

      requestAnimationFrame(scroll);
    }

    scroll(performance.now());
  });
}

/**
 * Get scroll destination.
 *
 * @param {ScrollTo.DestType} dest
 * @param {ElementMeasurer} baseSize
 * @returns {[number, number]} scrollTop and scrollLeft.
 */
function getScrollDest(dest, baseSize) {
  let offsetTop = 0;
  let offsetLeft = 0;
  const between = (x, min, max) => Math.max(min, Math.min(max, Math.ceil(x)));
  // set offset.
  if (typeof dest === 'number') {
    offsetTop = dest;
  } else if (Array.isArray(dest)) {
    [offsetTop, offsetLeft] = dest;
  } else {
    const elmSize = new ElementMeasurer(dest);
    offsetTop = elmSize.target.offsetTop;
    offsetLeft = elmSize.target.offsetLeft;
  }

  return [
    between(offsetTop, 0, baseSize.maxScrollTop),
    between(offsetLeft, 0, baseSize.maxScrollLeft)
  ];
}
