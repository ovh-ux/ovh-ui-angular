import {
    isUndefined
} from "lodash";

const requiredListenerMethods = [
    "onMessage"
];

function isValidListenerInterface (listener) {
    return requiredListenerMethods.every((requiredListenerMethod) =>
        !isUndefined(listener[requiredListenerMethod])
    );
}

export default class {
    constructor () {
        "ngInject";

        this._listeners = [];
    }

    register (listener) {
        if (!isValidListenerInterface(listener)) {
            throw new Error("The registered object does not follow the expected interface.");
        }

        this._listeners.push(listener);
    }

    unregister (listener) {
        this._listeners.splice(this._listeners.indexOf(listener), 1);
    }

    dispatch (namespace, message) {
        let filteredListeners;
        let namespaceParam = namespace;
        let messageParam = message;

        if (isUndefined(message)) {
            messageParam = namespace;
            namespaceParam = undefined;
        }

        if (!namespaceParam) {
            filteredListeners = this._listeners;
        } else {
            filteredListeners = this._listeners.filter((listener) =>
                !listener.namespace || listener.namespace === namespaceParam);
        }

        filteredListeners.forEach((listener) => listener.onMessage(messageParam));
    }
}
