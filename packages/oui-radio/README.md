# Radio

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Basic

```html:preview
<div ng-init="$ctrl.value1 = 'a'" class="oui-doc-preview-only-keep-children">
<oui-radio name="oui-radio-1"
    model="$ctrl.value1"
    value="'a'">
    Value A
</oui-radio>
<oui-radio name="oui-radio-1"
    model="$ctrl.value1"
    value="'b'">
    Value B
</oui-radio>
<oui-radio name="oui-radio-1"
    model="$ctrl.value1"
    value="'c'"
    disabled>
    Value C
</oui-radio>
</div>
```

### Description

```html:preview
<oui-radio description="Checked radio">Checked</oui-radio>
<oui-radio description="Disabled radio" disabled>Disabled</oui-radio>
```

### Thumbnail

```html:preview
<oui-radio thumbnail>Checked</oui-radio>
<oui-radio description="Disabled radio" disabled thumbnail="true">Disabled</oui-radio>
```

### On change

```html:preview
<div ng-init="$ctrl.value2 = 'a'" class="oui-doc-preview-only-keep-children">
<oui-radio id="radio2"
    name="oui-radio-2"
    model="$ctrl.value2"
    value="'a'"
    on-change="$ctrl.lastOnChangeValue = modelValue">
    Value A
</oui-radio>
<oui-radio name="oui-radio-2"
    model="$ctrl.value2"
    value="'b'"
    on-change="$ctrl.lastOnChangeValue = modelValue">
    Value B
</oui-radio>
</div>
<span class="oui-doc-preview-only">Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## API

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `model`       | object    | =?        | no                | n/a               | n/a       | current value of the radio
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the radio
| `name`        | string    | @?        | yes               | n/a               | n/a       | name attribute of the radio
| `description` | string    | @?        | no                | n/a               | n/a       | description text
| `value`       | object    | <         | no                | n/a               | n/a       | value of the radio
| `disabled`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `required`    | boolean   | <?        | no                | `true`, `false`   | `false`   | required flag
| `thumbnail`   | boolean   | <?        | no                | `true`, `false`   | `false`   | thumbnail style of the radio
| `on-change`   | function  | &?        | no                | n/a               | n/a       | handler triggered when value has changed

#### Deprecated

* `text`: Replaced by transclude value
