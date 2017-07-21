import _ from 'lodash'

export default class {
  constructor ($scope, $attrs, $transclude) {
    'ngInject'

    this.$scope = $scope
    this.$attrs = $attrs
    this.$transclude = $transclude

    if (this.onChange) {
      this.onChange = this.onChange.bind(this)
    }
  }

  $onInit () {
    if (_.has(this.$attrs, 'checked') && _.isEmpty(this.$attrs.checked)) {
      this.checked = true
    }

    if (_.has(this.$attrs, 'disabled') && _.isEmpty(this.$attrs.disabled)) {
      this.disabled = true
    }

    if (!self.name) {
      this.name = `oui-checked-${this.$scope.$id}`
    }

    if (_.has(this.$attrs, 'big')) {
      this.big = true
    }

    if (_.has(this.$attrs, 'thumbnail')) {
      this.thumbnail = true
    }

    this.hasDescription = Boolean(this.$transclude.isSlotFilled('description') || this.description)
  }

  callOnChange (value) {
    if (this.onChange) {
      this.onChange({
        $event: {
          value: value
        }
      })
    }
  }
}
