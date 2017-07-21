# IOuiMessageListener

Interface that describe the required methods and properties of a message listener.

## Properties

### namespace?: string

[Optional] Gets the namespace of the message listener. If undefined, it will receive all messages of all namespaces.

## Methods

### .onMessage(message: any)

Every messages related to this listener will be passed through this method.

# OuiMessageListenerFactory

## Methods

### .createLastMessageListener(namespace?: string): IOuiMessageListener

Creates a OuiLastMessageListener instance with the passed namespace.

```javascript
  let listener = OuiMessageListenerFactory.createLastMessageListener('namespace')
```

# OuiLastMessageListener

## Properties

### hasMessage: boolean

Returns true if the listener received a message.

### lastMessage: any

Returns the last received message.

## Methods

### constructor(messageDispatcher: OuiMessageDispatcher, namespace: string)

Passes the messageDispatcher instance and the namespace to the new listener instance.
