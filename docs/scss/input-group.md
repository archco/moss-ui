# Input Group

> source: [scss/parts/input-group](https://github.com/archco/moss-ui/blob/master/src/scss/parts/_input-group.scss)

## Usage

``` html
<!-- text & input -->
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">@</span>
  </div>
  <input type="text" placeholder="Username">
</div>

<!-- input & text -->
<div class="input-group">
  <input type="text" placeholder="Recipient">
  <div class="input-group-append">
    <span class="input-group-text">@example.com</span>
  </div>
</div>

<!-- input & btn -->
<div class="input-group">
  <input type="text" placeholder="Query">
  <div class="input-group-append">
    <button class="btn success">Send</button>
  </div>
</div>

<!-- input /w icon & btn -->
<div class="input-group">
  <div class="input with-icon-left">
    <span class="icon-left"><icon name="search"></icon></span>
    <input type="search" placeholder="Search">
  </div>
  <div class="input-group-append">
    <button class="btn link" type="submit">Search</button>
  </div>
</div>
```
