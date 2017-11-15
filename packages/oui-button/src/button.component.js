import template from './button.html'
import controller from './button.controller'

export default {
  bindings: {
    text: '@',
    id: '@?',
    name: '@?',
    type: '@?',

    disabled: '<?',

    onClick: '&?'
  },
  controller,
  template
}
