# Helpers

> source:  [scss/helpers/index](../../src/scss/helpers/_index.scss)

## More helper classes

- [Display](display.md)
- [Flex](flex.md)
- [Text](text.md)

### Toggling content

```html
<p class="display-show">paragraph</p>
<p class="display-hide">paragraph</p>
<p class="display-invisible">paragraph</p>
```

### Centering

```html
<div class="flex-center-container">
    <div>vertically centering.</div>
</div>
```

### Float

```html
<div class="float-clear">
  <div class="float-right box-line">this is right.</div>
  <div class="float-left box-line">this is left.</div>
</div>
```

### Position

```html
<!-- fixed top -->
<div class="fixed-top">It's fixed on top.</div>
<!-- sticky top -->
<div class="sticky-top">It'll be sticky on top.</div>
```

**Note:** `.sticky-top` isn't supported in IE and Edge. it will be as static(initial value).

### Sizing

Directions: width is `w` and height is `h`.  
Percentages: 25, 50, 75, 100

```html
<div class="w-25">Width 25%</div>
<div class="h-75">Height 75%</div>
<!-- max-width and max-height -->
<div class="mw-100">Max-width 100%</div>
```

### Color

> based on [Color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

```html
<!-- text color -->
<p class="color-primary">...</p>
<p class="color-danger">...</p>
<!-- background color -->
<div class="bg-color-secondary">...</div>
<div class="bg-color-success">...</div>
```

### Caret

```html
<span class="caret"></span>
<span class="caret up"></span>
```

### Arrow

```html
<span class="arrow"></span>
<span class="arrow right"></span>
```

### Box shadow

```html
<div class="shadow"></div>
<div class="shadow-near"></div>
<div class="shadow-far"></div>
```
