import _ from 'lodash'

// By design, value is restricted to [0, 99999] interval
const MIN_VALUE = 0
const MAX_VALUE = 99999

export default class {
  constructor ($element, $log) {
    'ngInject'

    this.$element = $element
    this.$log = $log
  }

  $postLink () {
    this.$element.removeAttr('id')
    this.$element.removeAttr('name')
  }

  $onInit () {
    if (!this.id) {
      this.$log.warn(`Missing required attribute id`)
    }

    if (!this.text) {
      this.$log.warn(`Missing required attribute text`)
    }

    if (!angular.isNumber(this.min)) {
      if (angular.isDefined(this.min)) {
        this.$log.warn(`Invalid attribute min, expected number got '${this.min}'`)
      }
      this.min = MIN_VALUE
    }

    if (!angular.isNumber(this.max)) {
      if (angular.isDefined(this.max)) {
        this.$log.warn(`Invalid attribute max, expected number got '${this.max}'`)
      }
      this.max = MAX_VALUE
    }

    if (!angular.isNumber(this.model)) {
      if (angular.isDefined(this.model)) {
        this.$log.warn(`Invalid attribute model, expected number got '${this.model}'`)
      }
      // if model is undefined, initialize it with min value
      this.setModelValue(this.min)
    }

    if (this.min < MIN_VALUE) {
      this.$log.warn(`Invalid attribute min, value should be greater than '${MIN_VALUE}'`)
    }

    if (this.max < MAX_VALUE) {
      this.$log.warn(`Invalid attribute max, value should be lower than '${MAX_VALUE}'`)
    }

    this.min = _.clamp(this.min, MIN_VALUE, MAX_VALUE)
    this.max = _.clamp(this.max, MIN_VALUE, MAX_VALUE)

    // displayed model value in input
    // note: we dont bind input to model directly so we have
    // more control in ng-change to valides user input
    this.editableValue = this.model
  }

  setModelValue (value) {
    let oldValue = this.model

    // updates model and editable value (displayed model in input)
    this.model = value
    this.editableValue = value

    // only trigger onChange if model value changed
    if (oldValue !== this.model && angular.isFunction(this.onChange)) {
      this.onChange({
        $event: {
          value: this.model
        }
      })
    }
  }

  increment () {
    if (angular.isNumber(this.model)) {
      this.setModelValue(this.model + 1)
    } else {
      this.setModelValue(this.min)
    }
  }

  decrement () {
    if (angular.isNumber(this.model)) {
      this.setModelValue(this.model - 1)
    } else {
      this.setModelValue(this.min)
    }
  }

  onInputChanged () {
    // if user clears input, set value to lower bound
    if (this.editableValue === null) {
      this.setModelValue(this.min)
    // if user input is not valid, ignore it and reset displayed value
    } else if (!angular.isNumber(this.editableValue) ||
               this.editableValue < this.min ||
               this.editableValue > this.max) {
      this.editableValue = this.model
    } else {
      this.setModelValue(this.editableValue)
    }
  }
}
