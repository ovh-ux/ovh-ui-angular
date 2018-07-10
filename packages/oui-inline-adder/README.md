# Inline adder

<component-status cx-design="complete" ux="complete"></component-status>

An Inline Adder is used to present fields on a line. The special feature of the inline Adder is that you can add lines as needed. By default, only one line is displayed in the Inline Adder. When a new line is added, it becomes read-only and another new line is created below it.

## Usage

All form elements in an Inline Adder must be short. An Inline Adder can contain a maximum of 3 form elements.

### Single fixed width field

```html:preview
<form novalidate name="inputForm">
    <oui-inline-adder on-add="$ctrl.addItem(item)" on-remove="$ctrl.removeItem(item)">
        <oui-inline-adder-item item="item" is-new-item="item.isNew"
            aria-add-item="Add new item"
            aria-remove-item="Remove item {{$index+1}}">
            <oui-inline-adder-row>
                <oui-inline-adder-cell>
                    <oui-field label="Property 1">
                        <input type="text" class="oui-input" id="single-field-prop1"
                               data-ng-disabled="!item.isNew"
                               data-ng-model="item.prop1">
                    </oui-field>
                </oui-inline-adder-cell>
            </oui-inline-adder-row>
        </oui-inline-adder-item>
    </oui-inline-adder>
</form>
```

### Multiple fields with flex-ed width

```html:preview
<form novalidate name="inputForm">
    <oui-inline-adder on-add="$ctrl.addItem(item)" on-remove="$ctrl.removeItem(item)">
        <oui-inline-adder-item item="item" is-new-item="item.isNew">
            <oui-inline-adder-row>
                <oui-inline-adder-cell>
                    <oui-field label="Property 1">
                        <input type="text" class="oui-input" id="dual-field-prop1"
                               data-ng-disabled="!item.isNew"
                               data-ng-model="item.prop1">
                    </oui-field>
                </oui-inline-adder-cell>
                <oui-inline-adder-cell extended="false">
                    <oui-field label="Property 2">
                        <input type="text" class="oui-input" id="dual-field-prop2"
                               data-ng-disabled="!item.isNew"
                               data-ng-model="item.prop2">
                    </oui-field>
                </oui-inline-adder-cell>
            </oui-inline-adder-row>
        </oui-inline-adder-item>
    </oui-inline-adder>
</form>
```

### Mixed field types

```html:preview
<form novalidate name="inputForm">
    <oui-inline-adder on-add="$ctrl.addItem(item)" on-remove="$ctrl.removeItem(item)">
        <oui-inline-adder-item is-new-item="item.isNew">
            <oui-inline-adder-row>
                <oui-inline-adder-cell>
                    <oui-field label="Property 1">
                        <input type="text" class="oui-input" id="triple-field-prop1"
                               ng-disabled="!item.isNew"
                               ng-model="item.prop1">
                    </oui-field>
                </oui-inline-adder-cell>
                <oui-inline-adder-cell>
                    <oui-field label="Property 2">
                        <label class="oui-select">
                            <select class="oui-select__input" id="os" name="os"
                                    ng-disabled="!item.isNew"
                                    ng-model="os">
                                <option ng-value="undefined">Select the OS</option>
                                <option value="freebsd">FreeBSD</option>
                                <option value="linux">Linux</option>
                                <option value="osx">OSX</option>
                                <option value="windows">Windows</option>
                            </select>
                            <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
                        </label>
                    </oui-field>
                </oui-inline-adder-cell>
                <oui-inline-adder-cell extended="false">
                    <oui-field label="Property 3">
                        <oui-numeric id="triple-field-prop3"
                                     model="item.prop3"
                                     disabled="!item.isNew"></oui-numeric>
                    </oui-field>
                </oui-inline-adder-cell>
            </oui-inline-adder-row>
        </oui-inline-adder-item>
    </oui-inline-adder>
</form>
```

### Multiple row items

An Inline Adder can have more than one row and be displayed as a group.

```html:preview
<form novalidate name="inputForm">
    <oui-inline-adder on-add="$ctrl.addItem(item)" on-remove="$ctrl.removeItem(item)">
        <oui-inline-adder-item item="item" is-new-item="item.isNew"
            aria-add-item="Add new item"
            aria-remove-item="Remove item {{$index+1}}">
            <oui-inline-adder-row>
                <oui-inline-adder-cell>
                    <oui-field label="Property 1">
                        <input type="text" class="oui-input" id="multi-field-prop1"
                               data-ng-disabled="!item.isNew"
                               data-ng-model="item.prop1">
                    </oui-field>
                </oui-inline-adder-cell>
                <oui-inline-adder-cell>
                    <oui-field label="Property 2">
                        <input type="text" class="oui-input" id="multi-field-prop2"
                               data-ng-disabled="!item.isNew"
                               data-ng-model="item.prop2">
                    </oui-field>
                </oui-inline-adder-cell>
            </oui-inline-adder-row>
            <oui-inline-adder-row>
                <oui-inline-adder-cell>
                    <oui-field label="Property 3">
                        <input type="text" class="oui-input" id="multi-field-prop3"
                               data-ng-disabled="!item.isNew"
                               data-ng-model="item.prop3">
                    </oui-field>
                </oui-inline-adder-cell>
                <oui-inline-adder-cell>
                    <oui-field label="Property 4">
                        <input type="text" class="oui-input" id="multi-field-prop4"
                               data-ng-disabled="!item.isNew"
                               data-ng-model="item.prop4">
                    </oui-field>
                </oui-inline-adder-cell>
            </oui-inline-adder-row>
        </oui-inline-adder-item>
    </oui-inline-adder>
</form>
```

**Note**: The `on-add` and `on-remove` callbacks receive the item being added or removed. These callbacks should return a promise, which is resolved after a new item is added or after the item is removed respectively.

## API

### oui-inline-adder

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                                 |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                                        |
| `on-add`          | function        | &       |                  |                           |                     | new item add handler that returns a promise |
| `on-remove`       | function        | &       |                  |                           |                     | item remove handler that returns a promise  |

### oui-inline-adder-item

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `item`            | object          | <       | no               |                           |                     | the item for the current line      |
| `is-new-item`     | boolean         | <       | no               |                           |                     | is the item a new one              |

### oui-inline-adder-cell

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                                         |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                                                |
| `extended`        | boolean         | <       | yes              |                           | true                | should the cell auto-grow to occupy available space |
