# Radio-toggle

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html
<oui-radio-toggle
  model="..."
  name="...",
  on-change="...">
    <oui-radio/>
    <oui-radio/>
</oui-radio-toggle>
```

## Examples

### Default

```html:preview
<div ng-init="$ctrl.groupValue = 'second'">
    <oui-radio-toggle model="$ctrl.groupValue">
        <oui-radio text="First"  value="'first'"></oui-radio>
        <oui-radio text="Second" value="'second'"></oui-radio>
        <oui-radio text="Third" value="'third'"></oui-radio>
    </oui-radio-toggle>
</div>
```

### On change

```html:preview
<div ng-init="$ctrl.groupValue2 = 'third'">
    <oui-radio-toggle model="$ctrl.groupValue2" on-change="$ctrl.lastOnChangeValue = modelValue">
        <oui-radio text="First"  value="'first'"></oui-radio>
        <oui-radio text="Second" value="'second'"></oui-radio>
        <oui-radio text="Third" value="'third'"></oui-radio>
    </oui-radio-toggle>
</div>
<span>Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default | Description
| ----          | ----                    | ----    | ----             | ----                     | ----    | ----
| name          | string                  | @?      | `true`           |                          |         | name attribute of the radio
| model         | Object                  | =?      |                  |                          |         | current value of the radio
| on-change     | function                | &       |                  |                          |         | handler triggered when model has changed
