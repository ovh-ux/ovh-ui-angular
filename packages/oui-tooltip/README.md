# Tooltip

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

```html
<span
  oui-tooltip="..."
  oui-tooltip-placement="top|top-start|top-end|bottom|bottom-start|bottom-end"
>...</span>
```

## API

| Attribute             | Type   | Binding | One-time Binding | Values                                               | Default   | Description       |
| ----                  | ----   | ----    | ----             | ----                                                 | ----      | ----              |
| oui-tooltip           | string | @       | true             |                                                      |           | tooltip text      |
| oui-tooltip-placement | string | @?      |                  | top,top-start,top-end,bottom,bottom-start,bottom-end | top       | tooltip placement |

## Accessibility

If there is no `aria-label` attribute, the directive create one based on `oui-tooltip` on the trigger.

## Examples

### Default

```html:preview
<span class="oui-icon oui-icon-help_circle" oui-tooltip="Lorem ipsum dolor sit amet consectetur adipisicing elit"></span>
```

### Placements
```html:preview
<div class="oui-doc-preview-only-keep-children">
  <button class="oui-button oui-button_primary" oui-tooltip="Tooltip on top left" oui-tooltip-placement="top-start">
    Top Left
  </button>
  <button class="oui-button oui-button_primary" oui-tooltip="Tooltip on top center" oui-tooltip-placement="top">
    Top Center
  </button>
  <button class="oui-button oui-button_primary" oui-tooltip="Tooltip on top right" oui-tooltip-placement="top-end">
    Top Right
  </button>
</div>
<div class="oui-doc-preview-only-keep-children">
  <button class="oui-button oui-button_primary" oui-tooltip="Tooltip on bottom left" oui-tooltip-placement="bottom-start">
    Bottom Left
  </button>
  <button class="oui-button oui-button_primary" oui-tooltip="Tooltip on bottom center" oui-tooltip-placement="bottom">
    Bottom Center
  </button>
  <button class="oui-button oui-button_primary" oui-tooltip="Tooltip on bottom right" oui-tooltip-placement="bottom-end">
    Bottom Right
  </button>
</div>
```
