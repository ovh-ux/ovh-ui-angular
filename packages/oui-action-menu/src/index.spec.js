describe('ouiActionMenu', () => {
  let TestUtils

  beforeEach(angular.mock.module('oui.action-menu'))
  beforeEach(angular.mock.module('oui.test-utils'))

  beforeEach(inject((_TestUtils_) => {
    TestUtils = _TestUtils_
  }))

  describe('Component', () => {
    it('should an action menu', () => {
      const element = TestUtils.compileTemplate(`
        <oui-action-menu>
          <oui-action-menu-item text="Action 1"></oui-action-menu-item>
        </oui-action-menu>`)

      const ulElement = element.find('ul')
      expect(ulElement).toBeTruthy()
    })

    it('should display a button item', () => {
      const element = TestUtils.compileTemplate(`
        <oui-action-menu>
          <oui-action-menu-item data-text="Action 1"
            data-on-click="clickHandler()"></oui-action-menu-item>
        </oui-action-menu>`,
        {
          clickHandler: () => {}
        })

      const buttonElement = element[0].querySelector('li button')
      expect(buttonElement).toBeTruthy()
      expect(angular.element(buttonElement).text()).toBe('Action 1')
    })

    it('should display a link item', () => {
      const element = TestUtils.compileTemplate(`
        <oui-action-menu>
          <oui-action-menu-item
            data-text="Action 1"
            data-href="http://foo.bar"></oui-action-menu-item>
        </oui-action-menu>`)

      const linkElement = element[0].querySelector('li a')
      expect(linkElement).toBeTruthy()
      expect(angular.element(linkElement).attr('href')).toBe('http://foo.bar')
    })
  })
})
