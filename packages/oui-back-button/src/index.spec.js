describe('ouiBackButton', () => {
  let $rootScope
  let $compile
  let $window

  beforeEach(angular.mock.module('oui.back-button'))

  beforeEach(inject((_$rootScope_, _$compile_, _$window_) => {
    $rootScope = _$rootScope_
    $compile = _$compile_
    $window = _$window_
    spyOn($window.history, 'back')
  }))

  const compile = (template) => {
    const element = angular.element(template)
    const scope = $rootScope.$new()
    $compile(element)(scope)
    scope.$digest()
    return element
  }

  describe('Component', () => {
    it('should display a button with a chevron left icon', () => {
      const element = compile('<oui-back-button></oui-back-button>')
      expect(element.find('button').length).toBe(1)
      expect(element.find('button').find('i').length).toBe(1)
      expect(element.find('i').hasClass('oui-icon-chevron-left')).toBe(true)
    })

    it('should have and id and name attribute, and remove it from root component', () => {
      const element = compile('<oui-back-button id="foo" name="bar"></oui-back-button>')
      expect(element.find('button').attr('id')).toBe('foo')
      expect(element.find('button').attr('name')).toBe('bar')
      expect(element.attr('id')).toBeUndefined()
      expect(element.attr('name')).toBeUndefined()
    })

    it('should have and aria-label attribute, and remove it from root component', () => {
      const element = compile('<oui-back-button aria-label="foo"></oui-back-button>')
      expect(element.find('button').attr('aria-label')).toBe('foo')
      expect(element.attr('aria-label')).toBeUndefined()
    })

    it('should go back in history when clicking button if on-click is not defined', () => {
      const element = compile('<oui-back-button></oui-back-button>')
      expect($window.history.back).not.toHaveBeenCalled()
      element.find('button').triggerHandler('click')
      expect($window.history.back).toHaveBeenCalled()
    })

    it('should call on-clicked callback when clicked and not go back in history', () => {
      const element = compile('<oui-back-button on-click="foo()"></oui-back-button>')
      const scope = element.scope()
      scope.foo = jasmine.createSpy('foo')
      expect($window.history.back).not.toHaveBeenCalled()
      expect(scope.foo).not.toHaveBeenCalled()
      element.find('button').triggerHandler('click')
      expect($window.history.back).not.toHaveBeenCalled()
      expect(scope.foo).toHaveBeenCalled()
    })
  })
})
