# Image
> source: [scss/parts/image](../../src/scss/parts/_image.scss)

## Image Container
Adding overlay effects when image hover.

#### Usage
##### default, fade-in effect.
```html
<div class="image-container">
  <img src="image.jpg">
  <div class="overlay">
    <div class="text">Overlay Text</div>
  </div>
</div>
```

##### slide in effect.
```html
<!-- slide-in from top -->
<div class="overlay from-top">...</div>
<!-- slide-in from bottom -->
<div class="overlay from-bottom">...</div>
<!-- slide-in from right -->
<div class="overlay from-right">...</div>
<!-- slide-in from left -->
<div class="overlay from-left">...</div>
```

## Image Filter
The helper class for image [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter).  
**Note**: CSS filter is not supported in IE. [compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#Browser_compatibility)

#### Usage
```html
<img src="image.jpg" class="filter blur">
```
#### Available Filters
- blur
- lighten
- darken
- contrast
- gray
- hue-rotate
- invert
- opacity
- saturate
- sepia
