import Dropdown from './dropdown.component.js'
import DropdownMenu from './dropdown-menu.directive.js'
import DropdownTrigger from './dropdown-trigger.directive.js'

angular.module('oui.dropdown', [])
  .directive('ouiDropdown', Dropdown)
  .directive('ouiDropdownMenu', DropdownMenu)
  .directive('ouiDropdownTrigger', DropdownTrigger)
