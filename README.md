# COSMOS-UI

The user interface framework for front-end.

## Demo
-- not yet..

## Installation
```sh
$ npm install cosmos_ui
```

## Configuration
### SCSS
```scss
// In your app.scss file.
@import 'app-variables'; // Customize variables for application.
@import 'node_modules/cosmos-ui/src/scss/cosmos';
...
```

### Vue Plugin
```js
// In your app.js
import Vue from 'vue';
import Cosmos from 'cosmos-ui';

Vue.use(Cosmos);

window.vm = new Vue({
  el: '#app',
});
```

### In HTML
```html
<!-- in <head> tag -->
<link rel="stylesheet" href="/css/app.css">
...

<!-- in the end of <body> tag -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.js"></script>
<script src="/js/app.js"></script>
```

## Usage
Please see [Documents](./docs/README.md)

## Change Log
[CHANGELOG.md](CHANGELOG.md)

## License
[MIT License](LICENSE)
