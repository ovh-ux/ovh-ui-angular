# Radio group

<component-status cx-design="partial" ux="rc"></component-status>

## One-way binding properties

### value

```html:preview
<oui-radio-group value="$ctrl.groupValue">
    <oui-radio label="First" value="first"></oui-radio>
    <oui-radio label="Second" value="second"></oui-radio>
    <oui-radio label="Third" value="third"></oui-radio>
</oui-radio-group>
```

## Events

### on-change

```html:preview
<oui-radio-group on-change="$ctrl.showCurrentValueInPopup($event.value)">
    <oui-radio label="First" value="first"></oui-radio>
    <oui-radio label="Second" value="second"></oui-radio>
    <oui-radio label="Third" value="third"></oui-radio>
</oui-radio-group>
```
