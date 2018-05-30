# Clipboard

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Default

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.clipboardModel = 'copy this text'">
<oui-clipboard model="$ctrl.clipboardModel"></oui-clipboard>
</div>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.clipboardModel | json}}</p>
</div>
```

## API

| Attribute             | Type   | Binding | One-time Binding | Values  | Default   | Description
| ----                  | ----   | ----    | ----             | ----    | ----      | ----
| id                    | string | @?      | true             |         |           | id attribute of the input
| name                  | string | @?      | true             |         |           | name attribute of the input
| model                 | string | @?      | true             |         |           | clipboard model
