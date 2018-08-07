# Radio-group

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Default

```html:preview
<div ng-init="$ctrl.groupValue = 'second'" class="oui-doc-preview-only-keep-children">
<oui-radio-group model="$ctrl.groupValue">
    <oui-radio value="'first'">First</oui-radio>
    <oui-radio value="'second'">Second</oui-radio>
    <oui-radio value="'third'">Third</oui-radio>
</oui-radio-group>
</div>
```

### Disabled

```html:preview
<div ng-init="$ctrl.groupValue2 = 'second'" class="oui-doc-preview-only-keep-children">
<oui-radio-group model="$ctrl.groupValue2">
    <oui-radio value="'first'" disabled>First</oui-radio>
    <oui-radio value="'second'" disabled>Second</oui-radio>
    <oui-radio value="'third'" disabled>Third</oui-radio>
</oui-radio-toggle>
</div>
```

### On change

```html:preview
<div ng-init="$ctrl.groupValue3 = 'second'" class="oui-doc-preview-only-keep-children">
<oui-radio-group model="$ctrl.groupValue3" on-change="$ctrl.lastOnChangeValue = modelValue">
    <oui-radio value="'first'">First</oui-radio>
    <oui-radio value="'second'">Second</oui-radio>
    <oui-radio value="'third'">Third</oui-radio>
</oui-radio-group>
</div>
<span class="oui-doc-preview-only">Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## API

| Attribute     | Type      | Binding   | One-time Binding  | Values    | Default   | Description
| ----          | ----      | ----      | ----              | ----      | ----      | ----
| `model`       | Object    | =?        | no                | n/a       | n/a       | current value of the radio
| `name`        | string    | @?        | yes               | n/a       | n/a       | name attribute of the radio
| `on-change`   | function  | &         | no                | n/a       | n/a       | handler triggered when model has changed
