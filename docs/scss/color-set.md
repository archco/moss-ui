# Color-set

> source: [scss/parts/color-set](../../src/scss/parts/_color-set.scss)

Available color-set keywords: `default`, `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `light`, `dark`, `shade` and `link`.

``` scss
$color-set: (
  // Default color is half value of between background-color and background-color-invert.
  default: $default-color,
  primary: $primary-color,
  secondary: $secondary-color,
  info: $info-color,
  success: $success-color,
  warning: $warning-color,
  danger: $danger-color,
  light: $light-color,
  dark: $dark-color,
  shade: $shade-color,
  link: $link-color,
);
```

## Parts or Components that uses this color-set

- [Badge](badge.md)
- [Button](button.md)
- [Form#input-with-color-set](form.md#input-with-color-set)
- [Form#fieldset-with-color-set](form.md#fieldset-with-color-set)
- [Helpers#color](helpers.md#color) : color of text and background.
- [Message](../js/message.md) : color of message box.
- [Scaffolding#blockquote](scaffolding.md#blockquote)
- [Tabs](../js/tabs.md) : tabs active color.
