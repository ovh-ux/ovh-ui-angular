# Clipboard

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Default

```html:preview
<oui-clipboard text="copy this text"></oui-clipboard>
```

### Clipboard contained in width of the parent

```html:preview
<div style="width: 300px;">
    <oui-clipboard text="copy this text"></oui-clipboard>
</div>
```

### Clipboard with name and id attribute

```html:preview
<oui-clipboard text="copy this text" name="clipboard" id="clipboard"></oui-clipboard>
```

## API

| Attribute             | Type   | Binding | One-time Binding | Values               | Default   | Description                   |
| ----                  | ----   | ----    | ----             | ----                 | ----      | ----                          |
| text                  | string | @?      | true             |                      |           | clipboard text                |
| id                    | string | @?      | true             |                      |           | id attribute of the input     |
| name                  | string | @?      | true             |                      |           | name attribute of the input   |
