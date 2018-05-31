describe("ouiModalOnBoarding", () => {
    let TestUtils;
    let $timeout;

    const getModalOnBoarding = element => angular.element(element[0].querySelector(".oui-modal-on-boarding"));
    const getBody = element => angular.element(element[0].querySelector(".oui-modal-on-boarding__body"));
    const getFirstPanel = element => angular.element(element[0].querySelector(".oui-modal-on-boarding__content-panel"));
    const getDismissButton = element => angular.element(element[0].querySelector(".oui-modal-on-boarding__header .oui-icon"));
    const getNextButton = element => angular.element(element[0].querySelector(".oui-modal-on-boarding__content-next"));
    const getFirstIndicator = element => angular.element(element[0].querySelector(".oui-modal-on-boarding__indicators > button"));
    const getLastIndicator = element => angular.element(element[0].querySelector(".oui-modal-on-boarding__indicators > button:last-child"));

    beforeEach(angular.mock.module("oui.modal-on-boarding"));
    beforeEach(angular.mock.module("oui.spinner"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$timeout_) => {
        TestUtils = _TestUtils_;
        $timeout = _$timeout_;
    }));

    describe("Component", () => {
        describe("ModalOnBoarding", () => {
            it("should display a modal on-boarding", () => {
                const element = TestUtils.compileTemplate("<oui-modal-on-boarding></oui-modal-on-boarding>");
                $timeout.flush();
                expect(getModalOnBoarding(element)).toBeDefined();
            });

            it("should display an overlay when loading", () => {
                const element = TestUtils.compileTemplate("<oui-modal-on-boarding loading></oui-modal-on-boarding>");
                $timeout.flush();
                const $body = getBody(element);
                expect($body.html()).toContain("oui-modal-on-boarding__loader");
                expect($body.html()).toContain("oui-spinner");
            });

            it("should display a modal on-boarding with active panel", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-modal-on-boarding>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                    </oui-modal-on-boarding>
                `);
                $timeout.flush();
                expect(getBody(element).html()).toContain("oui-modal-on-boarding__content-panel");
                expect(getFirstPanel(element).hasClass("active")).toBe(true);
            });

            it("should trigger on-dismiss action", () => {
                const dismissSpy = jasmine.createSpy("dismiss");
                const element = TestUtils.compileTemplate('<oui-modal-on-boarding on-dismiss="$ctrl.dismissSpy()"></oui-modal-on-boarding>', {
                    dismissSpy
                });
                $timeout.flush();
                getDismissButton(element).triggerHandler("click");
                expect(dismissSpy).toHaveBeenCalled();
            });

            /* it("should dismiss modal on escape key's trigger", () => {
                const dismissSpy = jasmine.createSpy("dismiss");
                const element = TestUtils.compileTemplate('<oui-modal-on-boarding on-dismiss="$ctrl.dismissSpy()"></oui-modal-on-boarding>', {
                    dismissSpy
                });
                $timeout.flush();
                $document.triggerHandler({
                    type: "keydown",
                    keyCode: 27
                });
                expect(dismissSpy).toHaveBeenCalled();
            }); */
        });

        describe("ModalOnBoardingPanel", () => {
            it("should update active panel on right button click", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-modal-on-boarding>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                    </oui-modal-on-boarding>
                `);
                $timeout.flush();
                const $firstPanel = getFirstPanel(element);
                expect($firstPanel.hasClass("active")).toBe(true);
                getNextButton(element).triggerHandler("click");
                $timeout.flush();
                expect($firstPanel.hasClass("active")).toBe(false);
            });

            it("should hide left button if first panel is selected", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-modal-on-boarding>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                    </oui-modal-on-boarding>
                `);
                $timeout.flush();
                expect(getBody(element).html()).not.toContain("oui-modal-on-boarding__content-prev");
            });

            it("should always show left button if loop option is active", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-modal-on-boarding loop>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                    </oui-modal-on-boarding>
                `);
                $timeout.flush();
                const $body = getBody(element);
                expect($body.html()).toContain("oui-modal-on-boarding__content-prev");
            });

            it("should hide right button if last panel is selected", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-modal-on-boarding>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                    </oui-modal-on-boarding>
                `);
                $timeout.flush();
                const $body = getBody(element);
                expect($body.html()).toContain("oui-modal-on-boarding__content-next");
                getNextButton(element).triggerHandler("click");
                $timeout.flush();
                expect($body.html()).toContain("oui-modal-on-boarding__content-prev");
                expect($body.html()).not.toContain("oui-modal-on-boarding__content-next");
            });

            it("should update bottom indicators if panel's changed", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-modal-on-boarding>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                    </oui-modal-on-boarding>
                `);
                $timeout.flush();
                const $firstIndicator = getFirstIndicator(element);
                expect($firstIndicator).toBeDefined();
                expect($firstIndicator.hasClass("active")).toBe(true);
                getNextButton(element).triggerHandler("click");
                $timeout.flush();
                expect($firstIndicator.hasClass("active")).toBe(false);
            });

            it("should update active panel on indicator button click", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-modal-on-boarding>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                        <oui-modal-on-boarding-panel></oui-modal-on-boarding-panel>
                    </oui-modal-on-boarding>
                `);
                $timeout.flush();
                const $firstPanel = getFirstPanel(element);
                expect($firstPanel.hasClass("active")).toBe(true);
                getLastIndicator(element).triggerHandler("click");
                $timeout.flush();
                expect($firstPanel.hasClass("active")).toBe(false);
            });
        });
    });
});
