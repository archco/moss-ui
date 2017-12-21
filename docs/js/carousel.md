# Carousel

> This component uses [vue-agile](https://github.com/lukaszflorczak/vue-agile#readme).

> source: [scss/components/carousel](../../src/scss/components/_carousel.scss)

## Usage

``` html
<carousel>
  <div class="slide">...</div>
  <div class="slide">...</div>
  <div class="slide">...</div>
</carousel>
```

## Props

> @see [vue-agile#options](https://github.com/lukaszflorczak/vue-agile#options)

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| arrows | `Boolean` | `true` | Enable prev/next arrows |
| prevArrow | `String` (HTML/SVG) | `<svg>` | Prev arrow code – more in "Arrows" section |
| nextArrow | `String` (HTML/SVG) | `<svg>` | Next arrow code – more in "Arrows" section |
| autoplay | `Boolean` | `false` | Enable autoplay |
| autoplaySpeed | `Integer` (ms) | `3000` | Autoplay interval in milliseconds |
| dots | `Boolean` | `true` | Enable dot indicators/pagination |
| fade | `Boolean` | `false` | Enable fade effect |
| infinite | `Boolean` | `true` | Infinite loop sliding |
| mobileFirst | `Boolean` | `true` | Enable mobile first calculation for responsive settings |
| options | `Object` | `null` | All settings as one object |
| pauseOnHover | `Boolean` | `true` | Pause autoplay when a slide is hovered |
| pauseOnDotsHover | `Boolean` | `false` | Pause autoplay when a dot is hovered |
| responsive | `Object` | `null` | Object containing breakpoints and settings objects |
| speed | `Integer` (ms) | `300` | Slide animation speed in milliseconds |
| timing | `String` | `ease` | Transition timing function <br> (`linear`/`ease`/`ease-in`/`ease-out`/`ease-in-out`) |
| unagile | `Boolean` | `false` | Disable agile carousel |

## SCSS variables

``` scss
$carousel-dot-color: rgba($text-color-light, .5) !default;
$carousel-dot-active-color: $text-color-light !default;
$carousel-arrow-color: rgba($text-color-light, .5) !default;
$carousel-arrow-hover-color: $text-color-light !default;
```
