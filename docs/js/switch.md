# Switch

> sources:  
> [js/components/input-check](../../src/js/components/input-check.vue)  
> [js/components/input-radio](../../src/js/components/input-radio.vue)

## Usage

```html
<!-- input-check -->
<input-check name="is-small" v-model="isSmall">small</input-check>

<!-- input-radio -->
<input-radio name="input-radio" value="small" v-model="inputRadio">small</input-radio>

<!-- Toggle style -->
<input-check class="toggle" name="use-toggle">Toggle</input-check>
<input-radio class="toggle" name="toggle-radio" value="male">Male</input-radio>
```

## Props

### input-check

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| id | String | The id for `<input>`  | automatically (e.g. "input-check-id-1") |
| name | String | Input name | null |
| value | String | Input value | null |
| class-name | String | class attribute for `<input>` | null |
| checked | Boolean | checked attribute for `<input>` | false |
| required | Boolean | required attribute for `<input>` | false |

### input-radio

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| id | String | The id for `<input>`  | automatically (e.g. "input-radio-id-1") |
| name | String | Input name | null |
| value | String | Input value | null |
| class-name | String | class attribute for `<input>` | null |
| checked | Boolean | checked attribute for `<input>` | false |
| required | Boolean | required attribute for `<input>` | false |
