import controller from './dropdown.controller'
// import Popper from 'popper.js'

export default ($document) => {
  'ngInject'

  return {
    template: `
      <div class="oui-dropdown" data-ng-transclude></div>
    `,
    controller,
    controllerAs: '$ctrl',
    restrict: 'E',
    bindToController: {
      placement: '@',
      displayArrow: '<'
      // ,onShow: '&'
      // ,onHide: '&'
    },
    scope: {},
    transclude: true,
    link: (scope, element, attr, ctrl) => {
      ctrl.referenceElement = element[0].querySelector('.oui-dropdown__trigger')
      ctrl.popperElement = element[0].querySelector('.oui-dropdown__menu')
      ctrl.arrowElement = element[0].querySelector('.oui-dropdown__arrow')

      scope.$on('$destroy', () => ctrl.closeDropdown())
    }
  }
}
