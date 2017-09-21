# Loader

<component-status cx-design="partial" ux="rc"></component-status>

## Usage

### Small
```html:preview
<oui-loader size="s"></oui-loader>
```

By default, small loader is the only one displayed as an inline element.

### Medium
```html:preview
<oui-loader size="m"></oui-loader>
```

### Big
```html:preview
<oui-loader size="l"></oui-loader>
```

### Inline
```html:preview
<oui-loader size="m" inline="true"></oui-loader>
```

| Name            | Type            | Values              | Default             | Description         |
| ----            | ----            | ----                | ----                | ----                |
| `size`          | String          | s, m, l             | m                   | Loader size         |
| `inline`        | Boolean         |                     | `false` (`true` for small loader)               | Inline display         |
