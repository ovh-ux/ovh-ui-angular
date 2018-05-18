# Skeleton

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Default
```html:preview
<oui-skeleton width="20%" loading="true"></oui-skeleton>
<oui-skeleton width="50%" loading="true"></oui-skeleton>
<oui-skeleton width="70%" loading="true"></oui-skeleton>
<oui-skeleton width="30%" loading="true"></oui-skeleton>
<oui-skeleton width="100%" loading="true"></oui-skeleton>
<oui-skeleton loading="true"></oui-skeleton>
```
### With transclude
```html:preview
<oui-skeleton loading="$ctrl.loading" width="50%">
    <oui-button variant="primary" text="Primary"></oui-button>
</oui-skeleton>
```

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default               | Description
| ----          | ----                    | ----    | ----             | ----                     | ----                  | ----
| width         | string                  | @       |                  |                          | random (<100 or >30)  | width of the element in percentage ("30%")
| loading       | boolean                 | <       |                  | true, false              |                       | boolean to indicate to show or hide the component
