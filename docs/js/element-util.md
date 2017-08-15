# ElementUtil
> source: [js/lib/element-util](../src/js/lib/element-util.js)

The utility library for DOM Elements.

### Usage
```javascript
// Import member from package.
import { ElementUtil } from 'moss-css';
ElementUtil.addClass('#target', 'success');

// or use from global 'Moss' object.
window.Moss.lib.ElementUtil.wrap('.my-list', 'list-wrapper');
```

### Functions
- [Element Functions](#element-functions)
- [Class Functions](#class-functions)
- [Display Functions](#display-functions)
- [Filter Functions](#filter-functions)
- [Sort Functions](#sort-functions)

## Element Functions
#### getElement
- Syntax
```javascript
let element = ElementUtil.getElement(selector, base = document);
```
- Param  {String|Element|NodeList} selector
- Param  {String|Element} [ base = document ]
- Return {Element}

#### getElements
- Syntax
```javascript
let nodes = ElementUtil.getElements(selector, base = document);
```
- Param  {String|Element|NodeList} selector
- Param  {String|Element} [ base = document ]
- Return {NodeList}

#### removeElements
- Syntax
```javascript
let number = ElementUtil.removeClass(selector, base = document);
```
- Param  {String|Element|NodeList} selector
- Param  {String|Element} [ base = document ]
- Return {Number} number of affected.

#### addListener
Add event listener on selector.
- Syntax
```javascript
let effected = ElementUtil.addListener(selector, type, listener, useCapture = false);
```
- Param {String} selector
- Param {String} type - event type.
- Param {Function} listener
- Param {Boolean} [ useCapture = false ]
- Return {Number} - length of elements.

#### findAncestor
- Syntax
```javascript
let element = ElementUtil.findAncestor(element, selector);
```
- Param {Element|String} element or querySelector - base element.
- Param {String} selector - ancestor's querySelector.
- Return {Element|null}

#### wrap
wrap elements by div.wrapper, one by one.
- Syntax
```javascript
ElementUtil.wrap(selector, className, tagName = 'DIV');
```
- Param {String} selector
- Param {String} className - wrapper's class name.
- Param {String} [ tagName = 'DIV' ] - wrapper's tag name.
- Return {void}

#### wrapAll
wrap all elements inside to div.wrapper.
- Syntax
```javascript
ElementUtil.wrapAll(selector, className);
```
- Param {String} selector
- Param {String} className - wrapper's class name.
- Param {String} [ tagName = 'DIV' ] - wrapper's tag name.
- Return {void}

#### submitConfirm
- Syntax
```javascript
ElementUtil.submitConfirm(selector, message = 'Are you confirm?');
```
- Param {String|Element|NodeList} selector
- Param {String} [ message = 'Are you confirm?' ]
- Return {void}

## Class Functions
#### addClass
- Syntax
```javascript
ElementUtil.addClass(selector, className);
```
- Param  {String} selector
- Param  {String} className
- Return {void}

#### removeClass
- Syntax
```javascript
ElementUtil.removeClass(selector, className);
```
- Param {String} selector
- Param {String} className
- Return {void}

#### toggleClass
- Syntax
```javascript
ElementUtil.toggleClass(selector, className);
```
- Param {String} selector
- Param {String} className
- Return {void}

## Display Functions
#### hide
- Syntax
```javascript
ElementUtil.hide(selector);
```
- Param {String} selector
- Return {void}

#### show
- Syntax
```javascript
ElementUtil.show(selector);
```
- Param {String} selector
- Return {void}

#### toggleShow
- Syntax
```javascript
ElementUtil.toggleShow(selector);
```
- Param {String} selector
- Return {void}

## Filter Functions
#### filter
- Syntax
```javascript
let hit = ElementUtil.filter(selector, filter, htmlMode = false);
```
- Param {String} selector
- Param {String} filter
- Param {Boolean} [ htmlMode = false ] - If default, filtered by textContent. If this value is true, filtered by innerHTML.
- Return {Number} hit number

## Sort Functions
#### sortElements
- Syntax
```javascript
ElementUtil.sortElements(selector, itemSelector);
```
- Param {String} selector - parent element. (e.g. 'ul')
- Param {String} itemSelector - child items. (e.g. 'li')
- Return {void}

###### Example
in html
```html
<!-- default sort-type: string -->
<ul class="list">
  <li>three</li>
  <li>one-hundred</li>
  <li>two-thousands</li>
</ul>

<!-- sort-type: number -->
<ul class="list" data-sort-type="number">
  <li data-sort-value="3">three</li>
  <li data-sort-value="100">one-hundred</li>
  <li data-sort-value="2000">two-thousands</li>
</ul>
```
in script
```javascript
ElementUtil.sortElements('ul.list', 'li');
```

#### sortTable
- Syntax
```javascript
ElementUtil.sortTable(selector);
```
- Param {String} selector
- Return {void}

###### Example
in html
```html
<table class="table">
  <thead>
    <tr>
      <th>column 1</th>
      <th data-sort-type="date">column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>America</td>
      <td data-sort-value="2017-01-01">cell value</td>
    </tr>
    <tr>
      <td>Europe</td>
      <td data-sort-value="2017-03-02">cell value</td>
    </tr>
    <tr>
      <td>Asia</td>
      <td data-sort-value="2017-05-04">cell value</td>
    </tr>
  </tbody>
</table>
```
in script
```javascript
ElementUtil.sortTable('table.table');
```
