import { addBooleanParameter } from '@oui-angular/common/component-utils'

export default class {
  constructor ($scope, $attrs, $transclude) {
    'ngInject'

    this.$scope = $scope
    this.$attrs = $attrs
  }

  $onInit () {
    addBooleanParameter(this, 'disabled')

    if (!this.name) {
      this.name = `oui-switch-${this.$scope.$id}`
    }
  }
}
