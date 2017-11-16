import { addBooleanParameter } from '@oui-angular/common/component-utils'
import buttomTemplate from './action-menu-item-button.html'
import linkTemplate from './action-menu-item-link.html'

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

    if (this.external) {
      this.linkTarget = '_blank'
      this.linkRel = 'noopener'
    }
  }

  $postLink () {
    let compiled

    if (this.$attrs.onClick) {
      compiled = this.$compile(buttomTemplate)
    } else {
      compiled = this.$compile(linkTemplate)
    }

    this.$element.replaceWith(compiled(this.$scope))
  }
}
