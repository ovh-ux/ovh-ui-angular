# Numeric

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

```html
<oui-numeric
  id="..."
  name="..."
  text="..."
  unit="..."
  model="..."
  min="..."
  max="..."
  disabled:"[true|false]"
  on-change="...">
</oui-numeric>
```

## Examples

#### Default

```html:preview
<oui-numeric
  id="partitionSize"
  name="partitionSize"
  text="Disk size"
  unit="Gb"
  model="$ctrl.size">
</oui-numeric>
```

#### Limits

```html:preview
<oui-numeric
  id="core"
  name="core"
  text="CPU"
  unit="core"
  min="2"
  max="8"
  model="$ctrl.core">
</oui-numeric>
```

#### Disabled

```html:preview
<oui-numeric
  id="foo"
  name="foo"
  text="Disbled"
  model="$ctrl.foo"
  disabled>
</oui-numeric>
```

```html:preview
<oui-numeric
  id="bar"
  name="bar"
  text="Disbled"
  model="$ctrl.bar"
  disabled="true">
</oui-numeric>
```

## API

| Attribute     | Type     | Binding | One-time binding | Values              | Default | Description                         |
| ----          | ----     | ----    | ----             | ----                | ----    | ----                                |
| id            | string   | @?      | true             |                     |         | id attribute of the input           |
| name          | string   | @       | true             |                     |         | name attribute of the input         |
| text          | string   | @       | true             |                     |         | label text                          |
| unit          | string   | @?      | true             |                     |         | unit displayed next to label        |
| model         | string   | =       |                  |                     |         | model bound to component            |
| min           | integer  | <?      |                  |                     | 0       | model lower bound                   |
| max           | integer  | <?      |                  |                     | 99999   | model upper bound                   |
| disabled      | boolean  | <?      |                  |                     | false   | disable the component               |
| onChange      | function | &?      |                  |                     |         | function to call when model changes |
