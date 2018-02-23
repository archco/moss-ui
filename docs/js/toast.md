# Toast

> sources:  
[js/components/toast](../../src/js/components/toast.vue)
[scss/components/toast](../../src/scss/components/_toast.scss)

## Usage

Add component in HTML.

``` html
<toast
  :duration="5000">
</toast>
```

and trigger via `Moss` object.

``` js
window.Moss.toast('Toasted!');
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| position | `String` | `'bottom-center'` | Available nine position. e.g) top-left, middle-center, bottom-right... |
| duration | `Number` | `3000` | Duration time on display. The unit is milliseconds. |
| transition-duration | `Number` | `600` | Duration time of transition effect. The unit is milliseconds. |

## SCSS variables

``` scss
$toast-font-size: 1em !default;
$toast-min-width: 10em !default;
$toast-padding-y: .8em;
$toast-padding-x: .5em;
$toast-text-color: $text-color-invert !default;
$toast-bg-color: rgba($background-color-invert, .85) !default;
$toast-border-radius: $radius-normal !default;
$toast-container-position-offset: 5% !default;
```
