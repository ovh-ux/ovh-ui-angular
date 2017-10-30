const dropdownTriggerClass = 'oui-dropdown__trigger'

export default () => ({
  restrict: 'A',
  require: '^ouiDropdown',
  scope: {},
  link: (scope, element, attrs, ctrl) => {
    element.addClass(dropdownTriggerClass)
    element.on('click', () => ctrl.onTriggerClick())
    element.on('keydown', evt => ctrl.triggerKeyHandler(evt))
    element.on('blur', evt => ctrl.triggerBlurHandler(evt))

    element.attr({ 'aria-haspopup': true, 'aria-expanded': false })
    scope.$watch(() => ctrl.isOpen(), (open) => {
      element.attr('aria-expanded', !!open)
    })

    scope.$on('$destroy', () => {
      element.off('click')
      element.off('keydown')
      element.off('blur')
    })
  }
})
