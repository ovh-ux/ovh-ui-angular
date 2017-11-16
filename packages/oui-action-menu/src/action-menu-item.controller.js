import { addBooleanParameter } from '@oui-angular/common/component-utils'

const baseClass = 'oui-action-menu__item'
const dividerClass = 'oui-action-menu__item_divider'
const buttonClasses = 'oui-button oui-button_action-menu'

const linkTemplate = (dividerClass, external) => `
  <li class="${baseClass} ${dividerClass}">
    <a
      class="${buttonClasses}"
      data-ng-href="{{::$ctrl.href}}"${external ? ' target="_blank" rel="noopener"' : ''}>
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

export default class {
  constructor ($attrs, $compile, $element, $scope) {
    'ngInject'

    this.$attrs = $attrs
    this.$compile = $compile
    this.$element = $element
    this.$scope = $scope
  }

  $onInit () {
    addBooleanParameter(this, 'divider')
    addBooleanParameter(this, 'external')
  }

  $postLink () {
    let compiled

    const dividerClassName = this.divider ? dividerClass : ''

    if (this.$attrs.onClick) {
      compiled = this.$compile(buttonTemplate(dividerClassName))
    } else {
      compiled = this.$compile(linkTemplate(dividerClassName, this.external))
    }

    this.$element.replaceWith(compiled(this.$scope))
  }
}
