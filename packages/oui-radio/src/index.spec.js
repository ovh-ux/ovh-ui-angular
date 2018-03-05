describe("ouiRadio", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.radio"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    const getMainBlockElement = (element) => element[0].querySelector(":first-child");
    const getRadioInputElement = (element) => element[0].querySelector("input[type=radio]");
    const getRadioLabelElement = (element) => element[0].querySelector("label");
    const getRadioTextContainerElement = (element) => element[0].querySelector(".oui-radio__label span:first-child");
    const getRadioDescriptionElement = (element) => element[0].querySelector(".oui-radio__description");

    describe("Component", () => {
        describe("id attribute", () => {
            it("should generate an id for the input and label when undefined", () => {
                const element = TestUtils.compileTemplate("<oui-radio></oui-radio>");

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("id")).toMatch(/^oui-radio-\d+$/);

                const radioLabelElement = getRadioLabelElement(element);
                expect(angular.element(radioLabelElement).attr("for")).toMatch(/^oui-radio-\d+$/);
            });

            it("should set the id for the input and label when defined", () => {
                const element = TestUtils.compileTemplate('<oui-radio id="test"></oui-radio>');

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("id")).toBe("test");

                const radioLabelElement = getRadioLabelElement(element);
                expect(angular.element(radioLabelElement).attr("for")).toBe("test");
            });
        });

        describe("name attribute", () => {
            it("should set the name attribute on input when defined", () => {
                const element = TestUtils.compileTemplate('<oui-radio name="test"></oui-radio>');

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("name")).toBe("test");
            });
        });

        describe("text attribute", () => {
            it("should display a text inside the radio's text container", () => {
                const element = TestUtils.compileTemplate('<oui-radio text="test"></oui-radio>');

                const textContainerRadioElement = getRadioTextContainerElement(element);
                expect(angular.element(textContainerRadioElement).html()).toBe("test");
            });
        });

        describe("description attribute", () => {
            it("should display the radio's description container when empty", () => {
                const element = TestUtils.compileTemplate("<oui-radio></oui-radio>");

                const descriptionRadioElement = getRadioDescriptionElement(element);
                expect(angular.element(descriptionRadioElement).length).toBe(0);
            });

            it("should display a text inside the radio's description container", () => {
                const element = TestUtils.compileTemplate('<oui-radio description="test"></oui-radio>');

                const descriptionRadioElement = getRadioDescriptionElement(element);
                expect(angular.element(descriptionRadioElement).html()).toBe("test");
            });
        });

        describe("value attribute", () => {
            it("should set the radio's value attribute", () => {
                const element = TestUtils.compileTemplate('<oui-radio value="\'aValue\'"></oui-radio>');

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).attr("value")).toEqual("aValue");
            });
        });

        describe("disabled attribute", () => {
            it("should display an active radio when no attribute", () => {
                const element = TestUtils.compileTemplate("<oui-radio></oui-radio>");

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("disabled")).toBe(false);
            });

            it("should display a disabled radio when defined but no value", () => {
                const element = TestUtils.compileTemplate("<oui-radio disabled></oui-radio>");

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("disabled")).toBe(true);
            });

            it("should display a disabled radio when true", () => {
                const element = TestUtils.compileTemplate("<oui-radio disabled=\"$ctrl.disabled\"></oui-radio>", {
                    disabled: true
                });

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("disabled")).toBe(true);
            });

            it("should display an active radio when false", () => {
                const element = TestUtils.compileTemplate("<oui-radio disabled=\"$ctrl.notDisabled\"></oui-radio>", {
                    notDisabled: false
                });

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("disabled")).toBe(false);
            });
        });

        describe("thumbnail attribute", () => {
            it("should display a classic radio when no attribute", () => {
                const element = TestUtils.compileTemplate("<oui-radio></oui-radio>");

                const mainBlockElement = getMainBlockElement(element);
                expect(angular.element(mainBlockElement).hasClass("oui-radio_thumbnail")).toBe(false);
            });

            it("should display a classic radio when defined but no value", () => {
                const element = TestUtils.compileTemplate("<oui-radio thumbnail></oui-radio>");

                const mainBlockElement = getMainBlockElement(element);
                expect(angular.element(mainBlockElement).hasClass("oui-radio_thumbnail")).toBe(false);
            });

            it("should display a classic radio when false", () => {
                const element = TestUtils.compileTemplate("<oui-radio thumbnail=\"$ctrl.thumbnail\"></oui-radio>", {
                    thumbnail: false
                });

                const mainBlockElement = getMainBlockElement(element);
                expect(angular.element(mainBlockElement).hasClass("oui-radio_thumbnail")).toBe(false);
            });

            it("should display a thumbnail radio when true", () => {
                const element = TestUtils.compileTemplate("<oui-radio thumbnail=\"$ctrl.thumbnail\"></oui-radio>", {
                    thumbnail: true
                });

                const mainBlockElement = getMainBlockElement(element);
                expect(angular.element(mainBlockElement).hasClass("oui-radio_thumbnail")).toBe(true);
            });
        });

        describe("default value", () => {
            it("should select the default value on loading", () => {
                const onChangeSpy = jasmine.createSpy("onChangeSpy");

                const element = TestUtils.compileTemplate(`
                    <div>
                        <oui-radio name="oui-radio-1"
                            value="'aValue'"
                            model="$ctrl.radioValue"
                            on-change="$ctrl.onChange(modelValue)"></oui-radio>
                        <oui-radio name="oui-radio-1"
                            value="'bValue'"
                            model="$ctrl.radioValue"
                            on-change="$ctrl.onChange(modelValue)"></oui-radio>
                    </div>
                    `, {
                    onChange: onChangeSpy,
                    radioValue: "bValue"
                });

                const radioComponent1 = element.children()[0];
                const radioComponent2 = element.children()[1];
                const $radioElement1 = angular.element(radioComponent1).find("input");
                const $radioElement2 = angular.element(radioComponent2).find("input");

                expect($radioElement1.prop("checked")).toEqual(false);
                expect($radioElement2.prop("checked")).toEqual(true);
            });
        });

        describe("on-change attribute", () => {
            it("should trigger callback when the radio is clicked", () => {
                const onChangeSpy = jasmine.createSpy("onChangeSpy");

                const element = TestUtils.compileTemplate(`
                    <div>
                        <oui-radio name="oui-radio-1"
                            value="'aValue'"
                            on-change="$ctrl.onChange(modelValue)"></oui-radio>
                        <oui-radio name="oui-radio-1"
                            value="'bValue'"
                            on-change="$ctrl.onChange(modelValue)"></oui-radio>
                    </div>
                    `, {
                    onChange: onChangeSpy
                });

                const radioComponent1 = element.children()[0];
                const radioComponent2 = element.children()[1];
                const $radioElement1 = angular.element(radioComponent1).find("input");
                const $radioElement2 = angular.element(radioComponent2).find("input");

                $radioElement1.prop("checked", true);
                $radioElement1.triggerHandler("click");
                expect(onChangeSpy).toHaveBeenCalledWith("aValue");

                $radioElement1.prop("checked", false);
                $radioElement2.prop("checked", true);
                $radioElement2.triggerHandler("click");
                expect(onChangeSpy).toHaveBeenCalledWith("bValue");
            });
        });
    });
});
