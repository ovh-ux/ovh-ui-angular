# Popover

<component-status cx-design="partial" ux="beta"></component-status>

## Usage

### Simple case

```html:preview
<oui-popover>
    <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Click to toggle popover</button>
    <oui-popover-content>
        This is an awesome popover content.
    </oui-popover-content>
</oui-popover>
```

### All directions

```html:preview
<oui-popover placement="right">
    <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Popover on right</button>
    <oui-popover-content>This is an awesome popover content.</oui-popover-content>
</oui-popover>

<oui-popover placement="top">
    <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Popover on top</button>
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
```

### Alignments

```html:preview
<oui-popover placement="bottom-start">
    <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Align start</button>
    <oui-popover-content>This is an awesome popover content.</oui-popover-content>
</oui-popover>

<oui-popover placement="bottom-end">
    <button type="button" class="oui-button oui-button_primary" oui-popover-trigger>Align end</button>
    <oui-popover-content>This is an awesome popover content.</oui-popover-content>
</oui-popover>
```

### Help Popover

```html:preview
<oui-popover>
    <button type="button" class="oui-popover-button" oui-popover-trigger></button>
    <oui-popover-content>This is an awesome popover content.</oui-popover-content>
</oui-popover>
```

## API

### oui-popover

The component for a popover.

Availability:

 - Element

| Attribute     | Type      | Binding   | Values                                                                                        | Default   | Description
| ----          | ----      | ----      | ----                                                                                          | ----      | ----
| `placement`   | string    | @?        | See [Popper placements](https://popper.js.org/popper-documentation.html#Popper.placements)    | `right`   | modifier for alignment

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
