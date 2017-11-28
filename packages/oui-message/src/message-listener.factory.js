export class OuiMessageListener {
    constructor (OuiMessageDispatcher, namespace) {
        this.OuiMessageDispatcher = OuiMessageDispatcher;
        this.namespace = namespace;
    }

    unregister () {
        this.OuiMessageDispatcher.unregister(this);
    }
}

export class OuiLastMessageListener extends OuiMessageListener {
    constructor (OuiMessageDispatcher, namespace) {
        super(OuiMessageDispatcher, namespace);

        this.hasMessage = false;
        this.lastMessage = null;
    }

    onMessage (message) {
        this.hasMessage = true;
        this.lastMessage = message;
    }
}

export class OuiMessageListenerFactory {
    constructor (OuiMessageDispatcher) {
        "ngInject";

        this.OuiMessageDispatcher = OuiMessageDispatcher;
    }

    createLastMessageListener (namespace) {
        const listener = new OuiLastMessageListener(this.OuiMessageDispatcher, namespace);

        this.OuiMessageDispatcher.register(listener);

        return listener;
    }
}
