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
    <pre class="oui-doc-code oui-doc-code_json">{{$ctrl.inputValue | json}}</pre>
    <p>Output</p>
    <pre class="oui-doc-code oui-doc-code_json">{{$ctrl.outputValue | json}}</pre>
</div>
```

## API

| Attribute     | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----          | ----      | ----      | ----              | ----                      | ----      | ----
| `id`          | string    | @?        | yes               | n/a                       | n/a       | id attribute of the component
| `name`        | string    | @         | yes               | n/a                       | n/a       | name attribute of the component
| `align`       | string    | @?        | yes               | `start`, `center`, `end`  | `center`  | modifier for alignment
| `properties`  | array     | <         | no                | n/a                       | n/a       | array of objects with columns informations
| `on-submit`   | function  | &         | no                | n/a                       | n/a       | handler triggered when form is submitted

### `properties` attribute

`properties` is an array of objects defined as this:

| Attribute     | Type      | Description
| ----          | ----      | -----
| `name`        | string    | Property to filter (can be a nested one)
| `title`       | string    | Human readeable title for the property
| `type`        | string    | Data type
| `typeOptions` | object    | Specific options

## Configuration

The pagination can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.criteria-adder"
]).config(ouiCriteriaAdderConfigurationProvider => {
    ouiCriteriaAdderConfigurationProvider.setOperatorsByType({ // default operatorsByType
        "boolean": [
            "is",
            "isNot"
        ],
        date: [
            "is",
            "isAfter",
            "isBefore"
        ],
        number: [
            "is",
            "smaller",
            "bigger"
        ],
        options: [
            "is",
            "isNot"
        ],
        string: [
            "contains",
            "containsNot",
            "startsWith",
            "endsWith",
            "is",
            "isNot"
        ]
    });
    ouiCriteriaAdderConfigurationProvider.setTranslations({ // default translations
        column_label: "Column",
        operator_label: "Operator",

        operator_boolean_is: "is",
        operator_boolean_isNot: "is not",

        operator_string_contains: "contains",
        operator_string_containsNot: "does not contain",
        operator_string_startsWith: "starts with",
        operator_string_endsWith: "ends with",
        operator_string_is: "is",
        operator_string_isNot: "is not",

        operator_number_is: "is",
        operator_number_smaller: "is smaller than",
        operator_number_bigger: "is bigger than",

        operator_date_is: "is",
        operator_date_isBefore: "is before",
        operator_date_isAfter: "is after",

        operator_options_is: "is",
        operator_options_isNot: "is not",

        true_label: "Yes",
        false_label: "No",

        value_label: "Value",
        submit_label: "Add"
    });
});
```
