describe("ouiStepper", () => {
    let TestUtils;
    let $timeout;

    const rootClass = "oui-stepper";
    const disabledClass = "oui-stepper__container_disabled";
    const completeClass = "oui-stepper__container_complete";

    beforeEach(angular.mock.module("oui.stepper"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$timeout_) => {
        TestUtils = _TestUtils_;
        $timeout = _$timeout_;
    }));

    describe("Component", () => {

        describe("StepForm", () => {

            it("should add a custom name and id to step", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-stepper>
                        <oui-step-form name="formName" id="formId"></oui-step-form>
                    </oui-stepper>`);
                const form = element.find("form").eq(0);

                $timeout.flush();

                expect(form.attr("name")).toBe("formName");
                expect(form.attr("id")).toBe("formId");
            });

            it("should add a header to step", () => {
                const title = "my step title";
                const element = TestUtils.compileTemplate(`
                    <oui-stepper>
                        <oui-step-form header="${title}"></oui-step-form>
                    </oui-stepper>`);
                const span = angular.element(element[0].querySelector(".oui-stepper__title"));

                expect(span.html()).toContain(title);
            });

            it("should display an active step", () => {
                const element = TestUtils.compileTemplate("<oui-stepper><oui-step-form></oui-step-form></oui-stepper>");
                const form = element.find("form").eq(0);

                $timeout.flush();

                expect(form.hasClass(disabledClass)).toBe(false);
                expect(form.hasClass(completeClass)).toBe(false);
            });

            it("should display a disabled step", () => {
                const element = TestUtils.compileTemplate("<oui-stepper><oui-step-form disabled></oui-step-form></oui-stepper>");
                const form = element.find("form").eq(0);

                $timeout.flush();

                expect(form.hasClass(disabledClass)).toBe(true);
                expect(form.hasClass(completeClass)).toBe(false);
            });

            it("should display a loader", () => {
                const element = TestUtils.compileTemplate("<oui-stepper><oui-step-form loading></oui-step-form></oui-stepper>");
                $timeout.flush();

                expect(element.html()).toContain("oui-spinner");
            });

            it("should display a skippable step", () => {
                const element = TestUtils.compileTemplate("<oui-stepper><oui-step-form skippable></oui-step-form></oui-stepper>");
                const button = angular.element(element[0].querySelector(".oui-stepper__skippable-link"));

                expect(button.length).toBe(1);
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
        });

        describe("Stepper", () => {
            it("should affects rootClass to stepper", () => {
                const element = TestUtils.compileTemplate("<oui-stepper></oui-stepper>");
                $timeout.flush();

                expect(element.hasClass(rootClass)).toBe(true);
            });

            it("should add a custom name and id to step", () => {
                const element = TestUtils.compileTemplate("<oui-stepper name='stepperName' id='stepperId'></oui-stepper>");
                const div = element.find("div").eq(0);
                $timeout.flush();

                expect(div.attr("name")).toBe("stepperName");
                expect(div.attr("id")).toBe("stepperId");
            });

            it("should call onInit and onFinish", () => {
                const onInit = jasmine.createSpy();
                const onFinish = jasmine.createSpy();
                const element = TestUtils.compileTemplate(`
                    <oui-stepper on-init="$ctrl.onInit()" on-finish="$ctrl.onFinish()">
                        <oui-step-form></oui-step-form>
                    </oui-stepper>`, {
                    onInit,
                    onFinish
                });
                $timeout.flush();

                // Initial condition
                expect(onInit).toHaveBeenCalled();
                expect(onFinish).not.toHaveBeenCalled();

                const form = element.find("form").eq(0);
                form.triggerHandler("submit");

                // Final condition
                expect(onFinish).toHaveBeenCalled();

            });

            it("should have a linear behavior", () => {
                const onSubmitSpy = jasmine.createSpy();
                const element = TestUtils.compileTemplate(`
                    <oui-stepper linear>
                        <oui-step-form name="form1" on-submit="$ctrl.onSubmitSpy(form1)"></oui-step-form>
                        <oui-step-form name="form2" on-submit="$ctrl.onSubmitSpy(form2)"></oui-step-form>
                    </oui-stepper>`, { onSubmitSpy });
                const form1 = element.find("form").eq(0);
                const form2 = element.find("form").eq(1);

                $timeout.flush();

                // Initial condition
                expect(form1.hasClass(disabledClass)).toBe(false);
                expect(form2.hasClass(disabledClass)).toBe(true);

                form1.triggerHandler("submit");

                // Final condition
                expect(form2.hasClass(disabledClass)).toBe(false);
            });
        });
    });
});
