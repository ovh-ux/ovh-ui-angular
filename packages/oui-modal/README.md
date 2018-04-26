# Modal

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

```html:preview
<div ng-init="$ctrl.cancel = false; $ctrl.confirm = false"
    class="oui-doc-preview-only-keep-children">
<oui-modal
    data-title="Modal title"
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
    data-title="Modal title"
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
    data-title="Loading modal title"
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
    data-title="Warning modal"
    primary-action="$ctrl.dismiss = true"
    primary-label="Ok"
    on-dismiss="$ctrl.dismiss = true"
    type="warning">
  Modal content
</oui-modal>
</div>
```

## API

| Attribute           | Type     | Binding | One-time Binding | Values                 | Default           | Description                               |
| ----                | ----     | ----    | ----             | ----                   | ----              | ----                                      |
| `data-title`        | string   | @       | yes              |                        |                   | modal title                               |
| `primary-action`    | function | &?      |                  |                        |                   | confirmation callback                     |
| `primary-label`     | string   | @?      | yes              |                        |                   | confirmation label                        |
| `secondary-action`  | function | &?      |                  |                        |                   | cancellation callback                     |
| `secondary-label`   | string   | @?      | yes              |                        |                   | cancellation label                        |
| `on-dismiss`        | function | &?      |                  |                        |                   | dismiss callback                          |
| `loading`           | boolean  | <?      |                  |                        | false             | display loader flag                       |
| `type`              | string   | @?      | yes              | warning, success, info |                   | display loader flag                       |
