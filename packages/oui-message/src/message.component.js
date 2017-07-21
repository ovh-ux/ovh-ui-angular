import template from './message.html'
import controller from './message.controller'

export default {
  template,
  controller,
  bindings: {
    message: '@',
    type: '@',
    dismissable: '<',
    dismissed: '<',
    onDismiss: '&'
  },
  transclude: true
}
