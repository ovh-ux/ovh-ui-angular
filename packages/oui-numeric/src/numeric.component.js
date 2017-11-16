import template from './numeric.html'
import controller from './numeric.controller'

export default {
  template,
  controller,
  bindings: {
    id: '@',
    name: '@?',
    text: '@',
    unit: '@?',
    model: '=',
    min: '<?',
    max: '<?',
    onChange: '&?'
  }
}
