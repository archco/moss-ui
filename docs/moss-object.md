# Moss Object

Moss object provides the convenience of manipulating Moss UI in javascript.

### Table of contents

- [Library](#library)
- [Helpers for Vue components](#helpers-for-vue-components)
  - [messageBox](#messagebox)
  - [modal](#modal)
  - [toast](#toast)

## Library

You can use JS library via the moss object.

``` js
// example 1. Generate a new random color using Color library.
const Color = window.Moss.lib.Color;
const randomColor = new Color().random();
randomColor.toRgb(); // 'rgb(157, 201, 237)'

// example 2. Converts kebab case to camel or pascal.
const Case = window.Moss.lib.Case;
Case.pascal('hello-world'); // 'HelloWorld'
Case.camel('hello-world'); // 'helloWorld'
```

### List of Libraries

- [Case](https://github.com/archco/cake-case#readme): The simple utility methods that converts string case.
- [Color](https://github.com/archco/moo-color#readme): The simple color library for javascript.
- [ElementMeasurer](https://github.com/archco/element-measurer#api): The javascript class for measures size of Element.
- [ElementUtil](https://github.com/archco/element-util/tree/master/docs): The javascript library for using DOM Elements conveniently.
- [Svg](svg-icons.md): The object that contains strings of the svg-icon.
- [Util](js/util.md): Utility methods.

## Helpers for Vue components

### [messageBox](js/message.md#message-box)

#### add

Add a new message in message-box.

- Syntax

  ``` js
  window.Moss.messageBox.add(text, status = 'default');
  ```

- Param `string` text - message text.
- Param `string` status - status keyword.

#### clear

Clear all messages in message-box.

- Syntax

  ``` js
  window.Moss.messageBox.clear();
  ```

### [modal](js/modal.md)

#### show

Open modal.

- Syntax

  ``` js
  window.Moss.modal.show(name);
  ```

- Param `string` name - modal name.

#### close

Close modal.

- Syntax

  ``` js
  window.Moss.modal.close(name);
  ```

- Param `string` name - modal name.

#### toggle

Toggle modal.

- Syntax

  ``` js
  window.Moss.modal.toggle(name, action = 'toggle');
  ```

- Param `string` name - modal name.
- Param `'show'|'close'|'toggle'` [action = 'toggle']

### [toast](js/toast.md#usage)

- Syntax

  ``` js
  window.Moss.toast(text);
  ```

- Param `string` text - toast text.
