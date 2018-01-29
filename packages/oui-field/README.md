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

<oui-field label="{{'Age'}}">
    <input
        class="oui-input"
        type="number"
        id="age"
        name="age"
        ng-model="$ctrl.user.age"
        min="0"
        max="140">
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
```

### Select

```html:preview
<oui-field label="{{'OS'}}">
    <label class="oui-select">
        <select id="os" name="os" ng-model="os" class="oui-select__input">
            <option>Select the OS</option>
            <option value="freebsd">FreeBSD</option>
            <option value="linux">Linux</option>
            <option value="osx">OSX</option>
            <option value="windows">Windows</option>
        </select>
        <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
    </label>
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
```
