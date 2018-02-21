describe("ouiRadioToggle", () => {
    let TestUtils;
    let $timeout;
    let $rootScope;

    beforeEach(angular.mock.module("oui.radio"));
    beforeEach(angular.mock.module("oui.radio-group"));
    beforeEach(angular.mock.module("oui.radio-toggle"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$timeout_, _$rootScope_) => {
        TestUtils = _TestUtils_;
        $timeout = _$timeout_;
        $rootScope = _$rootScope_;
    }));

    const getRadioInputElement = (element) => angular.element(element[0].querySelector("input[type=radio]"));
    const getRadioInputElementWithValue = (element, value) => angular.element(element[0].querySelector(`input[type=radio][value=${value}]`));
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
                    <oui-radio-toggle name=${name}>
                        <oui-radio></oui-radio>
                    </oui-radio-toggle>
            `);

                expect(getRadioInputElement(element).prop("name")).toBe(name);
            });

            fit("should assfsdfsign a generated name to child radios when name attribute is undefined ", () => {
                console.log("begin0");
                const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle>
                        <oui-radio></oui-radio>
                    </oui-radio-toggle>
                `);

                expect(getRadioInputElement(element).prop("name")).toMatch(/^oui-radio-toggle-\d+$/);
                console.log("end");
            });

            it("should add radiogroup role", () => {
                const element = TestUtils.compileTemplate("<oui-radio-toggle></oui-radio-toggle>");
                $timeout.flush();

                expect(getRadioGroupElement(element).attr("role")).toEqual("radiogroup");
            });
        });

        describe("on radio group model change", () => {

            it("should update child radio models at initialization", () => {
                const defaultRadioValue = "bValue";
                const otherRadioValue = "aValue";
                const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle model="$ctrl.defaultValue">
                        <oui-radio value="'${otherRadioValue}'"></oui-radio>
                        <oui-radio value="'${defaultRadioValue}'"></oui-radio>
                    </oui-radio-toggle>
                    `, {
                    defaultValue: defaultRadioValue
                });

                expect(getRadioInputElementWithValue(element, defaultRadioValue).prop("checked")).toEqual(true);
                expect(getRadioInputElementWithValue(element, otherRadioValue).prop("checked")).toEqual(false);
            });

            it("should update child radio models after initialization too", () => {
                const defaultRadioValue = "bValue";
                const newRadioValue = "aValue";
                const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle model="$ctrl.defaultValue">
                        <oui-radio value="'${newRadioValue}'"></oui-radio>
                        <oui-radio value="'${defaultRadioValue}'"></oui-radio>
                    </oui-radio-toggle>
                    `, {
                    defaultValue: defaultRadioValue
                });

                TestUtils.getElementController(element).defaultValue = newRadioValue;
                $rootScope.$digest();

                expect(getRadioInputElementWithValue(element, newRadioValue).prop("checked")).toEqual(true);
                expect(getRadioInputElementWithValue(element, defaultRadioValue).prop("checked")).toEqual(false);
            });
        });

        describe("on child radio click", () => {

            it("should update radio group model", () => {
                const clickedRadioValue = "bValue";
                const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle model="$ctrl.model">
                        <oui-radio value="'aValue'"></oui-radio>
                        <oui-radio value="'${clickedRadioValue}'"></oui-radio>
                    </oui-radio-toggle>
                    `);

                clickRadio(getRadioInputElementWithValue(element, clickedRadioValue));

                expect(TestUtils.getElementController(element).model).toEqual(clickedRadioValue);
            });

            it("should trigger on change callback", () => {
                const clickedRadioValue = "bValue";
                const onChangeSpy = jasmine.createSpy("onChangeSpy");
                const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle on-change="$ctrl.onChange(modelValue)">
                        <oui-radio value="'aValue'"></oui-radio>
                        <oui-radio value="'${clickedRadioValue}'"></oui-radio>
                    </oui-radio-toggle>
                    `, {
                    onChange: onChangeSpy
                });

                clickRadio(getRadioInputElementWithValue(element, clickedRadioValue));

                expect(onChangeSpy).toHaveBeenCalledWith(clickedRadioValue);
            });
        });
    });
});
