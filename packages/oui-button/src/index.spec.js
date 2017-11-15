describe('ouiRadio', () => {
  let $componentController

  beforeEach(angular.mock.module('oui.radio'))

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_
  }))

  describe('Controller', () => {
    it('should exist', () => {
      const ctrl = $componentController('ouiRadio', {
        $element: {},
        $attrs: {},
        $transclude: {}
      })
      expect(ctrl).toBeDefined()
    })
  })

  describe('Component', () => {
    xit('should display a radio')
  })
})
