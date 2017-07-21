import template from './radio.html'
import controller from './radio.controller'

export default {
  require: {
    group: '?^ouiRadioGroup'
  },
  template,
  controller,
  bindings: {
    label: '@?',
    value: '@',
    disabled: '<?',
    checked: '<?'
  },
  transclude: {
    label: '?ouiRadioLabel',
    description: '?ouiRadioDescription'
  }
}
