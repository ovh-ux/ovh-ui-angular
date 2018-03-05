describe("ouiRadioGroup", () => {
    let TestUtils;
    let $timeout;
    let $rootScope;

    beforeEach(angular.mock.module("oui.radio"));
    beforeEach(angular.mock.module("oui.radio-group"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$timeout_, _$rootScope_) => {
        TestUtils = _TestUtils_;
        $timeout = _$timeout_;
        $rootScope = _$rootScope_;
    }));

    const getRadioInputElement = (element) => angular.element(element[0].querySelector("input[type=radio]"));
    const getElementByClass = (element, value) => angular.element(element[0].querySelector(value));
    const getRadioInputElementByValue = (element, value) => angular.element(element[0].querySelector(`input[type=radio][value=${value}]`));
    const getRadioGroupElement = (element) => angular.element(element[0]);
    const clickRadio = (radioToCheck) => {
        radioToCheck.prop("checked", true);
        radioToCheck.triggerHandler("click");
    };

    describe("Component", () => {

        describe("attributes", () => {

            it("should assign defined name to child radios when name attribute is defined", () => {
                const name = "foo";

                const element = TestUtils.compileTemplate(`
                    <oui-radio-group name=${name}>
                        <oui-radio></oui-radio>
                    </oui-radio-group>
            `);

                expect(getRadioInputElement(element).prop("name")).toBe(name);
            });

            it("should assign a generated name to child radios when name attribute is undefined ", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-radio-group>
                        <oui-radio></oui-radio>
                    </oui-radio-group>
                `);

                expect(getRadioInputElement(element).prop("name")).toMatch(/^oui-radio-group-\d+$/);
            });

            it("should add radiogroup role", () => {
                const element = TestUtils.compileTemplate("<oui-radio-group></oui-radio-group>");
                $timeout.flush();

                expect(getRadioGroupElement(element).attr("role")).toEqual("radiogroup");
            });
        });

        describe("classes", () => {

            it("should set radio classes", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-radio-group>
                        <oui-radio></oui-radio>
                    </oui-radio-group>
            `);

                expect(getElementByClass(element, ".oui-radio").length).toEqual(1);
                expect(getElementByClass(element, ".oui-radio__input").length).toEqual(1);
                expect(getElementByClass(element, ".oui-radio__label-container").length).toEqual(1);
                expect(getElementByClass(element, ".oui-radio__label").length).toEqual(1);
            });
        });

        describe("on radio group model change", () => {

            it("should update child radio models at initialization", () => {
                const defaultRadioValue = "bValue";
                const otherRadioValue = "aValue";
                const element = TestUtils.compileTemplate(`
                    <oui-radio-group model="$ctrl.defaultValue">
                        <oui-radio value="'${otherRadioValue}'"></oui-radio>
                        <oui-radio value="'${defaultRadioValue}'"></oui-radio>
                    </oui-radio-group>
                    `, {
                    defaultValue: defaultRadioValue
                });

                expect(getRadioInputElementByValue(element, defaultRadioValue).prop("checked")).toEqual(true);
                expect(getRadioInputElementByValue(element, otherRadioValue).prop("checked")).toEqual(false);
            });

            it("should update child radio models after initialization too", () => {
                const defaultRadioValue = "bValue";
                const newRadioValue = "aValue";
                const element = TestUtils.compileTemplate(`
                    <oui-radio-group model="$ctrl.defaultValue">
                        <oui-radio value="'${newRadioValue}'"></oui-radio>
                        <oui-radio value="'${defaultRadioValue}'"></oui-radio>
                    </oui-radio-group>
                    `, {
                    defaultValue: defaultRadioValue
                });

                TestUtils.getElementController(element).defaultValue = newRadioValue;
                $rootScope.$digest();

                expect(getRadioInputElementByValue(element, newRadioValue).prop("checked")).toEqual(true);
                expect(getRadioInputElementByValue(element, defaultRadioValue).prop("checked")).toEqual(false);
            });
        });

        describe("on child radio click", () => {

            it("should update radio group model", () => {
                const clickedRadioValue = "bValue";
                const element = TestUtils.compileTemplate(`
                    <oui-radio-group model="$ctrl.model">
                        <oui-radio value="'aValue'"></oui-radio>
                        <oui-radio value="'${clickedRadioValue}'"></oui-radio>
                    </oui-radio-group>
                    `);

                clickRadio(getRadioInputElementByValue(element, clickedRadioValue));

                expect(TestUtils.getElementController(element).model).toEqual(clickedRadioValue);
            });

            it("should trigger on change callback", () => {
                const clickedRadioValue = "bValue";
                const onChangeSpy = jasmine.createSpy("onChangeSpy");
                const element = TestUtils.compileTemplate(`
                    <oui-radio-group on-change="$ctrl.onChange(modelValue)">
                        <oui-radio value="'aValue'"></oui-radio>
                        <oui-radio value="'${clickedRadioValue}'"></oui-radio>
                    </oui-radio-group>
                    `, {
                    onChange: onChangeSpy
                });

                clickRadio(getRadioInputElementByValue(element, clickedRadioValue));
                $timeout.flush();
                expect(onChangeSpy).toHaveBeenCalledWith(clickedRadioValue);
            });
        });
    });
});
