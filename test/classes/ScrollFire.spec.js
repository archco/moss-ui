/// <reference path="../../src/js/lib/classes/ScrollFire.d.ts" />
/// <reference types="element-measurer" />
/// <reference types="jest" />

import { resolve } from 'path';
import createPuppeteer from '../utils/createPuppeteer';

/** @type {puppeteer.Browser} */
let browser;
/** @type {puppeteer.Page} */
let page;

beforeEach(async (done) => {
  const p = await createPuppeteer(resolve(__dirname, './ScrollFire.html'));
  browser = p.browser;
  page = p.page;
  done();
}, 20e3);

afterEach(() => {
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
    const isActivated = await page.evaluate(async () => {
      const elm = document.querySelector('.box.second');
      const handler = () => elm.classList.add('active');

      ScrollFire = window.ScrollFire;
      const sf = new ScrollFire({
        target: '.box.second',
        actions: [
          { handler },
        ],
      });
      sf.addListeners();

      await window.autoScroll();
      return elm.classList.contains('active');
    });
    expect(isActivated).toBeTruthy();
  });

  it('addAction TEST', async () => {
    const [forwardResult, reverseResult] = await page.evaluate(async () => {
      ScrollFire = window.ScrollFire;
      const scrollFire = new ScrollFire({ target: '.box.second' });

      scrollFire.addAction({
        direction: 'reverse',
        handler: elm => elm.classList.add('active'),
      }).addListeners();
      // forward scrolling.
      await window.autoScroll();
      const elm = document.querySelector('.box.second');
      const forwardResult = elm.classList.contains('active'); // expect false.
      // reverse scrolling.
      await window.autoScroll(0);
      const reverseResult = elm.classList.contains('active'); // expect true.
      return [forwardResult, reverseResult];
    });

    expect(forwardResult).toBeFalsy();
    expect(reverseResult).toBeTruthy();
  });

  it('referencePoint TEST', async () => {
    const results = await page.evaluate(async () => {
      ScrollFire = window.ScrollFire;
      const scrollFire = new ScrollFire({
        target: '.box.second', // box height: 400 ~ 800
        referencePoint: 'center', // reference point: 600
      });
      scrollFire.addAction({
        direction: 'forward',
        handler: elm => elm.classList.add('active'),
      }).addListeners();
      const checkActive = () => document.querySelector('.box.second').classList.contains('active');

      const firstResult = checkActive(); // expect false.
      // scroll until 500.
      await window.autoScroll(500);
      const secondResult = checkActive(); // expect false.
      // scroll until 700.
      await window.autoScroll(700);
      const thirdResult = checkActive(); // expect true.
      return [firstResult, secondResult, thirdResult];
    });

    expect(results[0]).toBeFalsy();
    expect(results[1]).toBeFalsy();
    expect(results[2]).toBeTruthy();
  });

  it('offset TEST', async () => {
    const results = await page.evaluate(async () => {
      ScrollFire = window.ScrollFire;
      const scrollFire = new ScrollFire({
        target: '.box.second', // box height: 400 ~ 800
        offset: 200, // expected targetPosition: 200 ~ 1000
      });
      scrollFire.addAction({
        direction: 'forward',
        handler: elm => elm.classList.add('active'),
      }).addListeners();
      const checkActive = () => document.querySelector('.box.second').classList.contains('active');
      const firstResult = checkActive(); // expect false.
      // scroll until 300
      await window.autoScroll(300);
      const secondResult = checkActive(); // expect true.
      return [firstResult, secondResult];
    });

    expect(results[0]).toBeFalsy();
    expect(results[1]).toBeTruthy();
  });

  it('destroy TEST', async () => {
    const results = await page.evaluate(async () => {
      ScrollFire = window.ScrollFire;
      const scrollFire = new ScrollFire({ target: '.box.second' });
      scrollFire.addAction({
        handler: elm => elm.classList.add('active'),
      }).addListeners();
      const elm = document.querySelector('.box.second');
      const checkActive = () => elm.classList.contains('active');
      // scroll.
      await window.autoScroll();
      const firstResult = checkActive(); // expect true.
      // destroy and reset.
      scrollFire.destroy();
      elm.classList.remove('active');
      window.scrollTo(0, 0);
      // scroll again.
      await window.autoScroll();
      const secondResult = checkActive(); // expect false.
      return [firstResult, secondResult];
    });

    expect(results[0]).toBeTruthy();
    expect(results[1]).toBeFalsy();
  });
});
