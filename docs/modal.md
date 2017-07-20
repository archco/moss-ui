# Modal
> source: [js/components/modal](../src/js/components/modal.vue)

## Usage
#### Basic
```html
<button class="btn" v-modal:modal01>Modal Open</button>
<modal name="modal01" title="Modal Title">
  <h3>Title</h3>
  <p>...</p>
</modal>
```

#### With actions
```html
<button class="btn" v-modal:modal02>Modal Open</button>
<modal>
  <p>...</p>
  <div slot="actions">
    <button class="btn default" v-modal:modal02.close>Cancel</button>
    <button class="btn success">Okay</button>
  </div>
</modal>
```

## Props
| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| name | String | Key of modal component. | is required. |
| title | String | Title text in modal-header | '' |
| effect | String | Transition effect name. now only 'from-top' | 'from-top' |
| close-button-html | String | header close button's innerHTML | '✖' |
| close-on | Boolean | If true, modal close when another clicked. | false |

## Directive
### v-modal
```html
<button v-modal:{name}.{modifier}>button</button>
```
- name: modal's name.
- modifier
  - [ no modifier ]: toggling modal.
  - show: show modal.
  - close: close modal.
