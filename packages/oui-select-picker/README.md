# Select Picker

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html
<oui-select-picker
    description="..."
    disabled="..."
    id="..."
    match="..."
    model="..."
    name="..."
    on-change="..."
    picture="..."
    placeholder="..."
    text="..."
    values="..."
></oui-select-picker>
```

## Examples

### Basic

```html:preview
<div ng-init="$ctrl.value1 = {id:'a', name: 'Value A'}">
    <oui-select-picker name="oui-select-picker-1"
        match="name"
        model="$ctrl.value1"
        text="Value A"
        values="[{id:'a', name: 'Value A'}]"></oui-select-picker>
    <oui-select-picker name="oui-select-picker-1"
        match="name"
        model="$ctrl.value1"
        text="Value B"
        values="[{id:'b', name: 'Value B'}]"></oui-select-picker>
    <oui-select-picker name="oui-select-picker-1"
        match="name"
        model="$ctrl.value1"
        placeholder="Select"
        text="Value C or D"
        values="[{id:'c', name: 'Value C'}, '{id:'d', name: 'Value D'}}]"></oui-select-picker>
</div>
```

### Description

```html:preview
<oui-select-picker text="Checked"
    match="name"
    description="Checked select picker"></oui-select-picker>
<oui-select-picker text="Disabled"
    match="name"
    description="Disabled select picker"
    disabled></oui-select-picker>
```

### Sections

```html:preview
<oui-select-picker text="Checked"
    match="name"
    description="Checked select picker">
    <span class="oui-select-picker__section">Section 1</section>
    <span class="oui-select-picker__section">Section 2</section>
</oui-select-picker>
<oui-select-picker text="Disabled"
    match="name"
    description="Disabled select picker"
    disabled>
    <span class="oui-select-picker__section">Section 1</section>
    <span class="oui-select-picker__section">Section 2</section>
</oui-select-picker>
```

### On change

```html:preview
<div ng-init="$ctrl.value2 = {id:'a', name: 'Value A'}">
    <oui-select-picker text="Value A"
        name="oui-select-picker-2"
        match="name"
        model="$ctrl.value2"
        values="[{id:'a', name: 'Value A'}]"
        on-change="$ctrl.lastOnChangeValue = modelValue"></oui-select-picker>
    <oui-select-picker text="Value B"
        name="oui-select-picker-2"
        model="$ctrl.value2"
        value="[{id:'b', name: 'Value B'}]"
        on-change="$ctrl.lastOnChangeValue = modelValue"></oui-select-picker>
</div>

<span>Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default | Description
| ----          | ----                    | ----    | ----             | ----                     | ----    | ----
| text          | string                  | @       |                  |                          |         | label text
| description   | string                  | @?      |                  |                          |         | description text
| id            | string                  | @?      | `true`           |                          |         | id attribute of the radio
| name          | string                  | @?      | `true`           |                          |         | name attribute of the radio
| picture       | string                  | @?      |                  |                          |         | picture path or icon class
| disabled      | boolean                 | <?      |                  |                          | false   | disabled flag
| match         | string                  | @       |                  |                          |         | object property matched to label
| model         | Object                  | =?      |                  |                          |         | current value of the radio
| values        | array                   | <       |                  |                          |         | value of the radio or values of the select
| placeholder   | string                  | @?      |                  |                          |         | initial label text of the select
| on-change     | function                | &?      |                  |                          |         | handler triggered when value has changed

