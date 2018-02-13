# Textarea

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Basic

```html:preview
<oui-textarea
    model="$ctrl.text1"
    id="text-1"
    name="text-1"
    placeholder="Please insert your text..."></oui-textarea>
```

### Validations

```html:preview
<oui-textarea
    id="text-2"
    name="text-2"
    placeholder="Please insert your text..."
    maxlength="20"></oui-textarea>
```

### Disabled

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.text3 = 'A disabled textarea'">
<oui-textarea
    id="text-3"
    name="text-3"
    model="$ctrl.text3"
    disabled></oui-textarea>
</div>
```

### Read-only

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.text4 = 'A readonly textarea'">
<oui-textarea
    id="text-4"
    name="text-4"
    model="$ctrl.text4"
    readonly></oui-textarea>
</div>
```

### Change event

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.changed = false">
<oui-textarea
    id="text-5"
    name="text-5"
    placeholder="Please insert your text..."
    on-change="$ctrl.changed = true; $ctrl.newValue = modelValue"></oui-textarea>
Has model changed? {{$ctrl.changed}}
<div ng-if="$ctrl.changed">New value: {{$ctrl.newValue}}</div>
</div>
```

## API

| Attribute           | Type     | Binding | One-time Binding | Values                 | Default             | Description                                      |
| ----                | ----     | ----    | ----             | ----                   | ----                | ----                                             |
| `model`             | string   | =?      |                  |                        |                     | current value of the textarea                    |
| `id`                | string   | @?      | yes              |                        |                     | id attribute of the radio                        |
| `name`              | string   | @?      | yes              |                        |                     | name attribute of the textarea                   |
| `placeholder`       | string   | @?      | yes              |                        |                     | placeholder attribute of the textarea            |
| `disabled`          | boolean  | <?      |                  | `true`, `false`        | `false`             | disabled flag                                    |
| `readonly`          | boolean  | <?      |                  | `true`, `false`        | `false`             | readonly flag                                    |
| `minlength`         | number   | <?      |                  |                        |                     | min length of the model value                    |
| `maxlength`         | number   | <?      |                  |                        |                     | max length of the model value                    |
| `required`          | boolean  | <?      |                  | `true`, `false`        | `false`             | required flag                                    |
| `on-change`         | function | &?      |                  |                        |                     | model value change callback                      |
