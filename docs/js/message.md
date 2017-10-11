# Message

> source:
> [js/components/message](../../src/js/components/message.vue)
> [js/components/message-box](../../src/js/components/message-box.vue)

- [message](#message)
- [message-box](#message-box)

## Message

### Usage

#### Basic

```html
<message>Hello</message>
```

#### With status color

> This based on [color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

```html
<message status="success">Task done successfully.</message>
```

### Props

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| status | String | Status color. | '' (default color) |
| effect | String | transition effect name: fade | 'fade' |
| close-emit | String | If specified this value, emit custom event instead of default onclick handle when close button is clicked. | '' |
| close-html | String | close-button's innerHTML | '✖' |

## Message Box

### Usage

in HTML

```html
<message-box
  close-html='<i class="fa fa-times" aria-hidden="true"></i>'>
</message-box>
```

in script

```js
window.Moss.messageBox.add('Some message.', 'info');
```

### Props

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| effect | String | prop for message component. | 'fade' |
| close-html | String | prop for message component. | '✖' |

### Methods

#### add

Add a new message in message-box.

- Syntax
  ```js
  window.Moss.messageBox.add(text, status = 'default');
  ```
- Param {String} text - message text.
- Param {String} status - status keyword.

#### clear

Clear all messages in message-box.

- Syntax
  ```js
  window.Moss.messageBox.clear();
  ```
