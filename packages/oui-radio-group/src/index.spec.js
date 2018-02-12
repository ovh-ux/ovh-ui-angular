describe("ouiRadioGroup", () => {
    let TestUtils;
    let $timeout;

    beforeEach(angular.mock.module("oui.radio"));
    beforeEach(angular.mock.module("oui.radio-group"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$timeout_) => {
        TestUtils = _TestUtils_;
        $timeout = _$timeout_;
    }));

    const getRadioInputElement = (element) => angular.element(element[0].querySelector("input[type=radio]"));
    const getRadioInputElementWithValue = (element, value) => angular.element(element[0].querySelector(`input[type=radio][value=${value}]`));
    const getRadioGroupElement = (element) => angular.element(element[0]);

    describe("Component", () => {
        describe("attributes", () => {

            it("should assign defined ame to child radios when name attribute is defined", () => {
                const name = "foo";

                const element = TestUtils.compileTemplate(`<oui-radio-group name=${name}><oui-radio></oui-radio></oui-radio-group>`);

                expect(getRadioInputElement(element).prop("name")).toBe(name);
            });

            it("should assign a generated name to child radios  when name attribute is undefined ", () => {
                const element = TestUtils.compileTemplate("<oui-radio-group><oui-radio></oui-radio></oui-radio-group>");

                expect(getRadioInputElement(element).prop("name")).toMatch(/^oui-radio-group-\d+$/);
            });


            it("should add radiogroup role", () => {
                const element = TestUtils.compileTemplate("<oui-radio-group></oui-radio-group>");
                $timeout.flush();

                expect(getRadioGroupElement(element).attr("role")).toEqual("radiogroup");
            });
        });

        describe("on radio group model change", () => {
            it("should update child radio models", () => {

                const defaultRadioValue = "bValue";
                const element = TestUtils.compileTemplate(`
                    <oui-radio-group model="$ctrl.defaultValue">
                        <oui-radio
                            value="'aValue'"></oui-radio>
                        <oui-radio
                            value="'${defaultRadioValue}'"></oui-radio>
                    </oui-radio-group>
                    `, {
                    defaultValue: defaultRadioValue
                });

                expect(getRadioInputElementWithValue(element, "aValue").prop("checked")).toEqual(false);
                expect(getRadioInputElementWithValue(element, "bValue").prop("checked")).toEqual(true);

            });
        });

        describe("on child radio click", () => {
            it("should update radio group model", () => {
                const clickedRadioValue = "bValue";
                const element = TestUtils.compileTemplate(`
                    <oui-radio-group model="$ctrl.model">
                        <oui-radio
                            value="'aValue'"></oui-radio>
                        <oui-radio 
                            value="'${clickedRadioValue}'"></oui-radio>
                    </oui-radio-group>
                    `);

                const radioToCheck = getRadioInputElementWithValue(element, clickedRadioValue);
                radioToCheck.prop("checked", true);
                radioToCheck.triggerHandler("click");

                expect(TestUtils.getElementController(element).model).toEqual(clickedRadioValue);
            });
        });
    });
});
