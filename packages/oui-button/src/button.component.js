import template from './button.html'
import controller from './button.controller'

export default {
  bindings: {
    text: '@',
    id: '@?',
    name: '@?',
    type: '@?', // values: submit|button|reset (default: button)
    variant: '@?', // values: primary|secondary|link (default: secondary)
    variantNav: '@?', // values: previous|next

    disabled: '<?',

    onClick: '&?'
  },
  controller,
  template
}
