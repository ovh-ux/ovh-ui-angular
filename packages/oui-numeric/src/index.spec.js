describe('ouiNumeric', () => {
  let $rootScope
  let $compile

  let getDecrementBtn = elt => angular.element(elt.find('button')[0])
  let getIncrementBtn = elt => angular.element(elt.find('button')[1])
  let getInput = elt => angular.element(elt.find('input')[0])

  beforeEach(angular.mock.module('oui.numeric'))

  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_
    $compile = _$compile_
  }))

  describe('Component', () => {
    it('should display an input with two buttons', () => {
      let elt = angular.element('<oui-numeric model="foo"></oui-numeric>')
      let scope = $rootScope.$new()
      $compile(elt)(scope)
      scope.$digest()
      expect(elt.find('input').length).toBe(1)
      expect(elt.find('button').length).toBe(2)
    })

    it('should updates model when input changes', () => {
      let elt = angular.element('<oui-numeric model="foo"></oui-numeric>')
      let scope = $rootScope.$new()
      $compile(elt)(scope)
      scope.$digest()
      elt.find('input').controller('ngModel').$setViewValue('5')
      expect(scope.foo).toBe(5)
      elt.find('input').controller('ngModel').$setViewValue('1')
      expect(scope.foo).toBe(1)
    })

    it('should display model value in input', () => {
      let elt = angular.element('<oui-numeric model="foo"></oui-numeric>')
      let scope = $rootScope.$new()
      scope.foo = 25
      $compile(elt)(scope)
      scope.$digest()
      expect(elt.find('input').val()).toBe('25')
      scope.foo = 5
      scope.$digest()
      expect(elt.find('input').val()).toBe('5')
    })

    it('should not updates model when input is given invalid value', () => {
      let elt = angular.element('<oui-numeric model="foo" min="0" max="5"></oui-numeric>')
      let scope = $rootScope.$new()
      $compile(elt)(scope)
      scope.$digest()
      elt.find('input').controller('ngModel').$setViewValue('1')
      expect(scope.foo).toBe(1)
      elt.find('input').controller('ngModel').$setViewValue('hello')
      expect(scope.foo).toBe(1)
      elt.find('input').controller('ngModel').$setViewValue(3)
      expect(scope.foo).toBe(3)
      elt.find('input').controller('ngModel').$setViewValue(7)
      expect(scope.foo).toBe(3)
    })

    it('should decrement value when clicking first button', () => {
      let elt = angular.element('<oui-numeric model="foo"></oui-numeric>')
      let scope = $rootScope.$new()
      $compile(elt)(scope)
      scope.foo = 10
      scope.$digest()
      getDecrementBtn(elt).triggerHandler('click')
      expect(scope.foo).toBe(9)
    })

    it('should increment value when clicking second button', () => {
      let elt = angular.element('<oui-numeric model="foo"></oui-numeric>')
      let scope = $rootScope.$new()
      $compile(elt)(scope)
      scope.foo = 10
      scope.$digest()
      getIncrementBtn(elt).triggerHandler('click')
      expect(scope.foo).toBe(11)
    })

    it('should disable left button is value is lower or equal to min', () => {
      let elt = angular.element('<oui-numeric model="foo" min="3"></oui-numeric>')
      let scope = $rootScope.$new()
      $compile(elt)(scope)
      scope.foo = 5
      scope.$digest()
      expect(getDecrementBtn(elt).attr('disabled')).not.toBeDefined()
      scope.foo = 3
      scope.$digest()
      expect(getDecrementBtn(elt).attr('disabled')).toBeDefined()
      scope.foo = 1
      scope.$digest()
      expect(getDecrementBtn(elt).attr('disabled')).toBeDefined()
    })

    it('should disable right button is value is greater or equal to max', () => {
      let elt = angular.element('<oui-numeric model="foo" max="5"></oui-numeric>')
      let scope = $rootScope.$new()
      $compile(elt)(scope)
      scope.foo = 3
      scope.$digest()
      expect(getIncrementBtn(elt).attr('disabled')).not.toBeDefined()
      scope.foo = 5
      scope.$digest()
      expect(getIncrementBtn(elt).attr('disabled')).toBeDefined()
      scope.foo = 7
      scope.$digest()
      expect(getIncrementBtn(elt).attr('disabled')).toBeDefined()
    })

    it('should disable component when disabled attribut exists', () => {
      let elt = angular.element('<oui-numeric model="foo" disabled></oui-numeric>')
      let scope = $rootScope.$new()
      $compile(elt)(scope)
      scope.$digest()
      expect(getInput(elt).attr('disabled')).toBeDefined()
      expect(getDecrementBtn(elt).attr('disabled')).toBeDefined()
      expect(getIncrementBtn(elt).attr('disabled')).toBeDefined()
    })

    it('should disable component when disabled attribut is set', () => {
      let elt = angular.element('<oui-numeric model="foo" disabled="isDisabled"></oui-numeric>')
      let scope = $rootScope.$new()
      $compile(elt)(scope)
      scope.foo = 3
      scope.isDisabled = true
      scope.$digest()
      expect(getInput(elt).attr('disabled')).toBeDefined()
      expect(getDecrementBtn(elt).attr('disabled')).toBeDefined()
      expect(getIncrementBtn(elt).attr('disabled')).toBeDefined()
      scope.isDisabled = false
      scope.$digest()
      expect(getInput(elt).attr('disabled')).not.toBeDefined()
      expect(getDecrementBtn(elt).attr('disabled')).not.toBeDefined()
      expect(getIncrementBtn(elt).attr('disabled')).not.toBeDefined()
    })

    it('should trigger onChange callback when value changes', () => {
      let elt = angular.element('<oui-numeric model="foo" on-change="onChange(modelValue)"></oui-numeric>')
      let scope = $rootScope.$new()
      scope.foo = 5
      scope.onChange = jasmine.createSpy('onChange')
      $compile(elt)(scope)
      scope.$digest()
      elt.find('input').controller('ngModel').$setViewValue('10')
      expect(scope.onChange).toHaveBeenCalledWith(10)
    })

    it('should not trigger onChange callback when value is updated with no changes', () => {
      let elt = angular.element('<oui-numeric model="foo" on-change="onChange(modelValue)"></oui-numeric>')
      let scope = $rootScope.$new()
      scope.foo = 5
      scope.onChange = jasmine.createSpy('onChange')
      $compile(elt)(scope)
      scope.$digest()
      elt.find('input').controller('ngModel').$setViewValue('5')
      expect(scope.onChange).not.toHaveBeenCalled()
    })
  })
})
