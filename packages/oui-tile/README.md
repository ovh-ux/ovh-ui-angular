# Tile

<component-status cx-design="partial" ux="rc"></component-status>

## Usage

### Basic

```html:preview
<oui-tile heading="Title">Tile content</oui-tile>
```

```html:preview
<oui-tile heading="Title" description="A great legend for this tile.">Tile content</oui-tile>
```

### Button Tile

```html:preview
<div ng-init="$ctrl.click = false"
    class="oui-doc-preview-only-keep-children">
<oui-tile heading="Title">
    <oui-tile-button text="Button 1" on-click="$ctrl.click = true"></oui-tile-button>
    <oui-tile-button text="Button 2" href="#"></oui-tile-button>
    <oui-tile-button aria-label="access to .." href="#">Button 3</oui-tile-button>
</oui-tile>

<div class="oui-doc-preview-only">Button 1 clicked: {{$ctrl.click}}</div>
</div>
```

### Definition list Tile

```html:preview
<oui-tile heading="Title">
    <oui-tile-definition term="Term" description="This is a description"></oui-tile-definition>
    <oui-tile-definition term="Term">
        <oui-tile-description>This is a description</oui-tile-description>
    </oui-tile-definition>
    <oui-tile-definition term="Term" term-popover="This is a popover text" description="This is a description"></oui-tile-definition>
    <oui-tile-definition term="Progress">
        <oui-tile-description>
            <progress class="oui-progress oui-progress_success" value="10" max="100"></progress>
        </oui-tile-description>
    </oui-tile-definition>
    <oui-tile-definition
        term="Term"
        description="This is a description">
        <oui-action-menu data-compact align="end">
            <oui-action-menu-item text="Action 1"></oui-action-menu-item>
        </oui-action-menu>
    </oui-tile-definition>
</oui-tile>
```

## API

### oui-tile

| Attribute           | Type     | Binding | One-time Binding | Values                 | Default           | Description                               |
| ----                | ----     | ----    | ----             | ----                   | ----              | ----                                      |
| `heading`           | string   | @?      | yes              |                        |                   | tile title                                |
| `description`       | string   | @?      | yes              |                        |                   | tile description behind title             |
| `loading`           | boolean  | <?      |                  |                        | false             | display loader flag                       |

### oui-tile-button

| Attribute           | Type     | Binding | One-time Binding | Values                 | Default           | Description                               |
| ----                | ----     | ----    | ----             | ----                   | ----              | ----                                      |
| `text`              | string   | @       | yes              |                        |                   | button text                               |
| `href`              | string   | @?      | yes              |                        |                   | button link url                           |
| `on-click`          | funcion  | &?      |                  |                        |                   | button action callback                    |
| `aria-label`        | string   | @?      |                  |                        | `null`            | accessibility label                       |

### oui-tile-definition

| Attribute           | Type     | Binding | One-time Binding | Values                 | Default           | Description                               |
| ----                | ----     | ----    | ----             | ----                   | ----              | ----                                      |
| `term`              | string   | @?      | yes              |                        |                   | definition term item                      |
| `term-popover`      | string   | @?      | yes              |                        |                   | definition term item popover              |
| `description`       | string   | @?      | yes              |                        |                   | definition description item               |
| `actions`           | array    | =?      |                  | [Object]               |                   | action menu item                          |
