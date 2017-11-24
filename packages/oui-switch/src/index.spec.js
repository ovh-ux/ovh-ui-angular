describe('ouiSwitch', () => {
  let TestUtils

  beforeEach(angular.mock.module('oui.switch'))
  beforeEach(angular.mock.module('oui.test-utils'))

  beforeEach(inject((_TestUtils_) => {
    TestUtils = _TestUtils_
  }))

  describe('Component', () => {
    it('should have input with a name property', () => {
      const element = TestUtils.compileTemplate(
        '<oui-switch value="$ctrl.switchValue"></oui-switch>', {
          switchValue: true
        })

      expect(element.find('input').attr('name')).toBeDefined()
      expect(element.find('input').attr('name')).toMatch(/^oui-switch-/)
    })
  })

  describe('Controller', () => {
    it('should have value true', () => {
      const controller = TestUtils.getController(
        'ouiSwitch',
        '<oui-switch value="true"></oui-switch>'
      )
      expect(controller.value).toBe(true)
    })

    it('should have value false', () => {
      const controller = TestUtils.getController(
        'ouiSwitch',
        '<oui-switch value="false"></oui-switch>'
      )
      expect(controller.value).toBe(false)
    })

    it('should be disabled', () => {
      const controller = TestUtils.getController(
        'ouiSwitch',
        '<oui-switch value="false" disabled></oui-switch>'
      )
      expect(controller.disabled).toBe(true)
    })

    it('should define a default id on input', () => {
      const controller = TestUtils.getController(
        'ouiSwitch',
        '<oui-switch value="true"></oui-switch>'
      )
      expect(controller.name).toMatch(/^oui-switch-/)
    })

    it('should define an id based on the name attribute', () => {
      const controller = TestUtils.getController(
        'ouiSwitch',
        '<oui-switch value="true" name="theName"></oui-switch>'
      )
      expect(controller.name).toEqual('theName')
    })

    it('should have correct binding', () => {
      const element = TestUtils.compileTemplate(
        '<oui-switch value="$ctrl.switchValue"></oui-switch>', {
          switchValue: true
        })
      const scope = element.scope()

      expect(element.controller('ouiSwitch').value).toBe(true)

      scope.$ctrl.switchValue = false
      scope.$digest()
      expect(element.controller('ouiSwitch').value).toBe(false)
    })

    it('should react to input value change', () => {
      const context = {
        switchValue: false,
        changeHandler: function () {}
      }
      const element = TestUtils.compileTemplate(
        `<oui-switch value="$ctrl.switchValue"
          on-change="$ctrl.changeHandler($event.value)"></oui-switch>`,
        context)
      const scope = element.scope()

      expect(element.controller('ouiSwitch').value).toBe(false)

      spyOn(scope.$ctrl, 'changeHandler')
      element.find('input').controller('ngModel').$setViewValue(true, true)
      expect(scope.$ctrl.changeHandler).toHaveBeenCalledWith(true)
    })
  })
})
