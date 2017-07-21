import _ from 'lodash'

export default class {
  constructor () {
    'ngInject'
  }

  $onInit () {
    this.dismissed = false
  }

  dismiss () {
    if (!_.isFunction(this.onDismiss)) {
      this.dismissed = true
    } else {
      this.onDismiss()
    }
  }
}
