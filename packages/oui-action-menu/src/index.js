import ActionMenu from './action-menu.component.js'
import ActionMenuDivider from './action-menu-divider.component.js'
import ActionMenuItem from './action-menu-item.component.js'

angular.module('oui.action-menu', [])
  .component('ouiActionMenu', ActionMenu)
  .component('ouiActionMenuDivider', ActionMenuDivider)
  .component('ouiActionMenuItem', ActionMenuItem)
