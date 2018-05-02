# Form Actions

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Default

```html:preview
<oui-clipboard text="copy this text"></oui-clipboard>
```

### Clipboard contained in width of the parent

```html:preview
<div class="oui-doc-preview-only" style="width: 300px;">
    <oui-clipboard text="copy this text"></oui-clipboard>
</div>
```

## API

| Attribute             | Type   | Binding | One-time Binding | Values                                               | Default   | Description       |
| ----                  | ----   | ----    | ----             | ----                                                 | ----      | ----              |
| text                  | string | @?      | true             |                                                      |           | clipboard text    |
