describe("ouiActionMenu", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.action-menu"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("should display an action menu", () => {
            const element = TestUtils.compileTemplate(`
                <oui-action-menu>
                  <oui-action-menu-item text="Action 1"></oui-action-menu-item>
                </oui-action-menu>`
            );

            const ulElement = element.find("ul");
            expect(ulElement).toBeTruthy();
        });

        it("should display a button item", () => {
            const clickSpy = jasmine.createSpy("spy");
            const element = TestUtils.compileTemplate(
                `<oui-action-menu>
                  <oui-action-menu-item text="Action 1"
                    on-click="$ctrl.clickHandler()"></oui-action-menu-item>
                </oui-action-menu>`,
                {
                    clickHandler: clickSpy
                }
            );

            const buttonElement = element[0].querySelector("button");
            expect(buttonElement).toBeTruthy();
            expect(angular.element(buttonElement).text()).toBe("Action 1");

            angular.element(buttonElement).triggerHandler("click");
            expect(clickSpy).toHaveBeenCalled();
            expect(clickSpy.calls.count()).toEqual(1);
        });

        it("should display a link item", () => {
            const element = TestUtils.compileTemplate(`
                <oui-action-menu>
                  <oui-action-menu-item
                    text="Action 1"
                    href="http://foo.bar"></oui-action-menu-item>
                </oui-action-menu>`
            );

            const linkElement = element[0].querySelector("a");
            expect(linkElement).toBeTruthy();
            expect(angular.element(linkElement).attr("href")).toBe("http://foo.bar");
        });
    });
});
