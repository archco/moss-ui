> This feature referenced from the [bootstrap/scss/mixins/gradient](https://github.com/twbs/bootstrap/blob/master/scss/mixins/_gradients.scss)

You can use [gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) when `$enable-gradients` is set to `true`.

``` scss
// in _variables.scss
$enable-gradients: true;
```

## SCSS part that use Gradients

- button
- message

## Background gradient

> This part's color style is based on [color-set](color-set.md)

Available color-set keywords: `default`, `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `light`, `dark`, `shade` and `link`.

- `.bg-gradient-primary`
- `.bg-gradient-success`

## Mixins

``` scss
// @param $color base color. if $enable-gradients is false, background-color would be set base color.
// @param $second-color default is null. if this value is null, second-color set to `mix($body-bg, $color, 15%)`.
// @param $angle
@mixin gradient-bg($color, $second-color: null, $angle: 0deg)
```
