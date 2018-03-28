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

| Attribute     | Type     | Binding | One-time Binding | Values            | Default   | Description                                   |
| ----          | ----     | ----    | ----             | ----              | ----      | ----                                          |
| id            | string   | @?      | true             |                   |           | id attribute of the component                 |
| name          | string   | @       | true             |                   |           | name attribute of the component               |
| align         | string   | @?      | true             | start,center,end  | center    | modifier for alignment                        |
| properties    | boolean  | <       |                  |                   |           | array of objects with columns informations    |
| on-submit     | function | &       |                  |                   |           | handler triggered when form is submitted      |
