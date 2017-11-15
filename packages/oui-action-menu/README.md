# Action menu

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

```html:preview
<div style="border: 1px #BDBDBD solid; width: 250px">
  <oui-action-menu>
    <oui-action-menu-item
      data-text="Action 1"
      data-on-click="$ctrl.showCurrentValueInPopup('Action 1')"></oui-action-menu-item>
    <oui-action-menu-item
      data-text="Action 2"
      data-on-click="$ctrl.showCurrentValueInPopup('Action 2')"></oui-action-menu-item>
    <oui-action-menu-item
      data-text="Lien externe"
      data-href="#"
      data-external
      data-divider></oui-action-menu-item>
  </oui-action-menu>
</div>
```
