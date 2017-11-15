import _ from 'lodash'

export default class {
  constructor ($attrs, $element, $log) {
    'ngInject'

    this.$attrs = $attrs
    this.$element = $element
    this.$log = $log
  }

  $onInit () {
    this.checkModifiers()
    this.checkSteps()
    this.checkType()
  }

  $postLink () {
    // Remove ID and Name to avoid duplicate
    this.$element.removeAttr('id')
    this.$element.removeAttr('name')
  }

  // Check presence of attributes for modifiers
  checkModifiers () {
    this.primary = this.$attrs.hasOwnProperty('primary')
    this.secondary = this.$attrs.hasOwnProperty('secondary')
    this.link = this.$attrs.hasOwnProperty('link')

    // Warning for multiple declaration
    this.checkAttrs([
      this.primary,
      this.secondary,
      this.link
    ], 'primary|secondary|link')

    // Default modifier style
    if (!this.primary && !this.secondary && !this.link) {
      this.secondary = true
    }
  }

  // Check presence of attributes for steps
  checkSteps () {
    this.nextStep = this.$attrs.hasOwnProperty('nextStep')
    this.previousStep = this.$attrs.hasOwnProperty('previousStep')

    // Warning for multiple declaration
    this.checkAttrs([
      this.nextStep,
      this.previousStep
    ], 'next-step|previous-step')
  }

  // Check type for button (default is 'button')
  checkType () {
    const types = ['submit', 'reset']
    if (_.indexOf(types, this.type) !== -1) {
      this.type = 'button'
    }
  }

  // Check unauthorized multiple declaration of attributes
  checkAttrs (attrs, values) {
    if (_.sum(attrs) > 1) {
      this.$log.warn(`Unauthorized multiple declaration of attributes (${values})`)
    }
  }
}
