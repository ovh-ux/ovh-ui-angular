describe("ouiSpinner", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.spinner"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("should have a medium size by default", () => {
            const element = TestUtils.compileTemplate("<oui-spinner></oui-spinner>");

            expect(element.hasClass("oui-spinner_m")).toBe(true);
        });

        it("should have a small size", () => {
            const element = TestUtils.compileTemplate("<oui-spinner size=\"s\"></oui-spinner>");

            expect(element.hasClass("oui-spinner_s")).toBe(true);
        });

        it("should have a medium size", () => {
            const element = TestUtils.compileTemplate("<oui-spinner size=\"m\"></oui-spinner>");

            expect(element.hasClass("oui-spinner_m")).toBe(true);
        });

        it("should have a large size", () => {
            const element = TestUtils.compileTemplate("<oui-spinner size=\"l\"></oui-spinner>");

            expect(element.hasClass("oui-spinner_l")).toBe(true);
        });

        it("should have a left alignment by default", () => {
            const element = TestUtils.compileTemplate("<oui-spinner></oui-spinner>");

            expect(element.hasClass("oui-spinner_left")).toBe(true);
        });

        it("should have a left alignment", () => {
            const element = TestUtils.compileTemplate("<oui-spinner align=\"left\"></oui-spinner>");

            expect(element.hasClass("oui-spinner_left")).toBe(true);
        });

        it("should have a center alignment", () => {
            const element = TestUtils.compileTemplate("<oui-spinner align=\"center\"></oui-spinner>");

            expect(element.hasClass("oui-spinner_center")).toBe(true);
        });

        it("should have a right alignment", () => {
            const element = TestUtils.compileTemplate("<oui-spinner align=\"right\"></oui-spinner>");

            expect(element.hasClass("oui-spinner_right")).toBe(true);
        });

        it("should be inline", () => {
            const element = TestUtils.compileTemplate("<oui-spinner inline></oui-spinner>");

            expect(element.hasClass("oui-spinner_inline")).toBe(true);
        });
    });
});
