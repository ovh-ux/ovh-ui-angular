import controller from './dropdown.controller'

export default () => ({
  template: `
    <div class="oui-dropdown"
      data-ng-class="{ 'oui-dropdown_active': $ctrl.isOpen() }"
      data-ng-transclude></div>
  `,
  controller,
  controllerAs: '$ctrl',
  restrict: 'E',
  scope: {},
  transclude: true,
  link: (scope, element, attr, ctrl) => {
    ctrl.referenceElement = element[0].querySelector('.oui-dropdown__trigger')
    ctrl.popperElement = element[0].querySelector('.oui-dropdown__content')
    ctrl.arrowElement = element[0].querySelector('.oui-dropdown__arrow')

    scope.$on('$destroy', () => ctrl.closeDropdown())
  }
})
