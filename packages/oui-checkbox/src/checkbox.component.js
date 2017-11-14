import template from './checkbox.html'
import controller from './checkbox.controller'

export default {
  template,
  controller,
  bindings: {
    text: '@',
    id: '@?',
    name: '@?',
    model: '=?',
    onChange: '&?',
    disabled: '<?'
  }
}
