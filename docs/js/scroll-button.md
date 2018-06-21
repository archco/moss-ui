# Scroll Button

> sources:  
[js/components/scroll-button](../../src/js/components/scroll-button.vue)  
[scss/components/scroll-button](../../src/scss/components/_scroll-button.scss)

## Usage

``` html
<scroll-button
  :duration="800"
  :offset="400">
</scroll-button>
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| duration | `Number` | `600` | Duration time in scroll moves. The unit is milliseconds. |
| easing | `String` | `'easeOutCubic'` | [easing function name](#available-easing-function-names) |
| offset | `Number` | `0` | Buttons will hide automatically within this offset value. The unit is pixels. |
| top-html | `String` | `'↑'` | `innerHTML` value of to-top button. |
| bottom-html | `String` | `'↓'` | `innerHTML` value of to-bottom button. |
| disable-top | `Boolean` | `false` | Disable to-top button. |
| disable-bottom | `Boolean` | `false` | Disable to-bottom button. |

## Notes

### Available easing function names

> @see [scroll-it.js](../../src/js/lib/utils/scroll-it.js) and [easing types](https://docs111.mootools.net/Effects/Fx-Transitions)

- `linear`
- `easeInQuad`
- `easeOutQuad`
- `easeInOutQuad`
- `easeInCubic`
- `easeOutCubic`
- `easeInOutCubic`
- `easeInQuart`
- `easeOutQuart`
- `easeInOutQuart`
- `easeInQuint`
- `easeOutQuint`
- `easeInOutQuint`

## SCSS variables

``` scss
$scroll-button-bg-color: $primary-color-accent !default;
$scroll-button-color: get-contrast($scroll-button-bg-color) !default;
```
