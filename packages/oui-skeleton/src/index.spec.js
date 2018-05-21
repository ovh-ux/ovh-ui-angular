describe("ouiSkeleton", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.skeleton"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject(_TestUtils_ => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("should display a oui-skeleton", () => {
            const element = TestUtils.compileTemplate("<oui-skeleton></oui-skeleton");
            expect(angular.element(element[0].querySelector(".oui-skeleton"))).toBeTruthy();
        });

        it("should display a oui skeleton div", () => {
            const element = TestUtils.compileTemplate("<oui-skeleton size=\"m\"></oui-skeleton");
            expect(angular.element(element[0].querySelector(".oui-skeleton_m"))).toBeTruthy();
        });
    });
});
