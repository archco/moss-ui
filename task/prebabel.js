const fs = require('fs-extra');
const path = require('path');

const srcPath = path.resolve(__dirname, '../src/js/');
const distPath = path.resolve(__dirname, '../dist/module/');
let vueFileCount = 0;
const copyOptions = {
  filter(src) {
    if (src.lastIndexOf('.') == -1) return true; // directories.
    let ext = src.substr(src.lastIndexOf('.'));
    if (ext == '.vue') {
      vueFileCount++;
      return true;
    } else {
      return false;
    }
  },
};

// prebabel task.
// 1. Empty dist/module directory.
fs.emptyDir(distPath)
.catch(err => console.error(err))
.then(() => {
  console.log('Empty Directory: ' + distPath);

  // 2. Copy .vue files.
  return fs.copy(srcPath, distPath, copyOptions);
})
.catch(err => console.error(err))
.then(() => {
  console.log(`Copy ${vueFileCount} .vue files successfully.`);
});
