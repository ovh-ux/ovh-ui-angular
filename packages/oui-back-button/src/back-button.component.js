import template from './back-button.html'
import controller from './back-button.controller'

export default {
  template,
  controller,
  bindings: {
    id: '@?',
    name: '@?',
    ariaLabel: '@?',
    onClick: '&?'
  }
}
