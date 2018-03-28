# Numeric

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Default

```html:preview
<oui-numeric
  id="partitionSize"
  name="partitionSize"
  model="$ctrl.size">
</oui-numeric>
```

### Limits

```html:preview
<oui-numeric
  id="core"
  name="core"
  min="2"
  max="8"
  model="$ctrl.core">
</oui-numeric>
```

### Disabled

```html:preview
<oui-numeric
  id="foo"
  name="foo"
  model="$ctrl.foo"
  disabled>
</oui-numeric>
```

## API

| Attribute     | Type     | Binding | One-time binding | Values              | Default | Description                         |
| ----          | ----     | ----    | ----             | ----                | ----    | ----                                |
| id            | string   | @?      | true             |                     |         | id attribute of the input           |
| name          | string   | @?      | true             |                     |         | name attribute of the input         |
| model         | string   | =       |                  |                     |         | model bound to component            |
| min           | integer  | <?      |                  |                     | 0       | model lower bound                   |
| max           | integer  | <?      |                  |                     | 99999   | model upper bound                   |
| disabled      | boolean  | <?      |                  |                     | false   | disable the component               |
| onChange      | function | &?      |                  |                     |         | function to call when model changes |
