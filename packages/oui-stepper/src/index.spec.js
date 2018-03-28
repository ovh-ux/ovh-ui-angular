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

        it("should display a loader", () => {
            const element = TestUtils.compileTemplate("<oui-stepper><oui-step-form loading></oui-step-form></oui-stepper>");
            $timeout.flush();

            expect(element.html()).toContain("oui-spinner");
        });

        fit("should display a skippable step", () => {
            const element = TestUtils.compileTemplate("<oui-stepper><oui-step-form skippable></oui-step-form></oui-stepper>");
            const defaultText = "Skip this step";
            $timeout.flush();

            expect(element.html()).toContain("button");
            const button = element.find("button").eq(0);
            expect(button.html()).toContain(defaultText);
        });

        it("should submit a step", () => {
            const onSubmitSpy = jasmine.createSpy();
            const element = TestUtils.compileTemplate(`
                <oui-stepper>
                    <oui-step-form name='form' on-submit="$ctrl.onSubmitSpy(form)"></oui-step-form>
                </oui-stepper>`, { onSubmitSpy });
            const form = element.find("form").eq(0);
            $timeout.flush();

            form.triggerHandler("submit");
            expect(onSubmitSpy).toHaveBeenCalled();
        });

        it("should have a linear behavior", () => {
            const onSubmitSpy = jasmine.createSpy();
            const element = TestUtils.compileTemplate(`
                <oui-stepper linear>
                    <oui-step-form name='form1' on-submit="$ctrl.onSubmitSpy(form1)"></oui-step-form>
                    <oui-step-form name='form2' on-submit="$ctrl.onSubmitSpy(form2)"></oui-step-form>
                </oui-stepper>`, { onSubmitSpy });
            const form1 = element.find("form").eq(0);
            const form2 = element.find("form").eq(1);
            $timeout.flush();

            // Initial condition
            expect(form1.hasClass(activeClass)).toBe(true);
            expect(form1.hasClass(disabledClass)).toBe(false);
            expect(form2.hasClass(disabledClass)).toBe(true);

            form1.triggerHandler("submit");

            // Final condition
            expect(form1.hasClass(disabledClass)).toBe(true);
            expect(form2.hasClass(activeClass)).toBe(true);
            expect(form2.hasClass(disabledClass)).toBe(false);
        });
    });
});
