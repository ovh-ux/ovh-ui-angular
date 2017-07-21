import Message from './message.component.js'
import OuiMessageDispatcher from './message-dispatcher.service'
import { OuiMessageListenerFactory } from './message-listener.factory'

angular.module('oui.message', [])
  .component('ouiMessage', Message)
  .service('OuiMessageDispatcher', OuiMessageDispatcher)
  .service('OuiMessageListenerFactory', OuiMessageListenerFactory)
