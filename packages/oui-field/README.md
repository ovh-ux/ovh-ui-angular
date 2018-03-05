# Field

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

<form novalidate name="$ctrl.form1">

### Input

```html:preview
<oui-field label="{{'Lastname'}}"
    help-text="At least 3 chars">
    <input
        class="oui-input"
        type="text"
        id="lastname"
        name="lastname"
        ng-model="$ctrl.user.lastname"
        required
        minlength="3"
        maxlength="32">
</oui-field>

<oui-field label="{{'Email'}}">
    <input
        class="oui-input"
        type="email"
        id="email"
        name="email"
        ng-model="$ctrl.user.email">
</oui-field>

<oui-field label="{{'Username'}}"
    error-messages="{pattern: 'Username must be alphabetic with a length between 3 and 8.'}">
    <input
        class="oui-input"
        type="text"
        id="username"
        name="username"
        ng-model="$ctrl.user.username"
        ng-pattern="/^[a-zA-Z]{3,8}$/">
</oui-field>
```

### Checkbox

```html:preview
<oui-field label="{{'Server options'}}">
    <oui-checkbox
        name="ssl"
        text="SSL"
        model="$ctrl.ssl"
        required></oui-checkbox>
    <oui-checkbox
        name="hsts"
        text="HSTS"
        model="$ctrl.hsts"></oui-checkbox>
</oui-field>
```

### Radio

```html:preview
<oui-field label="{{'Protocol'}}">
    <oui-radio
        name="protocol"
        text="HTTP"
        model="$ctrl.protocol"
        value="'http'"></oui-radio>
    <oui-radio
        name="protocol"
        text="TCP"
        model="$ctrl.protocol"
        value="'tcp'"></oui-radio>
    <oui-radio
        name="protocol"
        text="UDP"
        model="$ctrl.protocol"
        value="'udp'"
        disabled></oui-radio>
</oui-field>
```

### Textarea

```html:preview
<oui-field label="{{'Server description'}}">
    <textarea
        class="oui-textarea"
        id="description"
        name="description"
        ng-model="$ctrl.server.description"
        required>
    </textarea>
</oui-field>

<oui-field label="{{'Cluster description'}}">
    <oui-textarea
        model="$ctrl.text2"
        id="description-2"
        name="description-2"
        placeholder="Please insert your text..."
        maxlength="10"
        required></oui-textarea>
</oui-field>
```

### Select

```html:preview
<oui-field label="{{'OS'}}">
    <label class="oui-select">
        <select
            id="os"
            name="os"
            ng-model="os"
            class="oui-select__input"
            required>
            <option ng-value="undefined">Select the OS</option>
            <option value="freebsd">FreeBSD</option>
            <option value="linux">Linux</option>
            <option value="osx">OSX</option>
            <option value="windows">Windows</option>
        </select>
        <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
    </label>
</oui-field>

<oui-field label="{{'Recovery OS'}}">
    <oui-select name="recovery_os"
        model="$ctrl.recoveryOs"
        data-title="Select the recovery OS"
        placeholder="Select the recovery OS..."
        items="$ctrl.osList"
        required
        match="label"
        data-align="start">
        <span ng-bind="$item.label"></span>
    </oui-select>
</oui-field>
```

### Input numeric

```html:preview
<oui-field label="{{'Number of servers'}}"
    help-text="Select the number of servers in your cluster">
    <oui-numeric
        id="serversCount"
        name="serversCount"
        model="$ctrl.serversCount"
        min="1">
    </oui-numeric>
</oui-field>
</form>
```

## API

| Attribute         | Type            | Binding | One-time binding | Values      | Default             | Description                                       |
| ----              | ----            | ----    | ----             | ----        | ----                | ----                                              |
| `error-messages`  | object          | <?      | no               |             |                     | a dictionary to override default messages         |
| `help-text`       | string          | @?      | yes              |             |                     | the field label                                   |
| `label`           | function        | @?      | yes              |             |                     | a text to help fill the form field                |

`error-messages` object can override error messages for validation.

| Attribute         | Type            | Default                                   |
| ----              | ----            | ----                                      |
| `required`        | string          | Mandatory.                                |
| `email`           | string          | Invalid email.                            |
| `min`             | string          | Too low (1 min).                          |
| `max`             | string          | Too high (100 max).                       |
| `minlength`       | string          | Too short (6 characters min).             |
| `maxlength`       | string          | Too high (12 characters max).             |
| `pattern`         | string          | Invalid format.                           |
