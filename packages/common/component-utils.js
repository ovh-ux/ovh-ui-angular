import _ from 'lodash'

export function addBooleanParameter (controller, parameterName) {
  if (angular.isDefined(controller.$attrs[parameterName]) &&
    !_.isBoolean(controller[parameterName])) {
    controller[parameterName] = true
  }
}

export function addDefaultParameter (controller, parameterName, defaultValue) {
  if (!angular.isDefined(controller.$attrs[parameterName]) ||
    (angular.isDefined(controller.$attrs[parameterName] &&
      controller.$attrs[parameterName].trim() === ''))) {
    controller[parameterName] = defaultValue
  }
}

export default {
  addBooleanParameter,
  addDefaultParameter
}
