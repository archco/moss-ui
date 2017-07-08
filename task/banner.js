const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const banner = `/*!
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 */`;
const files = [
  path.join(__dirname, '../src/scss/cosmos.scss'),
  path.join(__dirname, '../src/js/cosmos.js'),
];

files.forEach(file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;

    let result = data.replace(/\/\*!([\s\S]*?)\*\//, banner);
    fs.writeFile(file, result, 'utf8', (err) => {
      if (err) throw err;
      console.log(`Banner added to "${file}"`);
    });
  });
});
