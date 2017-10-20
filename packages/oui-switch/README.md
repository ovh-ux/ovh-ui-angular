# Switch

<component-status cx-design="partial" ux="prototype"></component-status>

## Usage

```html:preview
<oui-switch value="true"></oui-switch>
<oui-switch value="false"></oui-switch>
<oui-switch value="$ctrl.switchValue"></oui-switch>
<oui-switch value="true" disabled></oui-switch>
```

## Events

### on-change

```html:preview
<oui-switch value="$ctrl.switchValue"
  on-change="$ctrl.switchValue = $event.value"></oui-switch>
<oui-switch value="$ctrl.switchValue"
  on-change="$ctrl.showCurrentValueInPopup($event.value)"></oui-switch>
```
