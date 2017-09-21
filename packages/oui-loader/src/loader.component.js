import template from './loader.html'
import controller from './loader.controller'

export default {
  template,
  controller,
  bindings: {
    inline: '<?',
    size: '@?'
  }
}
