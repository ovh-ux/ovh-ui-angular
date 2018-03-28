# Checkbox

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Unchecked

```html:preview
<oui-checkbox text="Normal"></oui-checkbox>
<oui-checkbox text="Disabled" disabled></oui-checkbox>
```

### Checked

```html:preview
<div ng-init="$ctrl.checked = true">
  <oui-checkbox text="Normal" model="$ctrl.checked"></oui-checkbox>
  <oui-checkbox text="Disabled" model="$ctrl.checked" disabled></oui-checkbox>
</div>
```

### Indeterminate

```html:preview
<div ng-init="$ctrl.indeterminate = null">
  <oui-checkbox text="Normal" model="$ctrl.indeterminate"></oui-checkbox>
  <oui-checkbox text="Disabled" model="$ctrl.indeterminate" disabled></oui-checkbox>
</div>
```

### Validation

```html:preview
<form name="form">
  <div ng-init="$ctrl.agreements = false">
    <oui-checkbox text="Agreements" model="$ctrl.agreements" name="agreements" required></oui-checkbox>
  </div>
  Is this form valid? : {{ form.$valid ? "yes" : "no" }}
</form>
```

### Description

```html:preview
<div ng-init="$ctrl.indeterminate = null">
  <oui-checkbox text="Normal" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod magna rutrum lectus gravida semper. Praesent ultrices feugiat enim, nec cursus ipsum fringilla luctus. Sed vel ornare neque. Vestibulum bibendum."></oui-checkbox>
  <oui-checkbox text="Disabled" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod magna rutrum lectus gravida semper. Praesent ultrices feugiat enim, nec cursus ipsum fringilla luctus. Sed vel ornare neque. Vestibulum bibendum." disabled></oui-checkbox>
</div>
```

### On change

**Note:** Model will not be refreshed until the `on-change` callback as not finished. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html:preview
<oui-checkbox
  text="Normal"
  model="$ctrl.onChangeValue"
  on-change="$ctrl.lastOnChangeValue = modelValue"
></oui-checkbox>

<span>Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

### Accessibility

Needs to be done.

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default | Description
| ----          | ----                    | ----    | ----             | ----                     | ----    | ----
| text          | string                  | @       |                  |                          |         | checkbox text
| description   | string                  | @?      |                  |                          |         | description text
| id            | string                  | @?      | `true`           |                          |         | id attribute of the checkbox
| name          | string                  | @?      | `true`           |                          |         | name attribute of the checkbox
| disabled      | boolean                 | <?      |                  |                          | false   | disabled flag
| model         | nullable&lt;boolean&gt; | =?      |                  | `true`, `false`, `null`  |         | current value of the checkbox and null is considered as `indeterminate`
| required      | boolean                 | <?      |                  |                          | false   | `true` if the checkbox should be checked
| on-change     | function                | &?      |                  |                          |         | handler triggered when value has changed
