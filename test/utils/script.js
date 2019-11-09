/**
 * Auto scroll page.
 * @link https://stackoverflow.com/questions/51529332/puppeteer-scroll-down-until-you-cant-anymore
 *
 * @returns {Promise.<void>}
 */
function autoScroll() {
  return new Promise((resolve, reject) => {
    if (window.innerHeight > document.body.scrollHeight) {
      reject('window.innerHeight is bigger than scrollHeight!');
    }

    let totalHeight = 0;
    const distance = 100;
    const interval = 100;
    let timer = setInterval(() => {
      const scrollHeight = document.body.scrollHeight;
      window.scrollBy(0, distance);
      totalHeight += distance;

      if(totalHeight >= scrollHeight) {
        clearInterval(timer);
        resolve();
      }
    }, interval);
  });
}

window.autoScroll = autoScroll;
