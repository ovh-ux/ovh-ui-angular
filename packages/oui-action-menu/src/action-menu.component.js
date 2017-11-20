import template from './action-menu.html'
import controller from './action-menu.controller.js'

export default {
  template,
  controller,
  bindings: {
    align: '@',
    text: '@',
    compact: '<?'
  },
  transclude: true
}
