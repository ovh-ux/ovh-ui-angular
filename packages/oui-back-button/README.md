# Back button

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

```html
<oui-back-button>
</oui-back-button>
```

## Examples

### Default

```html:preview
<oui-back-button>
</oui-back-button>
```

### Aria label

```html:preview
<oui-back-button aria-label="foo">
</oui-back-button>
```

### On-click callback

```html:preview
<oui-back-button on-click="$ctrl.myFunction()">
</oui-back-button>
```

## API

| Attribute     | Type     | Binding | One-time binding | Values              | Default | Description                         |
| ----          | ----     | ----    | ----             | ----                | ----    | ----                                |
| id            | string   | @?      | true             |                     |         | id attribute of the input           |
| name          | string   | @?      | true             |                     |         | name attribute of the input         |
| aria-label    | string   | @?      | true             |                     |         | accessibility label                 |
| on-click      | function | &?      | true             |                     |         | callback on component click         |
