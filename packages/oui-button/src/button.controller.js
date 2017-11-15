export default class {
  constructor ($attrs, $element) {
    'ngInject'

    this.$attrs = $attrs
    this.$element = $element
  }

  $onInit () {
    // Add default value for attribute 'type'
    if (angular.isUndefined(this.type)) {
      this.type = 'button'
    }

    // Add default value for attribute 'variant'
    if (angular.isUndefined(this.variant)) {
      this.variant = 'secondary'
    }

    // Support presence of attribute 'disabled'
    if (angular.isDefined(this.$attrs.disabled) && angular.isUndefined(this.disabled)) {
      this.disabled = true
    }
  }

  $postLink () {
    // Remove ID and Name to avoid duplicate
    this.$element.removeAttr('id')
    this.$element.removeAttr('name')

    // Remove accessibility attributes on the root component
    this.$element.removeAttr('aria-label')
  }
}
