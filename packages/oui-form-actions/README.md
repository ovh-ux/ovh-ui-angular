# Form Actions

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html
<oui-form-actions
  on-submit="$ctrl.submit()"
  on-cancel="$ctrl.cancel()"
></oui-form-actions>
```

## API

| Attribute     | Type     | Binding | One-time Binding | Values                 | Default   | Description                      |
| ----          | ----     | ----    | ----             | ----                   | ----      | ----                             |
| on-submit     | function | &       |                  |                        |           | submit form action               |
| on-cancel     | function | &       |                  |                        |           | cancel form action               |
| submit-text   | string   | @?      | true             |                        | "Submit"  | submit button text               |
| cancel-text   | string   | @?      | true             |                        | "Cancel"  | cancel button text               |
| disabled      | boolean  | <?      |                  |                        | false     | disabled flag                    |

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
<div ng-init="$ctrl.disabled = false">
	<oui-form-actions
	  on-submit="$ctrl.disabled = true"
	  on-cancel="$ctrl.disabled = false"
	  submit-text="Disable"
	  cancel-text="Reset"
	  disabled="$ctrl.disabled"
	></oui-form-actions>
</div>
```

