import _ from 'lodash'

export function addBooleanParameter (controller, parameterName) {
  if (_.has(controller.$attrs, parameterName) && _.isEmpty(controller.$attrs[parameterName])) {
    controller[parameterName] = true
  }
}

export default {
  addBooleanParameter
}
