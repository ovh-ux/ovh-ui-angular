export default class {
  constructor ($element, $window) {
    'ngInject'

    this.$element = $element
    this.$window = $window
  }

  $postLink () {
    this.$element.removeAttr('id')
    this.$element.removeAttr('name')
    this.$element.removeAttr('aria-label')
  }

  onBtnClick () {
    if (angular.isFunction(this.onClick)) {
      this.onClick()
    } else {
      this.$window.history.back()
    }
  }
}
