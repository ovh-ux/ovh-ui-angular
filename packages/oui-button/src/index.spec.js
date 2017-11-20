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

    it('should display a button with value of attribute text, and is type="button" by default', () => {
      let element = angular.element('<oui-button text="foo"></oui-button>')
      let scope = $rootScope.$new()

      $compile(element)(scope)
      scope.$digest()

      let button = element.find('button').eq(0)
      expect(button.text().trim()).toBe('foo')
      expect(button.attr('type')).toBe('button')
    })

    it('should have an attribute id and name on the button, and removed on the root component', () => {
      let element = angular.element('<oui-button id="foo" name="bar"></oui-button>')
      let scope = $rootScope.$new()

      $compile(element)(scope)
      scope.$digest()

      let button = element.find('button').eq(0)
      expect(element.attr('id')).toBe(undefined)
      expect(button.attr('id')).toBe('foo')

      expect(element.attr('name')).toBe(undefined)
      expect(button.attr('name')).toBe('bar')
    })

    it('should have an attribute aria-label on the button, and removed on the root component', () => {
      let element = angular.element('<oui-button aria-label="foo"></oui-button>')
      let scope = $rootScope.$new()

      $compile(element)(scope)
      scope.$digest()

      expect(element.attr('aria-label')).toBe(undefined)
      expect(element.find('button').eq(0).attr('aria-label')).toBe('foo')
    })

    it('should have a primary next step button', () => {
      let element = angular.element('<oui-button text="foo" variant="primary" variant-nav="next"></oui-button>')
      let scope = $rootScope.$new()

      $compile(element)(scope)
      scope.$digest()

      let button = element.find('button').eq(0)
      expect(button.hasClass('oui-button_primary')).toBe(true)
      expect(button.hasClass('oui-button_icon-right')).toBe(true)
    })

    it('should have a disabled submit button', () => {
      let element = angular.element('<oui-button text="foo" type="submit" disabled></oui-button>')
      let scope = $rootScope.$new()

      $compile(element)(scope)
      scope.$digest()

      let button = element.find('button').eq(0)
      expect(button.attr('disabled')).toBe('disabled')
      expect(button.attr('type')).toBe('submit')
    })

    it('should call function of onClick attribute, when button is clicked', () => {
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
