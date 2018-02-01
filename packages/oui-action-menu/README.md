# Action menu

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Normal

```html:preview
<oui-action-menu
  text="Actions"
  aria-label="Server: actions"
  align="start">
  <oui-action-menu-item
    text="Action 1"
    aria-label="Server: action 1"
    on-click="$ctrl.showCurrentValueInPopup('Action 1')"></oui-action-menu-item>
  <oui-action-menu-item
    text="Action 2"
    aria-label="Server: action 2"
    on-click="$ctrl.showCurrentValueInPopup('Action 2')"></oui-action-menu-item>
  <oui-action-menu-item
    text="Action 3 (disabled)"
    aria-label="Server: action 3"
    on-click="$ctrl.showCurrentValueInPopup('Action 3')"
    disabled></oui-action-menu-item>
  <oui-action-menu-divider></oui-action-menu-divider>
  <oui-action-menu-item
    text="Lien externe"
    href="#"
    external></oui-action-menu-item>
</oui-action-menu>
```

### Compact

```html:preview
<div class="oui-action-menu-container">
  <oui-action-menu
    aria-label="Server: actions"
    align="start"
    compact>
    <oui-action-menu-item
      text="Action 1"
      aria-label="Server: action 1"
      on-click="$ctrl.showCurrentValueInPopup('Action 1')"></oui-action-menu-item>
    <oui-action-menu-item
      text="Action 2"
      aria-label="Server: action 2"
      on-click="$ctrl.showCurrentValueInPopup('Action 2')"></oui-action-menu-item>
    <oui-action-menu-item
      text="Action 3 (disabled)"
      aria-label="Server: action 3"
      on-click="$ctrl.showCurrentValueInPopup('Action 3')"
      disabled></oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item
      text="Lien externe"
      href="#"
      external></oui-action-menu-item>
  </oui-action-menu>
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
| `text`            | string          | @       | yes              |                           |                     | button label                       |
| `aria-label`      | string          | @?      | yes              |                           |                     | accessibility label                |
| `href`            | string          | @?      | yes              |                           |                     | hypertext link (link)              |
| `disabled`        | boolean         | <?      | yes              |                           | `false`             | disable (button).                  |
| `external`        | boolean         | @?      | yes              |                           |                     | display external icon (link)       |
| `on-click`        |                 | &?      |                  |                           |                     | on-click handler (button)          |
