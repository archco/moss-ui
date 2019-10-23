/// <reference path="../../src/js/lib/classes/ScrollFire.d.ts" />
/// <reference types="element-measurer" />

import { resolve } from 'path';
import createPuppeteer from '../utils/createPuppeteer';

/** @type {puppeteer.Browser} */
let browser;
/** @type {puppeteer.Page} */
let page;

beforeAll(async (done) => {
  const p = await createPuppeteer(resolve(__dirname, './ScrollFire.html'));
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

describe('ScrollFire', () => {
  /** @type {typeof scrollFire.ScrollFire>} */
  let ScrollFire;

  it('should work.', async () => {
    const [minY, maxY] = await page.evaluate(() => {
      ScrollFire = window.ScrollFire;

      const sf = new ScrollFire({ target: '.box.third' });
      return sf.getTargetPosition();
    });
    expect(minY).toEqual(800);
    expect(maxY).toEqual(1200);
  });

  it('fire event test', async () => {
    const fn = jest.fn();
    await page.evaluate(fn => {
      ScrollFire = window.ScrollFire;
      const sf = new ScrollFire({
        target: '.box.second',
        actions: [
          { handler: fn },
        ],
      });
      sf.addListeners();
      // do scroll moving for the test!
    }, fn);
  });
});
