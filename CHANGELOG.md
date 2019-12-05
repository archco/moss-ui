# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

### Previous Versions

- [v0.7 - current](https://github.com/archco/moss-ui/blob/master/CHANGELOG.md)
- [v0.4 - v0.6](https://github.com/archco/moss-ui/blob/master/docs/changelog/0.4-0.6.md)
- [v0.1 - v0.3](https://github.com/archco/moss-ui/blob/master/docs/changelog/0.1-0.3.md)

## [Unreleased]

### Added

- Added new JS library [ScrollFire](https://github.com/archco/moss-ui/blob/master/docs/js/scroll-fire.md#scrollfire). #142
- Added SCSS Loader `.loader-spin`, `.loader-grow`, `.loader-dots` and `.loader-roller`. #146

### Updated

- *IMPORTANT* Updated VueAgile(Carousel component) v0.x to v1.0. [See more info here](https://github.com/lukaszflorczak/vue-agile#important--update-from-version--10). #144
- Updated dependencies. (794960f5105320a8b6774f28010801facb16554f)

### Changed

- *IMPORTANT* Changed some SCSS variable names. Check [HERE](https://github.com/archco/moss-ui/issues/148#issue-526350064)
- *IMPORTANT* Changed some SCSS helper classes. Check [HERE](https://github.com/archco/moss-ui/issues/145#issuecomment-556873670)
- Changed scss variable names of the [Carousel](https://github.com/archco/moss-ui/blob/master/docs/js/carousel.md). #144
  - `$carousel-arrow-color` -> `$carousel-nav-button-color`
  - `$carousel-arrow-hover-color` -> `$carousel-nav-button-hover-color`
  - add `$carousel-nav-button-font-size`
- Renamed SCSS loader's class name `.loader-one` to `.loader-spin`. #146

### Removed

- Removed SCSS optional class `.is-loading` for button. #146
- Removed `callback` option from JS utility method `scrollTo`. this method returns promise object so callback option is unnecessary. #152

### Fixed

- Fixed bug in JS utility method `scrollTo`. #152

## [0.7.3] - 2018-08-03

### Added

- Added scss-variable `$input-line-height` for `form.scss`.

### Fixed

- Fixed bug that size of `input[type=checkbox]` and `input[type=radio]` in inline display form.
- Fixed bug that background-color was not applied in some disabled inputs.
- Fixed bug that form validation is not working in `input[type=file]`. #143

## [0.7.2] - 2018-07-21

### Added

- Add scss mixin `reset-link`. #140
- Add util method `addSvg()`. It's for adding custom SVG icon into the SVG icon list. #137

### Changed

- Change prop of the dropdown `button-with-caret` to `append-icon`. And caret icon in the button is not appended as default. Please [see document](https://github.com/archco/moss-ui/blob/master/docs/js/dropdown.md#append-icon-to-button). #139
- Rename scss placeholder `%link-no-deco` to `%no-decoration`. #141

### Fixed

- Fixed bug in some situation in nested modal. #136

## [0.7.0] - 2018-06-23

### Added

- Added new `.form-row` for form grid style. #127
- Added form validation style #132

### Changed

- Changed name of the `scroll-to` component to `scroll-button`. #124
- Improved navbar: add variable $navbar-header-height. see [this](https://github.com/archco/moss-ui/blob/master/docs/js/navbar.md#specifying-height) #131
- Changed modal: change default value of the `effect` prop from `'from-top'` to `''`. #128

### Updated

- Updated scss-helpers that referenced from the bootstrap. #133
  - flex: add flex-helpers. `.flex-fill`, `.flex-grow-0`, `.flex-grow-1`, `.flex-shrink-0` and `.flex-shrink-1`.

### Fixed

- Fix bug in `nav-item`. #130

### Removed

Remove deprecated in v0.6.x #104

- `js/lib/util.js` - Some JS util methods are deprecated. use [`cake-case`](https://github.com/archco/cake-case#readme) instead. #103 
  - `Util.strToCamel`: use `Case.camel` or `Case.pascal` instead.
  - `Util.strToKebab`: use `Case.kebab` instead.
  - `Util.strToNormal`: use `Case.lower` instead.
  - `Util.capitalize`: use `Case.capital` instead.
- `js/lib/util.js` - `scrollIt()` util method, use `scrollTo()` instead. #123
- `scss/mixins/_arrow.scss` - It's useless. use [Icon](https://github.com/archco/moss-ui/blob/master/docs/svg-icons.md#svg-icons) instead.
- `scss/mixins/_caret.scss` - It's useless. use [Icon](https://github.com/archco/moss-ui/blob/master/docs/svg-icons.md#svg-icons) instead.
- The switch components `input-check` and `input-radio` are deprecated. Recommend you use default tags or other external plugins.
  - `js/components/input-check.vue`
  - `js/components/input-radio.vue`

[Unreleased]: https://github.com/archco/moss-ui/compare/v0.7.3...HEAD
[0.7.3]: https://github.com/archco/moss-ui/compare/v0.7.2...v0.7.3
[0.7.2]: https://github.com/archco/moss-ui/compare/v0.7.0...v0.7.2
[0.7.0]: https://github.com/archco/moss-ui/compare/v0.6.5...v0.7.0
