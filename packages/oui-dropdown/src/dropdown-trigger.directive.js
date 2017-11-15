const dropdownTriggerClass = 'oui-dropdown__trigger'

const defaultTrigger = `
  <button type="text"
    class="oui-button oui-button_dropdown oui-dropdown__trigger">
    <span data-ng-bind="::$ctrl.text"></span>
    <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
  </button>`

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
      element.addClass(dropdownTriggerClass)

      if (element[0].tagName.toLowerCase() === 'oui-dropdown-trigger') {
        if (!attrs.text) {
          console.error('You must define a text for a dropdown trigger.')
        }

        const compiled = $compile(defaultTrigger)
        const triggerElement = compiled(scope)
        element.replaceWith(triggerElement)
        element = triggerElement
      }

      element.on('click', () => ctrl.onTriggerClick())
      element.on('keydown', evt => ctrl.triggerKeyHandler(evt))
      element.on('blur', evt => ctrl.triggerBlurHandler(evt))

      element.attr({ 'aria-haspopup': true, 'aria-expanded': false })
      scope.$watch(() => ctrl.isOpen(), open => {
        element.attr('aria-expanded', !!open)
      })

      scope.$on('$destroy', () => {
        element.off('click')
        element.off('keydown')
        element.off('blur')
      })
    }
  }
}
