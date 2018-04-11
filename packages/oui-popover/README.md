# Popover

<component-status cx-design="partial" ux="beta"></component-status>

## Usage

### Simple case

```html:preview
<div class="oui-doc-preview-only-keep-children">
  <oui-popover>
    <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Click to toggle popover</button>
    <oui-popover-content>
      This is an awesome popover content.
    </oui-popover-content>
  </oui-popover>
</div>
```

### All directions

```html:preview
<div class="oui-doc-preview-only-keep-children">
    <oui-popover placement="top">
      <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Popover on top</button>
      <oui-popover-content>This is an awesome popover content.</oui-popover-content>
    </oui-popover>

    <oui-popover placement="right">
      <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Popover on right</button>
      <oui-popover-content>This is an awesome popover content.</oui-popover-content>
    </oui-popover>

    <oui-popover placement="bottom">
      <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Popover on bottom</button>
      <oui-popover-content>This is an awesome popover content.</oui-popover-content>
    </oui-popover>

    <oui-popover placement="left">
      <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Popover on left</button>
      <oui-popover-content>This is an awesome popover content.</oui-popover-content>
    </oui-popover>
</div>
```

### Alignments

```html:preview
<div class="oui-doc-preview-only-keep-children">
    <oui-popover placement="bottom-start">
      <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Align start</button>
      <oui-popover-content>This is an awesome popover content.</oui-popover-content>
    </oui-popover>

    <oui-popover placement="bottom-end">
      <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Align end</button>
      <oui-popover-content>This is an awesome popover content.</oui-popover-content>
    </oui-popover>
</div>
```

### Help Popover

```html:preview
<div class="oui-doc-preview-only-keep-children">
    <oui-popover>
      <button type="button" class="oui-popover__help-button" oui-popover-trigger>Need help ?</button>
      <oui-popover-content>This is an awesome popover content.</oui-popover-content>
    </oui-popover>
</div>
```

## API

### oui-popover

The component for a popover.

Availability:

 - Element

| Attribute         | Type            | Binding | Values                | Default             | Description                        |
| ----              | ----            | ----    | ----                  | ----                | ----                               |
| `placement`       | string          | @?      | popper.js values      | right               | modifier for alignment             |

For placement values, see Popper.JS documentation (https://popper.js.org/popper-documentation.html#Popper.placements)

### oui-popover-trigger

The directive that triggers the popover apparition.

Availability:

 - Element
 - Attribute

### oui-popover-content

The directive that wrap the popover content.

Availability:

 - Element
 - Attribute
