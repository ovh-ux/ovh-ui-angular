# Criteria adder

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Example

```html:preview
<oui-criteria-adder
    name="criteriaAdder"
    properties="$ctrl.inputValue"
    on-submit="$ctrl.onSubmit(modelValue)">
</oui-criteria-adder>
<div class="oui-doc-preview-only">
    <p>Input</p>
    <pre>{{$ctrl.inputValue | json}}</pre>
    <p>Output</p>
    <pre>{{$ctrl.outputValue | json}}</pre>
</div>
```

## API

| Attribute       | Type     | Binding | One-time Binding | Values            | Default   | Description                                   |
| ----            | ----     | ----    | ----             | ----              | ----      | ----                                          |
| `id`            | string   | @?      | true             |                   |           | id attribute of the component                 |
| `name`          | string   | @       | true             |                   |           | name attribute of the component               |
| `align`         | string   | @?      | true             | start,center,end  | center    | modifier for alignment                        |
| `properties`    | array    | <       |                  |                   |           | array of objects with columns informations    |
| `on-submit`     | function | &       |                  |                   |           | handler triggered when form is submitted      |

### `properties`

`properties` is an array of objects defined as this:

| Attribute     | Type     | Description                              |
| ----          | ----     | -----                                    |
| `name`        | string   | Property to filter (can be a nested one) |
| `title`       | string   | Human readeable title for the property   |
| `type`        | string   | Data type                                |
| `typeOptions` | object   | Specific options                         |
