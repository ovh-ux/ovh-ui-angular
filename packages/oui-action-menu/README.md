# Action menu

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Normal

```html:preview
<oui-action-menu text="Actions">
    <oui-action-menu-item text="Action 1 (link)" href="#"></oui-action-menu-item>
    <oui-action-menu-item text="Action 2 (button)" on-click="$ctrl.onActionClick()"></oui-action-menu-item>
    <oui-action-menu-item text="Action 3 (disabled)" disabled></oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
</oui-action-menu>
```

### Compact

```html:preview
<oui-action-menu compact>
    <oui-action-menu-item text="Action 1 (link)" href="#"></oui-action-menu-item>
    <oui-action-menu-item text="Action 2 (button)" on-click="$ctrl.onActionClick()"></oui-action-menu-item>
    <oui-action-menu-item text="Action 3 (disabled)" disabled></oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
</oui-action-menu>
```

### Disabled

```html:preview
<oui-action-menu text="Actions" disabled>
    <oui-action-menu-item text="Action 1 (link)" href="#"></oui-action-menu-item>
    <oui-action-menu-item text="Action 2 (button)" on-click="$ctrl.onActionClick()"></oui-action-menu-item>
    <oui-action-menu-item text="Action 3 (disabled)" disabled></oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
</oui-action-menu>

<oui-action-menu compact disabled>
    <oui-action-menu-item text="Action 1 (link)" href="#"></oui-action-menu-item>
    <oui-action-menu-item text="Action 2 (button)" on-click="$ctrl.onActionClick()"></oui-action-menu-item>
    <oui-action-menu-item text="Action 3 (disabled)" disabled></oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
</oui-action-menu>
```

### On click

```html:preview
<div class="oui-doc-preview-only-keep-children"
    ng-init="$ctrl.action1 = false; $ctrl.action2 = false; $ctrl.action3 = false">
<oui-action-menu compact>
    <oui-action-menu-item
        text="Action 1"
        aria-label="Server: action 1"
        on-click="$ctrl.action1 = true">
    </oui-action-menu-item>
    <oui-action-menu-item
        text="Action 2"
        aria-label="Server: action 2"
        on-click="$ctrl.action2 = true">
    </oui-action-menu-item>
    <oui-action-menu-item
        text="Action 3 (disabled)"
        aria-label="Server: action 3"
        on-click="$ctrl.action3 = true"
        disabled>
    </oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item
        text="External link"
        href="#"
        external>
    </oui-action-menu-item>
</oui-action-menu>
</div>
<div class="oui-doc-preview-only">
    <p><strong>Action 1:</strong> {{$ctrl.action1}}</p>
    <p><strong>Action 2:</strong> {{$ctrl.action2}}</p>
    <p><strong>Action 3:</strong> {{$ctrl.action3}}</p>
</div>
```

## API

### oui-action-menu

| Attribute         | Type            | Binding | One-time binding | Values                    | Default    | Description
| ----              | ----            | ----    | ----             | ----                      | ----       | ----
| `text`            | string          | @       | yes              |                           |            | button label
| `aria-label`      | string          | @?      | yes              |                           |            | accessibility label
| `align`           | string          | @?      | yes              | `start`,`center`,`end`    | `center`   | menu alignment
| `compact`         | boolean         | <?      | yes              |                           | `false`    | use the compact button

### oui-action-menu-item

| Attribute         | Type            | Binding | One-time binding | Values                    | Default    | Description
| ----              | ----            | ----    | ----             | ----                      | ----       | ----
| `text`            | string          | @       |                  |                           |            | button label
| `aria-label`      | string          | @?      |                  |                           |            | accessibility label
| `href`            | string          | @?      | yes              |                           |            | hypertext link (link)
| `disabled`        | boolean         | <?      |                  |                           | `false`    | disable (button)
| `external`        | boolean         | @?      | yes              |                           |            | display external icon (link)
| `on-click`        |                 | &?      |                  |                           |            | on-click handler (button)
