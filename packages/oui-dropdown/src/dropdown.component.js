import controller from './dropdown.controller'
import template from './dropdown.html'

export default {
  template,
  controller,
  bindings: {
    arrow: '<?',
    align: '@?'
  },
  transclude: true
}
