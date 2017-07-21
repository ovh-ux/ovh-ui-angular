import {
  isUndefined
} from 'lodash'

const requiredListenerMethods = [
  'onMessage'
]

export default class {
  constructor () {
    'ngInject'

    this._listeners = []
  }

  isValidListenerInterface (listener) {
    return requiredListenerMethods.every((requiredListenerMethod) =>
      !isUndefined(listener[requiredListenerMethod])
    )
  }

  register (listener) {
    if (!this.isValidListenerInterface(listener)) {
      throw new Error('The registered object does not follow the expected interface.')
    }

    this._listeners.push(listener)
  }

  unregister (listener) {
    this._listeners.splice(this._listeners.indexOf(listener), 1)
  }

  dispatch (namespace, message) {
    let filteredListeners

    if (isUndefined(message)) {
      message = namespace
      namespace = undefined
    }

    if (!namespace) {
      filteredListeners = this._listeners
    } else {
      filteredListeners = this._listeners.filter((listener) =>
        !listener.namespace || listener.namespace === namespace)
    }

    filteredListeners.forEach((listener) => listener.onMessage(message))
  }
}
