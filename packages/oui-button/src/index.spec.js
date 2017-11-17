describe('ouiButton', () => {
  let $componentController

  beforeEach(angular.mock.module('oui.button'))

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_
  }))

  describe('Controller', () => {
    it('should exist', () => {
      const ctrl = $componentController('ouiButton', {
        $attrs: {},
        $element: {},
        $log: {}
      })

      expect(ctrl).toBeDefined()
    })
  })

  describe('Component', () => {
    let $rootScope
    let $compile

    beforeEach(inject((_$rootScope_, _$compile_) => {
      $rootScope = _$rootScope_
      $compile = _$compile_
    }))

    it('should display a button with value of attribute text', () => {
      let element = angular.element('<oui-button text="foo"></oui-button>')
      let scope = $rootScope.$new()

      $compile(element)(scope)
      scope.$digest()

      expect(element.find('button').length).toBe(1)
      expect(element.find('button').eq(0).text().trim()).toBe('foo')
    })

    it('should have an attribute id and name on the button, not the root component', () => {
      let element = angular.element('<oui-button id="foo" name="bar"></oui-button>')
      let scope = $rootScope.$new()

      $compile(element)(scope)
      scope.$digest()

      expect(element.attr('id')).toBe(undefined)
      expect(element.find('button').eq(0).attr('id')).toBe('foo')

      expect(element.attr('name')).toBe(undefined)
      expect(element.find('button').eq(0).attr('name')).toBe('bar')
    })

    it('should have an attribute aria-label on the button, not the root component', () => {
      let element = angular.element('<oui-button aria-label="foo"></oui-button>')
      let scope = $rootScope.$new()

      $compile(element)(scope)
      scope.$digest()

      expect(element.attr('aria-label')).toBe(undefined)
      expect(element.find('button').eq(0).attr('aria-label')).toBe('foo')
    })

    it('should have a disabled button', () => {
      let element = angular.element('<oui-button text="foo" disabled></oui-button>')
      let scope = $rootScope.$new()

      $compile(element)(scope)
      scope.$digest()

      expect(element.find('button').attr('disabled')).toBe('disabled')
    })

    it('should call function in onClick attribute, when button is clicked', () => {
      let element = angular.element('<oui-button text="foo" on-click="onClickTest()"></oui-button>')
      let scope = $rootScope.$new()

      scope.clickTest = false
      scope.onClickTest = () => {
        scope.clickTest = true
      }

      $compile(element)(scope)
      scope.$digest()

      element.find('button').eq(0).triggerHandler('click')
      expect(scope.clickTest).toBe(true)
    })
  })
})
