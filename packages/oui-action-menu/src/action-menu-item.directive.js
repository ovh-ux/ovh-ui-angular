import controller from './action-menu-item.controller'

const baseClass = 'oui-action-menu__item'
const dividerClass = 'oui-action-menu__item_divider'
const buttonClasses = 'oui-button oui-button_action-menu'

const linkTemplate = (dividerClass, external) => `
  <li class="${baseClass} ${dividerClass}">
    <a
      class="${buttonClasses}"
      data-ng-href="{{::$ctrl.href}}">
      <span data-ng-bind="::$ctrl.text"></span>
      ${external ? '<i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>' : ''}
    </a>
  </li>`

const buttonTemplate = dividerClass => `
  <li class="${baseClass} ${dividerClass}">
    <button
      class="${buttonClasses}"
      type="button"
      data-ng-click="$ctrl.onClick()"
      data-ng-bind="::$ctrl.text"></button>
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
      external: '@?',
      text: '@'
    },
    link: (scope, element, attrs, ctrl) => {
      let compiled

      const dividerClassName = ctrl.divider ? dividerClass : ''

      if (attrs.onClick) {
        compiled = $compile(buttonTemplate(dividerClassName))
      } else {
        compiled = $compile(linkTemplate(dividerClassName, ctrl.external))
      }

      element.replaceWith(compiled(scope))
    }
  }
}
