# Dropdown

## Bottom

```html:preview
<div>
  <oui-dropdown placement="bottom-start">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <div oui-dropdown-menu>
      <b>bottom-start placement</b>
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


