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

    function getContainerElement (element) {
        return element[0].querySelector(".oui-input-group_clipboard-container");
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
            it("should generate an input with the given text", () => {
                const element = TestUtils.compileTemplate("<oui-clipboard data-text='copy this text'></oui-clipboard>");

                expect(getInputElement(element)).toBeDefined();
                const inputElement = getInputElement(element);
                expect(angular.element(inputElement).val()).toMatch("copy this text");
            });

            it("should generate an input with name and id attribute", () => {
                const element = TestUtils.compileTemplate("<oui-clipboard data-id='id' data-name='name'></oui-clipboard>");

                expect(getInputElement(element)).toBeDefined();
                const inputElement = getInputElement(element);
                expect(angular.element(inputElement).attr("id")).toBe("id");
                expect(angular.element(inputElement).attr("name")).toBe("name");
            });

            it("should let status to initial", () => {

                const element = TestUtils.compileTemplate("<oui-clipboard data-text='copy this text'></oui-clipboard>");
                const $ctrl = element.controller("ouiClipboard");
                expect($ctrl.status).toEqual(initial);
                expect($ctrl.ouiClipboardConfiguration.action.copy).toEqual(copy);
            });

            it("should change status to success on click", () => {
                const element = TestUtils.compileTemplate("<oui-clipboard data-text='copy this text'></oui-clipboard>");

                const containerElement = getContainerElement(element);
                const $containerElement = angular.element(containerElement);

                const $ctrl = element.controller("ouiClipboard");
                $containerElement.triggerHandler("click");

                expect($ctrl.status).toEqual(success);
            });

            it("should reset tool tip text and set status to initial", () => {
                const element = TestUtils.compileTemplate("<oui-clipboard data-text='copy this text'></oui-clipboard>");
                const $ctrl = element.controller("ouiClipboard");
                $ctrl.reset();
                $ctrl.handleResult(false);
                expect($ctrl.tooltipText).toEqual(copyToClipboardLabel);
                expect($ctrl.status).toEqual(initial);
            });

        });
    });
});
