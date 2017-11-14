import controller from './action-menu-item.controller'

const baseClass = 'oui-action-menu__item'
const dividerClass = 'oui-action-menu__item_divider'
const buttonClasses = 'oui-button oui-button_action-menu'

const linkTemplate = `
  <li class="${baseClass}"
    data-ng-class="{ '${dividerClass}': $ctrl.divider }">
    <a
      class="${buttonClasses}"
      data-ng-href="{{$ctrl.href}}"
      data-ng-bind="$ctrl.text"></a>
  </li>`

const buttonTemplate = `
  <li class="${baseClass}"
    data-ng-class="{ '${dividerClass}': $ctrl.divider }">
    <button
      class="${buttonClasses}"
      type="button"
      data-ng-click="$ctrl.onClick()"
      data-ng-bind="$ctrl.text"></button>
  </li>`

export default $compile => {
  'ngInject'

  return {
    restrict: 'E',
    controller,
    controllerAs: '$ctrl',
    scope: {},
    bindToController: {
      onClick: '&?',
      href: '@?',
      text: '@'
    },
    link: (scope, element, attrs, $transclude) => {
      let compiled

      if (attrs.onClick) {
        compiled = $compile(buttonTemplate)
      } else {
        compiled = $compile(linkTemplate)
      }

      element.replaceWith(compiled(scope))
    }
  }
}
