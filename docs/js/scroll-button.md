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
| easing | `String` | `'easeInOut'` | Specify an easing type. available common keywords is `linear`, `ease`, `easIn`, `easeOut` or `easeInOut`. |
| offset | `Number` | `0` | Buttons will hide automatically within this offset value. The unit is pixels. |
| top-html | `String` | 'arrow-up' icon | The `innerHTML` value of the `.scroll-button-top`. |
| bottom-html | `String` | 'arrow-down' icon | The `innerHTML` value of the `.scroll-button-button`. |
| disable-top | `Boolean` | `false` | Disable `.scroll-button-top` |
| disable-bottom | `Boolean` | `false` | Disable `.scroll-button-button`. |

## SCSS variables

``` scss
$scroll-button-bg-color: $primary-color-accent !default;
$scroll-button-color: get-contrast($scroll-button-bg-color) !default;
```
