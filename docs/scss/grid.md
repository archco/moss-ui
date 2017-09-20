# Grid
> source: [scss/parts/grid](../../src/scss/parts/_grid.scss)

```scss
// variables of grid.
$grid-breakpoints: (
  base: 0, // Applies all width size.
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
) !default;
$grid-columns: 12 !default;
$grid-gutter-width: 1.5rem !default;
```

## Usage
#### Responsive
```html
<div class="row">
  <div class="col">default: all devices.</div>
</div>
<div class="row">
  <div class="col-sm">small: 576px <= screen-width < 768px</div>
</div>
<div class="row">
  <div class="col-md">medium: 768px <= screen-width < 992px</div>
</div>
<div class="row">
  <div class="col-lg">large: 992px <= screen-width < 1200px</div>
</div>
<div class="row">
  <div class="col-xl">extra large: 1200px <= screen-width</div>
</div>
```

#### mixed
```html
<div class="row">
  <div class="col-lg-2 col-md-4 col-sm-6">responsive</div>
  <div class="col-lg-2 col-md-4 col-sm-6">responsive</div>
</div>
```

#### Equal width
```html
<div class="container">
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col">1 of 3</div>
    <div class="col">1 of 3</div>
  </div>
</div>
```

#### Setting one column width
```html
<div class="row">
  <div class="col-sm">1 of 3</div>
  <div class="col-sm-6">2 of 3 (half of full width)</div>
  <div class="col-sm">3 of 3</div>
</div>
```

#### Variable width by content
```html
<div class="row">
  <div class="col-md">col</div>
  <div class="col-md-auto">Variable width by content</div>
  <div class="col-md">col</div>
</div>
```

#### No gutters
```html
<div class="row no-gutters">
  <div class="col">no-gutter column</div>
  <div class="col">no-gutter column</div>
</div>
```

#### Offsetting columns
```html
<div class="row">
  <div class="col-md-4">col-md-4</div>
  <div class="col-md-4 offset-md-4">col-md-4 offset-md-4</div>
</div>
```

#### Push and pull
```html
<div class="row">
  <div class="col-8 push-4">first but pushed</div>
  <div class="col-4 pull-8">second but pulled</div>
</div>
```
