# OuiMessageDispatcher

Useful to send message through all the application. Messages can also be namespaced to send them to a more specific place in the application.

## Methods

### .register(listener: [IOuiMessageListener](#!/oui-angular/message-listener))

Registers a listener. When registered every messages will dispatched through this listener if namespace conditions are met.

*If the listener does not implement the required interface it will throw an error.*

```javascript
  OuiMessageDispatcher.register(myCustomListener)
```

### .unregister(listener: [IOuiMessageListener](#!/oui-angular/message-listener))

Unregisters a listener. When unregistred messages are no more dispatched through this listener.

```javascript
  OuiMessageDispatcher.unregister(myCustomListener)
```

### .dispatch(message: any)

Sends a message to everybody.

```javascript
  OuiMessageDispatcher.dispatch('my message to everybody')
```

### .dispatch(namespace: string, message:any)

Sends a message to every listeners of the same namespace and listeners not specifying a namespace.

```javascript
  OuiMessageDispatcher.dispatch('namespace', 'my message to everybody')
```

