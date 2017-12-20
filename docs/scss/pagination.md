# Pagination

> source: [scss/parts/pagination](../../src/scss/parts/_pagination.scss)

## Usage

``` html
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
$pagination-margin: 1rem 0 !default;
$pagination-color: $text-color !default;
$pagination-bg-color: transparent !default;
$pagination-hover-color: $text-color !default;
$pagination-hover-bg-color: $background-color-shade !default;
$pagination-active-bg-color: $primary-color !default;
$pagination-active-color: get-contrast($pagination-active-bg-color) !default;
$pagination-disabled-color: $text-color-weak !default;
$pagination-item-margin: 0 .2rem !default;
$pagination-item-padding-y: .2em !default;
$pagination-item-padding-x: .67em !default;
$pagination-item-border-radius: $radius-small !default;
```
