/// <reference path="../puppeteer.d.ts" />

import puppeteer from 'puppeteer';

/**
 * create puppeteer browser and page.
 *
 * @param {string} pagePath
 * @returns {Promise.<{browser: puppeteer.Browser, page: puppeteer.Page}>}
 */
export default async function createPuppeteer(pagePath = '') {
  /**
   * Chrome headless fails due to sandbox in Linux (Ubuntu)
   * https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-fails-due-to-sandbox-issues
   */
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  if (pagePath) {
    await page.goto(`file:///${pagePath}`);
  }
  return {browser, page};
}
