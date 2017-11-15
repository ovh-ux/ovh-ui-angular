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
  <oui-dropdown start>
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
  <oui-dropdown end>
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
  <oui-dropdown start arrow>
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
  <oui-dropdown arrow>
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
  <oui-dropdown end arrow>
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
| arrow             |                 |         |                     |                     | display the dropdown arrow         |
| start             |                 |         |                     |                     | modifier for left alignment        |
| end               |                 |         |                     |                     | modifier for right alignment       |

### oui-dropdown-trigger

The directive that triggers the dropdown apparition.

Availability:

 - Element
 - Attribute

| Attribute         | Type            | Binding | Values              | Default             | Description                                         |
| ----              | ----            | ----    | ----                | ----                | ----                                                |
| text              | string          |         |                     | null                | Display the default dropdown with this text         |

### oui-dropdown-content

The directive that wrap the dropdown content.

Availability:

 - Element
 - Attribute

# TODO

 - Add aria-labelledby: require an id on the trigger.
