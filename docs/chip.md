# Chip
> source: [js/components/chip](../src/js/components/chip.vue)

## Usage
#### Tag chip
```html
<chip title="tag-sample">TagSample</chip>
<chip closeable>TagSample</chip>
```

#### Contact chip
```html
<chip img-src="avatar.png" img-alt="avatar image">John Doe</chip>
<chip img-src="avatar.png" img-alt="avatar image" closeable>John Doe</chip>
```

#### Link chip
```html
<chip tag="a" href="#" closeable>Chip</chip>
<chip
  tag="a"
  href="#"
  img-src="avatar.png"
  img-alt="avatar"
  closeable>
  Jane Doe
</chip>
```

## Props
| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| tag | String | tag name. | 'span' |
| closeable | Boolean | Enable close-button. | false |
| img-src | String | image source. | '' |
| img-alt | String | Alternate text. | '' |
