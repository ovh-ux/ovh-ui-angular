import _ from 'lodash'

export default class {
  constructor ($attrs, $element, $log) {
    'ngInject'

    this.$attrs = $attrs
    this.$element = $element
    this.$log = $log
  }

  $onInit () {
    this.createOrAttrs(['primary', 'secondary', 'link'], 'secondary') // Modifiers
    this.createOrAttrs(['nextStep', 'previousStep']) // Steps
    this.createAttrWithOrValues('type', ['submit', 'reset'], 'button') // Type

    // Support presence of attribute 'disabled' with no value
    if (this.$attrs.hasOwnProperty('disabled') && this.$attrs.disabled === '') {
      this.disabled = true
    }
  }

  $postLink () {
    // Remove ID and Name to avoid duplicate
    this.$element.removeAttr('id')
    this.$element.removeAttr('name')
  }

  // TODO: Put in a common service
  createOrAttrs (attrsName, defaultAttr) {
    // Check presence of attributes
    _.forEach(attrsName, (attrName) => {
      this[attrName] = this.$attrs.hasOwnProperty(attrName)
    })

    const sum = _.sum(_.values(_.pick(this, attrsName)))

    // Check unauthorized multiple declaration of attributes
    if (sum > 1) {
      const formattedAttrs = _.map(attrsName, (attrName) => _.kebabCase(attrName)).join('|')

      this.$log.warn(`Unauthorized multiple declaration of attributes (${formattedAttrs})`)
    }

    // Set default attribute, if no declaration of attributes
    if (defaultAttr && sum === 0) {
      this[defaultAttr] = true
    }
  }

  // TODO: Put in a common service
  createAttrWithOrValues (attrName, attrValues, defaultValue) {
    if (_.indexOf(attrValues, this[attrName]) === -1) {
      this[attrName] = defaultValue
    }
  }
}
