# Modal

<component-status cx-design="complete" ux="rc"></component-status>

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
<div>Cancel clicked: {{$ctrl.cancel}}</div>
<div>Confirm clicked: {{$ctrl.confirm}}</div>
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
<div>Cancel clicked: {{$ctrl.cancel2}}</div>
<div>Confirm clicked: {{$ctrl.confirm2}}</div>
</div>
```

## API

| Attribute           | Type     | Binding | One-time Binding | Values                 | Default             | Description                                      |
| ----                | ----     | ----    | ----             | ----                   | ----                | ----                                             |
| `data-title`        | string   | @       | yes              |                        |                     | modal title                                      |
| `primary-action`    | function | &?      |                  |                        |                     | confirmation callback                            |
| `primary-label`     | string   | @?      | yes              |                        |                     | confirmation label                               |
| `secondary-action`  | function | &?      |                  |                        |                     | cancellation callback                            |
| `secondary-label`   | string   | @?      | yes              |                        |                     | cancellation label                               |
| `on-dismiss`        | function | &?      |                  |                        |                     | dismiss callback                                   |
