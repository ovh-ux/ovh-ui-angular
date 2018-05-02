describe("ouiClipboard", () => {
    let TestUtils;
    const copyToClipboardLabel = "Copy to Clipboard";
    const copiedLabel = "Copied";
    const copy = "copy";
    const initial = "initial";
    const success = "success";

    beforeEach(angular.mock.module("oui.clipboard"));
    beforeEach(angular.mock.module("oui.test-utils"));
    beforeEach(angular.mock.module("test.clipboardConfig"));

    angular.module("test.clipboardConfig", [
        "oui.clipboard"
    ]).config(ouiClipboardConfigurationProvider => {
        ouiClipboardConfigurationProvider.setTranslations({
            copyToClipboardLabel,
            copiedLabel
        });
        ouiClipboardConfigurationProvider.setStatus({
            initial,
            success
        });
        ouiClipboardConfigurationProvider.setAction({
            copy
        });
    });

    beforeEach(inject(_TestUtils_ => {
        TestUtils = _TestUtils_;
    }));

    function getInputElement (element) {
        return element[0].querySelector("input[type=text]");
    }

    describe("Provider", () => {
        let configuration;

        beforeEach(inject(_ouiClipboardConfiguration_ => {
            configuration = _ouiClipboardConfiguration_;
        }));

        it("should have custom values", () => {
            expect(configuration.translations.copyToClipboardLabel).toEqual(copyToClipboardLabel);
            expect(configuration.translations.copiedLabel).toEqual(copiedLabel);
        });
    });

    describe("Component", () => {

        describe("text field", () => {
            it("should generate an input for the componet which has the text given", () => {
                const element = TestUtils.compileTemplate("<oui-clipboard data-text=\'copy this text'\></oui-clipboard>");

                expect(getInputElement(element)).toBeDefined();
                const inputElement = getInputElement(element);
                expect(angular.element(inputElement).val()).toMatch("copy this text");
            });

            it("controller status should be initial", () => {

                const element = TestUtils.compileTemplate("<oui-clipboard data-text=\'copy this text'\></oui-clipboard>");
                const $ctrl = element.controller("ouiClipboard");
                expect($ctrl.status).toEqual(initial);
                expect($ctrl.ouiClipboardConfiguration.action.copy).toEqual(copy);
            });

            it("on focus status should change to success", () => {
                const element = TestUtils.compileTemplate("<oui-clipboard data-text=\'copy this text'\></oui-clipboard>");

                const inputElement = getInputElement(element);
                const $inputElement = angular.element(inputElement);

                const $ctrl = element.controller("ouiClipboard");
                $inputElement.triggerHandler("focus");
                expect($ctrl.status).toEqual(success);
            });

            it("on reset tool tip text and status set to initial", () => {
                const element = TestUtils.compileTemplate("<oui-clipboard data-text=\'copy this text'\></oui-clipboard>");
                const $ctrl = element.controller("ouiClipboard");
                $ctrl.reset();
                $ctrl.handleResult(false);
                expect($ctrl.tooltipText).toEqual(copyToClipboardLabel);
                expect($ctrl.status).toEqual(initial);
            });

        });
    });
});
