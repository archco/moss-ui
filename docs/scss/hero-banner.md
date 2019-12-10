# Hero Banner

> source: [scss/parts/hero-banner](../../src/scss/parts/_hero-banner.scss)

A hero banner is display large image with text, often placed at top of a web page.

## Default Usage

``` html
<div class="hero-banner">
  <div class="hero-background" style="background-image:url('image.jpg');"></div>
  <div class="hero-content">
    <!-- hero banner content -->
  </div>
</div>
```

### Available optional classes

**`hero-banner` with pad option**

``` html
<div class="hero-banner pad-sm">...</div>
<div class="hero-banner pad">...</div>
<div class="hero-banner pad-lg">...</div>
```

**`hero-background` with filter option**
It is same as [image filter](image.md#image-filter).

``` html
<div class="hero-background filter blur" style="background-image:url('image.jpg');"></div>
```

## SCSS Variables

``` scss
$hero-banner-min-height: 10em !default;
$hero-banner-pad-sm: 3em !default;
$hero-banner-pad: 6em !default;
$hero-banner-pad-lg: 9em !default;
```
