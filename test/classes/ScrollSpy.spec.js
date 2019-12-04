/// <reference path="../puppeteer.d.ts" />

import { resolve } from 'path';
import createPuppeteer from '../utils/createPuppeteer';

/** @type {puppeteer.Browser} */
let browser;
/** @type {puppeteer.Page} */
let page;

beforeAll(async (done) => {
  const p = await createPuppeteer(resolve(__dirname, './scrollSpy.html'));
  browser = p.browser;
  page = p.page;
  done();
}, 10e3);

afterAll(() => {
  browser.close();
});

describe('Puppeteer initialize test.', () => {
  it('should work.', async () => {
    const num = await page.evaluate(x => 5 * x, 5);
    expect(num).toEqual(25);
  });

  it('clientWidth: 800, clientHeight: 600', async () => {
    const [clientWidth, clientHeight] = await page.evaluate(() => {
      return [window.innerWidth, window.innerHeight];
    });
    expect(clientWidth).toEqual(800);
    expect(clientHeight).toEqual(600);
  });
});

describe('v-scrollspy test', () => {
  it('first menu item has been activated.', async () => {
    const firstItemActivated = await page.$eval('#menu .menu-item:nth-child(1)', elm => elm.classList.contains('active'));
    expect(firstItemActivated).toBeTruthy();
  });

  it('second item activate', async () => {
    const secondLink = await page.$('#menu .menu-item:nth-child(2) a');
    await secondLink.click();
    await page.waitFor(50); // wait for process.

    const secondItemActivated = await page.$eval('#menu .menu-item:nth-child(2)', elm => elm.classList.contains('active'));
    expect(secondItemActivated).toBeTruthy();
  });
});
