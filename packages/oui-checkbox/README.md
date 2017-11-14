# Checkbox

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

```html
<oui-checkbox
  on-change="..."
  model="..."
  name="..."
  text="..."
  description="..."
  disabled
  required
  thumbnail
  big
></oui-checkbox>
```

## API

| Attribute         | Type            | Binding | Values              | Default             | Description                        |
| ----              | ----            | ----    | ----                | ----                | ----                               |
| on-change         | function        | &?      |                     |                     | change handle                      |
| model             | boolean         | =       |                     |                     | model value                        |
| name              | string          | @?      |                     | null                | name attribute of the checkbox     |
| text              | string          | @       |                     |                     | checkbox label                     |
| description       | string          | @?      |                     | null                | long description                   |
| disabled          | boolean         | <?      |                     | false               | disabled flag                      |
| required          | boolean         | <?      |                     | false               | disabled flag                      |
| thumbnail         |                 |         |                     |                     | modifier for thumbnail checkbox    |
| big               |                 |         |                     |                     | modifier for big checkbox          |

# OLD

## Examples

### Label

```html:preview
<oui-checkbox label="Checked" checked></oui-checkbox>
<oui-checkbox>
  <oui-checkbox-label>Unchecked</oui-checkbox-label>
</oui-checkbox>
<oui-checkbox label="Disabled [checked]" checked disabled></oui-checkbox>
<oui-checkbox label="Disabled [unchecked]" disabled></oui-checkbox>
```

### Description

```html:preview
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

```html:preview
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

```html:preview
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

```html:preview
<oui-checkbox label="Test" checked="$ctrl.checked" disabled></oui-checkbox>
```

### disabled

<oui-checkbox on-change="$ctrl.disabled = $event.value" label="Click to disable the test checkbox"></oui-checkbox>

```html:preview
<oui-checkbox checked disabled="$ctrl.disabled" label="Test"></oui-checkbox>
```

## Events

### on-change

```html:preview
<oui-checkbox on-change="$ctrl.showCurrentValueInPopup($event.value)">
    <oui-checkbox-label>Click here to show a popup with the current value</oui-checkbox-label>
</oui-checkbox>
```
