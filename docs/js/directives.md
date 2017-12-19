# Directives

## Activator

Activator is provide convenience for "active" class into child-node item. It's compare between link and current location.

- Syntax
  ``` html
  <navbar-nav v-activator.{modifiers}="'{value}'"></navbar-nav>
  ```
- modifiers
  - `self`: If this given, `active` class into self element, not `parentNode`.
  - `this`: If this given, activator on own element, not `childNodes`.
- value: `String` selector. default value is 'a'.

## Clipboard

Provide convenience for copy to clipboard. It is based on [clipboard.js](https://github.com/zenorocha/clipboard.js)

- Syntax
  ``` html
  <button v-clipboard.{modifiers}:{arg}="value">Copy</button>
  ```
- modifiers
  - `cut`: If this given, set action to 'cut'. (default value is 'copy')
- arg: Event name, default is 'clipboard-success'. This event emit to `$root` vue model when copy to clipboard is successfully.
- value: `String`|`Object`
  - If type is string, this value copy to clipboard as text.
  - If type is object, see below.
  ``` js
  // Value set as object.
  const value = {
    text: '',     // {String}
    target: '',   // {Element|querySelector}
    // Callback occur when copy to clipboard is successfully.
    // @arg {event} See https://github.com/zenorocha/clipboard.js#events
    callback: fn,
  }
  ```

## Confirm

Provide the function to confirm when "submission" is the case.

- Syntax
  ``` html
  <form action="#" v-confirm:{arg}="'{value}'"></form>
  ```
- arg: event type.
- value: `String` confirm message. default value is 'Are you confirm?'.

**Caveat**
- When confirm is canceled, `event.preventDefault()` is called, so if there is a default action such as submit, it will stop as expected, but it will have no effect on click.
- It is the event listener of the capturing phase, but it is pushed to the priority when the event listener is given with attr such as `onsubmit`.

## Focus

Auto focus on element.

- Syntax
  ``` html
  <input type="text" v-focus>
  ```

## Scrollspy

Automatically activate HTML anchor based on scroll position.

- Syntax
  ``` html
  <nav v-scrollspy="{value}">...</nav>
  ```
- value: `Object` options.
  ``` js
  value: {
    linkSelector: 'a',
    scrollElement: 'body', // 'body' | element | selector
    activeTarget: 'parent', // 'parent' | 'self' | selector
    activeClass: 'active',
    offset: 24,
    onActivate: null, // a callback function. invoke when activate.
  }
  ```

### Events

- On activate: `scrollspy-activate`
  ``` js
  vm.$on('scrollspy-activate', item => {
    /*
      item = {
        elm: {Element} target element.
        link: {Element} link element.
        offsetTop: {Number} the distance of the current element relative to the top.
      }
    */
  });
  ```
- Emit refresh: `scrollspy-refresh`
  ``` js
  vm.$emit('scrollspy-refresh');
  ```

## Set Value

Set value on a element.

- Syntax
  ``` html
  <select v-set-value:{arg}="'{value}'">...</select>
  ```
- arg: Key of query string.
- value: Set value directly.

**Example**
``` html
<!-- URL: index.html?category=3&year=2017 -->
<select v-set-value:category>...</select>
```

## Tooltip

> This directive is built on [Tooltip.js](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/tooltip-documentation.md)

- Syntax
  ``` html
  <span v-tooltip:{arg}.{modifiers}="'{value}'">...</span>
  ```
- arg: placement. top (default) | right | bottom | left (additional suffix: '-start' and '-end')
- modifiers: trigger. hover (default) | focus | click | manual (no actions)
- value: `String`|`Object` - If value type is `String`, then tooltip title is set by value. If value type is `Object`, then [option of Tooltip.js](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/tooltip-documentation.md#new-tooltipreference-options) will set by this object value.

**SCSS variables**
``` scss
$tooltip-color: $text-color-invert !default;
$tooltip-bg-color: rgba($background-color-invert, .8) !default;
$tooltip-padding-y: .5em !default;
$tooltip-padding-x: 1em !default;
$tooltip-font-size: .9rem !default;
$tooltip-border-radius: $radius-small !default;
```

## Trigger

Emit event on context root.

- Syntax
  ``` html
  <button type="button" v-trigger:{arg}="[{value}]">Trigger</button>
  ```
- arg: event name.
- value: `Array` Arguments for event listener.

**Example**
``` html
<span v-trigger:modal-toggle="['modal01', 'show']">click me</span>
```

## Wrap

Wrap the element in a wrapper.

- Syntax
  ``` html
  <div v-wrap:{arg}.{modifiers}="'{value}'"></div>
  ```
- arg: class name. It is auto convert. e.g.) `item` -> `item-wrapper`
- modifiers
  - raw: If this given, it does not convert class name.
- value: `String` Tag name of wrapper. default value is 'div'.
