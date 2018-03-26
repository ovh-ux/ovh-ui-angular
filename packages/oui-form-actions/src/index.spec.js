describe("ouiFormActions", () => {
    let testUtils;

    beforeEach(angular.mock.module("oui.form-actions"));
    beforeEach(angular.mock.module("oui.test-utils"));
    beforeEach(angular.mock.module("test.formActionsConfig"));

    beforeEach(inject((_TestUtils_) => {
        testUtils = _TestUtils_;
    }));

    describe("Provider", () => {
        let ouiFormActions;

        angular.module("test.formActionsConfig", [
            "oui.form-actions"
        ]).config(ouiFormActionsProvider => {
            ouiFormActionsProvider.setTranslations({
                submit: "SubmitTest",
                cancel: "CancelTest"
            });
        });

        beforeEach(inject(_ouiFormActions_ => {
            ouiFormActions = _ouiFormActions_;
        }));

        it("should have custom values", () => {
            const submitTranslation = ouiFormActions.translations.submit;
            const cancelTranslation = ouiFormActions.translations.cancel;

            expect(submitTranslation).toEqual("SubmitTest");
            expect(cancelTranslation).toEqual("CancelTest");
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

            expect(submitButton.text().trim()).toBe("SubmitTest");
            expect(cancelButton.text().trim()).toBe("CancelTest");
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

        it("should not have submit button disabled at any time", () => {
            // Submit should always be active according to guidelines
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()"
                    on-cancel="$ctrl.cancel()"
                    disabled>
                </oui-form-actions>`);
            const submitButton = component.find("button").eq(0);

            expect(submitButton.attr("disabled")).not.toBe("disabled");
        });

        it("cancel button should be visible if action provided", () => {
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()"
                    on-cancel="$ctrl.cancel()">
                </oui-form-actions>`);
            const cancelButton = component.find("button").eq(1);

            expect(cancelButton.hasClass("ng-hide")).toBe(false);
        });

        it("cancel button should be hidden if no action provided", () => {
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()">
                </oui-form-actions>`);
            const cancelButton = component.find("button").eq(1);

            expect(cancelButton.hasClass("ng-hide")).toBe(true);
        });

        it("should trigger click on submit button", () => {
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.onSubmitTest()"
                    on-cancel="$ctrl.onCancelTest()">
                </oui-form-actions>`, {
                onSubmitTest: jasmine.createSpy("onSubmit")
            });
            component.find("button").eq(0).triggerHandler("click");

            expect(component.scope().$ctrl.onSubmitTest).toHaveBeenCalled();
        });

        it("should trigger click on cancel button", () => {
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.onSubmitTest()"
                    on-cancel="$ctrl.onCancelTest()">
                </oui-form-actions>`, {
                onCancelTest: jasmine.createSpy("onCancel")
            });
            component.find("button").eq(1).triggerHandler("click");

            expect(component.scope().$ctrl.onCancelTest).toHaveBeenCalled();
        });

        it("should handle link on cancel button", () => {
            const link = "#";
            const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.onSubmitTest()"
                    href="${link}">
                </oui-form-actions>`);
            const a = component.find("a").eq(0);

            expect(a.attr("href")).toBe(link);
        });
    });
});
