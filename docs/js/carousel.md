# Carousel

> This component uses [vue-agile](https://github.com/lukaszflorczak/vue-agile#readme).

## Usage

### Basic

```html
<carousel>
  <div class="slide">...</div>
  <div class="slide">...</div>
  <div class="slide">...</div>
</carousel>
```

## Props

> @see [vue-agile#options](https://github.com/lukaszflorczak/vue-agile#options)

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| arrows | boolean | `true` | Enable prev/next arrows |
| prevArrow | string (HTML/SVG) | `<svg>` | Prev arrow code – more in „Arrows” section |
| nextArrow | string (HTML/SVG) | `<svg>` | Next arrow code – more in „Arrows” section |
| autoplay | boolean | `false` | Enable autoplay |
| autoplaySpeed | integer (ms) | `3000` | Autoplay interval in milliseconds |
| dots | boolean | `true` | Enable dot indicators/pagination |
| fade | boolean | `false` | Enable fade effect |
| infinite | boolean | `true` | Infinite loop sliding |
| mobileFirst | boolean | `true` | Enable mobile first calculation for responsive settings |
| options | object | `null` | All settings as one object |
| pauseOnHover | boolean | `true` | Pause autoplay when a slide is hovered |
| pauseOnDotsHover | boolean | `false` | Pause autoplay when a dot is hovered |
| responsive | object | `null` | Object containing breakpoints and settings objects |
| speed | integer (ms) | `300` | Slide animation speed in milliseconds |
| timing | string | `ease` | Transition timing function <br> (`linear`/`ease`/`ease-in`/`ease-out`/`ease-in-out`) |
| unagile | boolean | `false` | Disable agile carousel |
