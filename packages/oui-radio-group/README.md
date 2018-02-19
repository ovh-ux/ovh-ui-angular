# Radio-group

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html
<oui-radio-group
  model="..."
  name="...">
    <oui-radio/>
    <oui-radio/>
</oui-radio-group>
```

## Examples

```html:preview
<div ng-init="$ctrl.groupValue = 'second'">
    <oui-radio-group model="$ctrl.groupValue">
        <oui-radio text="First"  value="'first'"></oui-radio>
        <oui-radio text="Second" value="'second'"></oui-radio>
        <oui-radio text="Third" value="'third'"></oui-radio>
    </oui-radio-group>
</div>
```

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default | Description
| ----          | ----                    | ----    | ----             | ----                     | ----    | ----
| name          | string                  | @?      | `true`           |                          |         | name attribute of the radio
| model         | Object                  | =?      |                  |                          |         | current value of the radio
