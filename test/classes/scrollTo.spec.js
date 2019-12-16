/// <reference path="../../src/js/lib/methods/scrollTo.d.ts" />

import { resolve } from 'path';
import createPuppeteer from '../utils/createPuppeteer';

/**
 * @typedef {import('element-measurer').ElementMeasurer} ElementMeasurer
 * @typedef {ScrollTo.default} scrollTo
 */

/** @type {puppeteer.Browser} */
let browser;
/** @type {puppeteer.Page} */
let page;

beforeEach(async (done) => {
  const p = await createPuppeteer(resolve(__dirname, './scrollTo.html'));
  browser = p.browser;
  page = p.page;
  done();
}, 20e3);

afterEach(() => {
  browser.close();
});

describe('Puppeteer initialize test.', () => {
  it('clientWidth: 800, clientHeight: 600', async () => {
    const [clientWidth, clientHeight] = await page.evaluate(() => {
      return [window.innerWidth, window.innerHeight];
    });
    expect(clientWidth).toEqual(800);
    expect(clientHeight).toEqual(600);
  });

  it('set scrollTo function and ElementMeasurer class.', async () => {
    const res = await page.evaluate(() => {
      const docSize = new window.Moss.ElementMeasurer();
      return typeof window.Moss.scrollTo === 'function'
        && docSize instanceof window.Moss.ElementMeasurer;
    });
    expect(res).toBeTruthy();
  });
});

describe('scrollTo', () => {
  it('should works.', async () => {
    const results = await page.evaluate(async () => {
      /** @type {ElementMeasurer} */
      const docSize = new window.Moss.ElementMeasurer();
      const result1 = docSize.scrollTop; // expect 0.

      await window.Moss.scrollTo(400);
      const result2 = docSize.scrollTop; // expect 400.
      return [result1, result2];
    });
    expect(results[0]).toBe(0);
    expect(results[1]).toBe(400);
  });

  it('not changed if clientHeight is bigger than scrollHeight.', async () => {
    const res = await page.evaluate(async () => {
      const elms = document.querySelectorAll('.box:not(.first)');
      for (let elm of elms) {
        elm.parentElement.removeChild(elm);
      }
      /** @type {ElementMeasurer} */
      const docSize = new window.Moss.ElementMeasurer();
      const res1 = docSize.clientHeight; // 600
      const res2 = document.querySelector('#app').clientHeight // 400
      await window.Moss.scrollTo(200);
      const res3 = docSize.scrollTop; // 0
      return [res1, res2, res3];
    });
    expect(res[0]).toBe(600);
    expect(res[1]).toBe(400);
    expect(res[2]).toBe(0);
  });

  it('scroll destination restricted to until maxScrollHeight even if destination is bigger than scrollHeight.', async () => {
    const res = await page.evaluate(async () => {
      /** @type {ElementMeasurer} */
      const docSize = new window.Moss.ElementMeasurer();
      const res1 = docSize.scrollTop; // 0
      await window.Moss.scrollTo(2000);
      const res2 = docSize.scrollTop; // 1000
      return [res1, res2];
    });
    expect(res[0]).toBe(0);
    expect(res[1]).toBe(1000);
  });

  it('TEST for dest was changed during scrolling.', async () => {
    const res = await page.evaluate(async () => {
      /** @type {ElementMeasurer} */
      const docSize = new window.Moss.ElementMeasurer();
      setTimeout(() => {
        // reduce scrollHeight
        const box = document.querySelector('.box.fourth');
        box.parentElement.removeChild(box); // 1600 -> 1200
      }, 300);
      await window.Moss.scrollTo(docSize.maxScrollTop, { duration: 600 });
      return docSize.scrollTop;
    });

    expect(res).toBe(600);
  });
});
