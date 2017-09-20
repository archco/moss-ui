# Card
> source: [scss/parts/card](../../src/scss/parts/_card.scss)

#### Option Keywords
- size: `small` `large` (default: medium)
- direction: `horizontal` (default: vertical)
- display: `inline` (default: block)
- hover: `hoverable`
- contents: `card-image` `card-title` `card-content`

## Usage
#### Vertical Card (default)
```html
<div class="card">
  <div class="card-image">
    <img src="image.jpg">
    <h3 class="card-title">Title</h3>
  </div>
  <div class="card-content">
    <span>Card content</span>
  </div>
</div>
```

#### Horizontal Card
```html
<div class="card-horizontal large">
  <div class="card-image">
    <img src="image.jpg">
  </div>
  <div class="card-content">
    <span>Card content</span>
  </div>
</div>
```

#### Inline
```html
<div class="card inline small">
  <div class="card-image">
    <img src="image.jpg">
  </div>
  <div class="card-content">
    <span>Card content</span>
  </div>
</div>
```

#### Hoverable
```html
<a href="#" class="card small hoverable">
  <div class="card-image">
    <img src="image.jpg">
  </div>
  <div class="card-content">
    <span>Card content</span>
  </div>
</a>
```
