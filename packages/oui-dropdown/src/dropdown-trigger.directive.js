import defaultTriggerTemplate from './dropdown-trigger-default.html'

const dropdownTriggerClass = 'oui-dropdown__trigger'

export default $compile => {
  'ngInject'

  return {
    restrict: 'AE',
    require: '^ouiDropdown',
    controller: class {},
    controllerAs: '$ctrl',
    bindToController: {
      text: '@?'
    },
    scope: {},
    link: (scope, element, attrs, ctrl) => {
      let triggerElement = element

      triggerElement.addClass(dropdownTriggerClass)

      if (triggerElement[0].tagName.toLowerCase() === 'oui-dropdown-trigger') {
        triggerElement = $compile(defaultTriggerTemplate)(scope)
        element.replaceWith(triggerElement)
      }

      triggerElement.on('click', () => ctrl.onTriggerClick())
      triggerElement.on('keydown', evt => ctrl.triggerKeyHandler(evt))
      triggerElement.on('blur', evt => ctrl.triggerBlurHandler(evt))

      triggerElement.attr({ 'aria-haspopup': true, 'aria-expanded': false })
      scope.$watch(() => ctrl.isOpen(), open => {
        triggerElement.attr('aria-expanded', !!open)
      })

      scope.$on('$destroy', () => {
        triggerElement.off('click')
        triggerElement.off('keydown')
        triggerElement.off('blur')
      })
    }
  }
}
