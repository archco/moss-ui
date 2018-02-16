const fs = require('fs');
const path = require('path');
const version = require('../package.json').version;

const file = path.resolve(__dirname, 'version.js');
const text = `export default '${version}';\n`;

fs.writeFile(file, text, err => {
  if (err) return console.error(err);
  console.log('version extracted.');
});
