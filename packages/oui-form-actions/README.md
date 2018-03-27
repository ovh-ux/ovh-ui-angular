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
<div class="oui-doc-preview-only-keep-children">
    <oui-form-actions
      on-submit="$ctrl.submit()"
      href="#"
      submit-text="Apply"
      cancel-text="Close">
    </oui-form-actions>
</div>
```


### on-submit and on-cancel events

```html:preview
<div ng-init="$ctrl.disabled = false" class="oui-doc-preview-only-keep-children">
    <oui-form-actions
      on-submit="$ctrl.lastAction = 'submit'"
      on-cancel="$ctrl.lastAction = 'cancel'">
    </oui-form-actions>
    <div>Last action: {{ $ctrl.lastAction }}</div>
</div>
```

### on-submit only
```html:preview
<oui-form-actions
  on-submit="$ctrl.submit()">
</oui-form-actions>
```
In accordance to guidelines, submit button must be always enabled.

## API

| Attribute     | Type     | Binding | One-time Binding | Values                 | Default   | Description                      |
| ----          | ----     | ----    | ----             | ----                   | ----      | ----                             |
| on-submit     | function | &       |                  |                        |           | submit handler                   |
| on-cancel     | function | &       |                  |                        |           | cancel handler                   |
| submit-text   | string   | @?      | true             |                        | "Submit"  | submit button text               |
| cancel-text   | string   | @?      | true             |                        | "Cancel"  | cancel button text               |
| href          | string   | @?      | true             |                        |           | link url on cancel               |
