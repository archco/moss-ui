# Scaffolding

> source: [scss/parts/scaffolding](../../src/scss/parts/_scaffolding.scss)

- [Tag Defaults](#tag-defaults)
- [Optional Class](#optional-class)

## Tag Defaults

### Link

**Avoid underline decoration**

The default link causes an underline when hovering. Do one of the following to write `<a>` to avoid underlining.

- Add class `.no-deco` e.g. `<a href="#" class="no-deco">`
- In html
  ```html
  <a href="#" class="no-deco">LINK</a>
  ```
- In scss
  ```scss
  .target {
    @include no-decoration;
  }
  ```


**Set inherit color to links color**

- In html
  ```html
  <a href="#" class="inherit">LINK</a>
  ```
- In scss
  ```scss
  .target {
    @include set-link-state-color(inherit);
  }
  ```

### Table

**Basic and Center position**
```html
<table class="table center">
  <thead>...</thead>
  <tbody>...</tbody>
</table>
```

**Bordered**
```html
<table class="table bordered">...</table>
```

**Striped**
```html
<table class="table striped">...</table>
```

**Hover**
```html
<table class="table hover">...</table>
```

**Responsive**
- wrapper around
  ```html
  <div class="table-responsive-wrapper">
    <table>...</table>
  </div>
  ```
- Use "wrap" directive
  ```html
  <table class="table" v-wrap:responsive>...</table>
  ```

### Blockquote
> based on [Color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

```html
<blockquote class="success">...</blockquote>
```


## Optional Classes

### pad

Available Tags: `<article>`, `<aside>`, `<div>`, `<p>` and `<blockquote>`

**article with `.pad`**
```html
<article class="pad">...</article>
```

### accent

Useful class for apply `$font-accent` to heading tags.

```html
<h1 class="accent">...</h1>
```  
