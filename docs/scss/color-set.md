# Color-set
> source: [scss/components/color-set](../src/scss/components/_color-set.scss)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

```scss
$color-set: (
  default: $default-color, // It's half value of background-color and background-color-invert.
  primary: $primary-color,
  secondary: $secondary-color,
  info: $info-color,
  success: $success-color,
  warning: $warning-color,
  danger: $danger-color,
  error: $danger-color,
  light: $light-color,
  dark: $dark-color,
  shade: $shade-color,
  link: $link-color,
);
```

## Components of uses this color-set
* [Badge](badge.md)
* [Button](#)
* [Helper](#) : color of text and background
* [Message](#) : color of message box
* [Tab](#) : tab tip color
