# Dropdown

<component-status cx-design="complete" ux="rc"></component-status>

## Centered by default with default trigger

```html:preview
<div style="text-align: center" class="oui-doc-preview-only-keep-children">
  <oui-dropdown>
    <oui-dropdown-trigger text="Actions..."></oui-dropdown-trigger>
    <oui-dropdown-content>
      xxx
    </oui-dropdown-content>
  </oui-dropdown>
</div>
```

## Alignment

```html:preview
<div class="oui-doc-preview-only-keep-children">
  <oui-dropdown align="start">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
      XXX
    </oui-dropdown-content>
  </oui-dropdown>
</div>
<div style="text-align: right" class="oui-doc-preview-only-keep-children">
  <oui-dropdown align="end">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
      XXX
    </oui-dropdown-content>
  </oui-dropdown>
</div>
```

## With arrow

```html:preview
<div class="oui-doc-preview-only-keep-children">
  <oui-dropdown align="start" arrow>
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
      XXXXXXXX
    </oui-dropdown-content>
  </oui-dropdown>
</div>
<div style="text-align: center" class="oui-doc-preview-only-keep-children">
  <oui-dropdown arrow>
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
      XXXXXXXX
    </oui-dropdown-content>
  </oui-dropdown>
</div>
<div style="text-align: right" class="oui-doc-preview-only-keep-children">
  <oui-dropdown align="end" arrow>
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
      XXXXXXXX
    </oui-dropdown-content>
  </oui-dropdown>
</div>
```

## API

### oui-dropdown

The component for a dropdown.

Availability:

 - Element

| Attribute         | Type            | Binding | Values              | Default             | Description                        |
| ----              | ----            | ----    | ----                | ----                | ----                               |
| `align`           | string          | @?      | start,center,end    | center              | modifier for alignment             |
| `arrow`           | boolean         | <?      | `true`, `false`     | `false`             | display the dropdown arrow         |
| `persistent`      | boolean         | <?      | `true`, `false`     | `false`             | prevent dropdown to close on click |

### oui-dropdown-trigger

The directive that triggers the dropdown apparition.

Availability:

 - Element
 - Attribute

| Attribute         | Type            | Binding | Values              | Default             | Description                                         |
| ----              | ----            | ----    | ----                | ----                | ----                                                |
| `text`            | string          | @?      |                     | `null`              | display the default dropdown with this text         |
| `aria-label`      | string          | @?      |                     | `null`              | accessibility label                                 |

### oui-dropdown-content

The directive that wrap the dropdown content.

Availability:

 - Element
 - Attribute
