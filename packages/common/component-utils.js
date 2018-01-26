export function addBooleanParameter (controller, parameterName) {
    if (angular.isDefined(controller.$attrs[parameterName]) &&
    controller.$attrs[parameterName] === "") {
        controller[parameterName] = true;
    }
}

export function addDefaultParameter (controller, parameterName, defaultValue) {
    if (!angular.isDefined(controller.$attrs[parameterName]) ||
    angular.isDefined(controller.$attrs[parameterName] &&
      controller.$attrs[parameterName].trim() === "")) {
        controller[parameterName] = defaultValue;
    }
}

export function hasAttribute (element, attributeName) {
    const attributes = [];
    Array.from(element.attributes).forEach(attribute => attributes.push(attribute.name));
    Object.keys(element.dataset).forEach(dataKey => attributes.push(dataKey));
    return attributes.indexOf(attributeName) > -1;
}

export function getAttribute (element, attributeName) {
    return element.attributes[attributeName] ? element.attributes[attributeName].value : element.dataset[attributeName];
}

export default {
    addBooleanParameter,
    addDefaultParameter
};
