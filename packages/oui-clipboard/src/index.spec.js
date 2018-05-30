describe("ouiClipboard", () => {
    let $timeout;
    let testUtils;
    let configuration;

    beforeEach(angular.mock.module("oui.clipboard"));
    beforeEach(angular.mock.module("oui.clipboard.configuration"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_$timeout_, _TestUtils_) => {
        $timeout = _$timeout_;
        testUtils = _TestUtils_;
    }));

    describe("Provider", () => {

        angular.module("oui.clipboard.configuration", [
            "oui.clipboard"
        ]).config(ouiClipboardConfigurationProvider => {
            ouiClipboardConfigurationProvider.setTranslations({
                foo: "bar"
            });
        });

        beforeEach(inject(_ouiClipboardConfiguration_ => {
            configuration = _ouiClipboardConfiguration_;
        }));

        it("should have custom options", () => {
            expect(configuration.translations.foo).toEqual("bar");
        });
    });

    describe("Component", () => {

        describe("text field", () => {
            it("should generate an input with the given text", () => {
                const model = "foo";
                const element = testUtils.compileTemplate("<oui-clipboard model='$ctrl.model'></oui-clipboard>", {
                    model
                });

                const inputElement = element[0].querySelector("input[type=text]");
                expect(angular.element(inputElement).val()).toMatch(model);
            });

            it("should generate an input with name and id attribute", () => {
                const element = testUtils.compileTemplate("<oui-clipboard data-id='id' data-name='name'></oui-clipboard>");
                const inputElement = element[0].querySelector("input[type=text]");

                $timeout.flush();

                expect(angular.element(inputElement).attr("id")).toBe("id");
                expect(angular.element(inputElement).attr("name")).toBe("name");
            });

            it("should update tooltip text when copied on click", () => {
                const element = testUtils.compileTemplate("<oui-clipboard data-text='copy this text'></oui-clipboard>");
                const inputElement = angular.element(element[0].querySelector("input[type=text]"));
                const $ctrl = element.controller("ouiClipboard");

                inputElement.triggerHandler("click");

                $timeout.flush();
                expect($ctrl.tooltipText).toEqual(configuration.translations.copiedLabel);
            });

            it("should reset tooltip text", () => {
                const element = testUtils.compileTemplate("<oui-clipboard data-text='copy this text'></oui-clipboard>");
                const $ctrl = element.controller("ouiClipboard");

                $ctrl.reset();
                $timeout.flush();

                expect($ctrl.tooltipText).toEqual(configuration.translations.copyToClipboardLabel);
            });
        });
    });
});
