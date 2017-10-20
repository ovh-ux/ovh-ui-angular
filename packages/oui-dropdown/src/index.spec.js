describe('ouiDropdown', () => {
  let TestUtils
  let $document

  beforeEach(angular.mock.module('oui.dropdown'))
  beforeEach(angular.mock.module('oui.test-utils'))

  beforeEach(inject((_TestUtils_, _$document_) => {
    TestUtils = _TestUtils_
    $document = _$document_
  }))

  describe('Component', () => {
    it('should have trigger and dropdown elements but no arrow', () => {
      const element = TestUtils.compileTemplate(`
        <oui-dropdown>
          <button class="oui-button" oui-dropdown-trigger></button>
          <div oui-dropdown-content>
            <b>the menu</b>
          </div>
        </oui-dropdown>`)

      const trigger = element[0].querySelector('[oui-dropdown-trigger]')
      const dropdown = element[0].querySelector('[oui-dropdown-content]').parentNode
      const arrow = element[0].querySelector('.oui-dropdown__arrow')

      expect(angular.element(trigger)
        .hasClass('oui-dropdown__trigger')).toBeTruthy()
      expect(angular.element(dropdown)
        .hasClass('oui-dropdown__menu')).toBeTruthy()
      expect(arrow).toBeFalsy()
    })

    it('should have arrow element', () => {
      const element = TestUtils.compileTemplate(`
        <oui-dropdown display-arrow="true">
          <button class="oui-button" oui-dropdown-trigger></button>
          <div oui-dropdown-content>
            <b>the menu</b>
          </div>
        </oui-dropdown>`)

      const dropdown = element[0].querySelector('[oui-dropdown-content]').parentNode
      const $dropdown = angular.element(dropdown)
      const arrow = element[0].querySelector('.oui-dropdown__arrow')

      expect(arrow).toBeTruthy()
      expect($dropdown.hasClass('oui-dropdown__menu_arrow')).toBeTruthy()
    })

    describe('Events', () => {
      it('should not be visible', () => {
        const element = TestUtils.compileTemplate(`
          <oui-dropdown>
            <button class="oui-button" oui-dropdown-trigger></button>
            <div oui-dropdown-content>
              <b>the menu</b>
            </div>
          </oui-dropdown>`)

        const dropdown = element[0].querySelector('[oui-dropdown-content]').parentNode
        const $dropdown = angular.element(dropdown)

        expect($dropdown.hasClass('oui-dropdown__menu_active')).toBeFalsy()
      })

      it('should display and hide dropdown on click', () => {
        const element = TestUtils.compileTemplate(`
          <oui-dropdown>
            <button class="oui-button" oui-dropdown-trigger></button>
            <div oui-dropdown-content>
              <b>the menu</b>
            </div>
          </oui-dropdown>`)

        const trigger = element[0].querySelector('[oui-dropdown-trigger]')
        const $trigger = angular.element(trigger)
        const dropdown = element[0].querySelector('[oui-dropdown-content]').parentNode
        const $dropdown = angular.element(dropdown)

        expect($dropdown.hasClass('oui-dropdown__menu_active')).toBeFalsy()
        $trigger.triggerHandler('click')
        expect($dropdown.hasClass('oui-dropdown__menu_active')).toBeTruthy()
        $trigger.triggerHandler('click')
        expect($dropdown.hasClass('oui-dropdown__menu_active')).toBeFalsy()
        $trigger.triggerHandler('click')
        expect($dropdown.hasClass('oui-dropdown__menu_active')).toBeTruthy()
        $document.triggerHandler('click')
        expect($dropdown.hasClass('oui-dropdown__menu_active')).toBeFalsy()
      })
    })
  })
})
