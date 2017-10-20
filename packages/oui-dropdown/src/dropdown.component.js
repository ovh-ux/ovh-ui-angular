import controller from './dropdown.controller'

export default () => {
  'ngInject'

  return {
    template: `
      <div class="oui-dropdown" data-ng-transclude></div>
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
  }
}
