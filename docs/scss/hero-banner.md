# Hero Banner
> source: [scss/parts/hero-banner](../../src/scss/parts/_hero-banner.scss)

A hero banner is display large image with text, often placed at top of a web page.

## Usage
#### HTML Structure
```html
<div class="hero-banner">
  <div class="hero-background" style="background-image:url('image.jpg');"></div>
  <div class="hero-content">
    <!-- hero banner content -->
  </div>
</div>
```

#### Available CSS class option
##### hero-banner with pad option
```html
<div class="hero-banner pad-small"> ... </div>
<div class="hero-banner pad-medium"> ... </div>
<div class="hero-banner pad-large"> ... </div>
```

##### hero-background with filter option
It is same as [image filter](image.md#image-filter)
```html
<div class="hero-background filter blur" style="background-image:url('image.jpg');"></div>
```
