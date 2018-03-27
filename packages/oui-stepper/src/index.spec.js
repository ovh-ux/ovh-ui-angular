describe("ouiStepper", () => {
    let TestUtils;
    let $timeout;

    const rootClass = "oui-list_steps oui-list_separated";
    const activeClass = "oui-list__group";
    const disabledClass = "oui-list__item_disabled";
    const completeClass = "oui-list__item_complete";

    beforeEach(angular.mock.module("oui.stepper"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$timeout_) => {
        TestUtils = _TestUtils_;
        $timeout = _$timeout_;
    }));

    describe("Component", () => {
        it("should affects rootClass to stepper", () => {
            const element = TestUtils.compileTemplate("<oui-stepper></oui-stepper>");
            $timeout.flush();

            expect(element.hasClass(rootClass)).toBe(true);
        });

        it("should display an active step", () => {
            const element = TestUtils.compileTemplate("<oui-stepper><oui-step-form></oui-step-form></oui-stepper>");
            const form = element.find("form").eq(0);
            $timeout.flush();

            expect(form.hasClass(activeClass)).toBe(true);
            expect(form.hasClass(disabledClass)).toBe(false);
            expect(form.hasClass(completeClass)).toBe(false);
        });

        it("should display a disabled step", () => {
            const element = TestUtils.compileTemplate("<oui-stepper><oui-step-form disabled></oui-step-form></oui-stepper>");
            const form = element.find("form").eq(0);
            $timeout.flush();

            expect(form.hasClass(activeClass)).toBe(true);
            expect(form.hasClass(disabledClass)).toBe(true);
            expect(form.hasClass(completeClass)).toBe(false);
        });

        xit("should turn to complete a step", () => {
            const element = TestUtils.compileTemplate(`
                <oui-stepper>
                    <oui-step-form name='form'>
                        <button></button>
                    </oui-step-form>
                </oui-stepper>`);
            const form = element.find("form").eq(0);
            const button = element.find("button").eq(0);
            $timeout.flush();

            expect(form.hasClass(completeClass)).toBe(false);
            button.triggerHandler("click");
            expect(form.hasClass(completeClass)).toBe(true);
        });
    });
});
