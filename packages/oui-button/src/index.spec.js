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
    xit('should display a button')
  })
})
