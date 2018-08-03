# oui-message

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Information

```html:preview
<oui-message type="info">Message</oui-message>
```

### Success

```html:preview
<oui-message type="success">Message</oui-message>
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
<oui-message aria-close-button-label="Close" type="info">Message</oui-message>
```

## API

| Attribute                 | Type      | Binding   | One-time binding  | Values                                | Default   | Description
| ----                      | ----      | ----      | ----              | ----                                  | ----      | ----
| `type`                    | string    | @         | yes               | `info`, `success`, `warning`, `error` | n/a       | message type
| `aria-close-button-label` | function  | @?        | yes               | n/a                                   | n/a       | accessibility label for close button
| `on-dismissed`            | function  | &?        | no                | n/a                                   | n/a       | dismissed handler
