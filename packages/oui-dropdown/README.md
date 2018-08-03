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

### Custom trigger button

Use `oui-dropdown-trigger` as a directive for custom trigger button

```html:preview
<oui-dropdown>
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <span class="oui-icon oui-icon-gear_line" aria-hidden="true"></span>
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

### Custom content menu

Use `oui-dropdown-content` as a directive for custom content menu

```html:preview
<oui-dropdown>
    <oui-dropdown-trigger text="Custom menu"></oui-dropdown-trigger>
    <div class="oui-dropdown-menu" oui-dropdown-content>
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
    </div>
</oui-dropdown>
```

## Variants

### Action Menu

See <a href="#!/oui-angular/action-menu">Action menu component</a>.

```html:preview
<oui-action-menu compact>
    <oui-action-menu-item text="Action 1 (link)" href="#"></oui-action-menu-item>
    <oui-action-menu-item text="Action 2 (button)" on-click="$ctrl.onActionClick()"></oui-action-menu-item>
    <oui-action-menu-item text="Action 3 (disabled)" disabled></oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
</oui-action-menu>
```

### Guide Menu

See <a href="#!/oui-angular/guide-menu">Guide menu component</a>.

```html:preview
<oui-guide-menu text="Guides">
    <oui-guide-menu-item text="Guide 1 (link)" href="#"></oui-guide-menu-item>
    <oui-guide-menu-item text="Guide 2 (button)" on-click="$ctrl.onActionClick()"></oui-guide-menu-item>
    <oui-guide-menu-divider></oui-guide-menu-divider>
    <oui-guide-menu-item text="External link" href="#" external></oui-guide-menu-item>
</oui-guide-menu>
```

## API

### oui-dropdown

| Attribute         | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                      | ----      | ----
| `align`           | string    | @?        | yes               | `start`, `center`, `end`  | `start`   | modifier for alignment
| `arrow`           | boolean   | <?        | no                | `true`, `false`           | `false`   | display the dropdown arrow
| `persistent`      | boolean   | <?        | no                | `true`, `false`           | `false`   | prevent dropdown to close on click

### oui-dropdown-trigger

| Attribute         | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                      | ----      | ----
| `text`            | string    | @         | yes               | n/a                       | n/a       | display the default dropdown with this text
| `aria-label`      | string    | @?        | yes               | n/a                       | n/a       | accessibility label
| `disabled`        | boolean   | <?        | no                | `true`, `false`           | `false`   | disabled flag

**Note**: It can be used as a `component` or an `attribute`.

### oui-dropdown-content

**Note**: It can be used as a `component` or an `attribute`.

### oui-dropdown-group

| Attribute         | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                      | ----      | ----
| `label`           | string    | @         | yes               | n/a                       | n/a       | dropdown group label

### oui-dropdown-item

| Attribute         | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                      | ----      | ----
| `text`            | string    | @         | yes               | n/a                       | n/a       | dropdown item text
| `aria-label`      | string    | @?        | yes               | n/a                       | n/a       | accessibility label
| `href`            | string    | @?        | yes               | n/a                       | n/a       | href of the item
| `state`           | string    | @?        | yes               | n/a                       | n/a       | state of the item
| `state-params`    | object    | <?        | no                | n/a                       | n/a       | state-params of the item
| `disabled`        | boolean   | <?        | no                | `true`, `false`           | `false`   | disabled flag
| `external`        | boolean   | <?        | yes               | `true`, `false`           | `false`   | external flag
| `on-click`        | function  | &         | no                | n/a                       | n/a       | callback on component click

**Note**: `ui-router` is needed for the attributes `state` and `state-params`.

### oui-dropdown-divider

Add a separator for the dropdown menu
