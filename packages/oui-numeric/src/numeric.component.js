import template from './numeric.html'
import controller from './numeric.controller'

export default {
  template,
  controller,
  bindings: {
    id: '@?',
    name: '@?',
    model: '=',
    min: '<?',
    max: '<?',
    disabled: '<?',
    onChange: '&?'
  }
}
