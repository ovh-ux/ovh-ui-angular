# Dropdown

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Basic

```html:preview
<oui-dropdown>
    <oui-dropdown-trigger text="Actions"></oui-dropdown-trigger>
    <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
            <oui-dropdown-item text="Action 1 (button)" on-click="$ctrl.onActionClick()"></oui-dropdown-item>
            <oui-dropdown-item text="Action 2 (link/href)" href="#"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
            <oui-dropdown-item text="Action 3 (disabled)" disabled></oui-dropdown-item>
            <oui-dropdown-item text="Action 4 (link/state)" state="showcase.oui-angular"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item text="External link" href="#" external></oui-dropdown-item>
        <oui-dropdown-item text="Start guided tour" href="#" sticky></oui-dropdown-item>
    </oui-dropdown-content>
</oui-dropdown>
```

### Disabled

```html:preview
<oui-dropdown>
    <oui-dropdown-trigger text="Actions" disabled></oui-dropdown-trigger>
    <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
            <oui-dropdown-item text="Action 1 (button)" on-click="$ctrl.onActionClick()"></oui-dropdown-item>
            <oui-dropdown-item text="Action 2 (link/href)" href="#"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
            <oui-dropdown-item text="Action 3 (disabled)" disabled></oui-dropdown-item>
            <oui-dropdown-item text="Action 4 (link/state)" state="showcase.oui-angular"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item text="External link" href="#" external></oui-dropdown-item>
        <oui-dropdown-item text="Start guided tour" href="#" sticky></oui-dropdown-item>
    </oui-dropdown-content>
</oui-dropdown>
```

### Alignment

```html:preview
<oui-dropdown align="start">
    <oui-dropdown-trigger text="Start"></oui-dropdown-trigger>
    <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
            <oui-dropdown-item text="Action 1 (button)" on-click="$ctrl.onActionClick()"></oui-dropdown-item>
            <oui-dropdown-item text="Action 2 (link/href)" href="#"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
            <oui-dropdown-item text="Action 3 (disabled)" disabled></oui-dropdown-item>
            <oui-dropdown-item text="Action 4 (link/state)" state="showcase.oui-angular"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item text="External link" href="#" external></oui-dropdown-item>
        <oui-dropdown-item text="Start guided tour" href="#" sticky></oui-dropdown-item>
    </oui-dropdown-content>
</oui-dropdown>

<oui-dropdown align="center">
    <oui-dropdown-trigger text="Center"></oui-dropdown-trigger>
    <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
            <oui-dropdown-item text="Action 1 (button)" on-click="$ctrl.onActionClick()"></oui-dropdown-item>
            <oui-dropdown-item text="Action 2 (link/href)" href="#"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
            <oui-dropdown-item text="Action 3 (disabled)" disabled></oui-dropdown-item>
            <oui-dropdown-item text="Action 4 (link/state)" state="showcase.oui-angular"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item text="External link" href="#" external></oui-dropdown-item>
        <oui-dropdown-item text="Start guided tour" href="#" sticky></oui-dropdown-item>
    </oui-dropdown-content>
</oui-dropdown>

<oui-dropdown align="end">
    <oui-dropdown-trigger text="End"></oui-dropdown-trigger>
    <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
            <oui-dropdown-item text="Action 1 (button)" on-click="$ctrl.onActionClick()"></oui-dropdown-item>
            <oui-dropdown-item text="Action 2 (link/href)" href="#"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
            <oui-dropdown-item text="Action 3 (disabled)" disabled></oui-dropdown-item>
            <oui-dropdown-item text="Action 4 (link/state)" state="showcase.oui-angular"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item text="External link" href="#" external></oui-dropdown-item>
        <oui-dropdown-item text="Start guided tour" href="#" sticky></oui-dropdown-item>
    </oui-dropdown-content>
</oui-dropdown>
```

### With arrow

```html:preview
<oui-dropdown align="start" arrow>
    <oui-dropdown-trigger text="Start"></oui-dropdown-trigger>
    <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
            <oui-dropdown-item text="Action 1 (button)" on-click="$ctrl.onActionClick()"></oui-dropdown-item>
            <oui-dropdown-item text="Action 2 (link/href)" href="#"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
            <oui-dropdown-item text="Action 3 (disabled)" disabled></oui-dropdown-item>
            <oui-dropdown-item text="Action 4 (link/state)" state="showcase.oui-angular"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item text="External link" href="#" external></oui-dropdown-item>
        <oui-dropdown-item text="Start guided tour" href="#" sticky></oui-dropdown-item>
    </oui-dropdown-content>
</oui-dropdown>

<oui-dropdown align="center" arrow>
    <oui-dropdown-trigger text="Center"></oui-dropdown-trigger>
    <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
            <oui-dropdown-item text="Action 1 (button)" on-click="$ctrl.onActionClick()"></oui-dropdown-item>
            <oui-dropdown-item text="Action 2 (link/href)" href="#"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
            <oui-dropdown-item text="Action 3 (disabled)" disabled></oui-dropdown-item>
            <oui-dropdown-item text="Action 4 (link/state)" state="showcase.oui-angular"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item text="External link" href="#" external></oui-dropdown-item>
        <oui-dropdown-item text="Start guided tour" href="#" sticky></oui-dropdown-item>
    </oui-dropdown-content>
</oui-dropdown>

<oui-dropdown align="end" arrow>
    <oui-dropdown-trigger text="End"></oui-dropdown-trigger>
    <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
            <oui-dropdown-item text="Action 1 (button)" on-click="$ctrl.onActionClick()"></oui-dropdown-item>
            <oui-dropdown-item text="Action 2 (link/href)" href="#"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
            <oui-dropdown-item text="Action 3 (disabled)" disabled></oui-dropdown-item>
            <oui-dropdown-item text="Action 4 (link/state)" state="showcase.oui-angular"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item text="External link" href="#" external></oui-dropdown-item>
        <oui-dropdown-item text="Start guided tour" href="#" sticky></oui-dropdown-item>
    </oui-dropdown-content>
</oui-dropdown>
```

### Custom trigger

```html:preview
<oui-dropdown >
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
            <oui-dropdown-item text="Action 1 (button)" on-click="$ctrl.onActionClick()"></oui-dropdown-item>
            <oui-dropdown-item text="Action 2 (link/href)" href="#"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
            <oui-dropdown-item text="Action 3 (disabled)" disabled></oui-dropdown-item>
            <oui-dropdown-item text="Action 4 (link/state)" state="showcase.oui-angular"></oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item text="External link" href="#" external></oui-dropdown-item>
        <oui-dropdown-item text="Start guided tour" href="#" sticky></oui-dropdown-item>
    </oui-dropdown-content>
</oui-dropdown>
```

## API

### oui-dropdown

| Attribute         | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                      | ----      | ----
| `align`           | string    | @?        | yes               | `start`, `center`, `end`  | `start`   | modifier for alignment
| `arrow`           | boolean   | <?        |                   | `true`, `false`           | `false`   | display the dropdown arrow
| `persistent`      | boolean   | <?        |                   | `true`, `false`           | `false`   | prevent dropdown to close on click

### oui-dropdown-trigger

| Attribute         | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `text`            | string    | @         | yes               |                   |           | display the default dropdown with this text
| `aria-label`      | string    | @?        | yes               |                   |           | accessibility label
| `disabled`        | boolean   | <?        |                   | `true`, `false`   | `false`   | disabled flag

**Note:** It can be used as a `component` or an `attribute`.

### oui-dropdown-content

**Note:** It can be used as a `component` or an `attribute`.

### oui-dropdown-group

| Attribute         | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `label`           | string    | @         | yes               |                   |           | dropdown group label

### oui-dropdown-item

| Attribute         | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `text`            | string    | @         | yes               |                   |           | dropdown item text
| `aria-label`      | string    | @?        | yes               |                   |           | accessibility label
| `href`            | string    | @?        | yes               |                   |           | href of the item
| `state`           | string    | @?        | yes               |                   |           | state of the item
| `state-params`    | object    | <?        |                   |                   |           | state-params of the item
| `disabled`        | boolean   | <?        |                   | `true`, `false`   | `false`   | disabled flag
| `external`        | boolean   | <?        | yes               | `true`, `false`   | `false`   | external flag
| `on-click`        | function  | &         |                   |                   |           | callback on component click

**Note:** `ui-router` is needed for the attributes `state` and `state-params`.

### oui-dropdown-divider

Add a separator for the dropdown menu
