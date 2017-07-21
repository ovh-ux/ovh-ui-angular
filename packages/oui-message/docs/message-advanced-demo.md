# Message advanced demo

## Dispatchers

```html:preview
  <h4>Send message to:</h4>
  <h5>Any namespace</h5>
  <button class="oui-button oui-button_secondary"
          ng-click="$ctrl.sendMessage('info', 'Button 1')">
    Button 1 (info)
  </button>
  <button class="oui-button oui-button_secondary"
          ng-click="$ctrl.sendMessage('error', 'Button 2')">
    Button 2 (error)
  </button>

  <h5>namespace1</h5>
  <button class="oui-button oui-button_secondary"
          ng-click="$ctrl.sendMessage('warning', 'Button 3', 'namespace1')">
    Button 3 (warning)
  </button>
  <button class="oui-button oui-button_secondary"
          ng-click="$ctrl.sendMessage('error', 'Button 4', 'namespace1')">
    Button 4 (error)
  </button>

  <h5>namespace2</h5>
  <button class="oui-button oui-button_secondary"
          ng-click="$ctrl.sendMessage('success', 'Button 5', 'namespace2')">
    Button 5 (success)
  </button>
  <button class="oui-button oui-button_secondary"
          ng-click="$ctrl.sendMessage('error', 'Button 6', 'namespace2')">
    Button 6 (error)
  </button>
```

## Listeners

### Last message listener

```html:preview
  <h4>Last message received from:</h4>
  <h5>Any namespace</h5>
  <p ng-if="!$ctrl.listenerEverything.hasMessage">
    There is no message, click on buttons bellow to create messages.
  </p>
  <oui-message type="{{ $ctrl.listenerEverything.lastMessage.type }}"
               message="{{ $ctrl.listenerEverything.lastMessage.message }}"
               ng-if="$ctrl.listenerEverything.hasMessage">
  </oui-message>

  <h5>namespace1</h5>
  <p ng-if="!$ctrl.listenerNamespace1.hasMessage">
    There is no message, click on buttons bellow to create messages.
  </p>
  <oui-message type="{{ $ctrl.listenerNamespace1.lastMessage.type }}"
               message="{{ $ctrl.listenerNamespace1.lastMessage.message }}"
               ng-if="$ctrl.listenerNamespace1.hasMessage">
  </oui-message>

  <h5>namespace2</h5>
  <p ng-if="!$ctrl.listenerNamespace2.hasMessage">
  There is no message, click on buttons bellow to create messages.
  </p>
  <oui-message type="{{ $ctrl.listenerNamespace2.lastMessage.type }}"
               message="{{ $ctrl.listenerNamespace2.lastMessage.message }}"
               ng-if="$ctrl.listenerNamespace2.hasMessage">
  </oui-message>
```

## Controller

```javascript
  export default class {
    constructor (OuiMessageListenerFactory, OuiMessageDispatcher) {
      'ngInject'

      this.listenerEverything = OuiMessageListenerFactory.createLastMessageListener()
      this.listenerNamespace1 = OuiMessageListenerFactory.createLastMessageListener('namespace1')
      this.listenerNamespace2 = OuiMessageListenerFactory.createLastMessageListener('namespace2')

      this.OuiMessageDispatcher = OuiMessageDispatcher
    }

    sendMessage (type, buttonName, namespace) {
      let namespaceName = this.getNamespaceName(namespace)

      this.OuiMessageDispatcher.dispatch(namespace, {
        type: type,
        message: 'You clicked on the "' + buttonName + '" button and it sents this message to "' + namespaceName + '".'
      })
    }

    getNamespaceName (namespace) {
      if (!namespace) {
        return 'all namespaces'
      }

      return namespace
    }
  }
```
