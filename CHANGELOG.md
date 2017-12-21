# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][]

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
- Change KeybordEvent.keyCode to KeboardEvent.key #53

### Fixed
- Fix attribute problem in anchored-tag.vue.

### Removed
- Remove tooltip.scss. instead use [v-tooltip](https://github.com/archco/moss-ui/blob/master/docs/js/directives.md#tooltip) vue-directive. #56
- Remove unnecessary part "aside.scss". #60
- Remove deprecated scss mixin, `flex-container()`. instead use `flex-container-align`. #52

## [0.3.2][] - 2017-10-18

### Changed

- Change tree-item.vue. #47

## [0.3.0][] - 2017-10-11

### Added

- Implement input with icons. #37
- Add a new components: "input-check" and "input-radio". #36
- Add a new vue directive: Scrollspy #29

### Changed

- Separating javascript library to package. #42
  - [ElementUtil](https://github.com/archco/element-util)
  - [ElementMeasurer](https://github.com/archco/element-measurer)

### Fixed

- Fix vue components that need hide during loading. #38

## [0.2.2][] - 2017-08-27

### Added

- Add scss helper classes about text. #32
- Add scss helper classes about display. #35

### Changed

- Update scss/helpers/flex.scss

### Fixed

- Fix bug: Add button type attribute in all buttons in vue components. #33
- Fix bug in modal.vue: In modal show state, only "escape" key triggers modal.close (exclude "backspace" and "delete" key) #34

## [0.2.1][] - 2017-08-24

### Added

- Add `isEmpty()` method into js/lib/util.js.
- Add a new vue directive: clipboard #31

### Changed

- Change modal.vue: Kill the scroll on the body when modal is shown. #30
- Change modal.vue: Close modal when if backspace, escape or delete key is pressed.

## [0.2.0][] - 2017-08-10

### Added

- Add a new vue directive "[tooltip](https://github.com/archco/moss-ui/blob/master/docs/directives.md#tooltip)". #4
- Add scss helper class "sizing". #23
- Add a new vue component "tree-item". #26
- Add [Demo](https://archco.github.io/moss-ui/) page. #8

### Changed

- Change location of color-set to variables.scss #28
- Change style of taps. #11
- Improve Chip: add color prop #27

### Fixed

- Reduce "mounted" process in dropdown. #22

## [0.1.5][] - 2017-07-29

### Fixed

- Fixed problem in rendering navbar. #20
- Fixed helper functions. #21

## [0.1.4][] - 2017-07-27

### Added

- Add some methods in lib/color.js #19

## [0.1.3][] - 2017-07-25

### Added

- Add directive "set-value". #17

### Changed

- Improve lib/color.js #18

## [0.1.2][] - 2017-07-23

### Added

- Improve ElementUtil #15
- Add a new directive "wrap". #16

### Removed

- Remove EventBus #9 -> Instead using custom events of context root.

## [0.1.1][] - 2017-07-23

### Added

- Add directive "confirm". #12
- Add "close" event in close-button.vue #14

### Fixed

- Fix bug in dropdown.vue

## [0.1.0][] - 2017-07-21

### First Release 😆

- [README.md](README.md)
- [docs/README.md](docs/README.md)

[Unreleased]: https://github.com/archco/moss-ui/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/archco/moss-ui/compare/v0.3.2...v0.4.0
[0.3.2]: https://github.com/archco/moss-ui/compare/v0.3.0...v0.3.2
[0.3.0]: https://github.com/archco/moss-ui/compare/v0.2.2...v0.3.0
[0.2.2]: https://github.com/archco/moss-ui/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/archco/moss-ui/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/archco/moss-ui/compare/v0.1.5...v0.2.0
[0.1.5]: https://github.com/archco/moss-ui/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/archco/moss-ui/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/archco/moss-ui/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/archco/moss-ui/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/archco/moss-ui/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/archco/moss-ui/compare/fec6b36...v0.1.0
