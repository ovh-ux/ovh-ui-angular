describe("ouiModal", () => {
    let TestUtils;

    const getModal = element => angular.element(element[0].querySelector(".oui-modal"));
    const getBody = element => angular.element(element[0].querySelector(".oui-modal__body"));
    const getTitle = element => angular.element(element[0].querySelector(".oui-modal__title"));
    const getFooter = element => angular.element(element[0].querySelector(".oui-modal__footer"));
    const getPrimaryButton = element => angular.element(element[0].querySelector(".oui-button_primary"));
    const getSecondaryButton = element => angular.element(element[0].querySelector(".oui-button_secondary"));
    const getDismissButton = element => angular.element(element[0].querySelector(".oui-modal__header .oui-icon"));

    const title = "Modal title";
    const body = "This is the modal content";
    const primaryLabel = "Save";
    const secondaryLabel = "Cancel";

    beforeEach(angular.mock.module("oui.modal"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("should display a modal", () => {
            const element = TestUtils.compileTemplate(`
                <oui-modal
                    title="Modal title">
                </oui-modal>
                `
            );

            expect(getModal(element)).toBeDefined();
        });

        it("should display a title", () => {
            const element = TestUtils.compileTemplate(`
                <oui-modal
                    title="{{$ctrl.title}}">
                </oui-modal>
                `, {
                    title
                }
            );

            const $title = getTitle(element);

            expect($title).toBeDefined();
            expect($title.html()).toContain(title);
        });

        it("should display a content", () => {
            const element = TestUtils.compileTemplate(`
                <oui-modal
                    title="Title">
                    {{::$ctrl.body}}
                </oui-modal>
                `, {
                    body
                }
            );

            const $body = getBody(element);

            expect($body).toBeDefined();
            expect($body.html()).toContain(body);
        });

        it("should display a footer", () => {
            const element = TestUtils.compileTemplate(`
                <oui-modal
                    title="Title">
                </oui-modal>
                `);

            const $footer = getFooter(element);

            expect($footer).toBeDefined();
        });

        it("should display primary button in the footer", () => {
            const element = TestUtils.compileTemplate(`
                <oui-modal
                    title="Title"
                    primary-label="{{::$ctrl.primaryLabel}}">
                </oui-modal>
                `, {
                    primaryLabel
                }
            );

            const $footer = getFooter(element);
            const $primaryButton = getPrimaryButton($footer);

            expect($primaryButton).toBeDefined();
            expect($primaryButton.html()).toContain(primaryLabel);
        });

        it("should trigger primary action action", () => {
            const primarySpy = jasmine.createSpy("primaryClick");
            const element = TestUtils.compileTemplate(`
                <oui-modal
                    title="Title"
                    primary-label="Save"
                    primary-action="$ctrl.primarySpy()">
                </oui-modal>
                `, {
                    primarySpy
                }
            );

            getPrimaryButton(element).triggerHandler("click");
            expect(primarySpy).toHaveBeenCalled();
        });

        it("should display secondary button in the footer", () => {
            const element = TestUtils.compileTemplate(`
                <oui-modal
                    title="Title"
                    secondary-label="{{::$ctrl.secondaryLabel}}">
                </oui-modal>
                `, {
                    secondaryLabel
                }
            );

            const $footer = getFooter(element);
            const $secondaryButton = getSecondaryButton($footer);

            expect($secondaryButton).toBeDefined();
            expect($secondaryButton.html()).toContain(secondaryLabel);
        });

        it("should trigger secondary action action", () => {
            const secondarySpy = jasmine.createSpy("secondaryClick");
            const element = TestUtils.compileTemplate(`
                <oui-modal
                    title="Title"
                    secondary-label="Save"
                    secondary-action="$ctrl.secondarySpy()">
                </oui-modal>
                `, {
                    secondarySpy
                }
            );

            getSecondaryButton(element).triggerHandler("click");
            expect(secondarySpy).toHaveBeenCalled();
        });

        it("should trigger on-dismiss action", () => {
            const dismissSpy = jasmine.createSpy("dismiss");
            const element = TestUtils.compileTemplate(`
                <oui-modal
                    title="Title"
                    on-dismiss="$ctrl.dismissSpy()">
                </oui-modal>
                `, {
                    dismissSpy
                }
            );

            getDismissButton(element).triggerHandler("click");
            expect(dismissSpy).toHaveBeenCalled();
        });
    });
});
