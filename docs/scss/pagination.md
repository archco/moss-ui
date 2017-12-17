# Pagination

> source: [scss/parts/pagination](../../src/scss/parts/_pagination.scss)

## Usage

```html
<ul class="pagination">
  <li class="disabled"><span>Prev</span></li>
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li class="active"><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">Next</a></li>
</ul>
```

## SCSS Variables

``` scss
$pagination-color: $text-color !default;
$pagination-bg-color: transparent !default;
$pagination-hover-color: $text-color !default;
$pagination-hover-bg-color: $background-color-shade !default;
$pagination-active-color: $text-color-invert !default;
$pagination-active-bg-color: $primary-color !default;
$pagination-active-hover-color: $pagination-active-color !default;
$pagination-active-hover-bg-color: $primary-color-accent !default;
$pagination-disabled-color: $text-color-weak !default;
```
