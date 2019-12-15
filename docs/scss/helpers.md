# Helpers

## More helper classes

- [Display](display.md)
- [Flex](flex.md)
- [Sizing](sizing.md)
- [Spacing](spacing.md)
- [Text](text.md)

### Float

``` html
<div class="clearfix">
  <div class="float-right">RIGHT</div>
  <div class="float-left">LEFT</div>
  <div class="float-none">NONE</div>
</div>
```

### Position

``` html
<!-- fixed top -->
<div class="fixed-top">It's fixed on top.</div>
<!-- sticky top -->
<div class="sticky-top">It'll be sticky on top.</div>
```

**Note:** `.sticky-top` is not supported in IE and Edge. it will be as static(initial value).

### Color

> This part's color style is based on [color-set](color-set.md)

Available color-set keywords: `default`, `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `light`, `dark`, `shade` and `link`.

``` html
<!-- text-color: color-set + "white", "body", "muted", "black-50", "white-50" and "reset" -->
<p class="text-primary"></p>
<p class="text-danger"></p>
<span class="text-muted"></span>
<!-- background-color: color-set + "body", "white" and "transparent" -->
<div class="bg-secondary"></div>
<div class="bg-success"></div>
<div class="bg-transparent"></div>
```

### Box shadow

``` html
<div class="shadow"></div>
<div class="shadow-sm"></div>
<div class="shadow-lg"></div>
<div class="shadow-inset"></div>
<div class="shadow-inset-sm"></div>
<div class="shadow-inset-lg"></div>
<div class="shadow-none"></div>
```
