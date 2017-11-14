class TestUtils {
  constructor ($compile, $rootScope) {
    'ngInject'

    this.$compile = $compile
    this.$rootScope = $rootScope
  }

  compileTemplate (template, context = {}) {
    const scope = this.$rootScope.$new(true)
    angular.merge(scope, { $ctrl: context })
    const element = this.$compile(template)(scope)
    scope.$digest()
    return element
  }

  getController (componentName, template, context) {
    const element = this.compileTemplate(template, context)
    return element.controller(componentName)
  }

  $ (element) {
    return angular.element(element)
  }
}

angular.module('oui.test-utils', [])
  .service('TestUtils', TestUtils)
