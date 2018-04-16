# Select

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Basic (Object array)

```html:preview
<oui-select name="country"
    model="$ctrl.country"
    data-title="Select a country"
    placeholder="Select a country..."
    items="$ctrl.countries"
    required
    match="name"
    data-align="start">
    <span ng-bind="$item.name"></span>
</oui-select>
```

### Basic (String array)

```html:preview
<oui-select name="letter"
    model="$ctrl.letter"
    data-title="Select a letter"
    placeholder="Select a letter..."
    items="['a', 'b', 'c']"
    required
    data-align="start">
    <span ng-bind="$item"></span>
</oui-select>
```

### Grouping / Custom template

```html:preview
<oui-select name="country"
    model="$ctrl.country2"
    data-title="Select a country"
    placeholder="Select a country..."
    items="$ctrl.countries"
    required
    group-by="$ctrl.groupByFirstLetter"
    match="name"
    data-align="start">
    <span ng-bind="$item.name" class="d-inline-block text-truncate"></span><br>
    <small>
        Code: <span ng-bind="$item.code"></span>
    </small>
</oui-select>
```

### Disabled

```html:preview
<oui-select name="country"
    model="$ctrl.country"
    data-title="Select a country"
    placeholder="Select a country..."
    items="$ctrl.countries"
    required
    match="name"
    data-align="start"
    disabled>
    <span ng-bind="$item.name"></span>
</oui-select>
```

### On Change

**Note:** Model will not be refreshed until the `on-change` callback as not finished. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html:preview
<oui-select name="country"
    model="$ctrl.country3"
    data-title="Select a country"
    placeholder="Select a country..."
    items="$ctrl.countries"
    required
    group-by="$ctrl.groupByFirstLetter"
    match="name"
    data-align="start"
    on-change="$ctrl.onChange(modelValue)"
    on-blur="$ctrl.onBlur()"
    on-focus="$ctrl.onFocus()"
    >
    <span ng-bind="$item.name" class="d-inline-block text-truncate"></span><br>
    <small>
        Code: <span ng-bind="$item.code"></span>
    </small>
</oui-select>
<div class="oui-doc-preview-only">
    <p><strong>Last onChange value:</strong> {{ $ctrl.onChangeModelValue | json}}</p>
    <p><strong>onBlur counter:</strong> {{ $ctrl.onBlurCounter }}</p>
    <p><strong>onFocus counter:</strong> {{ $ctrl.onFocusCounter }}</p>
</div>

```

## API

| Attribute         | Type                    | Binding | One-time binding | Values                    | Default             | Description                                                                      |
| ----              | ----                    | ----    | ----             | ----                      | ----                | ----                                                                             |
| `name`            | string                  | @?      | yes              |                           |                     | name of the form component                                                       |
| `model`           | object                  | =       |                  |                           |                     | model bound to component                                                         |
| `data-title`      | string                  | @?      | yes              |                           |                     | title attribute of the component                                                 |
| `placeholder`     | string                  | @?      | yes              |                           |                     | placeholder displayed when model is undefined                                    |
| `items`           | array                   | <       |                  |                           |                     | array used to populate the list                                                  |
| `required`        | boolean                 | <?      |                  | `true`, `false`           | `false`             | define if the field is required                                                  |
| `disabled`        | boolean                 | <?      |                  | `true`, `false`           | `false`             | define if the field is disabled                                                  |
| `group-by`        | function                | <?      |                  |                           |                     | function taking an item as parameter and returning the group name as as string   |
| `match`           | string                  | @?      |                  |                           |                     | property of item to show as selected item                                        |
| `data-align`      | string                  | @?      |                  | `start`, `end`            | `start`             | dropdown alignment                                                               |
| `on-blur`         | string                  | &       |                  |                           |                     | called focus is lost                                                             |
| `on-focus`        | string                  | &       |                  |                           |                     | called on focus                                                                  |
| `on-change`       | string                  | &       |                  |                           |                     | handler triggered when value has changed                                         |

