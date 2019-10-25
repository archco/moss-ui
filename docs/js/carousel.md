# Carousel

> This component uses [vue-agile](https://github.com/lukaszflorczak/vue-agile#readme).  
> source: [scss/components/carousel](../../src/scss/components/_carousel.scss)

## Usage

``` html
<carousel>
  <template slot="prevButton"><icon name="arrow-left" /></template>
  <template slot="nextButton"><icon name="arrow-right" /></template>

  <div class="slide">...</div>
  <div class="slide">...</div>
  <div class="slide">...</div>
</carousel>
```

## Props

> @see [vue-agile#options](https://github.com/lukaszflorczak/vue-agile#options)

| Parameter | Type | Default | Description |
| --- | :---: | :---: | --- |
| [asNavFor](https://github.com/lukaszflorczak/vue-agile#asNavFor) | array | `[]` | Set the carousel to be the navigation of other carousels | 
| autoplay | boolean | `false` | Enable autoplay |
| autoplaySpeed | integer (ms) | `3000` | Autoplay interval in milliseconds | 
| centerMode | boolean | `false` | Enable centered view when `slidesToShow` > `1` |
| dots | boolean | `true` | Enable dot indicators/pagination |
| fade | boolean | `false` | Enable fade effect |
| infinite | boolean | `true` | Infinite loop sliding | 
| initialSlide | integer | `0` | Index of slide to start on |
| mobileFirst | boolean | `true` | Enable mobile first calculation for responsive settings |
| navButtons | boolean | `true` | Enable prev/next navigation buttons |
| options | object | `null` | All settings as one object | 
| pauseOnDotsHover | boolean | `false` | Pause autoplay when a dot is hovered |
| pauseOnHover | boolean | `true` | Pause autoplay when a slide is hovered |
| [responsive](https://github.com/lukaszflorczak/vue-agile#Responsive) | object | `null` | Object containing breakpoints and settings objects | 
| rtl | boolean | `false` | Enable right-to-left mode |
| slidesToShow | integer | `1` | Number of slides to show |
| speed | integer (ms) | `300` | Slide animation speed in milliseconds | 
| timing | string | `ease` | Transition timing function <br> (`linear`/`ease`/`ease-in`/`ease-out`/`ease-in-out`) |
| unagile | boolean | `false` | Disable Agile carousel | 

## SCSS variables

``` scss
$carousel-dot-color: rgba($text-color-light, .5) !default;
$carousel-dot-active-color: $text-color-light !default;
$carousel-nav-button-color: rgba($text-color-light, .5) !default;
$carousel-nav-button-hover-color: $text-color-light !default;
$carousel-nav-button-font-size: 2 * $font-size !default;
```
