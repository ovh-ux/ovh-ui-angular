# Collapsible

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Normal

```html:preview
<oui-collapsible id="collapsible-1" title="Title" aria-label="Action">
    Collapsible body
</oui-collapsible>
```

### Expanded

```html:preview
<oui-collapsible id="collapsible-2" title="Title" aria-label="Action" expanded="true">
    Collapsible body
</oui-collapsible>
```

## API

### oui-collapsible

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `title`           | string          | @       | yes              |                           |                     | collapsible title                  |
| `aria-label`      | string          | @?      | yes              |                           |                     | accessibility label                |
| `expanded`        | boolean         | <?      | yes              |                           | `false`             | initial expanded state             |
