# Back button

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Default

```html:preview
<oui-back-button href="#" heading="Title">
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

| Attribute     | Type     | Binding | One-time binding | Values              | Default                | Description                         |
| ----          | ----     | ----    | ----             | ----                | ----                   | ----                                |
| id            | string   | @?      | true             |                     |                        | id attribute of the input           |
| name          | string   | @?      | true             |                     |                        | name attribute of the input         |
| aria-label    | string   | @?      | true             |                     |                        | accessibility label                 |
| heading       | string   | @?      | true             |                     |                        | text of the header                  |
| on-click      | function | &?      |                  |                     |                        | callback on component click         |
| href          | string   | @?      | true             |                     |                        | link url                            |
