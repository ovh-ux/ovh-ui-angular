describe("ouiSkeleton", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.skeleton"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject(_TestUtils_ => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("should display a oui skeleton div", () => {
            const element = TestUtils.compileTemplate(`
                <oui-skeleton width="30%" loading="true"></oui-skeleton`);
            expect(angular.element(element[0].querySelector(".oui-skeleton"))).toBeTruthy();
        });

        it("should display a oui skeleton div", () => {
            const element = TestUtils.compileTemplate(`
                <oui-skeleton width="30%" loading="fasle"></oui-skeleton`);
            const skeleton = angular.element(element[0].querySelector(".oui-skeleton__loader"));
            expect(skeleton.hasClass("ng-hide")).toBe(true);
        });
    });
});
