# oui-message

<component-status cx-design="partial" ux="rc"></component-status>

## Usage

```html
<oui-message 
    type="info|warning|error"
    on-dismissed="..."
    aria-close-button-label="...">
</oui-message>
```

## Examples

### Information

```html:preview
<oui-message type="info">Message</oui-message>
```

### Warning

```html:preview
<oui-message type="warning">Message</oui-message>
```

### Error

```html:preview
<oui-message type="error">Message</oui-message>
```

### Accessibility

```html:preview
<oui-message aria-close-button-label="Accessibility text" type="info">Message</oui-message>
```

## API

| Attribute               | Type            | Binding | One-time binding | Values                      | default | Description                            |
| ----                    | ----            | ----    | ----             | ----                        | ----    | ----                                   |
| type                    | String          | @       | yes              | `info`, `warning`, `error`  |         | Message type                           |
| aria-close-button-label | function        | &?      | yes              |                             |         | accessibility label for close button   |
| on-dismissed            | function        | &?      |                  |                             |         | dismissed handler                      |
