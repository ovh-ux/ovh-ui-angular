describe('ouiCheckbox', () => {
  let $componentController

  beforeEach(angular.mock.module('oui.checkbox'))

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_
  }))

  describe('Controller', () => {
    it('should exist', () => {
      const ctrl = $componentController('ouiCheckbox', {
        $attrs: {},
        $transclude: {}
      })
      expect(ctrl).toBeDefined()
    })
  })

  describe('Component', () => {
    xit('should display a checkbox')
  })
})
