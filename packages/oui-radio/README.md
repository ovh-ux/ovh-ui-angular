# Radio

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Basic

```html:preview
<div ng-init="$ctrl.value1 = 'a'" class="oui-doc-preview-only-keep-children">
<oui-radio text="Value A"
    name="oui-radio-1"
    model="$ctrl.value1"
    value="'a'"></oui-radio>
<oui-radio text="Value B"
    name="oui-radio-1"
    model="$ctrl.value1"
    value="'b'"></oui-radio>
<oui-radio text="Value C"
    name="oui-radio-1"
    model="$ctrl.value1"
    value="'c'"
    disabled></oui-radio>
</div>
```

### Description

```html:preview
<oui-radio text="Checked"
    description="Checked radio"></oui-radio>
<oui-radio text="Disabled"
    description="Disabled radio"
    disabled></oui-radio>
```

### Thumbnail

```html:preview
<oui-radio text="Checked"
    thumbnail></oui-radio>
<oui-radio text="Disabled"
    description="Disabled radio"
    disabled
    thumbnail="true"></oui-radio>
```

### On change

```html:preview
<div ng-init="$ctrl.value2 = 'a'" class="oui-doc-preview-only-keep-children">
<oui-radio text="Value A"
    id="radio2"
    name="oui-radio-2"
    model="$ctrl.value2"
    value="'a'"
    on-change="$ctrl.lastOnChangeValue = modelValue"></oui-radio>
<oui-radio text="Value B"
    name="oui-radio-2"
    model="$ctrl.value2"
    value="'b'"
    on-change="$ctrl.lastOnChangeValue = modelValue"></oui-radio>
</div>

<span>Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default | Description
| ----          | ----                    | ----    | ----             | ----                     | ----    | ----
| text          | string                  | @       |                  |                          |         | radio text
| description   | string                  | @?      |                  |                          |         | description text
| id            | string                  | @?      | `true`           |                          |         | id attribute of the radio
| name          | string                  | @?      | `true`           |                          |         | name attribute of the radio
| disabled      | boolean                 | <?      |                  |                          | false   | disabled flag
| required      | boolean                 | <?      |                  |                          | false   | required flag
| model         | Object                  | =?      |                  |                          |         | current value of the radio
| value         | Object                  | <       |                  |                          |         | value of the radio
| on-change     | function                | &?      |                  |                          |         | handler triggered when value has changed
| thumbnail     | boolean                 | <?      |                  |                          | false   | thumbnail style of the radio
