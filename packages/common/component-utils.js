import _ from 'lodash'

export function addBooleanParameter (controller, parameterName) {
  if (_.has(controller.$attrs, 'disabled') && _.isEmpty(controller.$attrs.disabled)) {
    controller.disabled = true
  }
}

export default {
  addBooleanParameter
}
