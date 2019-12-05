/// <reference path="./scrollTo.d.ts" />

import ElementMeasurer from 'element-measurer';
import { easing as timing } from 'transition-timing';

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

  if (typeof dest === 'number') {
    offsetTop = dest;
  } else if (Array.isArray(dest)) {
    [offsetTop, offsetLeft] = dest;
  } else {
    const elmSize = new ElementMeasurer(dest);
    offsetTop = elmSize.target.offsetTop;
    offsetLeft = elmSize.target.offsetLeft;
  }
  const scrollTopDest = (offsetTop >= baseSize.maxScrollTop)
    ? baseSize.maxScrollTop
    : (baseSize.scrollHeight - offsetTop < baseSize.clientHeight)
    ? baseSize.scrollHeight - baseSize.clientHeight
    : offsetTop;
  const scrollLeftDest = (offsetLeft >= baseSize.maxScrollLeft)
    ? baseSize.maxScrollLeft
    : (baseSize.scrollWidth - offsetLeft < baseSize.clientWidth)
    ? baseSize.scrollWidth - baseSize.clientWidth
    : offsetLeft;
  return [scrollTopDest, scrollLeftDest].map(x => Math.max(Math.round(x), 0));
}
