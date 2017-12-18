# Message

> sources:  
[js/components/message](../../src/js/components/message.vue)  
[js/components/message-box](../../src/js/components/message-box.vue)  
[scss/components/message](../../src/scss/components/_message.scss)

### Table of contents

- [message](#message)
  - [Usage](#usage-of-message)
  - [Props](#props-of-message)
  - [SCSS variables](#scss-variables-of-message)
- [message-box](#message-box)
  - [Usage](#usage-of-message)
  - [Props](#props-of-message)
  - [Methods](#methods)
    - [add](#add)
    - [clear](#clear)

## Message

### Usage of message

**Basic**

``` html
<message>Hello</message>
```

**with status color**

> This based on [color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

``` html
<message status="success">Task done successfully.</message>
```

### Props of message

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| status | `String` | `''` | Status color. |
| effect | `String` | `'fade'` | Transition effect name: `fade` |
| close-emit | `String` | `''` | If specified this value, emit custom event instead of default onclick handle when close button is clicked. |
| close-html | `String` | `'✖'` | `innerHTML` of close-button. |

### SCSS variables of message

``` scss
$message-default-bg-color: $default-color !default;
$message-padding-y: 1rem !default;
$message-padding-x: 1.5rem !default;
$message-margin: 8px !default;
```

## Message Box

### Usage of message-box

**in HTML**
``` html
<message-box
  close-html='<i class="fa fa-times" aria-hidden="true"></i>'>
</message-box>
```

**in script**
``` js
window.Moss.messageBox.add('Some message.', 'info');
```

### Props of message-box

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| effect | `String` | `'fade'` | A prop for `message` component. |
| close-html | `String` | `'✖'` | A prop for `message` component. |

### Methods

#### add

Add a new message in message-box.

- Syntax
  ``` js
  window.Moss.messageBox.add(text, status = 'default');
  ```
- Param {String} text - message text.
- Param {String} status - status keyword.

#### clear

Clear all messages in message-box.

- Syntax
  ``` js
  window.Moss.messageBox.clear();
  ```
