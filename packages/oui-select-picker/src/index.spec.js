describe("ouiSelectPicker", () => {
    let TestUtils;
    let $timeout;

    beforeEach(angular.mock.module("oui.select"));
    beforeEach(angular.mock.module("oui.select-picker"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$timeout_) => {
        TestUtils = _TestUtils_;
        $timeout = _$timeout_;
    }));

    const getRadioInputElement = (element) => element[0].querySelector("input[type=radio]");
    const getRadioLabelElement = (element) => element[0].querySelector("label");
    const getRadioTextContainerElement = (element) => element[0].querySelector(".oui-select-picker__label span:first-child");
    const getRadioDescriptionElement = (element) => element[0].querySelector(".oui-select-picker__description");
    const getRadioPictureElement = (element) => element[0].querySelector(".oui-select-picker__picture-container");

    describe("Component", () => {
        describe("id attribute", () => {
            it("should generate an id for the input and label when undefined", () => {
                const element = TestUtils.compileTemplate('<oui-select-picker values="[\'test\']"></oui-select-picker>');

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("id")).toMatch(/^oui-select-picker-\d+$/);

                const radioLabelElement = getRadioLabelElement(element);
                expect(angular.element(radioLabelElement).attr("for")).toMatch(/^oui-select-picker-\d+$/);
            });

            it("should set the id for the input and label when defined", () => {
                const element = TestUtils.compileTemplate('<oui-select-picker id="test" values="[\'test\']"></oui-select-picker>');

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("id")).toBe("test");

                const radioLabelElement = getRadioLabelElement(element);
                expect(angular.element(radioLabelElement).attr("for")).toBe("test");
            });
        });

        describe("name attribute", () => {
            it("should set the name attribute on input when defined", () => {
                const element = TestUtils.compileTemplate('<oui-select-picker name="test"></oui-select-picker>');

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("name")).toBe("test");
            });
        });

        describe("text attribute", () => {
            it("should display a text inside the selector's text container", () => {
                const element = TestUtils.compileTemplate('<oui-select-picker text="test"></oui-select-picker>');

                const textContainerRadioElement = getRadioTextContainerElement(element);
                expect(angular.element(textContainerRadioElement).html()).toBe("test");
            });
        });

        describe("description attribute", () => {
            it("should display the selector's description container when empty", () => {
                const element = TestUtils.compileTemplate("<oui-select-picker></oui-select-picker>");

                const descriptionRadioElement = getRadioDescriptionElement(element);
                expect(angular.element(descriptionRadioElement).length).toBe(0);
            });

            it("should display a text inside the selector's description container", () => {
                const element = TestUtils.compileTemplate('<oui-select-picker description="test"></oui-select-picker>');

                const descriptionRadioElement = getRadioDescriptionElement(element);
                expect(angular.element(descriptionRadioElement).html()).toBe("test");
            });
        });

        describe("picture attribute", () => {
            it("should display the selector's picture container when empty", () => {
                const element = TestUtils.compileTemplate("<oui-select-picker></oui-select-picker>");

                const pictureRadioElement = getRadioPictureElement(element);
                expect(angular.element(pictureRadioElement).length).toBe(0);
            });

            it("should display a img inside the selector's picture container", () => {
                const element = TestUtils.compileTemplate('<oui-select-picker picture="/test/test.png"></oui-select-picker>');

                const pictureRadioElement = getRadioPictureElement(element);
                expect(angular.element(pictureRadioElement).html()).toMatch(/<img/);
            });
        });

        describe("values attribute", () => {
            it("should set the selector's values attribute", () => {
                const element = TestUtils.compileTemplate('<oui-select-picker values="[\'aValue\']"></oui-select-picker>');

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).attr("value")).toEqual("aValue");
            });
        });

        describe("disabled attribute", () => {
            it("should display an active radio when no attribute", () => {
                const element = TestUtils.compileTemplate("<oui-select-picker></oui-select-picker>");

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("disabled")).toBe(false);
            });

            it("should display a disabled radio when defined but no value", () => {
                const element = TestUtils.compileTemplate("<oui-select-picker disabled></oui-select-picker>");

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("disabled")).toBe(true);
            });

            it("should display a disabled radio when true", () => {
                const element = TestUtils.compileTemplate("<oui-select-picker disabled=\"$ctrl.disabled\"></oui-select-picker>", {
                    disabled: true
                });

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("disabled")).toBe(true);
            });

            it("should display an active radio when false", () => {
                const element = TestUtils.compileTemplate("<oui-select-picker disabled=\"$ctrl.notDisabled\"></oui-select-picker>", {
                    notDisabled: false
                });

                const radioElement = getRadioInputElement(element);
                expect(angular.element(radioElement).prop("disabled")).toBe(false);
            });
        });

        describe("default value", () => {
            it("should select the default value on loading", () => {
                const element = TestUtils.compileTemplate(`
                    <div>
                        <oui-select-picker name="oui-select-picker-1"
                            values="['aValue']"
                            model="$ctrl.selectValue"></oui-select-picker>
                        <oui-select-picker name="oui-select-picker-1"
                            values="['bValue']"
                            model="$ctrl.selectValue"></oui-select-picker>
                    </div>
                    `, {
                    selectValue: "bValue"
                });

                const selectPickerComponent1 = element.children()[0];
                const selectPickerComponent2 = element.children()[1];
                const $radioElement1 = angular.element(selectPickerComponent1).find("input");
                const $radioElement2 = angular.element(selectPickerComponent2).find("input");

                expect($radioElement1.prop("checked")).toEqual(false);
                expect($radioElement2.prop("checked")).toEqual(true);
            });
        });

        describe("on-change attribute", () => {
            it("should trigger callback when the radio is clicked", () => {
                const onChangeSpy = jasmine.createSpy("onChangeSpy");

                const element = TestUtils.compileTemplate(`
                    <div>
                        <oui-select-picker name="oui-select-picker-1"
                            values="['aValue']"
                            model="$ctrl.selectValue"
                            on-change="$ctrl.onChange(modelValue)"></oui-select-picker>
                        <oui-select-picker name="oui-select-picker-1"
                            values="['bValue']"
                            model="$ctrl.selectValue"
                            on-change="$ctrl.onChange(modelValue)"></oui-select-picker>
                    </div>
                    `, {
                    onChange: onChangeSpy
                });

                const selectPickerComponent1 = element.children()[0];
                const selectPickerComponent2 = element.children()[1];
                const $radioElement1 = angular.element(selectPickerComponent1).find("input");
                const $radioElement2 = angular.element(selectPickerComponent2).find("input");

                $radioElement1.prop("checked", true);
                $radioElement1.triggerHandler("click");
                $timeout.flush();
                expect(onChangeSpy).toHaveBeenCalledWith("aValue");

                $radioElement1.prop("checked", false);
                $radioElement2.prop("checked", true);
                $radioElement2.triggerHandler("click");
                $timeout.flush();
                expect(onChangeSpy).toHaveBeenCalledWith("bValue");
            });

            it("should trigger callback when the select is clicked", () => {
                const onChangeSpy = jasmine.createSpy("onChangeSpy");

                const element = TestUtils.compileTemplate(`
                    <div>
                        <oui-select-picker name="oui-select-picker-2"
                            values="['aValue', 'bValue']"
                            model="$ctrl.selectValue"
                            on-change="$ctrl.onChange(modelValue)"></oui-select-picker>
                        <oui-select-picker name="oui-select-picker-2"
                            values="['cValue', 'dValue']"
                            model="$ctrl.selectValue"
                            on-change="$ctrl.onChange(modelValue)"></oui-select-picker>
                    </div>
                    `, {
                    onChange: onChangeSpy
                });

                const selectPickerComponent1 = element.children()[0];
                const selectPickerComponent2 = element.children()[1];
                const $radioElement1 = angular.element(selectPickerComponent1).find("input");
                const $radioElement2 = angular.element(selectPickerComponent2).find("input");
                const $triggerElement1 = angular.element(selectPickerComponent1.querySelector("button.oui-dropdown__trigger"));
                const $triggerElement2 = angular.element(selectPickerComponent2.querySelector("button.oui-dropdown__trigger"));

                $radioElement1.prop("checked", true);
                $triggerElement1.triggerHandler("click");
                expect(angular.element(selectPickerComponent1.querySelector(".oui-ui-select-container")).hasClass("oui-ui-select-container_open")).toBe(true);
                const $choiceElement1 = angular.element(selectPickerComponent1.querySelector(".ui-select-choices li button"));
                $choiceElement1.triggerHandler("click");
                expect(angular.element(selectPickerComponent1.querySelector(".oui-ui-select-container")).hasClass("oui-ui-select-container_open")).toBe(false);
                $timeout.flush();
                expect(onChangeSpy).toHaveBeenCalledWith("aValue");

                $radioElement1.prop("checked", false);
                $radioElement2.prop("checked", true);
                $triggerElement2.triggerHandler("click");
                const $choicesElement2 = angular.element(selectPickerComponent2.querySelector(".ui-select-choices li button"));
                $choicesElement2.triggerHandler("click");
                $timeout.flush();
                expect(onChangeSpy).toHaveBeenCalledWith("cValue");
            });
        });
    });
});
