# Search field

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html
<oui-search
    model="..."
    id="..."
    name="..."
    placeholder="..."
    aria-label="..."
    disabled|disabled="true|false"
    on-change="..."
    on-reset="..."
    on-submit="...">
</oui-search>
```

## Examples

### Basic

```html:preview
<oui-search
    model="$ctrl.modelValue">
</oui-search>
```

### Placeholder

```html:preview
<oui-search
    model="$ctrl.modelValue"
    placeholder="Placeholder example">
</oui-search>
```

### Disabled

```html:preview
<oui-search
    model="$ctrl.modelValue"
    disabled>
</oui-search>
```

### Accessibility

```html:preview
<oui-search
    model="$ctrl.modelValue"
    aria-label="Accessibility text">
</oui-search>
```

- `aria-label` add an attribute `aria-label` on the input.

### Events

**Note:** If you want to access the model inside `on-change` and `on-submit` callbacks, you need to use the `modelValue` variable as below.

```html:preview
<oui-search
    model="$ctrl.modelValue"
    on-change="$ctrl.onSearchChange(modelValue)"
    on-reset="$ctrl.onSearchReset()"
    on-submit="$ctrl.onSearchSubmit(modelValue)">
</oui-search>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.modelValue}}</p>
    <p><strong>onChange value:</strong> {{$ctrl.changedValue}}</p>
    <p><strong>onSubmit value:</strong> {{$ctrl.submittedValue}}</p>
    <p><strong>onReset count:</strong> {{$ctrl.resetCount}}</p>
</div>
```

## API

| Attribute     | Type     | Binding | One-time Binding | Values    | Default   | Description                               |
| ----          | ----     | ----    | ----             | ----      | ----      | ----                                      |
| model         | object   | =       |                  |           |           | model bound to component                  |
| id            | string   | @?      | true             |           |           | id attribute of the button                |
| name          | string   | @?      | true             |           |           | name attribute of the button              |
| placeholder   | string   | @?      | true             |           |           | placeholder text                          |
| aria-label    | string   | @?      | true             |           |           | accessibility label                       |
| disabled      | boolean  | <?      |                  |           | false     | disabled flag                             |
| on-change     | function | &       |                  |           |           | handler triggered when model has changed  |
| on-reset      | function | &       |                  |           |           | handler triggered when form is reseted    |
| on-submit     | function | &       |                  |           |           | handler triggered when form is submitted  |
