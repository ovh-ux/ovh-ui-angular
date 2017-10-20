import Dropdown from './dropdown.component.js'
import DropdownContent from './dropdown-content.directive.js'
import DropdownTrigger from './dropdown-trigger.directive.js'

angular.module('oui.dropdown', [])
  .directive('ouiDropdown', Dropdown)
  .directive('ouiDropdownContent', DropdownContent)
  .directive('ouiDropdownTrigger', DropdownTrigger)
