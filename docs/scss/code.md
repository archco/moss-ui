# Code

> source: [scss/parts/code](../../src/scss/parts/_code.scss)

Display inline or block fragment of computer code.

### Table of contents

- [Usage](#default-tags)
  - [Inline code](#link)
  - [Code blocks](#table)
  - [Variables](#blockquote)
  - [User input](#user-input)
  - [Sample output](#sample-output)
- [SCSS variables](#scss-variables)

## Usage

### Inline code

``` html
<code>window</code>
```

### Code blocks

``` html
<pre><code>
function getTarget() {
  const elm = document.querySelector('#target');
  return elm;
}
</code></pre>
```

### Variables

``` html
<var>x</var> = <var>y</var> + 2 </p>
```

### User input

``` html
<kbd>ctrl + p</kbd>
```

### Sample output

``` html
<samp>This text is meant to be treated as sample output from a computer program.</samp>
```

## SCSS variables

``` scss
// code
$code-padding-y: .15em !default;
$code-padding-x: .25em !default;
$code-font-size: .85em !default;
$code-bg-color: rgba($background-color-invert, .05) !default;
$code-color: get-contrast(rgba-to-rgb($code-bg-color, $background-color)) !default;
$code-border-radius: $radius-normal !default;
$code-block-padding-y: 1em !default;
$code-block-padding-x: 1em !default;
$code-block-line-height: 1.45 !default;
$kbd-color: strongen($text-color-weak, 15%) !default;
$kbd-bg-color: $background-color !default;
$kbd-border-color: $border-color !default;
```
