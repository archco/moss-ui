# Badge
> source:  [scss/components/badge](../../src/scss/components/_badge.scss)

## Usage
#### Default Badge
```html
<h1>Heading <span class="badge">New</span></h1>
```
#### Badge with Color-set
> based on [Color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link
```html
<p>text and badge <span class="badge primary">Primary</span></p>
```

#### Use badge as link
```html
<p>text and badge <a class="badge success" href="#">Link</a></p>
```

#### Rounded Badge
```html
<a href="#">New Blog <span class="badge rounded success">4</span></a>
```

#### Badge with Stacked Font Awesome Icon
> Link: [http://fontawesome.io/examples/#stacked](http://fontawesome.io/examples/#stacked)

```html
<span class="fa-stack fa-lg">
  <i class="fa fa-square fa-stack-2x"></i>
  <i class="fa fa-bell fa-stack-1x fa-inverse"></i>
  <span class="badge in-icon danger">8,888</span>
</span>
```
