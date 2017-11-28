function getNamespaceName (namespace) {
    if (!namespace) {
        return "all namespaces";
    }

    return namespace;
}

export default class {
    constructor (OuiMessageListenerFactory, OuiMessageDispatcher) {
        "ngInject";

        this.listenerEverything = OuiMessageListenerFactory.createLastMessageListener();
        this.listenerNamespace1 = OuiMessageListenerFactory.createLastMessageListener("namespace1");
        this.listenerNamespace2 = OuiMessageListenerFactory.createLastMessageListener("namespace2");

        this.OuiMessageDispatcher = OuiMessageDispatcher;
    }

    sendMessage (type, buttonName, namespace) {
        const namespaceName = getNamespaceName(namespace);

        this.OuiMessageDispatcher.dispatch(namespace, {
            type,
            message: `You clicked on the "${buttonName}" button and it sents this message to "${namespaceName}".`
        });
    }
}
