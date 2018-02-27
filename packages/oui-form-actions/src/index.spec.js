describe("ouiFormActions", () => {
    let $componentController;
    let testUtils;

    beforeEach(angular.mock.module("oui.form-actions"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_$componentController_, _TestUtils_) => {
        $componentController = _$componentController_;
        testUtils = _TestUtils_;
    }));

    describe("Controller", () => {
        it("should exist", () => {
            const ctrl = $componentController("ouiFormActions", {
                $attrs: {},
                $log: {}
            });

            expect(ctrl).toBeDefined();
        });
    });

    describe("Provider", () => {
        let ouiFormActions;

        angular.module("test.formActionsConfig", [
            "oui.form-actions"
        ]).config(ouiFormActionsProvider => {
            ouiFormActionsProvider.setTranslations({
                submit: "Submit",
                cancel: "Cancel"
            });
        });

        beforeEach(inject(_ouiFormActions_ => {
            ouiFormActions = _ouiFormActions_;
        }));

        it("should have custom values", () => {
            expect(ouiFormActions.translations.submit).toEqual("Submit");
            expect(ouiFormActions.translations.cancel).toEqual("Cancel");
        });
    });

    describe("Component", () => {
        it("should have right button classes", () => {
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()"
                    on-cancel="$ctrl.cancel()">
                </oui-form-actions>`);
            const submitButton = component.find("button").eq(0);
            const cancelButton = component.find("button").eq(1);

            expect(submitButton.hasClass("oui-button_primary")).toBe(true);
            expect(cancelButton.hasClass("oui-button_link")).toBe(true);
        });

        it("should display buttons with default text values", () => {
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()"
                    on-cancel="$ctrl.cancel()">
                </oui-form-actions>`);
            const submitButton = component.find("button").eq(0);
            const cancelButton = component.find("button").eq(1);

            expect(submitButton.text().trim()).toBe("Submit");
            expect(cancelButton.text().trim()).toBe("Cancel");
        });

        it("should display buttons with custom text values", () => {
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()"
                    on-cancel="$ctrl.cancel()"
                    submit-text="testSubmit"
                    cancel-text="testCancel">
                </oui-form-actions>`);
            const submitButton = component.find("button").eq(0);
            const cancelButton = component.find("button").eq(1);

            expect(submitButton.text().trim()).toBe("testSubmit");
            expect(cancelButton.text().trim()).toBe("testCancel");
        });

        it("should disable only submit button", () => {
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()"
                    on-cancel="$ctrl.cancel()"
                    disabled>
                </oui-form-actions>`);
            const submitButton = component.find("button").eq(0);
            const cancelButton = component.find("button").eq(1);

            expect(submitButton.attr("disabled")).toBe("disabled");
            expect(cancelButton.attr("disabled")).not.toBe("disabled");
        });

        it("should trigger click on submit and cancel button", () => {
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.onSubmitTest()"
                    on-cancel="$ctrl.onCancelTest()">
                </oui-form-actions>`, {
                onSubmitTest: jasmine.createSpy("onSubmit"),
                onCancelTest: jasmine.createSpy("onCancel")
            });
            component.find("button").eq(0).triggerHandler("click");
            component.find("button").eq(1).triggerHandler("click");

            expect(component.scope().$ctrl.onSubmitTest).toHaveBeenCalled();
            expect(component.scope().$ctrl.onCancelTest).toHaveBeenCalled();
        });
    });
});
