# Scroll to
> source: [js/components/scroll-to](../src/js/components/scroll-to.vue)

## Usage
#### Basic
```html
<scroll-to
  :duration="800"
  :offset="400">
</scroll-to>
```

## Props
| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| duration | Number | Duration time of scroll. (ms) | 600 |
| easing | String | easing function name. | 'easeOutCubic' |
| offset | Number | Button will hide within offset value. | 0 |
| top-html | String | Top button's innerHTML. | '↑' |
| bottom-html | String | Bottom button's innerHTML | '↓' |
| disable-top | Boolean | Disable top button | false |
| disable-bottom | Boolean | Disable bottom button | false |

#### Note
> [scroll-it.js](../src/js/lib/utils/scroll-it.js)  
[easing types](https://docs111.mootools.net/Effects/Fx-Transitions)

easing function names: `linear` `easeInQuad` `easeOutQuad` `easeInOutQuad` `easeInCubic` `easeOutCubic` `easeInOutCubic` `easeInQuart` `easeOutQuart` `easeInOutQuart` `easeInQuint` `easeOutQuint` `easeInOutQuint`
