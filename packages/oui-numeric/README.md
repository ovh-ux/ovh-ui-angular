# Numeric

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

```html:preview
<oui-numeric id="someId"
             text="CPU"
             unit="core"
             model="$ctrl.cpuCores">
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
