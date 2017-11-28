describe("ouiCheckbox", () => {
    let $rootScope;
    let $compile;

    beforeEach(angular.mock.module("oui.checkbox"));

    beforeEach(inject((_$rootScope_, _$compile_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    function compileTemplate (template, context = {}) {
        const scope = $rootScope.$new(true);
        angular.merge(scope, { $ctrl: context });
        const element = $compile(template)(scope);
        scope.$digest();
        return element;
    }

    function getComponentController (element) {
        return angular.element(element).scope().$ctrl;
    }

    function getCheckboxInputElement (element) {
        return element[0].querySelector("input[type=checkbox]");
    }

    function getCheckboxLabelElement (element) {
        return element[0].querySelector("label");
    }

    function getCheckboxTextContainerElement (element) {
        return element[0].querySelector(".oui-checkbox__label");
    }

    describe("Component", () => {
        describe("id attribute", () => {
            it("should generate an id for the input and label when undefined", () => {
                const element = compileTemplate("<oui-checkbox></oui-checkbox>");

                const checkboxElement = getCheckboxInputElement(element);
                expect(angular.element(checkboxElement).prop("id")).toMatch(/^oui-checkbox-\d+$/);

                const checkboxLabelElement = getCheckboxLabelElement(element);
                expect(angular.element(checkboxLabelElement).attr("for")).toMatch(/^oui-checkbox-\d+$/);
            });

            it("should set the id for the input and label when defined", () => {
                const element = compileTemplate("<oui-checkbox data-id=\"test\"></oui-checkbox>");

                const checkboxElement = getCheckboxInputElement(element);
                expect(angular.element(checkboxElement).prop("id")).toBe("test");

                const checkboxLabelElement = getCheckboxLabelElement(element);
                expect(angular.element(checkboxLabelElement).attr("for")).toBe("test");
            });
        });

        describe("name attribute", () => {
            it("should set the name attribute on input when defined", () => {
                const element = compileTemplate("<oui-checkbox data-name=\"test\"></oui-checkbox>");

                const checkboxElement = getCheckboxInputElement(element);
                expect(angular.element(checkboxElement).prop("name")).toBe("test");
            });
        });

        describe("text attribute", () => {
            it("should display a text inside the checkbox's text container", () => {
                const element = compileTemplate("<oui-checkbox data-text=\"test\"></oui-checkbox>");

                const textContainerCheckboxElement = getCheckboxTextContainerElement(element);
                expect(angular.element(textContainerCheckboxElement).html()).toBe("test");
            });
        });

        describe("model attribute", () => {
            it("should display an unchecked checkbox when no model", () => {
                const element = compileTemplate("<oui-checkbox></oui-checkbox>");

                const checkboxElement = getCheckboxInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);

                expect($checkboxElement.prop("checked")).toBe(false);
                expect($checkboxElement.prop("indeterminate")).toBe(false);
            });

            it("should display a checked checkbox when true", () => {
                const element = compileTemplate("<oui-checkbox data-model=\"$ctrl.checked\"></oui-checkbox>", {
                    checked: true
                });

                const checkboxElement = getCheckboxInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);

                expect($checkboxElement.prop("checked")).toBe(true);
                expect($checkboxElement.prop("indeterminate")).toBe(false);
            });

            it("should display a an unchecked checkbox when false", () => {
                const element = compileTemplate("<oui-checkbox data-model=\"$ctrl.checked\"></oui-checkbox>", {
                    checked: false
                });

                const checkboxElement = getCheckboxInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);

                expect($checkboxElement.prop("checked")).toBe(false);
                expect($checkboxElement.prop("indeterminate")).toBe(false);
            });

            it("should display a indeterminate checkbox when null", () => {
                const element = compileTemplate("<oui-checkbox data-model=\"$ctrl.indeterminate\"></oui-checkbox>", {
                    indeterminate: null
                });

                const checkboxElement = getCheckboxInputElement(element);
                expect(angular.element(checkboxElement).prop("indeterminate")).toBe(true);
            });

            it("should be updated when clicked", () => {
                const context = {
                    currentModel: false
                };

                const element = compileTemplate("<oui-checkbox data-model=\"$ctrl.currentModel\"></oui-checkbox>", context);
                const $ctrl = getComponentController(element);

                const checkboxElement = getCheckboxInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);

                $checkboxElement.prop("checked", true);
                $checkboxElement.triggerHandler("click");

                expect($ctrl.currentModel).toBe(true);
            });
        });

        describe("disabled attribute", () => {
            it("should display an active checkbox when no attribute", () => {
                const element = compileTemplate("<oui-checkbox></oui-checkbox>");

                const checkboxElement = getCheckboxInputElement(element);
                expect(angular.element(checkboxElement).prop("disabled")).toBe(false);
            });

            it("should display a disabled checkbox when defined but no value", () => {
                const element = compileTemplate("<oui-checkbox data-disabled></oui-checkbox>");

                const checkboxElement = getCheckboxInputElement(element);
                expect(angular.element(checkboxElement).prop("disabled")).toBe(true);
            });

            it("should display a disabled checkbox when true", () => {
                const element = compileTemplate("<oui-checkbox data-disabled=\"$ctrl.disabled\"></oui-checkbox>", {
                    disabled: true
                });

                const checkboxElement = getCheckboxInputElement(element);
                expect(angular.element(checkboxElement).prop("disabled")).toBe(true);
            });

            it("should display an active checkbox when false", () => {
                const element = compileTemplate("<oui-checkbox data-disabled=\"$ctrl.notDisabled\"></oui-checkbox>", {
                    notDisabled: false
                });

                const checkboxElement = getCheckboxInputElement(element);
                expect(angular.element(checkboxElement).prop("disabled")).toBe(false);
            });
        });

        describe("on-change attribute", () => {
            it("should trigger callback when the checkbox is clicked", () => {
                const onChangeSpy = jasmine.createSpy("onChangeSpy");

                const element = compileTemplate("<oui-checkbox data-on-change=\"$ctrl.onChange(modelValue)\"></oui-checkbox>", {
                    onChange: onChangeSpy
                });

                const checkboxElement = getCheckboxInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);

                $checkboxElement.prop("checked", true);
                $checkboxElement.triggerHandler("click");

                expect(onChangeSpy).toHaveBeenCalledWith(true);
            });
        });
    });
});
