# Loader

> source: [scss/parts/loader](../../src/scss/parts/_loader.scss)

Loader, other name spinner for indicates loading state of component or page.
These loaders style is similar with text. So if you want modifying color or size, change `color` or `font-size` property in CSS.

## Usage

### Spin

``` html
<div class="loader-spin"></div>
<!-- color -->
<div class="loader-spin text-primary"></div>
<div class="loader-spin" style="color:blue;"></div>
<!-- size -->
<div class="loader-spin font-size-lg"></div>
<div class="loader-spin" style="font-size:3em;"></div>
```

### Grow

``` html
<div class="loader-grow"></div>
<!-- color -->
<div class="loader-grow text-primary"></div>
<div class="loader-grow" style="color:blue;"></div>
<!-- size -->
<div class="loader-grow font-size-lg"></div>
<div class="loader-grow" style="font-size:3em;"></div>
```

### Dots

``` html
<div class="loader-dots">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<!-- or use `loader` the vue component -->
<loader type="dots"></loader>
```

### Roller

``` html
<div class="loader-roller">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<!-- or use `loader` the vue component -->
<loader type="roller"></loader>
```
