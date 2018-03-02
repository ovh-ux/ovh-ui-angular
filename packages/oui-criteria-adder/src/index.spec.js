import mockData from "./index.spec.data.json";

describe("ouiCriteriaAdder", () => {
    let $timeout;
    let testUtils;

    beforeEach(angular.mock.module("oui.criteria-adder"));
    beforeEach(angular.mock.module("oui.dropdown"));
    beforeEach(angular.mock.module("oui.field"));
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
            const conditionsByType = ouiCriteriaAdderConfigurationProvider.conditionsByType;
            conditionsByType.foo = ["bar"];
            ouiCriteriaAdderConfigurationProvider.setConditionsByType(conditionsByType);

            const translations = ouiCriteriaAdderConfigurationProvider.translations;
            translations.foo = "bar";
            ouiCriteriaAdderConfigurationProvider.setTranslations(translations);
        });

        beforeEach(inject(_ouiCriteriaAdderConfiguration_ => {
            configuration = _ouiCriteriaAdderConfiguration_;
        }));

        it("should have custom values", () => {
            expect(configuration.conditionsByType.foo[0]).toEqual("bar");
            expect(configuration.translations.foo).toEqual("bar");
        });
    });

    describe("Component", () => {
        let component;
        const onSubmitSpy = jasmine.createSpy("onSubmitSpy");

        beforeEach(() => {
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
        });

        it("should display a dropdown of a form with multiple fields and a submit button", () => {
            const form = component.find("form");
            const buttons = component.find("button");
            const trigger = buttons.eq(0);
            const submit = buttons.eq(1);
            const dropdown = component.find("oui-dropdown");
            const fields = component.find("oui-field");

            expect(dropdown.length).toBe(1);
            expect(form.length).toBe(1);
            expect(fields.length).toBe(3);
            expect(buttons.length).toBe(2);
            expect(buttons.length).toBe(2);
            expect(trigger.attr("oui-dropdown-trigger")).toBeDefined();
            expect(submit.attr("type")).toBe("submit");
        });

        it("should have an attribute id and name on the form and every inputs/selectors, and removed on the root component", () => {
            const form = component.find("form");
            const selectors = component.find("select");
            const inputs = component.find("input");

            $timeout.flush();

            expect(component.attr("id")).toBe(undefined);
            expect(form.attr("id")).toBe("foo");

            expect(component.attr("name")).toBe(undefined);
            expect(form.attr("name")).toBe("bar");

            angular.forEach(selectors, (selector) => {
                expect(angular.element(selector).attr("id")).toContain("foo");
                expect(angular.element(selector).attr("name")).toContain("bar");
            });

            angular.forEach(inputs, (input) => {
                expect(angular.element(input).attr("id")).toContain("foo");
                expect(angular.element(input).attr("name")).toContain("bar");
            });
        });

        it("should reset value of second field when first is changed", () => {
            const column = angular.element(component[0].querySelector("#fooColumn"));
            const columnOptions = column.children();
            const condition = angular.element(component[0].querySelector("#fooCondition"));
            const conditionOptions = condition.children();

            // Apply changes of the form
            condition.val(conditionOptions.eq(1).val());
            condition.triggerHandler("change");
            expect(condition.val()).toBe(conditionOptions.eq(1).val());
            column.val(columnOptions.eq(1).val());
            column.triggerHandler("change");
            expect(condition.val()).toBe("?");
        });

        it("should call function of onSubmit attribute, when form is submitted, with the model value", () => {
            const data = mockData.properties[0];
            const column = angular.element(component[0].querySelector("#fooColumn"));
            const condition = angular.element(component[0].querySelector("#fooCondition"));
            const conditionOptions = condition.children();
            const value = angular.element(component[0].querySelector("#fooValue"));

            // Apply change on the form
            condition.val(conditionOptions.eq(1).val());
            condition.triggerHandler("change");
            value.val("bar");
            value.triggerHandler("input");

            // Then submit
            component.find("form").triggerHandler("submit");
            expect(onSubmitSpy).toHaveBeenCalledWith({
                title: `${data.title} ${condition.val()} ${value.val()}`,
                property: column.val(),
                condition: condition.val(),
                value: value.val()
            });
        });
    });
});
