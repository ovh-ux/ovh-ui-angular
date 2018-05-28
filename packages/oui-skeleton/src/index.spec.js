describe("ouiSkeleton", () => {
    let TestUtils;
    let $timeout;

    beforeEach(angular.mock.module("oui.skeleton"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$timeout_) => {
        TestUtils = _TestUtils_;
        $timeout = _$timeout_;
    }));

    describe("Component", () => {
        it("should display a oui-skeleton", () => {
            const element = TestUtils.compileTemplate("<oui-skeleton></oui-skeleton");
            expect(angular.element(element[0].querySelector(".oui-skeleton"))).toBeTruthy();
        });

        it("should display a oui skeleton div", () => {
            const element = TestUtils.compileTemplate("<oui-skeleton size=\"m\"></oui-skeleton");

            $timeout.flush();
            expect(angular.element(element[0].querySelector(".oui-skeleton_m"))).toBeTruthy();
        });
    });
});
