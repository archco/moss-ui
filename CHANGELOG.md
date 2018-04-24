# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

### Previous Versions

- [v0.1.\* - v0.3.\*](https://github.com/archco/moss-ui/blob/master/docs/changelog/0.1-0.3.md)

## [Unreleased][]

## [0.6.1][] - 2018-04-24

### Added

- Added "state" event to some vue-components. #117
  - [collapse](https://github.com/archco/moss-ui/blob/master/docs/js/collapse.md#events)
  - [dropdown](https://github.com/archco/moss-ui/blob/master/docs/js/dropdown.md#events)
  - [modal](https://github.com/archco/moss-ui/blob/master/docs/js/modal.md#events)
  - [nav-drawer](https://github.com/archco/moss-ui/blob/master/docs/js/nav-drawer.md#events)

### Fixed

- Fixed declaration file. (8cc60acab42a3426da1afa2493773f5604d771b0)

## [0.6.0][] - 2018-04-22

### Added

- Added dependency "[cake-case](https://github.com/archco/cake-case#readme)". #103
- Added style for `<kbd>` tag. #109
- Added scss-class `.btn-text`. #113
- Added a new vue-directive `v-outer`. #112
- Added a new vue-component `nav-drawer`. #24, #114

### Changed

- Changed js module: Exports vue components and directives. #100
- Improve Styles #107
  - Improved `<fieldset>` style. #105
  - Changed input style. #101
- Separates code part from scaffolding.scss. #109
- Add prefix for class name of the icon. `.icon` -> `.moss-icon` #98
- Improved collapse: Now available to collapse horizontally. #111

### Fixed

- Fix link style that inside an inline code. #99
- Fix icon vertical-align to `middle`. #110

### Deprecated

- Some JS util methods are deprecated. use [`cake-case`](https://github.com/archco/cake-case#readme) instead.
  - `Util.strToCamel`: use `Case.camel` or `Case.pascal` instead.
  - `Util.strToKebab`: use `Case.kebab` instead.
  - `Util.strToNormal`: use `Case.lower` instead.
  - `Util.capitalize`: use `Case.capital` instead.
- `scss/mixins/_arrow.scss` - It's useless. use [Icon](https://github.com/archco/moss-ui/blob/master/docs/svg-icons.md#svg-icons) instead.
- `scss/mixins/_caret.scss` - It's useless. use [Icon](https://github.com/archco/moss-ui/blob/master/docs/svg-icons.md#svg-icons) instead.

### Removed

- Removes deprecated in v0.5.x. #88

## [0.5.3][] - 2018-03-18

### Added

- Added `.travis.yml`. [![Build Status](https://travis-ci.org/archco/moss-ui.svg?branch=master)](https://travis-ci.org/archco/moss-ui)

### Changed

- Changed testing tool to [vue-jest](https://vue-test-utils.vuejs.org/en/guides/testing-SFCs-with-jest.html). #96
- Updated webpack to v4.1.1. #94 #96
- Changed event target to VNode, not $root. #97
  - v-clipboard: `clipboard-success`
  - v-scrollspy: `scrollspy-active`, `scrollspy-refresh`

## [0.5.2][] - 2018-03-05

### Added

- Added the ["types" declaration file](https://github.com/archco/moss-ui/blob/master/index.d.ts). #92

### Changed

- Update [scss-palette](https://github.com/archco/scss-palette/releases) to v0.5.1
  - Changes case of color name to `kebab-case`.
- Improve Chip component. #90
  - Add prop `close-action`. It can set 'remove', 'hide' or '' (It's no action). default is 'remove'.
  - Add event `close`. It triggers when clicked close-button.
- Improve Search component. #91
  - Add event `input-change`.
  - Add prop `input-placeholder`.
  - Add data `suggestions`.

## [0.5.1][] - 2018-02-23

### Fixed

- Fix problem that MossUI object is empty. (ee9a3abcdf956cd15092d7b7c3fd83927c962601)

## [0.5.0][] - 2018-02-23

### Added

- Adds new test environment for vue component via vue-test-utils. #75, #78
- Add a new color library '[moo-color](https://github.com/archco/moo-color#readme)'. #72
- Add string-case convert methods in Util: `strToNormal()`, `strToCamel()` and `strToKebab()`.
- Add a new component '[collapse-toggle](https://github.com/archco/moss-ui/blob/master/docs/js/collapse.md#using-collapse-toggle)'.
- Add [SVG icons](https://github.com/archco/moss-ui/blob/master/docs/svg-icons.md) #82
- Add a new scss part '[input-group](https://github.com/archco/moss-ui/blob/master/docs/scss/input-group.md)'. #64
- Add a new vue component '[search](https://github.com/archco/moss-ui/blob/master/docs/js/search.md)'. #64

### Changed

- Change export type of Util to library. #80
- Now available to modal close action with `data-toggle` attribute. #76
- Rename badge's modifier class name `rounded` to `round`.
- Rename scss-variable `$transition-time` to `$transition-duration`.
- Improve converting to id attribute in 'anchored-tag.vue' via `Util.strToKebab()` method.
- Update some scss helpers that refer to the bootstrap. #87
  - Add a new variable `$container-max-widths`.
  - Remove grid column modifiers `pull` and `push`. use `order` instead.
  - Move `order` part flex to grid.

### Deprecated

- Some scss-helper classes are deprecated. see [details](https://github.com/archco/moss-ui/issues/88) #88

### Removed

- Remove `close-emit` prop in message.vue. use `close` event instead. (56640b540d4073796d762b4f154b6eab9455cfef)
- Removes text scss helper classes `align-left`, `align-center` and `align-right`. use `text-left`, `text-center` and `text-right` instead.

## [0.4.2] - 2017-12-24

### Fixed

- Fix cursor style in pagination.scss (923fd69bc89410cba0484954f89c2e2a42232bef)
- Fix import syntax. (b832f183de76d88f383b7b66b5a467c7bf6483b0)

## [0.4.1] - 2017-12-21

### Added

- Add prop "opened" into tree.vue (0ded96924e4203b839e3d95dc30a419587fca398)
- Add the new vue-directive "v-ripple". #62

### Changed

- Modify minor things in dropdown. #70
  - Available set to dropdown button without caret.
  - Available use to 'button' tag as dropdown-item.
- Modify style of pagination. #61
- Change scss-variable names. #67
  - Scaffolding
    - `$table-head-color` -> `$table-head-bg-color`
    - `$code-padding` -> `$code-padding-y` and `$code-padding-x`
    - `$code-block-padding` ->`$code-block-padding-y` and `$code-block-padding-x`
  - Button
    - `$button-color-is-enable` changes to `$auto-button-color-enable`
  - Form
    - `$input-padding` -> `$input-padding-y` and `$input-padding-x`
    - `$input-color-set-bg-enable` -> `$auto-input-bg-color-enable`
  - List
    - `$list-group-hover-bg` -> `$list-group-hover-bg-color`
  - Pagination #61
    - add `$pagination-margin`
    - add `$pagination-item-margin`
    - add `$pagination-item-padding-y`
    - add `$pagination-item-padding-x`
    - add `$pagination-item-border-radius`
    - `$pagination-bg` -> `$pagination-bg-color`
    - `$pagination-hover-bg` -> `$pagination-hover-bg-color`
    - `$pagination-active-bg` -> `$pagination-active-bg-color`
    - remove `$pagination-active-hover-color`
    - remove `$pagination-active-hover-bg`
  - Dropdown #70
    - Add `$dropdown-line-height`
    - `$dropdown-link-hover-color` -> `$dropdown-item-hover-color`
    - `$dropdown-link-color` -> `$dropdown-item-color`
- Change prop name in close-button.vue: `parent-relatived` -> `parent-to-relative`. #67

### Fixed

- Fix position bug in toast.vue #69
- Fix bug in navbar.scss #66
- Fix carousel to hides during loading.

## [0.4.0][] - 2017-11-26

### Added

- Add a new dependency, [Popper.js](https://github.com/FezVrasta/popper.js). #54
- Add color-set to blockquote. #57
- Add a new component [Carousel](https://github.com/archco/moss-ui/blob/master/docs/js/carousel.md): It uses [vue-agile](https://github.com/lukaszflorczak/vue-agile). #25

### Changed

- Improve Dropdown #46
  - Change dropdown vue-component to build on Popper.js #55
  - Add content decorators. See [dropdown.md](https://github.com/archco/moss-ui/blob/master/docs/js/dropdown.md#content-decorators)
  - Add "navigation by keys". #59
- Change tooltip vue-directive to build on Tooltip.js #56
- Change structure of `dist/` directory. #51
  - `moss.js`: Distribution script file.
  - `moss.min.js`: Minified distribution script file.
  - `moss.mod.js`: ES module file.
  - `moss.css`: Distribution style file.
- Change browserslist setting "> 1%" to "defaults". #50
- Change KeyboardEvent.keyCode to KeyboardEvent.key #53

### Fixed

- Fix attribute problem in anchored-tag.vue.

### Removed

- Remove tooltip.scss. instead use [v-tooltip](https://github.com/archco/moss-ui/blob/master/docs/js/directives.md#tooltip) vue-directive. #56
- Remove unnecessary part "aside.scss". #60
- Remove deprecated scss mixin, `flex-container()`. instead use `flex-container-align`. #52

[Unreleased]: https://github.com/archco/moss-ui/compare/v0.6.1...HEAD
[0.6.1]: https://github.com/archco/moss-ui/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/archco/moss-ui/compare/v0.5.3...v0.6.0
[0.5.3]: https://github.com/archco/moss-ui/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/archco/moss-ui/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/archco/moss-ui/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/archco/moss-ui/compare/v0.4.2...v0.5.0
[0.4.2]: https://github.com/archco/moss-ui/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/archco/moss-ui/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/archco/moss-ui/compare/v0.3.2...v0.4.0
