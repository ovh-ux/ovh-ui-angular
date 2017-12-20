![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

[![NPM](https://nodei.co/npm/ovh-ui-angular.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ovh-ui-angular/)

[![Maintenance](https://img.shields.io/maintenance/yes/2017.svg)]() [![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux) [![Build Status](https://travis-ci.org/ovh-ux/ovh-ui-angular.svg)](https://travis-ci.org/ovh-ux/ovh-ui-angular) [![Build Status](https://travis-ci.org/ovh/ovh-ui-angular.svg)](https://travis-ci.org/ovh-ux/ovh-ui-angular)

# OVH UI (Angular)

A set of maintainable components for the OVH ecosystem (Angular).

## Installation

### Prerequisites

This library has been tested with AngularJS 1.6.

You will also need these dependencies in your project:

- [angular-aria](https://www.npmjs.com/package/angular-aria)
- [ovh-ui-kit](https://github.com/ovh-ux/ovh-ui-kit)

Follow the [guide](https://github.com/ovh-ux/ovh-ui-kit) for _ovh-ui-kit_, because you need to integrate it by _yourself_.

### bower

```bash
bower install --save ovh-ui-angular
```

### npm

```bash
npm install --save ovh-ui-angular
```

## Usage

1. In your `index.html`, you need to load `oui-angular.js`:

```html
  ...
  <script src="ovh-ui-angular/packages/oui-angular/dist/oui-angular.js" type="text/javascript"></script>
  ...
```

2. You need to add `oui` in your angular module dependencies like that:

```javascript
angular.module("myAwesomeApp", [
    ...
    "oui"
    ...
]);
```

## Get the sources

```bash
    git clone https://github.com/ovh-ux/ovh-ui-angular.git
    cd ovh-ui-angular
    yarn install
    yarn link
    yarn bootstrap
    cd packages/ovh-ui-angular
    yarn build:watch
```
### NPM

For those using npm instead of yarn here is a list of equivalences: [https://yarnpkg.com/en/docs/migrating-from-npm](https://yarnpkg.com/en/docs/migrating-from-npm)


You've developed a new cool feature? Fixed an annoying bug? We'd be happy
to hear from you!

see [CONTRIBUTING](https://github.com/ovh-ux/ovh-ui-angular/blob/master/CONTRIBUTING.md)

# Related links

 * Contribute: [https://github.com/ovh-ux/ovh-ui-angular/blob/master/CONTRIBUTING.md](https://github.com/ovh-ux/ovh-ui-angular/blob/master/CONTRIBUTING.md)
 * Report bugs: [https://github.com/ovh-ux/ovh-ui-angular/issues](https://github.com/ovh-ux/ovh-ui-angular/issues)
 * Get latest version: [https://github.com/ovh-ux/ovh-ui-angular](https://github.com/ovh-ux/ovh-ui-angular)

# Documentation

Documentation is available from the `packages/` folder, every package is self-documented throught a `README.md` file. But you can also check bellow.

# Checkbox

## Usage

### Label

```html
<oui-checkbox label="Checked" checked></oui-checkbox>
<oui-checkbox>
  <oui-checkbox-label>Unchecked</oui-checkbox-label>
</oui-checkbox>
<oui-checkbox label="Disabled [checked]" checked disabled></oui-checkbox>
<oui-checkbox label="Disabled [unchecked]" disabled></oui-checkbox>
```

### Description

```html
<oui-checkbox label="Checked" description="A short description" checked></oui-checkbox>
<oui-checkbox label="Unchecked">
  <oui-checkbox-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-checkbox-description>
</oui-checkbox>
<oui-checkbox label="Disabled [checked]" checked disabled>
  <oui-checkbox-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-checkbox-description>
</oui-checkbox>
<oui-checkbox label="Disabled [unchecked]" disabled>
  <oui-checkbox-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-checkbox-description>
</oui-checkbox>
```

### Big

```html
<oui-checkbox big label="Checked" checked></oui-checkbox>
<oui-checkbox big label="Unchecked">
  <oui-checkbox-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-checkbox-description>
</oui-checkbox>
<oui-checkbox big label="Disabled [checked]" checked disabled>
  <oui-checkbox-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-checkbox-description>
</oui-checkbox>
<oui-checkbox big label="Disabled [unchecked]" disabled>
  <oui-checkbox-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-checkbox-description>
</oui-checkbox>
```

### Thumbnail

```html
<oui-checkbox thumbnail label="Checked" checked></oui-checkbox>
<oui-checkbox thumbnail label="Unchecked">
  <oui-checkbox-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-checkbox-description>
</oui-checkbox>
<oui-checkbox thumbnail label="Disabled [checked]" checked disabled>
  <oui-checkbox-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-checkbox-description>
</oui-checkbox>
<oui-checkbox thumbnail label="Disabled [unchecked]" disabled>
  <oui-checkbox-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-checkbox-description>
</oui-checkbox>
```

## One-way binding properties

### checked

<oui-checkbox on-change="$ctrl.checked = $event.value" label="Click to check/uncheck the test checkbox"></oui-checkbox>

```html
<oui-checkbox label="Test" checked="$ctrl.checked" disabled></oui-checkbox>
```

### disabled

<oui-checkbox on-change="$ctrl.disabled = $event.value" label="Click to disable the test checkbox"></oui-checkbox>

```html
<oui-checkbox checked disabled="$ctrl.disabled" label="Test"></oui-checkbox>
```

## Events

### on-change

```html
<oui-checkbox on-change="$ctrl.showCurrentValueInPopup($event.value)">
    <oui-checkbox-label>Click here to show a popup with the current value</oui-checkbox-label>
</oui-checkbox>
```

# oui-message

## Usage

### Success

```html
<oui-message message="Nullam a pellentesque nisl. Aliquam erat volutpat. Sed sed ornare diam, ut sollicitudin mauris. Quisque tincidunt dapibus augue, et tincidunt arcu sagittis et. Nam sed aliquet tellus, vel tincidunt urna. Aliquam a placerat enim. Donec condimentum sed nibh a egestas. Maecenas at leo et magna lobortis pretium. Praesent vitae fermentum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus." type="success"></oui-message>
```

### Information

```html
<oui-message message="Nullam a pellentesque nisl. Aliquam erat volutpat. Sed sed ornare diam, ut sollicitudin mauris. Quisque tincidunt dapibus augue, et tincidunt arcu sagittis et. Nam sed aliquet tellus, vel tincidunt urna. Aliquam a placerat enim. Donec condimentum sed nibh a egestas. Maecenas at leo et magna lobortis pretium. Praesent vitae fermentum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus." type="info"></oui-message>
```

### Warning

```html
<oui-message message="Nullam a pellentesque nisl. Aliquam erat volutpat. Sed sed ornare diam, ut sollicitudin mauris. Quisque tincidunt dapibus augue, et tincidunt arcu sagittis et. Nam sed aliquet tellus, vel tincidunt urna. Aliquam a placerat enim. Donec condimentum sed nibh a egestas. Maecenas at leo et magna lobortis pretium. Praesent vitae fermentum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus." type="warning"></oui-message>
```

### Error

```html
<oui-message message="Nullam a pellentesque nisl. Aliquam erat volutpat. Sed sed ornare diam, ut sollicitudin mauris. Quisque tincidunt dapibus augue, et tincidunt arcu sagittis et. Nam sed aliquet tellus, vel tincidunt urna. Aliquam a placerat enim. Donec condimentum sed nibh a egestas. Maecenas at leo et magna lobortis pretium. Praesent vitae fermentum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus." type="error"></oui-message>
```

### Complexe message

```html
<oui-message type="info">
  <span>Grocery list</span>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
</oui-message>
```

## Attributes

|Attribute        | Value           | Description         |
| ----            | ----            | ----                |
| __message__     |                 | Text message        |
| __type__        | success         | Success message     |
|                 | info            | Information message |
|                 | warn            | Warning message     |
|                 | error           | Error message       |


## Services

- OuiMessageDispatcher
- OuiMessageListenerFactory

# Radio

## Usage

### Label

```html
<oui-radio label="Checked" checked></oui-radio>
<oui-radio label="Unchecked"></oui-radio>
<oui-radio label="Disabled [checked]" checked disabled></oui-radio>
<oui-radio label="Disabled [unchecked]" disabled></oui-radio>
```

### Description

```html
<oui-radio label="Checked" description="A short description" checked></oui-radio>
<oui-radio label="Unchecked">
  <oui-radio-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-radio-description>
</oui-radio>
<oui-radio label="Disabled [checked]" checked disabled>
    <oui-radio-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-radio-description>
</oui-radio>
<oui-radio label="Disabled [unchecked]" disabled>
  <oui-radio-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-radio-description>
</oui-radio>
```

### Big

```html
<oui-radio big label="Checked" checked></oui-radio>
<oui-radio big label="Unchecked">
  <oui-radio-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-radio-description>
</oui-radio>
<oui-radio big label="Disabled [checked]" checked disabled>
    <oui-radio-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-radio-description>
</oui-radio>
<oui-radio big label="Disabled [unchecked]" disabled>
  <oui-radio-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-radio-description>
</oui-radio>
```

### Thumbnail

```html
<oui-radio thumbnail label="Checked" checked></oui-radio>
<oui-radio thumbnail label="Unchecked">
  <oui-radio-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-radio-description>
</oui-radio>
<oui-radio thumbnail label="Disabled [checked]" checked disabled>
    <oui-radio-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-radio-description>
</oui-radio>
<oui-radio thumbnail label="Disabled [unchecked]" disabled>
  <oui-radio-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </oui-radio-description>
</oui-radio>
```

## One-way binding properties

### checked

<oui-checkbox on-change="$ctrl.checked = $event.value" label="Click to check/uncheck the test radio"></oui-checkbox>

```html
<oui-radio label="Test" checked="$ctrl.checked" disabled></oui-radio>
```

### disabled

<oui-checkbox on-change="$ctrl.disabled = $event.value" label="Click to disable the test radio"></oui-checkbox>

```html
<oui-radio label="Test" checked disabled="$ctrl.disabled"></oui-radio>
```

## Groups

see [oui-radio-group](#RadioGroup) for details

# Radio group

## One-way binding properties

### value

```html
<oui-radio-group value="$ctrl.groupValue">
    <oui-radio label="First" value="first"></oui-radio>
    <oui-radio label="Second" value="second"></oui-radio>
    <oui-radio label="Third" value="third"></oui-radio>
</oui-radio-group>
```

## Events

### on-change

```html
<oui-radio-group on-change="$ctrl.showCurrentValueInPopup($event.value)">
    <oui-radio label="First" value="first"></oui-radio>
    <oui-radio label="Second" value="second"></oui-radio>
    <oui-radio label="Third" value="third"></oui-radio>
</oui-radio-group>
```

# License

See [https://github.com/ovh-ux/ovh-ui-angular/blob/master/LICENSE](https://github.com/ovh-ux/ovh-ui-angular/blob/master/LICENSE)
