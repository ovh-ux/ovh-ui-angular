# Spinner

<component-status cx-design="partial" ux="rc"></component-status>

## Usage

```html
<oui-spinner
    align="left|center|right"
    inline|inline="true|false"
    size="s|m|l">
</oui-spinner>
```

## Examples

### Size
```html:preview
<oui-spinner size="s"></oui-spinner>
<oui-spinner size="m"></oui-spinner>
<oui-spinner size="l"></oui-spinner>
```

### Alignment
```html:preview
<oui-spinner align="left"></oui-spinner>
<oui-spinner align="center"></oui-spinner>
<oui-spinner align="right"></oui-spinner>
```

### Inline
```html:preview
<oui-spinner inline></oui-spinner>
```

## API

| Attribute       | Type            | Binding | One-time binding | Values                    | Default   | Description         |
| ----            | ----            | ----    | ----             | ----                      | ----      | ----                |
| align           | String          | @?      | yes              | `left`, `center`, `right` | `left`    | Spinner alignment   |
| inline          | boolean         | <?      | yes              |                           | `false`   | inline flag         |
| size            | String          | @?      | yes              | `s`, `m`, `l`             | `m`       | Spinner size        |
