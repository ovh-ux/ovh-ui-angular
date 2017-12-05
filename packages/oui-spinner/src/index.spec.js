describe("ouiSpinner", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.spinner"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    function getSpinnerElement (element) {
        return element[0].querySelector(".oui-spinner");
    }

    describe("Component", () => {
        it("should have a medium size by default", () => {
            const element = TestUtils.compileTemplate("<oui-spinner></oui-spinner>");
            const spinnerElement = getSpinnerElement(element);

            expect(angular.element(spinnerElement).attr("class")).toBe("oui-spinner oui-spinner_m");
        });

        it("should have a small size", () => {
            const element = TestUtils.compileTemplate("<oui-spinner size=\"s\"></oui-spinner>");
            const spinnerElement = getSpinnerElement(element);

            expect(angular.element(spinnerElement).attr("class")).toBe("oui-spinner oui-spinner_s");
        });

        it("should have a medium size", () => {
            const element = TestUtils.compileTemplate("<oui-spinner size=\"m\"></oui-spinner>");
            const spinnerElement = getSpinnerElement(element);

            expect(angular.element(spinnerElement).attr("class")).toBe("oui-spinner oui-spinner_m");
        });

        it("should have a large size", () => {
            const element = TestUtils.compileTemplate("<oui-spinner size=\"l\"></oui-spinner>");
            const spinnerElement = getSpinnerElement(element);

            expect(angular.element(spinnerElement).attr("class")).toBe("oui-spinner oui-spinner_l");
        });
    });
});
