const dropdownContentClass = 'oui-dropdown__content'
const activeDropdownContentClass = 'oui-dropdown__content_active'
const arrowDropdownContentModifierClass = 'oui-dropdown__content_arrow'
const arrowDropdownContentClass = 'oui-dropdown__arrow'

export default ($compile) => {
  'ngInject'

  return {
    restrict: 'A',
    require: '^ouiDropdown',
    scope: {},
    link: (scope, element, attrs, ctrl) => {
      const wrapped = element.wrap(`<div class="${dropdownContentClass}"></div>`).parent()

      if (ctrl.arrow) {
        wrapped.addClass(arrowDropdownContentModifierClass)
        wrapped.prepend(`<div class="${arrowDropdownContentClass}"></div>`)
      }

      scope.$watch(() => ctrl.isOpen(), (open) => {
        if (open) {
          wrapped.addClass(activeDropdownContentClass)
        } else {
          wrapped.removeClass(activeDropdownContentClass)
        }
      })
    }
  }
}
