# Form Actions

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Default

```html:preview
<oui-form-actions
  on-submit="$ctrl.submit()"
  href="#">
</oui-form-actions>
```


### Custom naming

```html:preview
<div ng-init="$ctrl.disabled = false" class="oui-doc-preview-only-keep-children">
    <oui-form-actions
      on-submit="$ctrl.submit()"
      href="#"
      submit-text="Disable"
      cancel-text="Reset">
    </oui-form-actions>
</div>
```


### on-submit and on-cancel events

```html:preview
<div ng-init="$ctrl.disabled = false" class="oui-doc-preview-only-keep-children">
    <oui-form-actions
      on-submit="$ctrl.disabled = true"
      on-cancel="$ctrl.disabled = false"
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
| href          | string   | @?      | true             |                        |           | link url on cancel       |
| disabled      | boolean  | <?      |                  |                        | false     | disabled flag                    |

