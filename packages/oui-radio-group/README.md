# Radio-group

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html
<oui-radio-group
  model="..."
  name="...",
  on-change="...">
    <oui-radio/>
    <oui-radio/>
</oui-radio-group>
```

## Examples

### Default

```html:preview
<div ng-init="$ctrl.groupValue = 'second'">
    <oui-radio-group model="$ctrl.groupValue">
        <oui-radio text="First"  value="'first'"></oui-radio>
        <oui-radio text="Second" value="'second'"></oui-radio>
        <oui-radio text="Third" value="'third'"></oui-radio>
    </oui-radio-group>
</div>
```

### On change

```html:preview
<oui-radio-group on-change="ctrl.lastOnChangeValue = modelValue">
    <oui-radio text="First"  value="'first'"></oui-radio>
    <oui-radio text="Second" value="'second'"></oui-radio>
    <oui-radio text="Third" value="'third'"></oui-radio>
</oui-radio-group>

<span>Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default | Description
| ----          | ----                    | ----    | ----             | ----                     | ----    | ----
| name          | string                  | @?      | `true`           |                          |         | name attribute of the radio
| model         | Object                  | =?      |                  |                          |         | current value of the radio
| on-change     | function                | &       |                  |                          |         | handler triggered when model has changed
