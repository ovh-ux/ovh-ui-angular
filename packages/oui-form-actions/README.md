# Form Actions

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html
<oui-form-actions
  on-submit="$ctrl.submit()"
  on-cancel="$ctrl.cancel()">
</oui-form-actions>
```

## Examples

### Default

```html:preview
<oui-form-actions
  on-submit="$ctrl.submit()"
  on-cancel="$ctrl.cancel()"
></oui-form-actions>
```

### Custom naming

```html:preview
<div ng-init="$ctrl.disabled = false" class="oui-doc-preview-only-keep-children">
    <oui-form-actions
      on-submit="$ctrl.disabled = true"
      on-cancel="$ctrl.disabled = false"
      submit-text="Disable"
      cancel-text="Reset"
      disabled="$ctrl.disabled">
    </oui-form-actions>
</div>
```

## API

| Attribute     | Type     | Binding | One-time Binding | Values                 | Default   | Description                      |
| ----          | ----     | ----    | ----             | ----                   | ----      | ----                             |
| on-submit     | function | &       |                  |                        |           | submit handler                   |
| on-cancel     | function | &       |                  |                        |           | cancel handler                   |
| submit-text   | string   | @?      | true             |                        | "Submit"  | submit button text               |
| cancel-text   | string   | @?      | true             |                        | "Cancel"  | cancel button text               |
| disabled      | boolean  | <?      |                  |                        | false     | disabled flag                    |

