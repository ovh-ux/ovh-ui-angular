# Tooltip

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### On link

```html:preview
<p class="oui-doc-preview-only-keep-children">
<a href="#" class="oui-link" oui-tooltip="Link tooltip">focus or hover me</a>
</p>
```

### On button

```html:preview
<button class="oui-button oui-button_primary" oui-tooltip="Button tooltip">focus or hover me</button>
```

### On input

```html:preview
<input type="text" class="oui-input oui-input_inline" placeholder="focus or hover me" oui-tooltip="Input tooltip">
```

### Directions
```html:preview
<div class="oui-doc-preview-only-keep-children">
<input type="text" class="oui-input oui-input_inline" placeholder="Top Left" oui-tooltip="Tooltip on top left" oui-tooltip-placement="top-start">
<input type="text" class="oui-input oui-input_inline" placeholder="Top Center" oui-tooltip="Tooltip on top center" oui-tooltip-placement="top">
<input type="text" class="oui-input oui-input_inline" placeholder="Top Right" oui-tooltip="Tooltip on top right" oui-tooltip-placement="top-end">
</div>
<div class="oui-doc-preview-only-keep-children">
<input type="text" class="oui-input oui-input_inline" placeholder="Bottom Left" oui-tooltip="Tooltip on bottom left" oui-tooltip-placement="bottom-start">
<input type="text" class="oui-input oui-input_inline" placeholder="Bottom Center" oui-tooltip="Tooltip on bottom center" oui-tooltip-placement="bottom">
<input type="text" class="oui-input oui-input_inline" placeholder="Bottom Right" oui-tooltip="Tooltip on bottom right" oui-tooltip-placement="bottom-end">
</div>
```

## Accessibility

If there is no `aria-label` attribute, the directive create one based on `oui-tooltip` value on the trigger element.

## API

| Attribute             | Type   | Binding | One-time Binding | Values                                               | Default   | Description       |
| ----                  | ----   | ----    | ----             | ----                                                 | ----      | ----              |
| oui-tooltip           | string | @       |                  |                                                      |           | tooltip text      |
| oui-tooltip-placement | string | @?      | true             | top,top-start,top-end,bottom,bottom-start,bottom-end | top       | tooltip placement |


