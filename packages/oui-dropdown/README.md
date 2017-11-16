# Dropdown

<component-status cx-design="complete" ux="prototype"></component-status>

## Centered by default with default trigger

```html:preview
<div style="text-align: center">
  <oui-dropdown>
    <oui-dropdown-trigger data-text="Actions..."></oui-dropdown-trigger>
    <oui-dropdown-content>
      <oui-action-menu>
        <oui-action-menu-item
          data-text="Action 1"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 1')"></oui-action-menu-item>
        <oui-action-menu-item
          data-text="Action 2"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 2')"></oui-action-menu-item>
        <oui-action-menu-item divider
          data-text="Lien externe"
          data-type="external"
          data-href="#"></oui-action-menu-item>
      </oui-action-menu>
    </oui-dropdown-content>
  </oui-dropdown>
</div>
```

## Alignment

```html:preview
<div>
  <oui-dropdown data-align="start">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
      <oui-action-menu>
        <oui-action-menu-item
          data-text="Action 1"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 1')"></oui-action-menu-item>
        <oui-action-menu-item
          data-text="Action 2"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 2')"></oui-action-menu-item>
        <oui-action-menu-item divider
          data-text="Lien externe"
          data-type="external"
          data-href="#"></oui-action-menu-item>
      </oui-action-menu>
    </oui-dropdown-content>
  </oui-dropdown>
</div>
<div style="text-align: right">
  <oui-dropdown data-align="end">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
      <oui-action-menu>
        <oui-action-menu-item
          data-text="Action 1"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 1')"></oui-action-menu-item>
        <oui-action-menu-item
          data-text="Action 2"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 2')"></oui-action-menu-item>
        <oui-action-menu-item divider
          data-text="Lien externe"
          data-type="external"
          data-href="#"></oui-action-menu-item>
      </oui-action-menu>
    </oui-dropdown-content>
  </oui-dropdown>
</div>
```

## With arrow

```html:preview
<div>
  <oui-dropdown data-align="start" data-arrow>
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
      <oui-action-menu>
        <oui-action-menu-item
          data-text="Action 1"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 1')"></oui-action-menu-item>
        <oui-action-menu-item
          data-text="Action 2"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 2')"></oui-action-menu-item>
        <oui-action-menu-item divider
          data-text="Lien externe"
          data-type="external"
          data-href="#"></oui-action-menu-item>
      </oui-action-menu>
    </oui-dropdown-content>
  </oui-dropdown>
</div>
<div style="text-align: center">
  <oui-dropdown data-arrow>
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
      <oui-action-menu>
        <oui-action-menu-item
          data-text="Action 1"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 1')"></oui-action-menu-item>
        <oui-action-menu-item
          data-text="Action 2"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 2')"></oui-action-menu-item>
        <oui-action-menu-item divider
          data-text="Lien externe"
          data-type="external"
          data-href="#"></oui-action-menu-item>
      </oui-action-menu>
    </oui-dropdown-content>
  </oui-dropdown>
</div>
<div style="text-align: right">
  <oui-dropdown data-align="end" data-arrow>
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
      <i class="oui-icon oui-icon-gear_line" aria-hidden="true"></i>
    </button>
    <oui-dropdown-content>
      <oui-action-menu>
        <oui-action-menu-item
          data-text="Action 1"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 1')"></oui-action-menu-item>
        <oui-action-menu-item
          data-text="Action 2"
          data-on-click="$ctrl.showCurrentValueInPopup('Action 2')"></oui-action-menu-item>
        <oui-action-menu-item divider
          data-text="Lien externe"
          data-type="external"
          data-href="#"></oui-action-menu-item>
      </oui-action-menu>
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
| align             | string          | @?      | start,center,end    | center              | modifier for alignment             |
| arrow             |                 | <?      |                     |                     | display the dropdown arrow         |

### oui-dropdown-trigger

The directive that triggers the dropdown apparition.

Availability:

 - Element
 - Attribute

| Attribute         | Type            | Binding | Values              | Default             | Description                                         |
| ----              | ----            | ----    | ----                | ----                | ----                                                |
| text              | string          | @?      |                     | null                | Display the default dropdown with this text         |

### oui-dropdown-content

The directive that wrap the dropdown content.

Availability:

 - Element
 - Attribute

# TODO

 - Add aria-labelledby: require an id on the trigger.
