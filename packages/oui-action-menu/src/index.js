import ActionMenu from './action-menu.component.js'
import ActionMenuItem from './action-menu-item.directive.js'

angular.module('oui.action-menu', [])
  .component('ouiActionMenu', ActionMenu)
  .directive('ouiActionMenuItem', ActionMenuItem)
