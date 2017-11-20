import { addBooleanParameter } from '@oui-angular/common/component-utils'

const baseClass = 'oui-action-menu'

export default class {
  constructor ($attrs) {
    'ngInject'

    this.$attrs = $attrs
  }

  $onInit () {
    this.baseClass = baseClass
    addBooleanParameter(this, 'compact')
  }
}
