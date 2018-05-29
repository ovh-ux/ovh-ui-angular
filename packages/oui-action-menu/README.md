# Action menu

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Normal

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.action1 = false; $ctrl.action2 = false; $ctrl.action3 = false">
<oui-action-menu
  text="Actions"
  aria-label="Server: actions"
  align="start">
  <oui-action-menu-item
    text="Action 1"
    aria-label="Server: action 1"
    on-click="$ctrl.action1 = true"></oui-action-menu-item>
  <oui-action-menu-item
    text="Action 2"
    aria-label="Server: action 2"
    on-click="$ctrl.action2 = true"></oui-action-menu-item>
  <oui-action-menu-item
    text="Action 3 (disabled)"
    aria-label="Server: action 3"
    on-click="$ctrl.action3 = true"
    disabled></oui-action-menu-item>
  <oui-action-menu-divider></oui-action-menu-divider>
  <oui-action-menu-item
    text="Lien externe"
    href="#"
    external></oui-action-menu-item>
</oui-action-menu>
<div>Action 1: {{$ctrl.action1}}</div>
<div>Action 2: {{$ctrl.action2}}</div>
<div>Action 3: {{$ctrl.action3}}</div>
</div>
```

### Compact

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.action1_1 = false; $ctrl.action2_1 = false; $ctrl.action3_1 = false">
<div class="oui-action-menu-container">
  <oui-action-menu
    aria-label="Server: actions"
    align="start"
    compact>
    <oui-action-menu-item
      text="Action 1"
      aria-label="Server: action 1"
      on-click="$ctrl.action1_1 = true"></oui-action-menu-item>
    <oui-action-menu-item
      text="Action 2"
      aria-label="Server: action 2"
      on-click="$ctrl.action2_1 = true"></oui-action-menu-item>
    <oui-action-menu-item
      text="Action 3 (disabled)"
      aria-label="Server: action 3"
      on-click="$ctrl.action3_1 = true"
      disabled></oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item
      text="Lien externe"
      href="#"
      external></oui-action-menu-item>
  </oui-action-menu>
  <div>Action 1: {{$ctrl.action1_1}}</div>
  <div>Action 2: {{$ctrl.action2_1}}</div>
  <div>Action 3: {{$ctrl.action3_1}}</div>
</div>
</div>
```

## API

### oui-action-menu

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `text`            | string          | @       | yes              |                           |                     | button label                       |
| `aria-label`      | string          | @?      | yes              |                           |                     | accessibility label                |
| `align`           | string          | @?      | yes              | `start`,`center`,`end`    | `center`            | menu alignment                     |
| `compact`         | boolean         | <?      | yes              |                           | `false`             | use the compact button             |

### oui-action-menu-item

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `text`            | string          | @       |                  |                           |                     | button label                       |
| `aria-label`      | string          | @?      |                  |                           |                     | accessibility label                |
| `href`            | string          | @?      | yes              |                           |                     | hypertext link (link)              |
| `disabled`        | boolean         | <?      |                  |                           | `false`             | disable (button).                  |
| `external`        | boolean         | @?      | yes              |                           |                     | display external icon (link)       |
| `on-click`        |                 | &?      |                  |                           |                     | on-click handler (button)          |
