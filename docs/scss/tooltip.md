# Tooltip
> source: [scss/components/tooltip](../src/scss/components/_tooltip.scss)

## Usage
#### Available Directions
- top (default): `tooltip-top`
- bottom: `tooltip-bottom`
- left: `tooltip-left`
- right: `tooltip-right`

```html
<span class="tooltip" aria-label="tooltip-top (default)">Top</span>
<span class="tooltip tooltip-bottom" aria-label="tooltip-bottom style">Bottom</span>
<span class="tooltip tooltip-left" aria-label="tooltip-left style">Left</span>
<span class="tooltip tooltip-right" aria-label="tooltip-right style">Right</span>
```

#### [v-tooltip](./directives.md#tooltip)
```html
<span v-tooltip:right="'Representational State Transfer'">REST</span>
```
