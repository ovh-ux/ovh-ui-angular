import controller from './action-menu-item.controller'

export default {
  controller,
  bindings: {
    onClick: '&?',
    href: '@?',
    external: '@?',
    text: '@'
  }
}
