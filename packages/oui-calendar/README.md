# Calendar

<component-status cx-design="partial" ux="beta"></component-status>

## Usage

**This component needs the CSS file of [flatpickr](https://github.com/flatpickr/flatpickr) to work in your project.**

### Default

```html:preview
<oui-calendar id="foo" name="bar" model="$ctrl.defaultModel">
</oui-calendar>
```

### Placeholder

```html:preview
<oui-calendar model="$ctrl.placeholderModel" placeholder="YYYY-MM-DD">
</oui-calendar>
```

### Disabled

```html:preview
<oui-calendar model="$ctrl.disabledModel" disabled>
</oui-calendar>
```

### Required

**Note**: See [Field example](#!/oui-angular/field) for error handling.

```html:preview
<oui-calendar model="$ctrl.requiredModel" required>
</oui-calendar>
```

### Week numbers

```html:preview
<oui-calendar model="$ctrl.weekModel" week-numbers>
</oui-calendar>
```

### Min & Max

```html:preview
<oui-calendar model="$ctrl.minMaxModel" min-date="$ctrl.minDate" max-date="$ctrl.maxDate">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>minDate value:</strong> {{$ctrl.minDate | json}}</p>
    <p><strong>maxDate value:</strong> {{$ctrl.maxDate | json}}</p>
</div>
```

### Disabling dates

Use `disable-date` to make certain dates unavailable for selection.

```html:preview
<oui-calendar model="$ctrl.disableDateModel" disable-date="$ctrl.disableDate">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>disableDate value:</strong> {{$ctrl.disableDate | json}}</p>
</div>
```

**Note**: See [Flatpickr documentation](https://flatpickr.js.org/examples/#disabling-dates) for more information.

### Disabling all dates except select few

Use `enable-date` to make certain dates only available for selection.

```html:preview
<oui-calendar model="$ctrl.enableDateModel" enable-date="$ctrl.enableDate">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>enableDate value:</strong> {{$ctrl.enableDate | json}}</p>
</div>
```

**Note**: See [Flatpickr documentation](https://flatpickr.js.org/examples/#disabling-all-dates-except-select-few) for more information.

### Date Formatting

```html:preview
<oui-calendar model="$ctrl.formatModel" format="d-m-Y" alt-format="F j, Y">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.formatModel | json}}</p>
</div>
```

**Note**: See [Formatting Tokens](https://flatpickr.js.org/formatting/) for more information.

### Calendar modes

Use `mode` to set a different selection mode for the calendar

#### `range` mode

```html:preview
<oui-calendar model="$ctrl.rangeModel" mode="range">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.rangeModel | json}}</p>
</div>
```

#### `multiple` mode

```html:preview
<oui-calendar model="$ctrl.multipleModel" mode="multiple">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.multipleModel | json}}</p>
</div>
```

### Events

```html:preview
<oui-calendar
    model="$ctrl.eventsModel"
    format="d-m-Y"
    alt-format="F j, Y"
    on-change="$ctrl.onChange(selectedDates, dateStr)"
    on-close="$ctrl.onClose(selectedDates, dateStr)"
    on-open="$ctrl.onOpen(selectedDates, dateStr)">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.eventsModel | json}}</p>
    <p><strong>onChange values:</strong> {{$ctrl.onChangeValues | json}}</p>
    <p><strong>onOpen values:</strong> {{$ctrl.onOpenValues | json}}</p>
    <p><strong>onClose values:</strong> {{$ctrl.onCloseValues | json}}</p>
</div>
```

**Note**: If you want to access the parameters inside events callback, you need to use `selectedDates` or `dateStr` variables as below.

* `selectedDates` returns an array of Date objects selected by the user. When there are no dates selected, the array is empty.
* `dateStr` returns a string representation of the latest selected Date object by the user. The string is formatted as per the `dateFormat` option.

## API

| Attribute         | Type      | Binding   | One-time Binding  | Values                                                                                    | Default   | Description                                                                               |
| ----              | ----      | ----      | ----              | ----                                                                                      | ----      | ----                                                                                      |
| `model`           | object    | =         |                   | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   |           | model bound to component                                                                  |
| `id`              | string    | @?        | true              |                                                                                           |           | id attribute of the field                                                                 |
| `name`            | string    | @?        | true              |                                                                                           |           | name attribute of the field                                                               |
| `placeholder`     | string    | @?        | true              |                                                                                           |           | placeholder text                                                                          |
| `inline`          | boolean   | <?        | false             | `true`, `false`                                                                           | `false`   | show the calendar below the input                                                         |
| `static`          | boolean   | <?        | false             | `true`, `false`                                                                           | `false`   | position the calendar relatively to the input                                             |
| `mode`            | string    | @?        | true              | `single`, `multiple`, `range`                                                             | `single`  | selection mode                                                                            |
| `format`          | string    | @?        | true              | See [Formatting Tokens](https://flatpickr.js.org/formatting/)                             | `Y-m-d`   | format the date of the model                                                              |
| `alt-format`      | string    | @?        | true              | See [Formatting Tokens](https://flatpickr.js.org/formatting/)                             | `Y-m-d`   | format the date of the field. `format` is used if undefined                               |
| `max-date`        | object    | <?        | true              | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   |           | specifies the maximum/latest date (inclusively) allowed for selection                     |
| `min-date`        | object    | <?        | true              | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   |           | specifies the minimum/earliest date (inclusively) allowed for selection                   |
| `disable-date`    | array     | <?        | true              | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   |           | make certain dates unavailable for selection                                              |
| `enable-date`     | array     | <?        | true              | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   |           | make certain dates only available for selection                                           |
| `disabled`        | boolean   | <?        |                   | `true`, `false`                                                                           | `false`   | disabled flag                                                                             |
| `required`        | boolean   | <?        |                   | `true`, `false`                                                                           | `false`   | required flag                                                                             |
| `week-numbers`    | boolean   | <?        |                   | `true`, `false`                                                                           | `false`   | week numbers flag                                                                         |
| `on-change`       | function  | &         |                   |                                                                                           |           | handler triggered when the user selects a date, or changes the time on a selected date    |
| `on-close`        | function  | &         |                   |                                                                                           |           | handler triggered when the calendar is opened                                             |
| `on-open`         | function  | &         |                   |                                                                                           |           | handler triggered when the calendar is closed                                             |

## Configuration

The calendar can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.calendar"
]).config(ouiCalendarConfigurationProvider => {
    ouiCalendarConfigurationProvider.setLocale("en"); // default locale
    ouiCalendarConfigurationProvider.setOptions({ // default options
        altFormat: "Y-m-d",
        altInput: false,
        allowInput: false,
        dateFormat: "Y-m-d",
        maxDate: null,
        minDate: null,
        mode: "single"
    });
});
```

**Note**: See [Flatpickr Options](https://flatpickr.js.org/options/) for more information about the configuration.
