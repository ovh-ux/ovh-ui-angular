# Radio-toggle-group

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Default

```html:preview
<div ng-init="$ctrl.groupValue = 'second'" class="oui-doc-preview-only-keep-children">
<oui-radio-toggle-group model="$ctrl.groupValue">
    <oui-radio text="First"  value="'first'"></oui-radio>
    <oui-radio text="Second" value="'second'"></oui-radio>
    <oui-radio text="Third" value="'third'"></oui-radio>
</oui-radio-toggle-group>
</div>
```

### Disabled

```html:preview
<div ng-init="$ctrl.groupValue2 = 'second'" class="oui-doc-preview-only-keep-children">
<oui-radio-toggle-group model="$ctrl.groupValue2">
    <oui-radio text="First"  value="'first'" disabled></oui-radio>
    <oui-radio text="Second" value="'second'" disabled></oui-radio>
    <oui-radio text="Third" value="'third'" disabled></oui-radio>
</oui-radio-toggle-group>
</div>
```

### On change

```html:preview
<div ng-init="$ctrl.groupValue3 = 'third'" class="oui-doc-preview-only-keep-children">
<oui-radio-toggle-group model="$ctrl.groupValue3" on-change="$ctrl.lastOnChangeValue = modelValue">
    <oui-radio text="First"  value="'first'"></oui-radio>
    <oui-radio text="Second" value="'second'"></oui-radio>
    <oui-radio text="Third" value="'third'"></oui-radio>
</oui-radio-toggle-group>
</div>
<span>Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default | Description
| ----          | ----                    | ----    | ----             | ----                     | ----    | ----
| name          | string                  | @?      | `true`           |                          |         | name attribute of the radio
| model         | Object                  | =?      |                  |                          |         | current value of the radio
| on-change     | function                | &       |                  |                          |         | handler triggered when model has changed
