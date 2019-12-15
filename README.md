# MOSS-UI

[![Build Status](https://travis-ci.org/archco/moss-ui.svg?branch=master)](https://travis-ci.org/archco/moss-ui)
[![npm version](https://badge.fury.io/js/moss-ui.svg)](https://www.npmjs.com/package/moss-ui)
[![Downloads](https://img.shields.io/npm/dm/moss-ui.svg)](https://www.npmjs.com/package/moss-ui)

The front-end UI framework with Vue.js and SCSS.

## Demo

[https://archco.github.io/moss-ui/](https://archco.github.io/moss-ui/)

## Installation

``` sh
npm install moss-ui
```

## Configuration

### SCSS

``` scss
// In your app.scss file.
@import 'app-variables'; // Customize variables for application.
@import '~moss-ui/src/scss/moss';
...
```

### Vue Plugin

``` js
// In your app.js
import Vue from 'vue';
import MossUI from 'moss-ui';

Vue.use(MossUI);

window.vm = new Vue({
  el: '#app',
});
```

### In HTML

``` html
<!-- in the <head> tag -->
<link rel="stylesheet" href="/css/app.css">
...

<!-- in the end of the <body> tag -->
<script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js"></script>
<script src="/js/app.js"></script>
```

## Usage

Please see [Documents](https://github.com/archco/moss-ui/blob/master/docs/README.md)

## Change Log

[CHANGELOG.md](https://github.com/archco/moss-ui/blob/master/CHANGELOG.md)

## License

[MIT License](https://github.com/archco/moss-ui/blob/master/LICENSE)
