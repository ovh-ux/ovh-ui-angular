describe('OuiMessageListenerFactory: ', () => {
  beforeEach(angular.mock.module('oui.message'))

  beforeEach(inject((OuiMessageDispatcher) => {
    spyOn(OuiMessageDispatcher, 'register')
  }))

  describe('createListener method', () => {
    it('registers the newly created listener to OuiMessageDispatcher service',
      inject((OuiMessageListenerFactory, OuiMessageDispatcher) => {
        let listener = OuiMessageListenerFactory.createLastMessageListener()

        expect(OuiMessageDispatcher.register).toHaveBeenCalledWith(listener)
      })
    )

    it('adds the namespace to the listener',
      inject((OuiMessageListenerFactory, OuiMessageDispatcher) => {
        let listener = OuiMessageListenerFactory.createLastMessageListener('fakeNamespace')

        expect(listener.namespace).toBe('fakeNamespace')
      })
    )
  })
})

describe('OuiLastMessageListener: ', () => {
  beforeEach(angular.mock.module('oui.message'))

  beforeEach(inject((OuiMessageDispatcher) => {
    spyOn(OuiMessageDispatcher, 'unregister')
  }))

  describe('on initialization', () => {
    it('sets hasMessage to false', inject((OuiMessageListenerFactory) => {
      let listener = OuiMessageListenerFactory.createLastMessageListener()

      expect(listener.hasMessage).toBe(false)
    }))

    it('sets lastMessage to null', inject((OuiMessageListenerFactory) => {
      let listener = OuiMessageListenerFactory.createLastMessageListener()

      expect(listener.lastMessage).toBe(null)
    }))
  })

  describe('when a message is dispatched', () => {
    it('sets hasMessage to true', inject((OuiMessageListenerFactory) => {
      let listener = OuiMessageListenerFactory.createLastMessageListener()

      listener.onMessage('test')

      expect(listener.hasMessage).toBe(true)
    }))

    it('stores the message in lastMessage', inject((OuiMessageListenerFactory) => {
      let listener = OuiMessageListenerFactory.createLastMessageListener()

      listener.onMessage('test')

      expect(listener.lastMessage).toBe('test')
    }))
  })

  describe('unregister method', () => {
    it('unregisters from OuiMessageDispatcher service',
      inject((OuiMessageListenerFactory, OuiMessageDispatcher) => {
        let listener = OuiMessageListenerFactory.createLastMessageListener()

        listener.unregister()

        expect(OuiMessageDispatcher.unregister).toHaveBeenCalledWith(listener)
      })
    )
  })
})
