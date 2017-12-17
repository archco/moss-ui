# Scroll to

> sources:  
[js/components/scroll-to](../../src/js/components/scroll-to.vue)  
[scss/components/scroll-to](../../src/scss/components/_scroll-to.scss)

## Usage

``` html
<scroll-to
  :duration="800"
  :offset="400">
</scroll-to>
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
$scroll-to-bg-color: $primary-color-accent !default;
$scroll-to-color: get-contrast($scroll-to-bg-color) !default;
```
