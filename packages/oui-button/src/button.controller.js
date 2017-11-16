export default class {
  constructor ($attrs, $element) {
    'ngInject'

    this.$attrs = $attrs
    this.$element = $element
  }

  $onInit () {
    if (angular.isUndefined(this.type)) {
      this.type = 'button'
    }

    if (angular.isUndefined(this.variant)) {
      this.variant = 'secondary'
    }

    this.disabled = angular.isDefined(this.$attrs.disabled) && angular.isUndefined(this.disabled)
  }

  $postLink () {
    // Remove ID and Name to avoid duplicate
    this.$element.removeAttr('id')
    this.$element.removeAttr('name')
  }
}
