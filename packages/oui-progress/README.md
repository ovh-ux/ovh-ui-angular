# oui-progress

<component-status cx-design="partial" ux="prototype"></component-status>

## Usage

### Simple

```html:preview
<oui-progress type="info">
    <oui-progress-bar value="5"></oui-progress-bar>
</oui-progress>
<oui-progress type="success">
    <oui-progress-bar value="10"></oui-progress-bar>
</oui-progress>
<oui-progress type="warning">
    <oui-progress-bar value="60"></oui-progress-bar>
</oui-progress>
<oui-progress type="error">
    <oui-progress-bar value="100"></oui-progress-bar>
</oui-progress>
```

### With labels

```html:preview
<oui-progress type="info">
    <oui-progress-bar value="5">5%</oui-progress-bar>
</oui-progress>
<oui-progress type="success">
    <oui-progress-bar value="10">10%</oui-progress-bar>
</oui-progress>
<oui-progress type="warning">
    <oui-progress-bar value="60">60%</oui-progress-bar>
</oui-progress>
<oui-progress type="error">
    <oui-progress-bar value="100">100%</oui-progress-bar>
</oui-progress>
```

### Custom max value

```html:preview
<oui-progress type="success" max-value="200">
    <oui-progress-bar value="150">150/200</oui-progress-bar>
</oui-progress>
```

### Stacked

```html:preview
<oui-progress type="info">
    <oui-progress-bar type="success" value="30">30%</oui-progress-bar>
    <oui-progress-bar type="error" value="15">15%</oui-progress-bar>
</oui-progress>
```

### Thresholds

```html:preview
<oui-progress type="info">
    <oui-progress-threshold value="60"></oui-progress-threshold>
    <oui-progress-bar type="error" value="80">80%</oui-progress-bar>
</oui-progress>
<oui-progress type="info">
    <oui-progress-threshold value="20"></oui-progress-threshold>
    <oui-progress-threshold value="50"></oui-progress-threshold>
    <oui-progress-threshold value="80"></oui-progress-threshold>
    <oui-progress-bar type="success" value="30">30%</oui-progress-bar>
    <oui-progress-bar type="error" value="25">25%</oui-progress-bar>
</oui-progress>
```

### Label alignment

```html:preview
<oui-progress type="info">
    <oui-progress-bar type="success" value="30" label-align="left">Progression: 30%</oui-progress-bar>
</oui-progress>
```

### Indeterminate

```html:preview
<oui-progress type="info" indeterminate="true"></oui-progress>
<oui-progress type="warning" indeterminate="true"></oui-progress>
```

## API

### oui-progress

| Attribute               | Type            | Binding | One-time binding | Values                                 | default | Description                            |
| ----                    | ----            | ----    | ----             | ----                                   | ----    | ----                                   |
| type                    | String          | @       | yes              | `info`, `success`, `warning`, `error`  |         | Type of the progress component       |
| max-value               | Number          | @?      | yes              |                                        | 100     | The max value for the progress bar    |
| indeterminate           | Boolean         | <?      | yes              |                                        | false   | Enable/Disable indeterminate mode. When in this mode, the progress component shows an indefinite wait and the max-value would not have any effect. In this mode, the progress component should not have any other component in it |

### oui-progress-bar

| Attribute               | Type            | Binding | One-time binding | Values                                 | default       | Description                            |
| ----                    | ----            | ----    | ----             | ----                                   | ----          | ----                                   |
| type                    | String          | @?      | yes              | `info`, `success`, `warning`, `error`  | parent's type | Type of the progress bar. If not provided, takes the type of the parent |
| value                   | Number          | <       | no               |                                        |               | The current value for the progress bar                                  |
| label-align             | String          | @?      | yes              | `left`, `right`                        | right         | The alignment of the label inside the progress bar                            |

### oui-progress-threshold

| Attribute               | Type            | Binding | One-time binding | Values                                 | default       | Description                            |
| ----                    | ----            | ----    | ----             | ----                                   | ----          | ----                                   |
| value                   | Number          | <       | yes              |                                        |               | The value at which the threshold should appear |
