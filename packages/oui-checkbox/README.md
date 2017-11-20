# Checkbox

<component-status cx-design="partial" ux="rc"></component-status>

## Usage

```html
<oui-checkbox
  text="..."
  id="..."
  name="..."
  disabled="..."
  model="..."
  on-change="..."
></oui-checkbox>
```

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default | Description
| ----          | ----                    | ----    | ----             | ----                     | ----    | ----
| text          | string                  | @       |                  |                          |         | checkbox text
| id            | string                  | @?      | `true`           |                          |         | id attribute of the checkbox
| name          | string                  | @?      | `true`           |                          |         | name attribute of the checkbox
| disabled      | boolean                 | <?      |                  |                          | false   | disabled flag
| model         | nullable&lt;boolean&gt; | =?      |                  | `true`, `false`, `null`  |         | current value of the checkbox and null is considered as `indeterminate`
| on-change     | function                | &?      |                  |                          |         | handler triggered when value has changed

## Examples

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

