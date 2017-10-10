# Toast

> source: [js/components/toast](../../src/js/components/toast.vue)

## Usage

### in html

```html
<toast
  :duration="5000">
</toast>
```

### in script

```js
window.Moss.toast('Toasted!');
```

## Props

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| position | String | Available nine position. e.g) top-left, middle-center, bottom-right | 'bottom-center' |
| duration | Number | Duration time on display. (ms) | 3000 |
| transition-duration | Number | Duration time of transition effect. (ms) | 600 |
