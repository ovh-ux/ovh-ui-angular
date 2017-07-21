import template from './checkbox.html'
import controller from './checkbox.controller'

export default {
  template,
  controller,
  bindings: {
    label: '@?',
    description: '@?',
    name: '@?',
    onChange: '&?',
    checked: '<?',
    disabled: '<?'
  },
  transclude: {
    label: '?ouiCheckboxLabel',
    description: '?ouiCheckboxDescription'
  }
}
