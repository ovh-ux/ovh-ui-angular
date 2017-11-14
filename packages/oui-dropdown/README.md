# Dropdown

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

```html
<oui-dropdown
  arrow
  start
  end>
  <button oui-dropdown-trigger>O</button>
  <oui-dropdown-content>
    [dropdown content]
  </oui-dropdown-content>
</oui-dropdown>
```

## Examples

### Without arrow, centered by default, with a simple list

```html
<oui-dropdown>
  <button type="button" class="oui-button oui-button_dropdown" oui-dropdown-trigger>
    <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
  </button>
  <ul oui-dropdown-content>
    <li>// Menu item</li>
  </ul>
</oui-dropdown>
```

### With arrow, at the end, with complex content

```html
<oui-dropdown arrow end>
  <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
    <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
  </button>
  <oui-dropdown-content>
    <ul>
      <li>// Menu item</li>
    </ul>
    <br>
    <div>
      // Menu footer
    </div>
  </oui-dropdown-content>
</oui-dropdown>
```

## API

### oui-dropdown

The component for a dropdown.

Availability:

 - Element

| Attribute         | Type            | Binding | Values              | Default             | Description                        |
| ----              | ----            | ----    | ----                | ----                | ----                               |
| arrow             |                 |         |                     |                     | display the dropdown arrow         |
| start             |                 |         |                     |                     | modifier for left alignment        |
| end               |                 |         |                     |                     | modifier for right alignment       |

### oui-dropdown-trigger

The directive that triggers the dropdown apparition.

Availability:

 - Attribute

### oui-dropdown-content

The directive that wrap the dropdown content.

Availability:

 - Element
 - Attribute

# OLD

## Bottom

```html:preview
<div>
  <oui-dropdown placement="bottom-start">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <div oui-dropdown-menu>
      <b>bottom-start placement</b>
      <button type="button">AAA</button>
      <button type="button">BBB</button>
      <button type="button">CCC</button>
    </div>
  </oui-dropdown>
</div>
<div>
  <oui-dropdown placement="bottom-end" style="text-align: right">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <div oui-dropdown-menu>
      <b>bottom-end placement</b>
    </div>
  </oui-dropdown>
</div>
```

## Top

```html:preview
<div>
  <oui-dropdown placement="top-start">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <div oui-dropdown-menu>
      <b>top-start placement</b>
    </div>
  </oui-dropdown>
</div>
<div>
  <oui-dropdown placement="top-end" style="text-align: right">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <div oui-dropdown-menu>
      <b>top-end placement</b>
    </div>
  </oui-dropdown>
</div>
```

## Centered

```html:preview
<div>
  <oui-dropdown placement="top" style="text-align: center">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <div oui-dropdown-menu>
      <b>top placement</b>
    </div>
  </oui-dropdown>
</div>
<div>
  <oui-dropdown placement="bottom" style="text-align: center">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <div oui-dropdown-menu>
      <b>bottom placement</b>
    </div>
  </oui-dropdown>
</div>
```

## Arrow

```html:preview
<div>
  <oui-dropdown placement="bottom-start" display-arrow="true">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <div oui-dropdown-menu>
      <b>bottom-start placement</b>
    </div>
  </oui-dropdown>
</div>
<div>
  <oui-dropdown placement="bottom-end" display-arrow="true" style="text-align: right">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <div oui-dropdown-menu>
      <b>bottom-end placement</b>
    </div>
  </oui-dropdown>
</div>
<div>
  <oui-dropdown placement="bottom" style="text-align: center" display-arrow="true">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <div oui-dropdown-menu>
      <b>bottom-end placement</b>
    </div>
  </oui-dropdown>
</div>
```

## Usage

### oui-dropdown

| Name            | Type            | Values              | Default             | Description         |
| ----            | ----            | ----                | ----                | ----                |
| `placement`     | String          | see <a href="https://popper.js.org/popper-documentation.html#Popper.placements">Popper.js documentation</a>             | `bottom`                   | Dropdown position         |
| `display-arrow` | Boolean         |                     | `false`             | True if you want an arrow         |


