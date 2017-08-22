# Button
> source: [scss/components/button](../../src/scss/components/_button.scss)

#### Option Keywords
- based on [Color-set](color-set.md)  
  Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link
- style: `full-width`
- disabled: `disabled`

## Usage
#### btn
```html
<button class="btn danger">Danger</button>
<a class="btn info" href="#">link button</a>
```

#### btn-flat
```html
<button class="btn-flat success">Success</button>
<a class="btn-flat warning" href="#">link button</a>
```

#### btn-icon
```html
<button class="btn-icon warning">
  <i class="fa fa-exclamation" aria-hidden="true"></i>
</button>
```

#### disabled
```html
<button class="btn" disabled>Button</button>
```

#### Button is loading
This uses [loader](loader.md)
```html
<button class="btn is-loading">loading</button>
```

#### Button Group
Available content buttons for button-group: `.btn`, `.btn-flat`, `dropdown`

##### Horizontal button group (default)
```html
<div class="btn-group">
  <button class="btn">Left</button>
  <button class="btn">Center</button>
  <button class="btn">Right</button>
</div>
```

##### Vertical button group
```html
<div class="btn-group-vertical">
  <button class="btn">Top</button>
  <button class="btn">Middle</button>
  <button class="btn">Bottom</button>
</div>
```


## Notes
#### Button text color
> [variable.scss](../../src/scss/_variable.scss#L169)

```scss
// If this set false, button color will be contrast color based by background color.
$button-color-is-enable: false;
```
