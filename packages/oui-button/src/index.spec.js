describe('ouiButton', () => {
  let $componentController
  let testUtils

  beforeEach(angular.mock.module('oui.button'))
  beforeEach(angular.mock.module('oui.test-utils'))

  beforeEach(inject((_$componentController_, _TestUtils_) => {
    $componentController = _$componentController_
    testUtils = _TestUtils_
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
    it('should display a button with value of attribute text, and is type="button" by default', () => {
      const component = testUtils.compileTemplate('<oui-button text="foo"></oui-button>')
      const button = component.find('button').eq(0)

      expect(button.text().trim()).toBe('foo')
      expect(button.attr('type')).toBe('button')
    })

    it('should have an attribute id and name on the button, and removed on the root component', () => {
      const component = testUtils.compileTemplate('<oui-button id="foo" name="bar"></oui-button>')
      const button = component.find('button').eq(0)

      expect(component.attr('id')).toBe(undefined)
      expect(button.attr('id')).toBe('foo')

      expect(element.find('button').length).toBe(1)
      expect(element.find('button').eq(0).text().trim()).toBe('foo')
    })

    it('should have an attribute id and name on the button, not the root component', () => {
      let element = angular.element('<oui-button id="foo" name="bar"></oui-button>')
      let scope = $rootScope.$new()

      expect(component.attr('aria-label')).toBe(undefined)
      expect(component.find('button').eq(0).attr('aria-label')).toBe('foo')
    })

    it('should have a primary next step button', () => {
      const component = testUtils.compileTemplate('<oui-button text="foo" variant="primary" variant-nav="next"></oui-button>')
      const button = component.find('button').eq(0)

      expect(button.hasClass('oui-button_primary')).toBe(true)
      expect(button.hasClass('oui-button_icon-right')).toBe(true)
    })

    it('should have a disabled submit button', () => {
      const component = testUtils.compileTemplate('<oui-button text="foo" type="submit" disabled></oui-button>')
      const button = component.find('button').eq(0)

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

      component.find('button').eq(0).triggerHandler('click')
      expect(component.scope().$ctrl.onClickTest).toHaveBeenCalled()
    })
  })
})
