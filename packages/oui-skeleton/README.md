# Skeleton

<component-status cx-design="complete" ux="Rc"></component-status>

## Usage

### Default
```html:preview
<oui-skeleton></oui-skeleton>
<oui-skeleton width=""></oui-skeleton>
```
### Size
```html:preview
<oui-skeleton size="xs"></oui-skeleton>
<oui-skeleton size="s"></oui-skeleton>
<oui-skeleton size="m"></oui-skeleton>
<oui-skeleton size="l"></oui-skeleton>
<oui-skeleton size="xl"></oui-skeleton>
<oui-skeleton size="auto"></oui-skeleton>
```

### With custom width (gets precedence over size)
```html:preview
<oui-skeleton width="64%" size="xs"></oui-skeleton>
<oui-skeleton width="33%"></oui-skeleton>
<oui-skeleton width="46%"></oui-skeleton>
```

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default               | Description
| ----          | ----                    | ----    | ----             | ----                     | ----                  | ----
| width         | string                  | @       |                  |                          | `auto`                | width of the element in percentage
| size          | String                  | @?      | yes              | `xs`, `s`, `m`, `l`, `xl`| `auto`                | width of the element
