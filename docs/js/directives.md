# Directives

### Activator
Activator is provide convenience for "active" class into child-node item. It's compare between link and current location.

- Syntax
```html
<navbar-nav v-activator.{modifiers}="'{value}'"></navbar-nav>
```
- modifiers
  - self: If this given, `active` class into self element, not parentNode.
  - this: If this given, activator on own element, not childNodes.
- value: {String} selector. default value is 'a'.

### Confirm
Provide the function to confirm when "submission" is the case.

- Syntax
```html
<form action="#" v-confirm:{arg}="'{value}'"></form>
```
- arg: event type.
- value: {String} confirm message. default value is 'Are you confirm?'.

##### Caveat
- When confirm is canceled, `event.preventDefault()` is called, so if there is a default action such as submit, it will stop as expected, but it will have no effect on click.
- It is the event listener of the capturing phase, but it is pushed to the priority when the event listener is given with attr such as `onsubmit`.

### Focus
Auto focus on element.

- Syntax
```html
<input type="text" v-focus>
```

### Set Value
Set value on a element.

- Syntax
```html
<select v-set-value:{arg}="'{value}'">...</select>
```
- arg: Key of query string.
- value: Set value directly.

##### Example
```html
<!-- URL: index.html?category=3&year=2017 -->
<select v-set-value:category>...</select>
```

### Tooltip
Helper for using [scss/tooltip](./tooltip.md).
- Syntax
```html
<span v-tooltip:{arg}="'{value}'">text</span>
```
- arg: direction. top (default) | right | bottom | left
- value: String, tooltip label.

### Trigger
Emit event on context root.

- Syntax
```html
<button type="button" v-trigger:{arg}="[{value}]">Trigger</button>
```
- arg: event name.
- value: {Array} Arguments for event listener.
- example
```html
<span v-trigger:modal-toggle="['modal01', 'show']">click me</span>
```

### Wrap
Wrap the element in a wrapper.

- Syntax
```html
<div v-wrap:{arg}.{modifiers}="'{value}'"></div>
```
- arg: class name. It is auto convert. e.g.) `item` -> `item-wrapper`
- modifiers
  - raw: If this given, it does not convert class name.
- value: {String} Tag name of wrapper. default value is 'div'.
