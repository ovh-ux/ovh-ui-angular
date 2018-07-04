# oui-progress

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Simple

```html:preview
<oui-progress>
    <oui-progress-bar type="info" value="$ctrl.progressData.value1"></oui-progress-bar>
</oui-progress>

<oui-progress>
    <oui-progress-bar type="success" value="$ctrl.progressData.value2"></oui-progress-bar>
</oui-progress>

<oui-progress>
    <oui-progress-bar type="warning" value="$ctrl.progressData.value3"></oui-progress-bar>
</oui-progress>

<oui-progress>
    <oui-progress-bar type="error" value="$ctrl.progressData.value4"></oui-progress-bar>
</oui-progress>
```

### With custom labels

```html:preview
<oui-progress>
    <oui-progress-bar type="info"
        value="$ctrl.progressData.value1"
        text="Progress: {{$ctrl.progressData.value1}}%">
    </oui-progress-bar>
</oui-progress>
```

### Custom max value

```html:preview
<oui-progress max-value="200">
    <oui-progress-bar type="success"
        value="150"
        text="Installing components: 150/200">
    </oui-progress-bar>
</oui-progress>
```

### Stacked

```html:preview
<oui-progress>
    <oui-progress-bar type="success" value="30"></oui-progress-bar>
    <oui-progress-bar type="error" value="15"></oui-progress-bar>
</oui-progress>
```

### Thresholds

```html:preview
<oui-progress max-value="200">
    <oui-progress-bar type="success"
        value="139"
        text="Installing components: 139/200">
    </oui-progress-bar>
    <oui-progress-threshold value="25"></oui-progress-threshold>
    <oui-progress-threshold value="50"></oui-progress-threshold>
    <oui-progress-threshold value="75"></oui-progress-threshold>
    <oui-progress-threshold value="100"></oui-progress-threshold>
    <oui-progress-threshold value="125"></oui-progress-threshold>
    <oui-progress-threshold value="150"></oui-progress-threshold>
    <oui-progress-threshold value="175"></oui-progress-threshold>
</oui-progress>

<oui-progress>
    <oui-progress-bar type="error" value="60"></oui-progress-bar>
    <oui-progress-threshold value="20"></oui-progress-threshold>
    <oui-progress-threshold value="50"></oui-progress-threshold>
    <oui-progress-threshold value="80"></oui-progress-threshold>
</oui-progress>
```

### Compact mode

```html:preview
<oui-progress compact>
    <oui-progress-bar type="info"
        value="$ctrl.progressData.value1"
        text="{{$ctrl.progressData.value1}}% complete">
    </oui-progress-bar>
</oui-progress>

<oui-progress compact>
    <oui-progress-bar type="success"
        value="$ctrl.progressData.value2">
    </oui-progress-bar>
</oui-progress>

<oui-progress compact>
    <oui-progress-bar type="warning"
        value="$ctrl.progressData.value3">
    </oui-progress-bar>
</oui-progress>

<oui-progress compact>
    <oui-progress-bar type="error"
        value="$ctrl.progressData.value4"
        text="{{$ctrl.progressData.value4}}% complete">
    </oui-progress-bar>
</oui-progress>
```

## API

### oui-progress

| Attribute | Type      | Binding | One-time binding    | Values                                 | default  | Description
| ----      | ----      | ----    | ----                | ----                                   | ----     | ----
| compact   | Boolean   | <?      | yes                 |                                        | false    | compact mode flag
| min-value | Number    | @?      | yes                 |                                        | 0        | min value of progress component
| max-value | Number    | @?      | yes                 |                                        | 100      | max value of progress component

### oui-progress-bar
| Attribute | Type      | Binding | One-time binding    | Values                                 | default  | Description
| ----      | ----      | ----    | ----                | ----                                   | ----     | ----
| type      | String    | @       | yes                 | `info`, `success`, `warning`, `error`  | `info`   | type of the progress bar
| value     | Number    | <       | no                  |                                        |          | current value of progress bar
| text      | String    | @?      | yes                 |                                        | value%   | text of progress bar. If undefined, the current value is display as a percentage.

### oui-progress-threshold

| Attribute | Type      | Binding | One-time binding    | Values    | default   | Description
| ----      | ----      | ----    | ----                | ----      | ----      | ----
| value     | Number    | <       | yes                 |           |           | value at which the threshold should appear
