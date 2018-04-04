import mockData from "./index.spec.data.json";

describe("ouiCriteriaAdder", () => {
    let $timeout;
    let testUtils;

    beforeEach(angular.mock.module("oui.criteria-adder"));
    beforeEach(angular.mock.module("oui.dropdown"));
    beforeEach(angular.mock.module("oui.field"));
    beforeEach(angular.mock.module("oui.select"));
    beforeEach(angular.mock.module("oui.criteria-container"));
    beforeEach(angular.mock.module("oui.test-utils"));
    beforeEach(angular.mock.module("test.configuration"));

    beforeEach(inject((_$timeout_, _TestUtils_) => {
        $timeout = _$timeout_;
        testUtils = _TestUtils_;
    }));

    describe("Provider", () => {
        let configuration;

        angular.module("test.configuration", [
            "oui.criteria-adder"
        ]).config(ouiCriteriaAdderConfigurationProvider => {
            const operatorsByType = ouiCriteriaAdderConfigurationProvider.operatorsByType;
            operatorsByType.foo = ["bar"];
            ouiCriteriaAdderConfigurationProvider.setOperatorsByType(operatorsByType);

            const translations = ouiCriteriaAdderConfigurationProvider.translations;
            translations.foo = "bar";
            ouiCriteriaAdderConfigurationProvider.setTranslations(translations);
        });

        beforeEach(inject(_ouiCriteriaAdderConfiguration_ => {
            configuration = _ouiCriteriaAdderConfiguration_;
        }));

        it("should have custom values", () => {
            expect(configuration.operatorsByType.foo[0]).toEqual("bar");
            expect(configuration.translations.foo).toEqual("bar");
        });
    });

    describe("Component", () => {
        let component;
        let controller;
        let onSubmitSpy;

        beforeEach(() => {
            onSubmitSpy = jasmine.createSpy("onSubmitSpy");
            component = testUtils.compileTemplate(`
                <oui-criteria-adder
                    id="foo"
                    name="bar"
                    properties="$ctrl.properties"
                    on-submit="$ctrl.onSubmitSpy(modelValue)">
                </oui-criteria-adder>
            `, {
                properties: mockData.properties,
                onSubmitSpy
            });

            controller = component.controller("ouiCriteriaAdder");
        });

        it("should display a dropdown of a form with multiple fields and a submit button", () => {
            const form = component.find("form");
            const triggerButton = component[0].querySelectorAll(".oui-button_small-width");
            const submitButton = component[0].querySelectorAll("[type=submit]");
            const dropdown = component.find("oui-dropdown");
            const fields = component.find("oui-field");

            expect(form.length).toBe(1);
            expect(triggerButton.length).toBe(1);
            expect(submitButton.length).toBe(1);
            expect(angular.element(triggerButton).attr("oui-dropdown-trigger")).toBeDefined();
            expect(dropdown.length).toBe(1);
            expect(fields.length).toBe(3);
        });

        it("should have an attribute id and name on the form and every inputs/selectors, and removed on the root component", () => {
            const form = component.find("form");
            const selectors = component.find("oui-select");
            const inputs = angular.element(component[0].querySelectorAll(".oui-input"));

            $timeout.flush();

            expect(component.attr("id")).toBe(undefined);
            expect(form.attr("id")).toBe("foo");

            expect(component.attr("name")).toBe(undefined);
            expect(form.attr("name")).toBe("bar");

            angular.forEach(selectors, (selector) => {
                expect(angular.element(selector).attr("id")).toContain("foo");
            });

            angular.forEach(inputs, (input) => {
                expect(angular.element(input).attr("id")).toContain("foo");
                expect(angular.element(input).attr("name")).toContain("bar");
            });
        });

        it("should reset value of second field when first is changed", () => {
            expect(controller.columnModel).toEqual(mockData.properties[0]);
            expect(controller.operatorModel.name).toEqual("contains");

            // Change model
            // Select a column of type "number"
            controller.columnModel = mockData.properties[1];
            controller.onColumnChange();

            expect(controller.operatorModel.name).toEqual("is");
        });

        describe("Column type = string", () => {
            it("should call function of onSubmit attribute, when form is submitted, with the model value", () => {
                const propertyMeta = mockData.properties[0];
                const value = "bar";

                // Initial condition
                expect(propertyMeta.type).toEqual("string");

                controller.valueModel.string = value;

                // Then submit
                component.find("form").triggerHandler("submit");
                expect(onSubmitSpy).toHaveBeenCalledWith({
                    title: `${propertyMeta.title} contains ${value}`,
                    property: propertyMeta.name,
                    operator: "contains",
                    value
                });
            });
        });

        describe("Column type = number", () => {
            it("should call function of onSubmit attribute, when form is submitted, with the model value", () => {
                const propertyMeta = mockData.properties[1];
                const value = 12;

                // Initial condition
                expect(propertyMeta.type).toEqual("number");

                // Change column
                controller.columnModel = propertyMeta;
                controller.onColumnChange();

                controller.valueModel.number = value;

                // Then submit
                component.find("form").triggerHandler("submit");
                expect(onSubmitSpy).toHaveBeenCalledWith({
                    title: `${propertyMeta.title} is ${value}`,
                    property: propertyMeta.name,
                    operator: "is",
                    value
                });
            });
        });

        describe("Column type = boolean", () => {
            let configuration;

            beforeEach(inject(_ouiCriteriaAdderConfiguration_ => {
                configuration = _ouiCriteriaAdderConfiguration_;
            }));

            it("should call function of onSubmit attribute, when form is submitted, with the model value", () => {
                const propertyMeta = mockData.properties[2];
                const value = {
                    name: configuration.translations.true_label,
                    value: true
                };

                // Initial condition
                expect(propertyMeta.type).toEqual("boolean");

                // Change column
                controller.columnModel = propertyMeta;
                controller.onColumnChange();

                controller.valueModel.boolean = value;

                // Then submit
                component.find("form").triggerHandler("submit");
                expect(onSubmitSpy).toHaveBeenCalledWith({
                    title: `${propertyMeta.title} is ${configuration.translations.true_label}`,
                    property: propertyMeta.name,
                    operator: "is",
                    value: value.value
                });
            });

            it("should use a custom label", () => {
                const propertyMeta = mockData.properties[3];
                const value = {
                    name: propertyMeta.typeOptions.trueValue,
                    value: true
                };

                // Initial condition
                expect(propertyMeta.type).toEqual("boolean");

                // Change column
                controller.columnModel = propertyMeta;
                controller.onColumnChange();

                controller.valueModel.boolean = value;

                // Then submit
                component.find("form").triggerHandler("submit");
                expect(onSubmitSpy).toHaveBeenCalledWith({
                    title: `${propertyMeta.title} is ${propertyMeta.typeOptions.trueValue}`,
                    property: propertyMeta.name,
                    operator: "is",
                    value: value.value
                });
            });
        });

        describe("Column type = options", () => {
            it("should call function of onSubmit attribute, when form is submitted, with the model value", () => {
                const propertyMeta = mockData.properties[4];
                const value = {
                    name: propertyMeta.typeOptions.values.bar,
                    value: "bar"
                };

                // Initial condition
                expect(propertyMeta.type).toEqual("options");

                // Change column
                controller.columnModel = propertyMeta;
                controller.onColumnChange();

                controller.valueModel.options = value;

                // Then submit
                component.find("form").triggerHandler("submit");
                expect(onSubmitSpy).toHaveBeenCalledWith({
                    title: `${propertyMeta.title} is ${value.name}`,
                    property: propertyMeta.name,
                    operator: "is",
                    value: value.value
                });
            });
        });

        describe("With criteria container", () => {
            it("should add criterion in criteria container", () => {
                const onChangeSpy = jasmine.createSpy();
                component = testUtils.compileTemplate(`
                    <oui-criteria-container on-change="$ctrl.onChangeSpy(modelValue)">
                        <oui-criteria-adder
                            id="foo"
                            name="bar"
                            properties="$ctrl.properties">
                        </oui-criteria-adder>
                    </oui-criteria-container>
                `, {
                    properties: mockData.properties,
                    onChangeSpy
                });
                const criteriaAdderController = component.find("oui-criteria-adder")
                    .controller("ouiCriteriaAdder");

                const propertyMeta = mockData.properties[0];
                const value = "bar";

                // Initial condition
                expect(propertyMeta.type).toEqual("string");

                criteriaAdderController.valueModel.string = value;

                // Then submit
                component.find("form").triggerHandler("submit");
                expect(onChangeSpy).toHaveBeenCalledWith([{
                    title: `${propertyMeta.title} contains ${value}`,
                    property: propertyMeta.name,
                    operator: "contains",
                    value
                }]);
            });
        });
    });
});
