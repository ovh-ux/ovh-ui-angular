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

| Attribute     | Type     | Binding | Values              | Default | Description                         |
| ----          | ----     | ----    | ----                | ----    | ----                                |
| id            | string   | @?      |                     |         | id attribute of the input           |
| name          | string   | @       |                     |         | name attribute of the input         |
| text          | string   | @       |                     |         | label text                          |
| unit          | string   | @?      |                     |         | unit displayed next to label        |
| model         | string   | =       |                     |         | model bound to component            |
| min           | interger | <?      |                     | 0       | model lower bound                   |
| max           | interger | <?      |                     | 99999   | model upper bound                   |
| onChange      | function | &?      |                     |         | function to call when model changes |
