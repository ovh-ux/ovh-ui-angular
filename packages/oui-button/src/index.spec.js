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
    let element;
    let scope;

    beforeEach(inject(($rootScope, $compile) => {
      scope = $rootScope.$new()
      element = angular.element('<oui-button type="submit" text="Lorem ipsum dolor sit amet" disabled></oui-button>')
      element = $compile(element)(scope)
      scope.$apply()
    }))

    it('should display a button', () => {
    })
  })
})
