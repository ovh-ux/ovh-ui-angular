# oui-progress

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Simple

```html:preview
<oui-progress type="info" value="$ctrl.progressData.value1"></oui-progress>
<oui-progress type="success" value="$ctrl.progressData.value2"></oui-progress>
<oui-progress type="warning" value="$ctrl.progressData.value3"></oui-progress>
<oui-progress type="error" value="$ctrl.progressData.value4"></oui-progress>
```

### With custom labels

```html:preview
<oui-progress type="info"
    value="$ctrl.progressData.value1"
    label="Progress: {{$ctrl.progressData.value1}}%">
</oui-progress>
```

### Custom max value

```html:preview
<oui-progress type="success"
    value="150"
    max-value="200"
    label="Installing components: 150/200">
</oui-progress>
```

### Thresholds

```html:preview
<oui-progress type="success" value="35">
    <oui-progress-threshold value="25"></oui-progress-threshold>
</oui-progress>
<oui-progress type="error" value="60">
    <oui-progress-threshold value="20"></oui-progress-threshold>
    <oui-progress-threshold value="50"></oui-progress-threshold>
    <oui-progress-threshold value="80"></oui-progress-threshold>
</oui-progress>
```

### Compact mode

```html:preview
<oui-progress type="info"
    value="$ctrl.progressData.value1"
    label="{{$ctrl.progressData.value1}}% complete"
    compact="true">
</oui-progress>
<oui-progress type="success"
    value="$ctrl.progressData.value2"
    compact="true">
</oui-progress>
<oui-progress type="warning"
    value="60"
    compact="true">
</oui-progress>
<oui-progress type="error"
    value="$ctrl.progressData.value4"
    label="{{$ctrl.progressData.value4}}% complete"
    compact="true">
</oui-progress>
```

## API

### oui-progress

| Attribute               | Type            | Binding | One-time binding | Values                                 | default | Description                               |
| ----                    | ----            | ----    | ----             | ----                                   | ----    | ----                                      |
| type                    | String          | @       | yes              | `info`, `success`, `warning`, `error`  |         | Type of the progress component          |
| value                   | Number          | <       | no               |                                        |         | The current value for the progress bar   |
| compact                 | Boolean         | <?      | yes              |                                        | false   | When in compact mode, the progress appears as a dot followed by the label. This is usually used when the component is used in a DataGrid |
| max-value               | Number          | @?      | yes              |                                        | 100     | The max value for the progress bar |
| label                    | String         | @?      | yes              |                                        | value forllowd by % | The label for the progress bar. When not specified, the current value is display with a percentage. |

### oui-progress-threshold

| Attribute               | Type            | Binding | One-time binding | Values                                 | default       | Description                                         |
| ----                    | ----            | ----    | ----             | ----                                   | ----          | ----                                                |
| value                   | Number          | <       | yes              |                                        |               | The value at which the threshold should appear  |
