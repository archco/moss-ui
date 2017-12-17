# Image

> source: [scss/parts/image](../../src/scss/parts/_image.scss)

### Table of contents
- [Image Container](#image-container)
  - [with fade-in effect](#with-fade-in-effect)
  - [with slide-in effect](#with-slide-in-effect)
- [Image Filter](#image-filter)
  - [Available Filter classes](#available-filter-classes)
- [SCSS Variables](#scss-variables)

## Image Container

Adding overlay effects when image hover.

### with fade-in effect

`fade-in` is default effect.

```html
<div class="image-container">
  <img src="image.jpg">
  <div class="overlay">
    <div class="text">Overlay Text</div>
  </div>
</div>
```

### with slide-in effect

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

```html
<img src="image.jpg" class="filter blur">
```

### Available Filter classes

- `.blur`
- `.lighten`
- `.darken`
- `.contrast`
- `.gray`
- `.hue-rotate`
- `.invert`
- `.opacity`
- `.saturate`
- `.sepia`

## SCSS Variables

``` scss
$image-overlay-base-opacity: .67 !default;
$image-overlay-transition: $transition-time * 2 !default;
$image-overlay-bg-color: $background-color-invert !default;
```
