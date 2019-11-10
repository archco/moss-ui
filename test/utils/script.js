/**
 * Auto scroll page.
 * @link https://stackoverflow.com/questions/51529332/puppeteer-scroll-down-until-you-cant-anymore
 *
 * @param {number|null} until destination of scroll position. null = until end (default: null)
 * @param {number} distance distance of scroll. absolute value (default: 100)
 * @param {number} interval interval of scroll. <ms> (default: 50)
 * @returns {Promise.<number>} current window.pageYOffset
 */
function autoScroll(until = null, distance = 100, interval = 50) {
  return new Promise((resolve, reject) => {
    if (window.innerHeight > document.documentElement.scrollHeight) {
      reject('window.innerHeight is bigger than scrollHeight!');
    }

    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    let current = window.pageYOffset;
    const dest = until == null ? maxScrollTop : until;
    const isForward = current < dest;
    distance = isForward ? distance : - distance;

    let timer = setInterval(() => {
      window.scrollBy(0, distance);
      current += distance;

      if(isForward ? current >= dest : dest >= current) {
        clearInterval(timer);
        resolve(window.pageYOffset);
      }
    }, interval);
  });
}

window.autoScroll = autoScroll;
