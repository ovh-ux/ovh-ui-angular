# Collapsible

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Normal

```html:preview
<oui-collapsible id="collapsible1" title="Title" aria-label="Action">
    Collapsible body
</oui-collapsible>
```

### Expanded

```html:preview
<oui-collapsible id="collapsible2" title="Title" aria-label="Action" expanded="true">
    Collapsible body
</oui-collapsible>
```

## API

### oui-collapsible

| Attribute         | Type            | Binding | One-time binding | Values                | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                  | ----                | ----                               |
| `id`              | string          | @       | yes              |                       |                     | id attribute of the collapsible    |
| `title`           | string          | @       | yes              |                       |                     | collapsible title                  |
| `aria-label`      | string          | @?      | yes              |                       |                     | accessibility label                |
| `expanded`        | boolean         | <?      | yes              |                       | `false`             | initial expanded state             |
