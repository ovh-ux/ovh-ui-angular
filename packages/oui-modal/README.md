# Modal

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

```html:preview
<div ng-init="$ctrl.cancel = false; $ctrl.confirm = false"
    class="oui-doc-preview-only-keep-children">
<oui-modal
    heading="Modal title"
    primary-action="$ctrl.confirm = true"
    primary-label="Ok"
    secondary-action="$ctrl.cancel = true"
    secondary-label="Cancel"
    on-dismiss="$ctrl.cancel = true">
  Modal content
</oui-modal>
<div class="oui-doc-preview-only">Cancel clicked: {{$ctrl.cancel}}</div>
<div class="oui-doc-preview-only">Confirm clicked: {{$ctrl.confirm}}</div>
</div>
```

### Without cancel button

```html:preview
<div ng-init="$ctrl.cancel2 = false; $ctrl.confirm2 = false"
    class="oui-doc-preview-only-keep-children">
<oui-modal
    heading="Modal title"
    primary-action="$ctrl.confirm2 = true"
    primary-label="Save"
    on-dismiss="$ctrl.cancel2 = true">
  Modal content
</oui-modal>
<div class="oui-doc-preview-only">Cancel clicked: {{$ctrl.cancel2}}</div>
<div class="oui-doc-preview-only">Confirm clicked: {{$ctrl.confirm2}}</div>
</div>
```

### Loading modal

```html:preview
<div ng-init="$ctrl.loading = true" class="oui-doc-preview-only-keep-children">
<oui-modal
    heading="Loading modal title"
    primary-action="$ctrl.confirm = true"
    primary-label="Ok"
    secondary-action="$ctrl.cancel = true"
    secondary-label="Cancel"
    on-dismiss="$ctrl.cancel = true"
    loading="$ctrl.loading">
<oui-field label="Label for Input text">
    <input type="text" id="text" name="text" class="oui-input">
</oui-field>
</oui-modal>
<button class="oui-button oui-button_secondary oui-doc-preview-only" ng-click="$ctrl.loading = !$ctrl.loading">Activate/Deactivate Loader</div>
</div>
```

### Warning modal

```html:preview
<div ng-init="$ctrl.dismiss = false"
    class="oui-doc-preview-only-keep-children">
<oui-modal
    heading="Warning modal"
    primary-action="$ctrl.dismiss = true"
    primary-label="Ok"
    on-dismiss="$ctrl.dismiss = true"
    type="warning">
  Modal content
</oui-modal>
</div>
```

## API

| Attribute             | Type      | Binding   | One-time Binding | Values                         | Default   | Description
| ----                  | ----      | ----      | ----             | ----                           | ----      | ----
| `heading`             | string    | @         | yes              | n/a                            | n/a       | modal title
| `type`                | string    | @?        | yes              | `warning`, `success`, `info`   | n/a       | modal type
| `loading`             | boolean   | <?        | no               | `true`, `false`                | `false`   | display loader flag
| `primary-label`       | string    | @?        | yes              | n/a                            | n/a       | confirmation label
| `primary-action`      | function  | &         | no               | n/a                            | n/a       | confirmation callback
| `secondary-label`     | string    | @?        | yes              | n/a                            | n/a       | cancellation label
| `secondary-action`    | function  | &         | no               | n/a                            | n/a       | cancellation callback
| `on-dismiss`          | function  | &         | no               | n/a                            | n/a       | dismiss callback

#### Deprecated

* `title`: Replaced by `heading` attribute
