const dropdownMenuClass = 'oui-dropdown__menu'
const activeDropdownMenuClass = 'oui-dropdown__menu_active'
const arrowDropdownMenuModifierClass = 'oui-dropdown__menu_arrow'
const arrowDropdownMenuClass = 'oui-dropdown__arrow'

export default ($compile) => {
  'ngInject'

  return {
    restrict: 'A',
    require: '^ouiDropdown',
    scope: {},
    link: (scope, element, attrs, ctrl) => {
      const wrapped = element.wrap(`<div class="${dropdownMenuClass}"></div>`).parent()

      if (ctrl.displayArrow) {
        wrapped.addClass(arrowDropdownMenuModifierClass)
        wrapped.prepend(`<div class="${arrowDropdownMenuClass}"></div>`)
      }

      scope.$watch(() => ctrl.isOpen(), (open) => {
        if (open) {
          wrapped.addClass(activeDropdownMenuClass)
        } else {
          wrapped.removeClass(activeDropdownMenuClass)
        }
      })
    }
  }
}
