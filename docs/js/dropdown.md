# Dropdown
> source: [js/components/dropdown](../src/js/components/dropdown.vue)

## Usage
#### Toggle dropdown
```html
<dropdown>
  <button class="btn" slot="button">TOGGLE</button>
  <a href="#" class="active">Item 01</a>
  <a href="#">Item 02</a>
  <a href="#">Item 03</a>
</dropdown>
```

#### Hover dropdown
```html
<dropdown toggle="hover">
  <button class="btn" slot="button">HOVER</button>
  <a href="#">Item 01</a>
  <a href="#">Item 02</a>
</dropdown>
```

#### Alignment of dropdown content
Available align keywords: `left` `center` `right`
```html
<dropdown toggle="hover" align="center">
  <button class="btn" slot="button">HOVER</button>
  <a href="#">Item 01</a>
  <a href="#">Item 02</a>
</dropdown>
```

## Props
| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| toggle | String | toggle type: toggle or hover | 'toggle' |
| align | String | Alignment of dropdown content: left or center or right | 'left' |
