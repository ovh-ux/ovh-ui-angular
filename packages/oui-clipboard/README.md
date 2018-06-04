# Clipboard

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Default

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.simpleModel = 'Copy this text'">
<oui-clipboard model="$ctrl.simpleModel"></oui-clipboard>
</div>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.simpleModel | json}}</p>
</div>
```

### Formatted text

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.formattedModel = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacinia nisi. Integer eleifend ipsum in pulvinar sodales.
Donec vitae lobortis dui, at accumsan purus. Nullam porta leo purus, nec dignissim leo hendrerit non. Aliquam semper, ante vitae consequat accumsan, diam tortor tempus diam, in hendrerit justo diam in urna.'">
<oui-clipboard model="$ctrl.formattedModel"></oui-clipboard>
</div>
<div class="oui-doc-preview-only">
    <p style="white-space: pre-wrap;"><strong>Model value:</strong> {{$ctrl.formattedModel}}</p>
</div>
```

## API

| Attribute             | Type   | Binding | One-time Binding | Values  | Default   | Description
| ----                  | ----   | ----    | ----             | ----    | ----      | ----
| id                    | string | @?      | true             |         |           | id attribute of the input
| name                  | string | @?      | true             |         |           | name attribute of the input
| model                 | object | =       | true             |         |           | model bound to component
