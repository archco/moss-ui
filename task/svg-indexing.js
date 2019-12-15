const { resolve, parse } = require('path');
const { globPromise } = require('file-path-helper');
const { camel } = require('cake-case');
const fs = require('fs-extra');

const svgFiles = resolve(__dirname, '../src/svg/*.svg');
const svgIndex = resolve(__dirname, '../src/svg/index.js');

(async function () {
  let files = await globPromise(svgFiles);
  let text = '';
  files = files.map(f => parse(f).name);
  for (const f of files) {
    text += `export { default as ${camel(f)} } from './${f}.svg';\n`;
  }
  await fs.outputFile(svgIndex, text);
})();
