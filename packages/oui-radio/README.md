# Radio

## Usage

### Label

```html:preview
<oui-radio label="Checked" checked></oui-radio>
<oui-radio label="Unchecked"></oui-radio>
<oui-radio label="Disabled [checked]" checked disabled></oui-radio>
<oui-radio label="Disabled [unchecked]" disabled></oui-radio>
```

### Description

```html:preview
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

```html:preview
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

```html:preview
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

```html:preview
<oui-radio label="Test" checked="$ctrl.checked" disabled></oui-radio>
```

### disabled

<oui-checkbox on-change="$ctrl.disabled = $event.value" label="Click to disable the test radio"></oui-checkbox>

```html:preview
<oui-radio label="Test" checked disabled="$ctrl.disabled"></oui-radio>
```

## Groups

see `oui-radio-group` for details