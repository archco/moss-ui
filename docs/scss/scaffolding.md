# Scaffolding

> source: [scss/parts/scaffolding](../../src/scss/parts/_scaffolding.scss)

- [Tag Defaults](#tag-defaults)
- [Optional Class](#optional-class)

## Tag Defaults

### Link

The default link causes an underline when hovering. Do one of the following to write `<a>` to avoid underlining.

- Add class `.no-deco` e.g. `<a href="#" class="no-deco">`
- In scss, use placeholder `%link-no-deco`
  ```scss
  .target {
    @extend %link-no-deco;
  }
  ```
- In scss, use mixin `no-decoration()`
  ```scss
  .target {
    @include no-decoration;
  }
  ```

### Table

#### Basic and Center position

```html
<table class="table center">
  <thead>...</thead>
  <tbody>...</tbody>
</table>
```

#### Bordered

```html
<table class="table bordered">...</table>
```

#### Striped

```html
<table class="table striped">...</table>
```

#### Hover

```html
<table class="table hover">...</table>
```

#### Responsive

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

## Optional Class

### pad

- article with `.pad`
  ```html
  <article class="pad">...</article>
  ```
- section with `.pad`
  ```html
  <section class="pad">...</section>
  ```

### accent

- heading with `.accent`
  ```html
  <h1 class="accent">...</h1>
  ```
